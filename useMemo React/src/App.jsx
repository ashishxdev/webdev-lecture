
import { useMemo, useState } from 'react'
import './App.css'

const nums = new Array(50_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 49_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(i => i.isMagical === true) // expensive computation
  const magical = useMemo(() => numbers.find(i => i.isMagical === true), [numbers])
  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          <span>Magical Number is {magical.index}</span>
        </div>
        <button
          className="counter"
          onClick={() => {
            setCount((prev) => {
              const newCount = prev + 1;

              if (newCount === 10) {
                setNumbers(
                  new Array(10_000_000).fill(0).map((_, i) => ({
                    index: i,
                    isMagical: i === 9_000_000
                  }))
                );
              }
              return newCount;
            });
          }}
        >
          Count is {count}
        </button>
      </section >
    </>
  )
}

export default App
