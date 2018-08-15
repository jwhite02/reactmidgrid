import React, { Component } from 'react';

import stream from '../../images/autum-stream.jpg';
import night1 from '../../images/night1.jpeg';
import night2 from '../../images/night2.jpeg';
import night3 from '../../images/night3.jpeg';
import night4 from '../../images/night4.jpeg';
import night5 from '../../images/night5.jpeg';
import night6 from '../../images/night6.jpeg';
import night7 from '../../images/night7.jpeg';
import night8 from '../../images/night8.jpeg';
import night9 from "../../images/night9.jpg";
import night10 from "../../images/night10.jpeg";
import night11 from "../../images/night11.jpeg";



class GridArea extends Component {
    render() {
        return (
            <div className="sect1">
                <div className="myh1 "> 
                    <h1>Lighting The Night</h1>
                </div>
                <div className="main">
                    <div className="container">
                        <div className="thebackground one shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>La Machine Du Moulin Rouge</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis, tenetur dignissimos facilis doloribus blanditiis eum. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                        </div>
                        <div className="thebackground two">
                            <div className="thebackground2">  
                                <h1>After Dark</h1>
                            </div>
                        </div>
                        <div className="thebackground three shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Colorful Architecture</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night11} alt="night1"/> */}
                            </div>
                        </div>
                        <div className="thebackground four shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Calm Nights</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis, tenetur dignissimos facilis doloribus blanditiis eum. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night2} alt="night1" /> */}
                            </div>
                        </div>
                        <div className="thebackground five shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Tropical Lights</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis, tenetur dignissimos facilis doloribus blanditiis eum. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night3} alt="night1" /> */}
                            </div>
                        </div>
                        <div className="thebackground six shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Reflections</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night4} alt="night1" /> */}
                            </div>
                        </div>
                        <div className="thebackground seven">
                            <div className="thebackground2">
                                <h1>City Lights</h1>   
                            </div>
                        </div>
                        <div className="thebackground eight shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Venice Waters</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis, tenetur dignissimos facilis doloribus blanditiis eum. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night5} alt="night1" /> */}
                            </div>
                        </div>
                        <div className="thebackground nine shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Park Lights</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis, tenetur dignissimos facilis doloribus blanditiis eum. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night6} alt="night1" /> */}
                            </div>
                        </div>
                        <div className="thebackground ten shadow">
                            <div className="details">
                                <div className="imgContent">
                                    <h2>Gardens By The Bay</h2>
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iure modi sequi, maiores, soluta in amet perferendis, tenetur dignissimos facilis doloribus blanditiis eum. Eveniet quae numquam atque dicta, sint incidunt. </p>
                                </div>
                            </div>
                            <div className="imgBox">
                                {/* <img src={night7} alt="night1" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridArea;