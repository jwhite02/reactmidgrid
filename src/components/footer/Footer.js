import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="thefooter">
                <div className="fcontainter">
                    <div className="flexcontainer">
                        <div className="fcontsect1">
                            <h3>About</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quam ad quibusdam, officiis totam deleniti voluptatibus nulla, non quo incidunt quia ab tenetur!
                            </p>
                        </div>
                        <div className="fcontsect2">
                            <h3>Image Sources</h3>
                            <ul>
                                <li><a href="https://pxhere.com/">pxhere</a></li>
                                <li><a href="https://unsplash.com/">UnSplash</a></li>
                            </ul>
                        </div>
                        <div className="fcontsect3">
                            <div className="simple-subscription-form">
                                <form action="">
                                    <h3>Subscribe</h3>
                                    <p>Receive updates and latest news direct from our team. Simply enter your email:  
                                    <div className="input-group">
                                        <span class="input-group-label">
                                                <i class="fa fa-envelope fa-lg"></i>
                                        </span>
                                        <input class="input-group-field" type="email" placeholder="Email" required />
                                        <button class="button">Sign up now</button>
                                        </div></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btfooter">
                    <h4>2018 <i class="fa fa-copyright fa-md"></i> MySite.com</h4>
                </div>
            </div>
        );
    }
}

export default Footer;
