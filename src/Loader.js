import React from 'react';

const Loader = ({height}) => {
    return (
        <div className="loader w-90 items-center" style={{height: height}}>
            <div className="circle w-5 h-5 m-1 rounded-50 animate-animation"></div>
            <div className="circle w-5 h-5 m-1 rounded-50 animate-animation"></div>
            <div className="circle w-5 h-5 m-1 rounded-50 animate-animation"></div>
        </div>
    );
};

export default Loader;