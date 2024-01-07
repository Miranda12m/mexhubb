import React from 'react';
import { Link } from 'react-router-dom';
export default function ContactButton2DE() {
    return (
        <>

            <style>
                {`
                .button-hover:hover {
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                    transform: scale(1.02);
                    transition: all 0.2s ease-in-out;
                }

        
                  .btn-box{
                    position: relative;
                  }

                  .btn-style-one{
                    position: relative;
                    display: inline-block;
                    font-size: 17px;
                    line-height: 30px;
                    color: #ffffff;
                    padding: 10px 30px;
                    font-weight: 600;
                    overflow: hidden;
                    letter-spacing: 0.02em;
                    background-color: #FF3B19;
                  }

                  .btn-style-one:hover{
                    background-color: #ea2d0d;
                    color: #ffffff;
                  }
                `}
            </style>


            <div class="btn-box">
                <Link to="/en/contact">
                <a href="/en/contact" class="theme-btn btn-style-one button-hover">Contact</a>
                </Link>
            </div>
        </>
    );


}