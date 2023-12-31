import React from 'react';
import './css/wapp.css';
import $ from 'jquery';

function WappFR() {

  $(document).on("click", "#whatsapp-popup", function () {
    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
    setTimeout(function () {
      $('.loading-animation').hide();
      $('.whatsapp-message-wrapper').css("display", "flex").hide().fadeIn("slow");
    }, 1000)
  });

  $(document).on("click", ".close_whatsapp", function () {
    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
  });

  return (
    <>
          <style>
        {`
                  .button-hover:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }
                `}
      </style>
   
    <div>
      <div className="whatsapp-main ">
       
        <div className="whatsapp-popup-button button-hover" id="whatsapp-popup" onClick={() => window.open('https://api.whatsapp.com/send?phone=4917642000239', '_blank')}>
          <div className="whatsapp-notify"></div>
          <div className="whatsapp-button-main">
            <svg className="whatsapp-send-icon-big" xmlns="http://www.w3.org/2000/svg" version="1" width="32" height="32" viewBox="0 0 90 90">
              <path
                d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
                fill="#FFF" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default WappFR;
