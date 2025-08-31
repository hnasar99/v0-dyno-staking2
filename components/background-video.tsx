"use client"

export function BackgroundVideo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.6)" }}
      >
        <source src="https://cdn.pixabay.com/video/2021/08/04/84549-588020925_large.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2022/12/06/142127-777694148_large.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2021/12/30/102263-665467558_large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-blue-900/30 to-purple-900/40" />

      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          <path
            d="M0,100 Q100,50 200,80 T400,60"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-emerald-400 animate-pulse"
          />
          <path
            d="M0,120 Q100,70 200,100 T400,80"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-blue-400 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <g className="text-green-400">
            <rect x="50" y="90" width="3" height="20" fill="currentColor" />
            <rect x="100" y="70" width="3" height="30" fill="currentColor" />
            <rect x="150" y="85" width="3" height="25" fill="currentColor" />
            <rect x="200" y="75" width="3" height="35" fill="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  )
}
