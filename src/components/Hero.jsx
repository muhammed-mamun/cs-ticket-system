import vector1 from '../assets/vector1.png';

export default function Hero({inProgress, resolved}) {
  return (
    <div className='grid lg:grid-cols-2 gap-6 p-4 mx-auto max-w-360 lg:my-20' >
      <div
      className="flex w-full relative overflow-hidden lg:h-64 rounded-lg px-10 py-8  flex-col items-center justify-center shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)',
        minHeight: '140px',
      }}
    >
      {/* Left vector - normal */}
      <div
        className="absolute top-0 left-0 w-64 h-full"
        style={{
          backgroundImage: `url(${vector1})`,
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '260px 260px',
          opacity: 0.9,
        }}
      />

      {/* Right vector - horizontally flipped */}
      <div
        className="absolute top-0 right-0 w-64 h-full"
        style={{
          backgroundImage: `url(${vector1})`,
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '260px 260px',
          opacity: 0.9,
          transform: 'scaleX(-1)',
        }}
      />

      {/* Content */}
      <p className="text-sm text-white/90 mb-2 tracking-wide z-10 relative font-medium">
        In-Progress
      </p>
      <h1 className="text-5xl font-bold text-white z-10 relative leading-none">
        {inProgress.length}
      </h1>
    </div>
    <div
      className="w-full relative overflow-hidden lg:h-64 rounded-lg px-10 py-8 flex flex-col items-center justify-center shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #54CF68 0%, #00827A 100%)',
        minHeight: '140px',
      }}
    >
      {/* Left vector - normal */}
      <div
        className="absolute top-0 left-0 w-64 h-full"
        style={{
          backgroundImage: `url(${vector1})`,
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '260px 260px',
          opacity: 0.9,
        }}
      />

      {/* Right vector - horizontally flipped */}
      <div
        className="absolute top-0 right-0 w-64 h-full"
        style={{
          backgroundImage: `url(${vector1})`,
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '260px 260px',
          opacity: 0.9,
          transform: 'scaleX(-1)',
        }}
      />

      {/* Content */}
      <p className="text-sm text-white/90 mb-2 tracking-wide z-10 relative font-medium">
        Resolved
      </p>
      <h1 className="text-5xl font-bold text-white z-10 relative leading-none">
        {resolved.length}
      </h1>
    </div>
    </div>
  );
}