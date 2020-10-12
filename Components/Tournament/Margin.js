
import React from 'react';

const Margin = ({ children, marginBottom, marginTop }) => {
    return ( 
        <div style={{
            marginBottom: `${marginBottom ?? 0}px`,
            marginTop: `${marginTop ?? 0}px`
        }}>
            { children }
        </div>
    )
};

export default Margin;