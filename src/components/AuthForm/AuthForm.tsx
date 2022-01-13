import React, { useState } from "react";

interface IFormObj {
  username: string;
  email: string;
  password: string;
}


export function AuthForm() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // const [submitData, setSubmitData] = useState({})

  
    

  async function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
  const name = evt.target.name;
  const value = evt.target.value;

  switch (name) {
    case 'email': {
      setEmail(value)
      break
    }
      
    case 'password': {
      setPassword(value)
      break
    }
      
    case 'username': {
      setUsername(value)
      // const response = await getMusic.getMusicByQuery(value, 'tracks', '1')
      // console.log(response)
    }
  }
}

  function onSubmit(evt:React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const formObj: IFormObj = {
      username,
      email,
      password
    }

    // setSubmitData = {...formObj}
    setEmail('')
    setPassword('')
    setShowForm(false)

  }

    return (
      <>
        <form
          onSubmit={onSubmit}
          style={{ display: showForm ? 'grid' : 'none' }}
          className="form"
        >
        <label htmlFor='username'>username</label>
          <input
            id='username'
            onChange={onChange}
            type='text'
            name='username'
            value={username}
          />

          <label htmlFor='email'>email</label>
          <input
            onChange={onChange}
            id='email'
            name='email'
            type='mail'
            value={email}
          />

          <label htmlFor='password'>password</label>
          <input
            id='password'
            onChange={onChange}
            type='password'
            name='password'
            value={password}
          />

          <button
            type='submit'>
            submit
          </button>

          <button onClick={() => setShowForm(!showForm)}
            name='cancel'>
              cancel
          </button>

        </form>
      </>
    )



}