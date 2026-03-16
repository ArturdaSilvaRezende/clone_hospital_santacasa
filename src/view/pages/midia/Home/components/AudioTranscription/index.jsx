'use client'

import { useState, useRef, useMemo } from 'react'
import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'
import { CiPause1 } from 'react-icons/ci'

export default function AudioTranscript({ src, transcript }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('00:00')
  const [speed, setSpeed] = useState(1)
  const speeds = [1, 1.25, 1.5, 2]
  const audioRef = useRef(null)

  const toggleSpeed = () => {
    const currentIndex = speeds.indexOf(speed)
    const nextIndex = (currentIndex + 1) % speeds.length
    const newSpeed = speeds[nextIndex]

    setSpeed(newSpeed)
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed
    }
  }

  const barHeights = useMemo(() => {
    return Array.from({ length: 80 }).map(
      () => Math.floor(Math.random() * 60) + 20
    )
  }, [])

  const togglePlay = () => {
    if (isPlaying) audioRef.current?.pause()
    else audioRef.current?.play()
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const duration = audioRef.current.duration
      if (!isNaN(duration)) {
        setProgress((current / duration) * 100)
      }

      const mins = Math.floor(current / 60)
      const secs = Math.floor(current % 60)
      setCurrentTime(
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      )
    }
  }

  const handleSeek = e => {
    if (audioRef.current) {
      const container = e.currentTarget
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left // Posição do clique dentro do container
      const width = rect.width
      const percentage = x / width // Porcentagem do clique (ex: 0.5 para o meio)

      const newTime = percentage * audioRef.current.duration
      audioRef.current.currentTime = newTime
    }
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full] flex-wrap items-center gap-3 md:gap-4">
        <audio
          ref={audioRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          
        />

        <button
          onClick={togglePlay}
          className="flex max-sm:order-2 shrink-0 items-center justify-center text-[#FD0003] transition-all hover:text-red-700 active:scale-90"
        >
          {isPlaying ? (
            <span className="text-[25px] font-normal">
              <CiPause1 />
            </span>
          ) : (
            <span className="ml-1 text-center text-[20px] font-normal">
              <FaPlay />
            </span>
          )}
        </button>

        <div
          onClick={handleSeek}
          className="group relative flex h-14 flex-1 cursor-pointer items-center justify-between gap-0.5 px-1"
        >
          <div className="absolute inset-0 z-10" />

          {barHeights.map((height, i) => {
            const barProgress = (i / barHeights.length) * 100
            const isActive = barProgress < progress

            return (
              <div
                key={i}
                className="w-full max-w-1.5 min-w-0.5 rounded-full transition-all duration-300 ease-out"
                style={{
                  height: `${height}%`,
                  backgroundColor: isActive ? '#FD0003' : '#EDECEC'
                }}
              />
            )
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1 max-sm:order-3">
          <span className="min-w-11.25 text-sm font-normal text-[#FD0003]">
            {currentTime}
          </span>

          <button
            onClick={toggleSpeed}
            title="Alterar velocidade de reprodução"
            className="cursor-pointer rounded-md border border-[#FD00034D]/30 bg-[#FFE2E2] px-2 py-1 text-[14px] font-normal text-[#FD0003] transition-all ease-in hover:text-white hover:bg-[#FD0003]"
          >
            {speed}x
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-[22px] font-semibold text-gray-900">
          Transcrição do áudio
        </h4>
        <p className='text-[#535353] font-normal text-[16px]'>
            O presépio é uma das representações mais profundas e simbólicas do Natal. Mais do que um elemento decorativo, ele traduz, de forma simples e acessível, o mistério do nascimento de Jesus e convida à reflexão sobre valores essenciais como amor, humildade e cuidado com o outro. Em meio à rotina hospitalar, essa cena ganha significado ainda mais sensível, ao tocar corações fragilizados.
        </p>
         <p className='text-[#535353] font-normal text-[16px]'>
            Na Santa Casa de Misericórdia de Goiânia, o presépio ocupa um lugar de destaque, não apenas no espaço físico, mas também na vivência espiritual de pacientes, acompanhantes e colaboradores. Para Rosa Amélia, assistente de capelania da instituição, “ele representa amor, simplicidade e humildade, sentimentos que não se restringem ao período natalino, mas que devem nascer e permanecer no coração ao longo de todo o ano”.
         </p>
          <p className='text-[#535353] font-normal text-[16px]'>
            A presença do presépio dentro do hospital oferece conforto àqueles que enfrentam o desafio da internação. Segundo Rosa Amélia, “ele ajuda o paciente a se reconectar com a fé, com a religiosidade e com a própria espiritualidade, elementos que fortalecem o interior humano em momentos de vulnerabilidade”. Diante da fragilidade da saúde, a cena do nascimento de Jesus recorda que a esperança pode florescer mesmo em situações difíceis.
          </p>
      </div>

      <Link
        href="/midia"
        className="mt-6 ml-auto rounded-full border border-[#FD0003] px-8 py-2 text-[14px] font-medium text-[#FD0003] transition-all hover:bg-[#FD0003] hover:text-white"
      >
        Voltar
      </Link>
    </div>
  )
}
