import React from "react";
import 'react-bootstrap';

function QtDE() {
    return (
        <>
            <style>
                {`
                    .qt-background {
                        background: url(https://i.ibb.co/8DVxv5b/IMG-7564.webp) no-repeat ;
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
                                " Müheloses Leben, unendliche Möglichkeiten! "
                            </p>
                            <span className="lead"> -Mexhubb</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QtDE;
