import React from 'react'
import Button from '@mui/material/Button'

export default function Home({
    handleClick,
    handleInputChange,
    inputVal,
    buttonDisabled,
}) {
    return (
        <form className='homepage'>
            <h2> Please Enter Your Email Address</h2>
            <div>
                <input
                    className='homeinput'
                    type='email'
                    value={inputVal}
                    onChange={handleInputChange}
                    placeholder='firstname.lastname@easysolar.org'
                />
            </div>
            <Button
                className='homebutton'
                disabled={buttonDisabled}
                variant='contained'
                onClick={handleClick}>
                {/* <Link to='/MainForm'>Next</Link> */}
                Next
            </Button>
        </form>
    )
}
