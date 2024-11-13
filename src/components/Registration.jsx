import { useState } from "react";

function Registration(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit(e){
        e.preventDefault()
        console.log(`${name} + ${email} + ${password}`)
    }
    return(
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={e => setName(e.target.value)} value ={name} ></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange={e => setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="text" onChange={e => setPassword(e.target.value)} value={password}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default Registration