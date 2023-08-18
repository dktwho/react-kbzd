import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const Example1 = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i

        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>result for a: {resultA}</div>
            <div>result for b: {resultB}</div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('rerender users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
export const Example2 = () => {
    console.log('rerender components')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Bill', 'Sam'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('b') > -1)
    }, [users])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUsers([...users, 'Barn'])}>add user</button>
        <h2>{counter}</h2>
        <Users users={newArray}/>
    </>
}

