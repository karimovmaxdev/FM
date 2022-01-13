import { useContext } from "react"
import { AppContext } from '../../App'



function rofl<T>(a:T) {
    console.log(a)
}

// rofl('mek')
rofl(1)

export function TestContext() {
    const context = useContext(AppContext)
    console.log(context, 'context')
    
    return (
        <button>click here</button>
    )
}