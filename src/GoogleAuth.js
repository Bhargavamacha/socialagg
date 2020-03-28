import React from 'react';
// import { load } from 'recaptcha-v3'
// load('6LeDneQUAAAAAL9yp3IlNKE72B0b3sODs8v7c_q-').then((recaptcha) => {
//   recaptcha.execute('login').then((token) => {
//       console.log(token) // Will print the token
//     })
// })
// load('6LeDneQUAAAAAL9yp3IlNKE72B0b3sODs8v7c_q-', {
//     useRecaptchaNet: true,
//     autoHideBadge: false
//   }).then((recaptcha) => {
//       console.log(recaptcha);
//   })
class GoogleAuth extends React.Component{
    render(){
        return(
            <div className = 'mainpage'>
                <p>GoogleAuth</p>
            </div>
        )
    }
}
export default GoogleAuth;