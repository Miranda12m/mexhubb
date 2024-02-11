import React from "react";
import 'react-bootstrap';

function QtFR() {
    return (
        <>
            <style>
                {`
                    .qt-background {
                        background: url(https://i.ibb.co/gzw0HM0/IMG-7564.jpg) no-repeat ;
                        background-size: cover;
                        padding: 100px 0;
                        background-attachment: fixed;
                        background-position: center center;
                        position: relative;
                        
                    }

                    .qt-background p {
                        font-size: 35px;
                        font-weight: 300;
                        line-height: 44px;
                        color: #fff;
                        font-family: 'Arbutus Slab', serif;
                        margin-bottom: 20px;
                    }

                    .qt-background span {
                        color: #fff;
                        font-size: 20px;
                        font-weight: 500;
                    }
                `}
            </style>

            <div className="qt-box qt-background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-left" data-aos="fade-right">
                            <p className="lead" >
                                " Une vie sans effort, des possibilités infinies ! "
                            </p>
                            <span className="lead"> -Mexhubb</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QtFR;
