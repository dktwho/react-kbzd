import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect',
}

export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Example1')

    useEffect(() => {
        console.log('useEffect when dependencies not defined , EVERY RENDER ')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect when dependencies array, ONLY FIRST RENDER WHEN COMPONENT IS MOUNTING')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect when dependencies is some value, FIRST RENDER when dependencies is CHANGE')
        document.title = counter.toString()
    }, [counter])
    return <>
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        Hello <h1>{counter}</h1> <h1>{fake}</h1>
    </>
}
export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log('Example12')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout called')
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter((state) => state + 1)
    //     }, 1000)
    // }, [])

    return <>
        <button onClick={() => setFake(fake + 1)}>fake click</button>
        <button onClick={() => setCounter(counter + 1)}>counter click</button>
        Hello <h1>{counter}</h1> <h1>{fake}</h1>
        <br/>
        SetInterval
       <div> {fake} - {counter}</div>
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('component rendered')

    useEffect(() => {
        console.log('effect completed')

        return () => {
            console.log('reset effect')
        }

    }, [])

    const increase = () => {setCounter(counter + 1)}

    return <div>
        Hello {counter}
        <button onClick={increase}>+</button>
    </div>

}