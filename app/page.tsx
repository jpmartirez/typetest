'use client'

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

const Page = () => {
  const [words, setWords] = useState('')
  const [inputChar, setInputChar] = useState('')

  useEffect(() => {
    setWords(faker.word.words(40))
  }, [])

  return (
    <div className="max-w-7xl mx-auto h-screen flex items-center justify-center ">
      <div className="relative w-full">
        {/* Target text */}
        <p className="text-3xl font-semibold leading-relaxed text-gray-400 select-none">
          {words}
        </p>

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
