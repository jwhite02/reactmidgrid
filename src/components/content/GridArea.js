import React, { Component } from 'react';

import stream from '../../images/autum-stream.jpg';

class GridArea extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="myh1 thebackground"> <h1 style={{ transform: "rotate(90deg)" }}> Hello my Friend</h1></div>
                <div className="main">
                    <div className="container">
                        <div className="thebackground one shadow">
                            <h1>1</h1>
                        </div>
                        <div className="two shadow">
                            <div id="thebackground2">
                                <div className="twob">
                                    <h1 style={{whiteSpace:'nowrap', width: '5rem'}} > Lorem ipsum this is some more text.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="thebackground three shadow">
                            <h1>3</h1>
                        </div>
                        <div className="thebackground four shadow">
                            <h1>4</h1>
                        </div>
                        <div className="thebackground five shadow">
                            <h1>5</h1>
                        </div>
                        <div className="thebackground six shadow">
                            <h1>6</h1>
                        </div>
                        <div className="thebackground seven shadow">
                            <h1>7</h1>
                        </div>
                        <div className="thebackground eight shadow">
                            <h1>8</h1>
                        </div>
                        <div className="thebackground nine shadow">
                            <h1>9</h1>
                        </div>
                        <div className="thebackground ten shadow">
                            <h1>10</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GridArea;