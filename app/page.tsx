'use client'

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

const Page = () => {
  const [words, setWords] = useState('')
  const [inputChar, setInputChar] = useState('')
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setWords(faker.word.words(40))
  }, [])

  const getCharClass = (char: string, index: number) => {
    if (!inputChar[index]) return 'text-gray-400';
    if (inputChar[index] === char) return 'text-green-400';
    return 'text-red-500';
  }

  const calculate = () => {
    const length  = words.length;
    let count = 0

    for (let i = 0; i < length; i++ ) if (words[i] === inputChar[i]) count++;
    
    console.log(count)
    console.log

  }

  return (
    <div className="">
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto gap-10">

        {/* Config */}
        <div className='p-2 bg-base-200 rounded-xl flex flex-col gap-2'>
          <p className='text-center font-semibold'>Time</p>
          <form className="filter">
            <input className="btn btn-square" type="reset" value="×" onClick={()=>setTime(0)}/>
            <input className="btn" onChange={()=>setTime(15)} type="radio" name="frameworks" aria-label="15"/>
            <input className="btn" onChange={()=>setTime(30)} type="radio" name="frameworks" aria-label="30"/>
            <input className="btn" onChange={()=>setTime(60)} type="radio" name="frameworks" aria-label="60"/>
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
          <textarea disabled={time === 0} value={inputChar} onChange={e=>setInputChar(e.target.value)} className="textarea textarea-secondary w-full text-3xl font-bold h-50"></textarea>
          {time === 0 && <p className='w-full text-center'>Choose your time before typing</p>}
        </div>

        
      </div>
    </div>
  )
}

export default Page
