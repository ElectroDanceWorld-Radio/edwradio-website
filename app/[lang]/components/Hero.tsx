export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Static background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1a1a2e',
        }}
      />

      {/* Animated gradient overlay - light shader */}
      <div
        className="absolute inset-0 z-1 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, rgba(26,26,46,0.8) 0%, rgba(42,10,74,0.6) 25%, rgba(139,92,246,0.3) 50%, rgba(42,10,74,0.6) 75%, rgba(26,26,46,0.8) 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Shimmer line effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute h-0.5 w-full animate-shimmer"
          style={{
            top: '50%',
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)',
          }}
        />
      </div>

      {/* Logo */}
      <div className="relative z-20">
        <img src="/logo.png" alt="EDW Radio" className="h-64 max-w-[80vw] object-contain" />
      </div>

    </section>
  );
}
