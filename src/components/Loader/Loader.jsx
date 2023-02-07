import React from 'react';
import { LoaderStyles } from './Loader.styled';
export const Loader = () => {
    return (
        <LoaderStyles
        height="100"
        width="100"
        color="#4fa94d"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
            }}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading'
        />  
    );
};


