import React from 'react'
import TextField from '@mui/material/TextField'

const Item = ({ count }) => {
    const [unitCost, setCost] = React.useState(1)
    const [amount, setAmount] = React.useState(1)
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        setTotal(unitCost * amount)
    }, [unitCost, amount])
    return (
        <>
            <p>
                <TextField
                    required
                    type='text'
                    size='small'
                    id='outlined-required'
                    label='Item Name'
                />
                <TextField
                    required
                    type='number'
                    size='small'
                    label='Unit Cost'
                    value={unitCost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <TextField
                    type='number'
                    size='small'
                    label='Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <TextField
                    type='number'
                    size='small'
                    label='Total'
                    value={total}
                />
            </p>
        </>
    )
}

export default Item
