import React from 'react'
import Item from './components/Item'

import { BsFillPlusCircleFill } from 'react-icons/bs'
import './App.css'

function App() {
    const [list, setList] = React.useState([<Item />])

    const updateList = (e) => {
        e.preventDefault()
        setList([...list, <Item />])
        console.log(list)
    }

    return (
        <form className='App'>
            {list.map((item, key) => item)}
            <BsFillPlusCircleFill className='addButton' onClick={updateList} />
        </form>
    )
}

export default App
