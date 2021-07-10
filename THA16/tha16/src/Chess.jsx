import React from 'react';
//import ReactDOM from 'react-dom';
import './Chess.css';
function Bansal1(){
    return <div className="black"></div>;
}
function Bansal2(){
    return <div className="white"></div>;
}
function Yash1(){
    return (
        <div className="row1">
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
        <div className="row2">
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
    return(
        <div className="chess_board">
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