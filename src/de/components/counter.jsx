import PureCounter from "@srexi/purecounterjs";


import { useEffect } from "react";

function CounterDE() {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <>
    <style>
        {`
        .counters-w {
            background-image: -webkit-gradient(linear,
                    left top,
                    right top,
                    from(#ff3b19),
                    to(#ff3b19));
            background-image: linear-gradient(to right, #ff3b19, #ff3b19);
            position: relative;
        }
        
        .counters-w .decor {
            position: absolute;
            bottom: 100%;
            right: 0px;
            max-width: 100%;
            z-index: 3;
        }
        
        .counters-w .decor .decor-path {
            fill: #0b3898;
        }
        
        .counters-w .decor2 {
            position: absolute;
            top: 100%;
            left: 0px;
            max-width: 100%;
            z-index: 3;
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        
        .counters-w .decor2 .decor-path {
            fill: #0667dc;
        }
        
        .counters-w .counters-i {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 40px;
            color: #fff;
        }
        
        .counters-w .counter {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
        
        .counters-w .counter .counter-value-w {
            text-align: center;
            margin-right: 25px;
            padding-right: 25px;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .counters-w .counter .counter-value {
            font-size: 3rem;
            font-weight: 500;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            line-height: 1;
        }
        
        .counters-w .counter .counter-name {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 500;
            padding-top: 0px;
        }
        
        .counters-w .counter .counter-description {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.6);
            width: 200px;
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
            .counters-w .counter .counter-value {
                font-size: 2.99rem;
            }
        
            .counters-w .counter .counter-name {
                font-size: 0.9rem;
            }
        
            .counters-w .counter .counter-description {
                font-size: 1rem;
                width: 160px;
            }
        }
        
        @media (max-width: 768px) {
            .counters-w .counters-i {
                display: block;
            }
        
            .counters-w .counter {
                margin-bottom: 20px;
                padding-bottom: 20px;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
        
            .counters-w .counter:last-child {
                margin-bottom: 10px;
                padding-bottom: 0px;
                border-bottom: none;
            }
        
            .counters-w .counter .counter-value-w {
                width: 140px;
            }
        
            .counters-w .counter .counter-description {
                width: auto;
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                font-size: 1.2rem;
            }
        
        }
        
        @media (max-width: 767px) {
            .counters-w {
                margin-bottom: 40px;
            }
        
            .counters-w .counter {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                text-align: center;
            }
        
            .counters-w .counter .counter-value-w {
                margin-right: 0px;
                padding-right: 0px;
                border-right: none;
                margin-bottom: 10px;
            }
        
            .counters-w .counters-i {
                padding: 40px 10px;
            }
        
        }
        `}
    </style>
      <div id="counter1">
        <div className="counters-w">
          <div className="os-container">
            <div className="counters-i">
              <div className="counter">
                <div className="counter-value-w">
                  <div className="counter-value">
                    +
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="50"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span>
                  </div>
                  <div className="counter-name">Services</div>
                </div>
                <div className="counter-description">
                  Personalized and successful services
                </div>
              </div>
              <div className="counter">
                <div className="counter-value-w">
                  <div className="counter-value">
                    +
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="20"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span>
                  </div>
                  <div className="counter-name">Partners</div>
                </div>
                <div className="counter-description">
                Partners to improve our services
                </div>
              </div>
              <div className="counter">
                <div className="counter-value-w">
                  <div className="counter-value">
                    +
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="5"
                      data-purecounter-duration="2"
                      className="purecounter"
                    ></span>
                  </div>
                  <div className="counter-name">Thousand</div>
                </div>
                <div className="counter-description">
                  People satisfied with our services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default CounterDE;