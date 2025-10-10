import React, { useEffect, useState } from 'react';

const GridTunnel = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setStyle({
        transform: `perspective(1000px) rotateX(60deg) translate(${x}px, ${y}px)`
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 grid-tunnel pointer-events-none"
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03001488] to-[#030014]"></div>
    </div>
  );
};

export default GridTunnel;