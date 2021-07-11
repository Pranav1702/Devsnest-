import React from 'react';
//import ReactDOM from 'react-dom';
//import './Chess.css';
function Bansal1(){
    return <div style={{background: 'black',
        height: "50px",
        width: "50px",
        margin: 0}}></div>;
}
function Bansal2(){
    return <div style={{background: 'white',
        height: 50,
        width: 50,
        margin: 0}}></div>;
}
function Yash1(){
    return (
        <div style={{display: 'flex',
            margin:0}}>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
        </div>
    )
}
function Yash2(){
    return (
        <div style={{display: 'flex',
            margin:0}}>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
            <Bansal2/>
            <Bansal1/>
        </div>
    )
}
function Chess(){
    const grey="#000";
    const t={
        width: 500,
        height: 500,
        border:'10px solid #cc6600',
        padding: 'none',
        margin: 'auto',
        marginTop: 90,
        boxShadow: `8px 8px 8px 8pxpx ${grey}`
    }
    return(
        <div style={t}>
            <Yash1/>
            <Yash2/>
            <Yash1/>
            <Yash2/>
            <Yash1/>
            <Yash2/>
            <Yash1/>
            <Yash2/>
            <Yash1/>
            <Yash2/>
        </div>
    )
}

export default Chess;