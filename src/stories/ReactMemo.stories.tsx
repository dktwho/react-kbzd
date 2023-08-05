import React, {useState} from "react";
export default {
    title: 'React.memo demo',
}

type UsersType = {
    users: Array<string>
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: UsersType) => {
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Bill', 'Sam'])
    return <>
        <button onClick={() => setCounter(counter + 1) }>+</button>
        <button onClick={() => setUsers([...users, 'NEW USER']) }>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}