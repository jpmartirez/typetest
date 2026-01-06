'use client'

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

const Page = () => {
  const [words, setWords] = useState('')
  const [inputChar, setInputChar] = useState('')

  useEffect(() => {
    setWords(faker.word.words(40))
  }, [])

  const getCharClass = (char: string, index: number) => {
    if (!inputChar[index]) return 'text-gray-400';
    if (inputChar[index] === char) return 'text-green-400';
    return 'text-red-500';
  }

  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center justify-center ">
      <div className="relative w-full">
        {/* Target text */}
        <div className="text-3xl font-semibold leading-relaxed select-none flex flex-wrap ">
          {words.split('').map((char, index)=>(
            <span key={index} className={`${getCharClass(char, index)}`}>
              {char === " " ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Overlay typing area */}
        <textarea
          value={inputChar}
          onChange={(e) => setInputChar(e.target.value)}
          autoFocus
          spellCheck={false}
          rows={1}
          className="
            absolute top-0 left-0
            w-full
            h-full
            bg-transparent
            resize-none

            text-3xl font-semibold leading-relaxed
            text-transparent caret-red-800

            outline-none
          "
        />
      </div>
    </div>
  )
}

export default Page
