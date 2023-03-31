import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.myLoading}>
            <div className={classes.text}>Loading...</div>
            <div className={classes.circle}></div>
        </div>
    );
};

export default Loading;