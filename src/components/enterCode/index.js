import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import "./styles.css"

function EnterCode(props) {
    const [code, setCode] = useState('');

    const enterCode = (e) => {
        const value = e.target.value;
        const regex =  /^[0-9\b]+$/;
        if (value === "" || regex.test(value))
            setCode(value);
    }

    const submitCode = () => {
        props.setAuthenticated(true);
        console.log('Ishaaq: code submitted: ', code);
    }
    return (
        <div className="EnterCode">
            <div className='EnterCodeForm'>
                <TextField value={code} onChange={enterCode} id="code" label="Enter Code" variant="filled" />
                <Button type='submit' disabled={code.length !== 6 ? true : false} onClick={submitCode} variant="contained" endIcon={<SendIcon />}>Submit Code</Button>
            </div>
        </div>
    )
}
export default EnterCode;