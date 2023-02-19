import React, { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import "./styles.css";

function EnterPhoneNumber(props) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const setNumber = (e) => {
        const number = e.target.value;
        const regex = /^[0-9\b]+$/;
        if (number === "" || regex.test(number))
            setPhoneNumber(number);
    }

    const getCode = () => {
        console.log('Ishaaq: submitted: ', phoneNumber);
        props.setCodeSent(true);
    }

    return (
        <div className="EnterPhoneNumber">
            <div className="EnterPhoneNumberForm">
                {/* add error to textfield */}
                <TextField value={phoneNumber} onChange={setNumber} id="phone-number" label="Enter Phone Number" variant="filled" />
                <Button type='submit' disabled={phoneNumber.length !== 11 ? true : false} onClick={getCode} variant="contained" endIcon={<SendIcon />}>Get Code</Button>
            </div>
        </div>
    );
}

export default EnterPhoneNumber;