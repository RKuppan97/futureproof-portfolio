import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css'

const BackButton = () => {
    const history = useHistory();

    return <button id="back-button" onClick={history.goBack}>Back</button>
}

export default BackButton; 