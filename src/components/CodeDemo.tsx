"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Highlight, themes } from "prism-react-renderer"
import type { Language } from "prism-react-renderer"
import { Button } from "@/components/ui/button"

const theme = themes.dracula

type Step = {
  title: string
  description?: string
  language: Language
  code: string
  holdMs?: number
}

type Props = {
  steps: Step[]
  typingSpeedMs?: number
  autoPlay?: boolean
  loop?: boolean
}

export default function CodeDemo({
  steps,
  typingSpeedMs = 18,
  autoPlay = true,
  loop = false,
}: Props) {
  const [stepIdx, setStepIdx] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [playing, setPlaying] = useState(autoPlay)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const current = steps[stepIdx]
  const displayed = useMemo(
    () => current.code.slice(0, charCount),
    [current.code, charCount]
  )

  const atEnd = charCount >= current.code.length

  // Typewriter effect
  useEffect(() => {
    if (!playing || atEnd) return
    timerRef.current = setTimeout(() => {
      setCharCount((c) => c + 1)
    }, typingSpeedMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playing, atEnd, typingSpeedMs, charCount])

  // Auto-advance when a step finishes
  useEffect(() => {
    if (!playing || !atEnd) return
    const hold = current.holdMs ?? 900
    const t = setTimeout(() => {
      if (stepIdx < steps.length - 1) {
        setStepIdx((i) => i + 1)
        setCharCount(0)
      } else if (loop) {
        setStepIdx(0)
        setCharCount(0)
      } else {
        setPlaying(false)
      }
    }, hold)
    return () => clearTimeout(t)
  }, [playing, atEnd, stepIdx, steps.length, current.holdMs, loop])

  const onPlayPause = () => setPlaying((p) => !p)
  const onReset = () => {
    setPlaying(false)
    setStepIdx(0)
    setCharCount(0)
  }
  const onNext = () => {
    if (stepIdx < steps.length - 1) {
      setStepIdx(stepIdx + 1)
      setCharCount(0)
    }
  }
  const onPrev = () => {
    if (stepIdx > 0) {
      setStepIdx(stepIdx - 1)
      setCharCount(0)
    }
  }
  const onSkip = () => {
    setCharCount(current.code.length)
  }

  const progress =
    current.code.length === 0
      ? 0
      : Math.min(100, Math.round((charCount / current.code.length) * 100))

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-semibold">
            Démo – {current.title}
          </h2>
          {current.description ? (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {current.description}
            </p>
          ) : null}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={onPrev} disabled={stepIdx === 0}>
            ◀︎ Précédent
          </Button>
          <Button onClick={onPlayPause}>{playing ? "⏸ Pause" : "▶️ Play"}</Button>
          <Button variant="secondary" onClick={onSkip} disabled={atEnd}>
            ⏭️ Skip step
          </Button>
          <Button variant="outline" onClick={onNext} disabled={stepIdx === steps.length - 1}>
            Suivant ▶︎
          </Button>
          <Button variant="ghost" onClick={onReset}>↺ Reset</Button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "tween", duration: 0.15 }}
        />
      </div>

      {/* Code block */}
      <motion.div
        key={stepIdx}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-2 text-xs bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <span className="inline-block size-2.5 rounded-full bg-red-500" />
          <span className="inline-block size-2.5 rounded-full bg-yellow-400" />
          <span className="inline-block size-2.5 rounded-full bg-green-500" />
          <span className="ml-3 opacity-70">{current.language.toUpperCase()}</span>
        </div>

        <Highlight theme={theme} code={displayed} language={current.language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} p-4 text-sm md:text-[0.95rem] overflow-auto`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </motion.div>

      {/* Steps indicator */}
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              setStepIdx(i)
              setCharCount(0)
              setPlaying(false)
            }}
            className={`px-2.5 py-1 rounded-md text-xs border ${
              i === stepIdx
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {i + 1}. {s.title}
          </button>
        ))}
      </div>
    </div>
  )
}
