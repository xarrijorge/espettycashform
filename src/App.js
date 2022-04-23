import React from 'react'
import axios from 'axios'
import Item from './components/Item'
import Home from './components/Home'

import { BsFillPlusCircleFill } from 'react-icons/bs'
import { TextField } from '@mui/material'
import './App.css'

function App() {
    const [list, setList] = React.useState([<Item count={0} />])
    const [itemsData, setitemsData] = React.useState({})
    const [submitData, setSubmitData] = React.useState({})
    const [bankDetails, setBankDetails] = React.useState({})

    const [data, setData] = React.useState([])
    const [inputVal, setInputVal] = React.useState('')
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    const API_URI = `https://esformsbackend.herokuapp.com/users?email=${inputVal}`

    const GetData = async () => {
        console.log(API_URI)
        await axios
            .get(API_URI)
            .then((res) => res.data)
            .then((data) => setData([data]))
    }
    const handleInputChange = (event) => {
        event.preventDefault()
        setInputVal(event.target.value)
        if (inputVal.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/gi)) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    const updateList = (e) => {
        e.preventDefault()
        setList([...list, <Item />])
    }
    const handleBankChange = (e) => {
        setBankDetails({
            ...bankDetails,
            [e.target.name]: e.target.value,
        })
    }

    // const SUBMIT_URI = 'https://esformsbackend.herokuapp.com/pettycash'
    const LOCAL_URI = 'http://localhost:3001/pettycash'
    const headers = { 'content-type': 'application/json' }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios
            .post(LOCAL_URI, { ...submitData, user: data[0] }, headers)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        console.log({ ...submitData, user: data[0] })
    }
    React.useEffect(() => {
        inputVal.match(/[a-z.]+@[slib.]{0,4}?[easysolar]+\.[org]{3}/g)
            ? setButtonDisabled(false)
            : setButtonDisabled(true)
        delete itemsData['']
        setSubmitData({ ...bankDetails, ...itemsData })
        // console.log(itemsData)
    }, [inputVal, itemsData, bankDetails])

    return (
        <div className='App'>
            {data.length > 0 ? null : (
                <Home
                    inputVal={inputVal}
                    handleClick={GetData}
                    handleInputChange={handleInputChange}
                    buttonDisabled={buttonDisabled}
                />
            )}
            {data.length <= 0 ? null : (
                <form onSubmit={handleSubmit}>
                    <h2>
                        {' '}
                        Welcome, {data[0]['First Name']}. Please fill out the
                        form below.{' '}
                    </h2>
                    <h3>Bank Details Section</h3>
                    <section>
                        <span>
                            <TextField
                                required
                                type='text'
                                size='small'
                                label='Bank Name'
                                name='bankname'
                                className='textInput'
                                onChange={handleBankChange}
                            />
                        </span>
                        <span>
                            <TextField
                                required
                                type='text'
                                size='small'
                                label='Bank Account Name'
                                name='accountname'
                                className='textInput'
                                onChange={handleBankChange}
                            />
                        </span>
                        <span>
                            <TextField
                                type='text'
                                size='small'
                                label='Bank Account Number'
                                name='accountnumber'
                                className='textInput'
                                onChange={handleBankChange}
                            />
                        </span>
                        <span>
                            <TextField
                                type='text'
                                size='small'
                                label='Budget Code'
                                name='budgetcode'
                                className='textInput'
                                onChange={handleBankChange}
                            />
                        </span>
                    </section>
                    <section className='requestSection'>
                        <h3>Request Section</h3>
                        {list.map((item, index) => (
                            <Item
                                data={itemsData}
                                setData={setitemsData}
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
                    </section>
                    <button className='submitButton' type='submit'>
                        submit
                    </button>
                </form>
            )}
        </div>
    )
}

export default App
