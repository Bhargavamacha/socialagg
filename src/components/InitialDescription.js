import React from 'react';
// import { StyleSheet } from 'react-dom';
class InitialDescription extends React.Component{
    render(){
        return(
            <div>
                <div style={styles.desc}>
                    Description
                </div>
            </div>
        )
    }
}

const styles = {
    desc: {
        margin: 50,
    }
}

export default InitialDescription;