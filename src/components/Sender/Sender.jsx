import React from 'react';
import {useHistory} from 'react-router-dom';

const Sender = (props) => {

    let history = useHistory();

    const sendme = () => {

        history.push(props.path);

    }


    return (
        <div className="sender" onClick={()=>sendme()}>
            {props.destino}
        </div>
    )
}

export default Sender;