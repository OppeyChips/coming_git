import Particles from './components/Particles';
import TextPressure from './components/TextPressure';

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={100}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full">
        <div style={{ position: 'relative', height: '200px', width: '100%', maxWidth: '1200px' }}>
          <TextPressure
            text="Coming Soon"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl lg:text-2xl">
          Something amazing is on the way. Stay tuned!
        </p>
      </main>
    </div>
  );
}
