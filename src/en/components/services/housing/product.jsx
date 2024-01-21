import React from 'react';
import ContactButtom from '../../contactbutton';
import { FaBath, FaBed, FaVectorSquare, FaCar, FaCalendar } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';

export default function Product() {

    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage() {
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);

    return (
        <>
            <style>{`
    /* Color Variables */
    $white: #fff;
    $black: #333;
    $lightergray: #d5d5d5;
    $lightgray: #f0f3f1;
    $gray: #e3dddd;
    $text: #888;
    $button: #3e3e3f;
    $button-hover: #565657;

    .custom-flex-nav ul {
        position: absolute;
        z-index: 1;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        display: none;
        width: 100%;
        left: 0;
        padding: 1rem;
        background: $white;
        text-align: center;
    }
    .custom-flex-nav ul.active {
        display: flex;
    }
    .custom-flex-nav ul li {
        margin: 0.5rem 0;
    }

    .custom-breadcrumb-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 1rem 0 0 0;
        list-style: none;
    }
    .custom-breadcrumb-list li {
        font-size: 0.85rem;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
    }

    .custom-breadcrumb-item.active {
        color: $black;
    }
    .custom-breadcrumb-item + .custom-breadcrumb-item::before {
        content: '/';
        display: inline-block;
        padding: 0 0.5rem;
        color: $lightergray;
    }



















.card-wrapper{
    max-width: 1100px;
    margin: 0 auto;
}
.imgc{
    width: 100%;
    display: block;
}
.img-display{
    overflow: hidden;
}
.img-showcase{
    display: flex;
    height: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
    height: 600px;
}

@media screen and (max-width: 767px) {
    .img-showcase img {
      height: 300px;
    }
  }

.img-select{
    display: flex;
    width; 100%;
}
.img-item{
    margin: 0.3rem;
    width: 100%;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
.product-content{
    padding: 2rem 1rem;
}
.product-title{
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
}
.product-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    background: #12263a;
}
.product-link{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #FF3B19;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}
.product-link:hover{
    opacity: 0.9;
}
.product-rating{
    color: #ffc107;
}
.product-rating span{
    font-weight: 600;
    color: #252525;
}
.product-price{
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}
.product-price span{
    font-weight: 400;
}
.last-price span{
    color: #f64749;
    text-decoration: line-through;
}
.new-price span{
    color: #FF3B19;
}
.product-detail h2{
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
}
.product-detail p{
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
}
.product-detail ul{
    margin: 1rem 0;
    font-size: 0.9rem;
}
.product-detail ul li{
    margin: 0;
    list-style: none;
    background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
    background-size: 18px;
    padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
}
.product-detail ul li span{
    font-weight: 400;
}
.purchase-info{
    margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn{
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    margin-bottom: 1rem;
}
.purchase-info input{
    width: 60px;
}
.purchase-info .btn{
    cursor: pointer;
    color: #fff;
}
.purchase-info .btn:first-of-type{
    background: #FF3B19;
}
.purchase-info .btn:last-of-type{
    background: #f64749;
}
.purchase-info .btn:hover{
    opacity: 0.9;
}
.social-links{
    display: flex;
    align-items: center;
}
.social-links a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
}
.social-links a:hover{
    background: #000;
    border-color: transparent;
    color: #fff;
}

@media screen and (min-width: 992px){
    .card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
    .card-wrapper{
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product-imgs{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-content{
        padding-top: 0;
    }
}



`}
            </style>

            <div class="custom-grid custom-second-nav" style={{ marginBottom: '20px',maxWidth: '1100px', margin:' 0 auto' }} data-aos='fade-right'>
                <div class="column-xs-12">
                    <nav>
                        <ol class="custom-breadcrumb-list" >
                            <li class="custom-breadcrumb-item"><a href="/#/en/home">Home</a></li>
                            <li class="custom-breadcrumb-item"><a href="#/en/housing">Housing</a></li>
                            <li class="custom-breadcrumb-item active">Paseo Reforma Department</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="card-wrapper">
                <div class="card" style={{ background: '#EDECEA', border: 'none' }} data-aos='fade-right'>

                    <div class="product-imgs">
                        <div class="img-display">
                            <div class="img-showcase">
                                <img class='imgc' src="https://img10.naventcdn.com/avisos/18/00/66/78/53/22/360x266/369046080.jpg" alt="shoe image" />
                                <img class='imgc' src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/368580178.jpg" alt="shoe image" />
                                <img class='imgc' src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046065.jpg" alt="shoe image" />
                                <img class='imgc' src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046066.jpg" alt="shoe image" />
                            </div>
                        </div>
                        <div class="img-select">
                            <div class="img-item">
                                <a href="#" data-id="1">
                                    <img class='imgc' src="https://img10.naventcdn.com/avisos/18/00/66/78/53/22/360x266/369046080.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div class="img-item">
                                <a href="#" data-id="2">
                                    <img class='imgc' src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/368580178.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div class="img-item">
                                <a href="#" data-id="3">
                                    <img class='imgc' src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046065.jpg" alt="shoe image" />
                                </a>
                            </div>
                            <div class="img-item">
                                <a href="#" data-id="4">
                                    <img class='imgc' src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046066.jpg" alt="shoe image" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <div class="product-content" data-aos='fade-up'>
                        <h2 class="product-title" data-aos='fade-up'>Paseo Reforma Department</h2>
                        <a href="https://maps.app.goo.gl/sLHo9RALLXqaqPeu5" class="product-link" target='_blank' data-aos='fade-up'>View map</a>

                        <div class="product-price" data-aos='fade-up'>
                            <p class="new-price">New Price: <span>$865,000.00</span></p>
                        </div>

                        <div class="product-detail" data-aos='fade-up'>
                            <h2>about this item: </h2>
                            <p>Apartment located in the heart of Paseo de la Reforma, one block from the Monument to the Revolution, 10 minutes from the Historic Center.
                                Complex designed by Architect Alberto Kalach.</p>
                            <p>Apartment on two floors and high ceilings, large spaces in the dining room, black basalt stone floor, fully equipped open loft-style kitchen, includes Subzero and Miele refrigerator.</p>
                            <ul>
                                <li><FaVectorSquare /> Square Footage: <span>1920 sq ft</span></li>
                                <li><FaBed /> Bedrooms: <span>1</span></li>
                                <li><FaBath /> Bathrooms: <span>1</span></li>
                                <li><FaCar /> Parking Slots: <span>2</span></li>
                                <li><FaCalendar /> Age: <span>8 years</span></li>
                            </ul>
                        </div>

                        <div class="purchase-info" >
                            <ContactButtom />
                        </div>


                    </div>
                </div>
            </div>
            <div class="card-wrapper" style={{ marginTop: '15px', marginBottom: '25px' }} data-aos='fade-up'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.454294581034!2d-99.14929149999999!3d19.4359705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d45bcf3d03%3A0xb2da234571bf1d9a!2sAv.%20P.%C2%BA%20de%20la%20Reforma%2011%2C%20Tabacalera%2C%20Cuauht%C3%A9moc%2C%2006030%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1705824160391!5m2!1ses-419!2smx"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación en Google Maps"
                ></iframe>
            </div>
            <div class="card-wrapper">
                <div class="product-detail" style={{marginRight:'10px'}} data-aos='fade-right'>
                    <h2>Learn more about this property</h2>
                
                </div>
                <Accordion style={{width:'100%'}}>
                        <Accordion.Item eventKey="0" data-aos="fade-up">
                            <Accordion.Header>What is the exact location of the apartment, and what iconic landmarks are nearby?</Accordion.Header>
                            <Accordion.Body>
                            The apartment is located in the heart of Paseo de la Reforma, one street away from the Monument to the Revolution, and just 10 minutes from the Historic Center.
                            </Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2" data-aos="fade-up">
                            <Accordion.Header>What are the specific features of the apartment, such as the type of flooring, open loft-style equipped kitchen, and included appliances?</Accordion.Header>
                            <Accordion.Body>
                            The apartment features spacious living and dining areas, black basalt stone flooring, an open loft-style equipped kitchen with high-end appliances, including a Subzero refrigerator and Miele appliances.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" data-aos="fade-up">
                            <Accordion.Header>How is the layout of spaces on the second level of the apartment, and what amenities are provided, such as the remote-controlled hydro-massage tub and the walk-in closet with a safe?</Accordion.Header>
                            <Accordion.Body>
                            On the second level, there is a staircase with stainless steel and tempered glass leading to a large bedroom with a full bathroom, a remote-controlled hydro-massage tub, a shower, a walk-in closet with a safe, a service room with a bathroom, a laundry area, and a 1.30 x 1.30 storage room.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" data-aos="fade-up">
                            <Accordion.Header>What amenities are available in the complex, and how do they contribute to the residents' quality of life?</Accordion.Header>
                            <Accordion.Body>
                            Amenities include a pool, jacuzzi, gym, playroom, visitor parking, valet parking, reception area, cinema, party room, game room with billiards, and a business center.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" data-aos="fade-up">
                            <Accordion.Header>What panoramic views does the apartment offer, and how are they shielded with hand-spun metal curtains and electric blackout shades?</Accordion.Header>
                            <Accordion.Body>
                            The apartment offers panoramic views of Paseo de la Reforma and the Monument to the Revolution. It is fully draped with hand-spun metal curtains and has electric blackout shades for enhanced privacy.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" data-aos="fade-up">
                            <Accordion.Header>Do you need information about the apartment's condition, location within the building, and the overall details of the complex?</Accordion.Header>
                            <Accordion.Body>
                            The apartment is in excellent condition and is located on the 15th floor. It is part of a complex comprising 174 apartments, situated at the front of the building. The complex offers private security, a children's play area, and a gym, making it a secure and family-friendly environment.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
            </div>
            <br /><br />
        </>
    );
}