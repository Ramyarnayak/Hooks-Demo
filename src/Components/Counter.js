import React,{ useState} from 'react'
import CounterTwo from './CounterTwo'

function Counter() {
     const [counterOne, setcounterOne] = useState(0)
     const [counterTwo, setcounterTwo] = useState(0)
     const incrementOne=()=>{
         setcounterOne(counterOne+1)
     }
     const incrementTwo=()=>{
        setcounterTwo(counterTwo+1)
    }
    const isEven=()=>{
        
        return counterOne % 2 === 0
    }
  return (
        <div>
            <div>
                <button onClick={incrementOne}>count {counterOne} </button>
                <span> {isEven()? 'even': 'odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>count {counterTwo} </button>
            </div>
        </div>
    )
}

export default Counter
