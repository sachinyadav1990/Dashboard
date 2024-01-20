import { useState, memo, Profiler } from "react"

const Count = ({ count }) => {
    return <div> {count} </div>
}

const Msg = memo(()=> {
    console.log('MSG Rendered')
    return 'MY Name is Sachin and No props is here'
})


export const CounterContainer =()=> {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count => count + 1)
    }

    const decrement = () => {
        count > 0 && setCount(count => count - 1)
    }


    const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
    }
    
    return <Profiler id="count" onRender={onRender}>
        <div >
            <button onClick={increment}>Increment</button>
            <Count count={count} />
            <button onClick={decrement}>Decrement</button>
            <Msg />
        </div>
    </Profiler>

}