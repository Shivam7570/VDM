import React, { useEffect, useRef, useState } from 'react';

export default function GoldenCursor() {
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for touch device - if touch only, skip custom cursor for usability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice && window.innerWidth < 768) {
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth * window.devicePixelRatio);
    let height = (canvas.height = window.innerHeight * window.devicePixelRatio);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates (actual, inner lerped, outer ring lerped)
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const core = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const particles = [];
    let lastX = mouse.x;
    let lastY = mouse.y;

    // Palette of subtle luxury gold hues
    const goldPalette = [
      '#FFFDF0', // Diamond Sparkle
      '#F3E5AB', // Soft Champagne
      '#D4AF37', // Pure Metallic Gold
      '#E6CA65', // Bright Amber Gold
      '#FFDF00', // Twinkling Yellow Gold
    ];

    const createParticle = (x, y, isBurst = false) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = isBurst ? Math.random() * 2.5 + 0.8 : Math.random() * 0.8 + 0.2;
      const life = 1.0;
      const decay = isBurst ? Math.random() * 0.02 + 0.015 : Math.random() * 0.018 + 0.012;
      const size = isBurst ? Math.random() * 3 + 1.5 : Math.random() * 2.2 + 0.8;
      const color = goldPalette[Math.floor(Math.random() * goldPalette.length)];
      const isStar = Math.random() > 0.65; // 35% chance to render a 4-point micro-star sparkle

      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.15, // slight upward float
        size,
        life,
        maxLife: life,
        decay,
        color,
        isStar,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.1 + 0.05,
      });
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Distance travelled since last particle spawn
      const dx = mouse.x - lastX;
      const dy = mouse.y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 3) {
        // Spawn trail particles based on movement
        const count = Math.min(Math.floor(dist / 4), 5);
        for (let i = 0; i < count; i++) {
          const interpX = lastX + (dx * i) / count;
          const interpY = lastY + (dy * i) / count;
          createParticle(interpX, interpY);
        }
        lastX = mouse.x;
        lastY = mouse.y;
      }

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a, button, [role="button"], .interactive-hover')
      );
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = (e) => {
      setIsClicking(true);
      // Particle burst on click
      for (let i = 0; i < 20; i++) {
        createParticle(e.clientX, e.clientY, true);
      }
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let time = 0;

    const render = () => {
      time += 0.05;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, width, height);

      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth lerp positions
      core.x += (mouse.x - core.x) * 0.35;
      core.y += (mouse.y - core.y) * 0.35;

      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;

      // 1. Update and render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.twinklePhase += p.twinkleSpeed;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, p.life);
        const twinkleAlpha = alpha * (0.6 + 0.4 * Math.sin(p.twinklePhase));

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = twinkleAlpha;

        const px = p.x * dpr;
        const py = p.y * dpr;
        const psize = p.size * dpr;

        if (p.isStar && psize > 1.5 * dpr) {
          // Draw 4-point diamond star sparkle
          ctx.beginPath();
          ctx.moveTo(px, py - psize * 1.6);
          ctx.lineTo(px + psize * 0.4, py - psize * 0.4);
          ctx.lineTo(px + psize * 1.6, py);
          ctx.lineTo(px + psize * 0.4, py + psize * 0.4);
          ctx.lineTo(px, py + psize * 1.6);
          ctx.lineTo(px - psize * 0.4, py + psize * 0.4);
          ctx.lineTo(px - psize * 1.6, py);
          ctx.lineTo(px - psize * 0.4, py - psize * 0.4);
          ctx.closePath();
          ctx.fill();
        } else {
          // Draw rounded twinkling dust mote
          ctx.beginPath();
          ctx.arc(px, py, psize / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Soft outer particle glow for larger particles
        if (p.size > 2) {
          ctx.shadowColor = '#D4AF37';
          ctx.shadowBlur = 6 * dpr;
          ctx.fill();
        }

        ctx.restore();
      }

      // 2. Render Outer Magnetic Ring
      const targetRingRadius = isHovered ? 28 : isClicking ? 14 : 18;
      const currentRingRadius = targetRingRadius * dpr;

      ctx.save();
      ctx.beginPath();
      ctx.arc(ring.x * dpr, ring.y * dpr, currentRingRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isHovered ? 'rgba(243, 229, 171, 0.85)' : 'rgba(212, 175, 55, 0.45)';
      ctx.lineWidth = isHovered ? 1.8 * dpr : 1.2 * dpr;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
      ctx.shadowBlur = (isHovered ? 18 : 10) * dpr;
      ctx.stroke();
      ctx.restore();

      // 3. Render Inner Glowing Gold Core Dot
      const coreRadius = (isHovered ? 5 : isClicking ? 3 : 4) * dpr;
      ctx.save();
      
      // Radial glow gradient for cursor center
      const gradient = ctx.createRadialGradient(
        core.x * dpr, core.y * dpr, 0,
        core.x * dpr, core.y * dpr, coreRadius * 3.5
      );
      gradient.addColorStop(0, '#FFFDF0');
      gradient.addColorStop(0.3, '#F3E5AB');
      gradient.addColorStop(0.7, '#D4AF37');
      gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.beginPath();
      ctx.arc(core.x * dpr, core.y * dpr, coreRadius * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Solid central core dot
      ctx.beginPath();
      ctx.arc(core.x * dpr, core.y * dpr, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#FFDF00';
      ctx.shadowBlur = 12 * dpr;
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
