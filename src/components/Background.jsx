import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const touchPositionRef = useRef({ x: 0, y: 0 });
  const isTouchDeviceRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let gridPoints = [];
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize grid points
    const initGrid = () => {
      gridPoints = [];
      const spacing = 40;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let x = 0; x <= cols; x++) {
        for (let y = 0; y <= rows; y++) {
          gridPoints.push({
            x: x * spacing,
            y: y * spacing,
            originalX: x * spacing,
            originalY: y * spacing,
            vx: 0,
            vy: 0
          });
        }
      }
    };

    initGrid();

    // Check if device is touch-enabled
    isTouchDeviceRef.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Touch move handler for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        touchPositionRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    // Touch start handler for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        touchPositionRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(43, 111, 255, 0.15)';
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let i = 0; i < gridPoints.length; i += Math.ceil(canvas.height / 40) + 1) {
        ctx.beginPath();
        ctx.moveTo(gridPoints[i].x, 0);
        ctx.lineTo(gridPoints[i].x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      const rows = Math.ceil(canvas.height / 40) + 1;
      for (let row = 0; row < rows; row++) {
        ctx.beginPath();
        ctx.moveTo(0, row * 40);
        ctx.lineTo(canvas.width, row * 40);
        ctx.stroke();
      }

      // Determine active position (mouse or touch)
      const activePosition = isTouchDeviceRef.current ? touchPositionRef.current : mousePositionRef.current;
      const radius = 100;

      gridPoints.forEach(point => {
        // Calculate distance from active position
        const dx = point.originalX - activePosition.x;
        const dy = point.originalY - activePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply repulsion force when cursor/touch is near
        if (distance < radius) {
          const force = (radius - distance) / radius;
          const angle = Math.atan2(dy, dx);
          
          point.vx += Math.cos(angle) * force * 2;
          point.vy += Math.sin(angle) * force * 2;
        }

        // Apply velocity and damping
        point.x += point.vx;
        point.y += point.vy;
        point.vx *= 0.85;
        point.vy *= 0.85;

        // Gradually return to original position
        point.vx += (point.originalX - point.x) * 0.05;
        point.vy += (point.originalY - point.y) * 0.05;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(43, 111, 255, 0.4)';
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default AnimatedBackground;