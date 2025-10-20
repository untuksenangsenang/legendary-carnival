import Aurora from "./Aurora/Aurora"
import { useState, useEffect } from "react"
import CountUp from "./CountUp/CountUp"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)
  const [countDone, setCountDone] = useState(false)
  const [fadeText, setFadeText] = useState(false)
  const [fadeScreen, setFadeScreen] = useState(false)

  useEffect(() => {
    if (countDone) {
      const fadeTextTimer = setTimeout(() => setFadeText(true), 1500)
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 2500)
      const hideTimer = setTimeout(() => setLoading(false), 3500)

      return () => {
        clearTimeout(fadeTextTimer)
        clearTimeout(fadeScreenTimer)
        clearTimeout(hideTimer)
      }
    }
  }, [countDone])

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex items-center justify-center bg-black z-[10000] overflow-hidden transition-opacity duration-1000 ${
          fadeScreen ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Aurora Background */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#B700FF", "#2100C9", "#00BDCB"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.7}
          />
        </div>

        {/* Loader Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Circular Loader */}
          <svg
            className="w-40 h-40 animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="75"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#B700FF" />
                <stop offset="50%" stopColor="#2100C9" />
                <stop offset="100%" stopColor="#00BDCB" />
              </linearGradient>
            </defs>
          </svg>

          {/* Count Up Text */}
          <div
            className={`absolute text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 drop-shadow-xl transition-all duration-1000 ${
              fadeText
                ? "opacity-0 -translate-y-10 scale-90"
                : "opacity-100 translate-y-0 scale-110"
            }`}
          >
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1.8}
              className="count-up-text"
              onEnd={() => setCountDone(true)}
            />
            %
          </div>
        </div>
      </div>
    )
  )
}

export default PreLoader
