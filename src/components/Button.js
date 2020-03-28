import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Buttons = ({ GoogleToken }) =>  {

    // const response = grecaptcha.getResponse();

    const HandleCaptcha = () => {
        axios.post(
            "https://4k0vxrjtmk.execute-api.ap-south-1.amazonaws.com/recaptcha",{
                "key1": "6LeDneQUAAAAAL9yp3IlNKE72B0b3sODs8v7c_q-",
                "body": GoogleToken,
            },
        ).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
            console.log(GoogleToken);
        })
    }
    
    // return(){
        return(
            <div className = 'mainpage'>
                <Button variant="contained" color="primary" onClick={HandleCaptcha}>
                    Send Post
                </Button>
            </div>
        )
    // }
}
export default Buttons;