'use client'

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

const Page = () => {
  const [words, setWords] = useState('')
  const [inputChar, setInputChar] = useState('')
  const [time, setTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
  if (!running || counter <= 0) return;

  const interval = setInterval(() => {
    setCounter((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        calculate(); // run result calculation when counter ends
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [counter, running]);


  useEffect(() => {
    setWords(faker.word.words(50))
  }, [])

  const getCharClass = (char: string, index: number) => {
    if (!inputChar[index]) return 'text-gray-400';
    if (inputChar[index] === char) return 'text-green-400';
    return 'text-red-500';
  }

  const calculate = () => {

    const originalWords = words.split(' ');
    const inputWords = inputChar.split(' ');

    let count = 0

    for (let i = 0; i < 50; i++ ) if (originalWords[i] === inputWords[i]) count++;
    
    const wpm = count / (time/60)

    setResult(wpm)

    setShowModal(true);

  }

  const resetTest = () => {
    setWords(faker.word.words(50));
    setInputChar('');
    setTime(0);
    setCounter(0);
    setRunning(false);
    setResult(0);
    setShowModal(false);
  }

  return (
    <div className="">
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto gap-10">


        {running ? (
          <span className="countdown font-mono text-6xl">
            <span style={{"--value": counter, "--digits":2}  as React.CSSProperties  } aria-live="polite" aria-label={counter.toString()}></span>
          </span>
        ):(
          <div className='p-2 bg-base-200 rounded-xl flex flex-col gap-2'>
            <p className='text-center font-semibold'>Time</p>
            <form className="filter">
              <input className="btn btn-square" type="reset" value="×" onClick={()=>{setCounter(0); setTime(0); setRunning(false)}}/>
              <input className="btn" onClick={()=>{setCounter(15); setTime(15); setRunning(false)}} type="radio" name="frameworks" aria-label="15"/>
              <input className="btn" onClick={()=>{setCounter(30); setTime(30); setRunning(false)}} type="radio" name="frameworks" aria-label="30"/>
              <input className="btn" onClick={()=>{setCounter(60); setTime(60); setRunning(false)}} type="radio" name="frameworks" aria-label="60"/>
            </form>
          </div>
        )}

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


          <textarea disabled={counter === 0} value={inputChar} onChange={e=>{
            if (!running && counter > 0) setRunning(true);
            setInputChar(e.target.value)}
            } className="textarea textarea-secondary w-full text-3xl font-bold h-50"></textarea>


          {counter < 1  && <p className='w-full text-center'>Choose your time before typing</p>}
        </div>

        {/* Show Modal Results */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_1" className={`modal ${showModal && 'modal-open'}`}>
          <div className="modal-box">
            <h3 className="font-bold text-3xl text-center text-purple-400">Your WPM</h3>
            <p className="py-4 text-center font-bold text-2xl">{result} words per minute</p>
            <div className="modal-action flex items-center justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={resetTest}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
      </div>
    </div>
  )
}

export default Page
