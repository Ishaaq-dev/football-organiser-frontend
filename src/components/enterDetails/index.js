import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React, { useState } from 'react';
import './styles.css';
import { Login_States } from '../../utils/enums';

function EnterDetails(props) {
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');

    const enterName = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        if (id === 'firstName') setFirstName(value);
        if (id === 'surname') setSurname(value);
    }

    const submitName = () => {
        props.setLoginState(Login_States.AUTHENTICATED);
    }

    return (
        <div className='EnterDetails'>
            <div className='EnterDetailsForm'>
                <TextField value={firstName} onChange={enterName} id='firstName' label='Enter First Name' variant='filled' />
                <TextField value={surname} onChange={enterName} id='surname' label='Enter Surname' variant='filled' />
                <Button type='submit' disabled={false} onClick={submitName} variant='contained' endIcon={<SendIcon />}>Submit Name</Button>
            </div>
        </div>
    );
}
export default EnterDetails;