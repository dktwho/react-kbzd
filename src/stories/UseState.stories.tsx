import React, {useMemo, useState} from "react";
export default {
    title: 'UseState',
}

function generateData () {
    console.log('generate difficult value')
    return 235648965
}

function generateData2 () {
    console.log('generate difficult value')
    return 1111333322222
}


export const Example1 = () => {
    // передаем в стейт функции которую useSTate вызывает сам, и запоминает значение, как useMemo но при условии что функция синхронная
    const [counter, setCounter] = useState(generateData)
    console.log('Example1')
    return <>
        <button onClick={() => setCounter(counter + 1) }>+</button>
        <h1>{counter}</h1>
    </>
}

export const Example2 = () => {
    // пример с функцией изменителем
    const [counter, setCounter] = useState(generateData2)
    console.log('Example2')

    const changer = (state: number) => state + 1
    return <>
        {/*<button onClick={() => setCounter(changer) }>+</button>*/}
        <button onClick={() => setCounter(state => state + 1) }>+</button>
        <h1>{counter}</h1>
    </>
}