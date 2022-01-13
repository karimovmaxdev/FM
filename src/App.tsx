import { useState, createContext } from 'react';
import { TestContext } from './components/testContext/TestContext'
import { AuthForm } from './components/AuthForm/AuthForm';
import {getMusic} from './services/yandexMusic'





let submitObject = {}
export const AppContext = createContext(submitObject)

export function App() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('')
  // const [submitObject, setSubmitObject] = useState<IFormObj | null>(null)




  async function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const name = evt.target.name;
    const value = evt.target.value;

    switch (name) {      
      case 'search': {
        setSearch(value)
        const response = await getMusic.getMusicByQuery(value, 'tracks', '1')
        console.log(response)
        break
      }
    }
  }


  return (
    <div className="App">
      <AppContext.Provider value={submitObject}>
        <header className="header">
          <a href="/">LOGO</a>
          <input onChange={onChange}
            name='search'
            type='text'
            value={search}
          />
          <button onClick={() => setShowForm(!showForm)}
            name='register'>
              REGISTER
          </button>

          <button onClick={() => setShowForm(!showForm)}
            name='login'>
              LOGIN
          </button>
        </header>
        
        {showForm && <AuthForm/>}
        <TestContext/>
        
      </AppContext.Provider>
    </div>
  );
}

// export default { App, AppContext }
