import React, { useEffect, useRef } from 'react';
import './GraphBackground.css';

function GraphBackground() {
    const canvasRef = useRef(null);
    const pointsPerAreaPx = 0.00012;
    const maxDistance = 200; // max distance to draw connecting lines
    const points = [];
    const mouse = { x: null, y: null, radius: 200 };

    // Force configuration
    const repulsionRadius = 50;
    const repulsionStrength = 0.08;      // Adjust for stronger/weaker repulsion
    const mouseAttractionStrength = 0.03;  // Adjust for stronger/weaker attraction
    const maxSpeed = 1; // Maximum speed for dx and dy independently

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Set smooth drawing properties
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Initialize points based on area density
        const totalPoints = pointsPerAreaPx * canvas.width * canvas.height;
        for (let i = 0; i < totalPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 0.6,
                dy: (Math.random() - 0.5) * 0.6,
            });
        }

        let animationFrameId;
        let isCancelled = false;

        function animate() {
            if (isCancelled) return;

            // Clear canvas with a subtle dark background
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // --- Apply repulsion forces between points ---
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[j].x - points[i].x;
                    const dy = points[j].y - points[i].y;
                    const distance = Math.hypot(dx, dy);
                    if (distance < repulsionRadius && distance > 0) {
                        const force = repulsionStrength * (repulsionRadius - distance) / repulsionRadius;
                        const fx = (dx / distance) * force;
                        const fy = (dy / distance) * force;
                        // Repel each other
                        points[i].dx -= fx;
                        points[i].dy -= fy;
                        points[j].dx += fx;
                        points[j].dy += fy;
                    }
                }
            }

            // --- Apply mouse attraction and update positions ---
            points.forEach(point => {
                if (mouse.x !== null && mouse.y !== null) {
                    const dxMouse = mouse.x - point.x;
                    const dyMouse = mouse.y - point.y;
                    const distanceToMouse = Math.hypot(dxMouse, dyMouse);
                    if (distanceToMouse > 0 && distanceToMouse < mouse.radius) {
                        const force = mouseAttractionStrength * (mouse.radius - distanceToMouse) / mouse.radius;
                        point.dx += (dxMouse / distanceToMouse) * force;
                        point.dy += (dyMouse / distanceToMouse) * force;
                    }
                }
                // Clamp speeds independently
                if (Math.abs(point.dx) > maxSpeed) {
                    point.dx = Math.sign(point.dx) * maxSpeed;
                }
                if (Math.abs(point.dy) > maxSpeed) {
                    point.dy = Math.sign(point.dy) * maxSpeed;
                }
                // Update position
                point.x += point.dx;
                point.y += point.dy;
                // Bounce off canvas edges
                if (point.x <= 0 || point.x >= canvas.width) {
                    point.dx = -point.dx;
                }
                if (point.y <= 0 || point.y >= canvas.height) {
                    point.dy = -point.dy;
                }
            });

            // --- Draw lines between points if they're close enough ---
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const distance = Math.hypot(dx, dy);
                    if (distance < maxDistance) {
                        // Compute average velocity of the two points
                        const avgDx = (points[i].dx + points[j].dx) / 2;
                        const avgDy = (points[i].dy + points[j].dy) / 2;
                        const speed = Math.hypot(avgDx, avgDy);
                        const angle = Math.atan2(avgDy, avgDx);
                        // Normalize angle to 0-1 and map to hue 200-300
                        const angleNormalized = (angle + Math.PI) / (2 * Math.PI);
                        const hue = 180 + angleNormalized * 100;
                        // Brightness based on speed (max speed approximated as sqrt(2))
                        const brightness = 40 + 30 * (speed / Math.SQRT2);
                        const alpha = 0.5 - distance / maxDistance*0.2;

                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                        ctx.strokeStyle = `hsla(${hue}, 100%, ${brightness}%, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                // Optionally, draw a line from the point to the mouse if within mouse radius
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = points[i].x - mouse.x;
                    const dy = points[i].y - mouse.y;
                    const distance = Math.hypot(dx, dy);
                    if (distance < mouse.radius) {
                        const speed = Math.hypot(points[i].dx, points[i].dy);
                        const angle = Math.atan2(points[i].dy, points[i].dx);
                        const angleNormalized = (angle + Math.PI) / (2 * Math.PI);
                        const hue = 180 + angleNormalized * 100;
                        const brightness = 20 + 30 * (speed / Math.SQRT2);
                        const alpha = 1 - distance / mouse.radius;

                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `hsla(${hue}, 100%, ${brightness}%, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        // Update mouse coordinates on move
        function handleMouseMove(e) {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            }
        }
        window.addEventListener('mousemove', handleMouseMove);

        // Resize canvas when the window size changes
        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            isCancelled = true;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    return <canvas ref={canvasRef} className="graph-canvas" />;
}

export default GraphBackground;
