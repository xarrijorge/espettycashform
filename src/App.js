import React from 'react'
import Item from './components/Item'

import { BsFillPlusCircleFill } from 'react-icons/bs'
import './App.css'

function App() {
    const [list, setList] = React.useState([<Item count={0} />])
    const [submitData, setSubmitData] = React.useState({})

    const updateList = (e) => {
        e.preventDefault()
        setList([...list, <Item />])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('data', JSON.stringify(submitData))
        alert(submitData)
    }

    React.useEffect(() => {}, [])

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>
                Welcome USER. Please fill out the form below.
            </h3>
            <form className='App' onSubmit={handleSubmit}>
                {list.map((item, index) => (
                    <Item
                        data={submitData}
                        setData={setSubmitData}
                        count={index}
                        key={index}
                    />
                ))}
                <button
                    disabled={list.length >= 15 ? true : false}
                    className='addButton'
                    onClick={updateList}>
                    <BsFillPlusCircleFill />
                </button>
                <button className='submitButton' type='submit'>
                    submit
                </button>
            </form>
        </>
    )
}

export default App
