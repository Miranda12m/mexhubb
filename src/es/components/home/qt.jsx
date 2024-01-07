import React from "react";
import 'react-bootstrap';

function QtES() {
    return (
        <>
            <style>
                {`
                    .qt-background {
                        background: url(https://images.unsplash.com/photo-1619449991377-ed091f74de48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat ;
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
                                " Vida sin esfuerzo, infinitas posibilidades! "
                            </p>
                            <span className="lead"> -Mexhubb</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QtES;
