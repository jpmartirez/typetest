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
    <div className="">
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto gap-10">

        {/* Config */}
        <div className='p-2 bg-base-200 rounded-xl'>
          <form className="filter">
            <input className="btn btn-square" type="reset" value="×"/>
            <input className="btn" type="radio" name="frameworks" aria-label="15"/>
            <input className="btn" type="radio" name="frameworks" aria-label="30"/>
            <input className="btn" type="radio" name="frameworks" aria-label="60"/>
          </form>
        </div>

        {/* Target text */}
        <div className='max-w-7xl mx-auto h-auto'>
          <p className='font-bold text-3xl w-full flex flex-wrap'>{words.split("").map((char, index)=>(
            <span className={`${getCharClass(char, index)}`} key={index}>
              {char === " "? "\u00A0" : char }
            </span>
          ))}</p>
        </div>
        
        {/* INPUT */}
        <div className='w-full flex flex-col gap-5'>
          <p className='text-secondary text-lg'>Type here</p>
          <textarea value={inputChar} onChange={e=>setInputChar(e.target.value)} className="textarea textarea-secondary w-full text-3xl font-bold h-50"></textarea>
        </div>

        
      </div>
    </div>
  )
}

export default Page
