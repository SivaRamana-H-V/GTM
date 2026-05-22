import React, { useEffect, useRef } from 'react';

export const SparkleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];

        // GTM Conclave Brand Palette: Emerald Green, Deep Blues, Cyan
        const colors = ['#10b981', '#059669', '#2563eb', '#1d4ed8', '#06b6d4'];

        // Track frame loop reference for safe cleanup
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 3.5 + 2;

                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.size = Math.random() * 3.5 + 2.5;
                this.alpha = 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.04;     // Soft downward gravity drag
                this.alpha -= 0.025; // Fade rate calculation matrix
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;

                // Neon ambient outer bloom glow profile setup
                ctx.shadowBlur = 12;
                ctx.shadowColor = this.color;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const handleMouseDown = (e) => {
            const particleCount = 10;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(e.clientX, e.clientY));
            }
        };

        window.addEventListener('mousedown', handleMouseDown);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].alpha <= 0) {
                    particles.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // ── CRITICAL CLEANUP: Prevents duplicate listeners & memory leaks on route changes ──
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousedown', handleMouseDown);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-9999"
        />
    );
};