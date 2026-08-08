import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./Hero3D.css";

function isLowPower() {
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const smallScreen = window.innerWidth < 720;
  const fewCores = (navigator.hardwareConcurrency || 4) <= 4;
  return coarsePointer && (smallScreen || fewCores);
}

function readAccent() {
  const styles = getComputedStyle(document.documentElement);
  return {
    accent: styles.getPropertyValue("--accent").trim() || "#4f8cff",
    accent2: styles.getPropertyValue("--accent-2").trim() || "#38e1e1",
    accent3: styles.getPropertyValue("--accent-3").trim() || "#8b7cf6",
    text: styles.getPropertyValue("--text").trim() || "#f5f5f5",
  };
}

export default function Hero3D() {
  const mountRef = useRef(null);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ---- WebGL availability check → CSS fallback ----
    let hasWebGL = true;
    try {
      const testCanvas = document.createElement("canvas");
      hasWebGL = !!(window.WebGLRenderingContext && (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl")));
    } catch {
      hasWebGL = false;
    }
    if (!hasWebGL) {
      setWebglOk(false);
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = isLowPower();
    const colors = readAccent();

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.3 : 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // ---- Core: wireframe icosahedron ----
    const coreGeo = new THREE.IcosahedronGeometry(1.65, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colors.accent),
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Inner soft-lit solid for depth
    const innerGeo = new THREE.IcosahedronGeometry(1.1, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(colors.accent3),
      transparent: true,
      opacity: 0.08,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    // ---- Orbiting network nodes + connecting lines ----
    const nodeCount = lowPower ? 8 : 14;
    const nodesGroup = new THREE.Group();
    const nodeMeshes = [];
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(colors.accent2) });

    const radius = 2.6;
    const nodePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      nodePositions.push(new THREE.Vector3(x, y, z));

      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.set(x, y, z);
      nodesGroup.add(mesh);
      nodeMeshes.push(mesh);
    }

    // Connect nearby nodes with thin lines (network topology look)
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(colors.accent),
      transparent: true,
      opacity: 0.25,
    });
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 2.4) {
          const geo = new THREE.BufferGeometry().setFromPoints([nodePositions[i], nodePositions[j]]);
          nodesGroup.add(new THREE.Line(geo, lineMat));
        }
      }
    }
    group.add(nodesGroup);

    // ---- Ambient particle field ----
    const particleCount = lowPower ? 60 : 160;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(colors.text),
      size: 0.02,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Interaction: subtle parallax toward pointer ----
    let targetRotX = 0;
    let targetRotY = 0;
    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.5;
      targetRotX = ny * -0.35;
    };
    if (!lowPower) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    // ---- Animation loop ----
    let frameId;
    let visible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!visible) return;

      const t = clock.getElapsedTime();
      const speed = prefersReduced ? 0 : lowPower ? 0.06 : 0.12;

      group.rotation.y += speed * 0.02;
      group.rotation.y += (targetRotY - group.rotation.y) * 0.02;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.02;
      nodesGroup.rotation.y -= speed * 0.03;
      core.rotation.y = t * 0.05;
      particles.rotation.y = t * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Pause rendering when hero scrolls off-screen (performance)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    io.observe(mount);

    // ---- Resize handling ----
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ---- Cleanup: dispose all WebGL resources ----
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      io.disconnect();

      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      nodesGroup.children.forEach((child) => {
        if (child.geometry && child.geometry !== nodeGeo) child.geometry.dispose();
      });

      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglOk) {
    // ---- CSS-based fallback: static network graphic ----
    return (
      <div className="hero3d hero3d--fallback" aria-hidden="true">
        <div className="hero3d-fallback-core">
          <span className="hero3d-fallback-ring" />
          <span className="hero3d-fallback-ring hero3d-fallback-ring--2" />
          <span className="hero3d-fallback-dot" />
        </div>
      </div>
    );
  }

  return <div ref={mountRef} className="hero3d" aria-hidden="true" />;
}
