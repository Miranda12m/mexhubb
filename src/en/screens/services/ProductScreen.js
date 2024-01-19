import React from 'react';
import { Container} from 'react-bootstrap';
import BannerHousing from '../../components/services/housing/bannerhousing';
import Navbars from '../../components/services/navbars';
import Product from '../../components/services/housing/product';

export default function ProductScreen(){
    
    return(
        <>
        <BannerHousing />

        <Navbars />
        
        <Container>
                <Product />
        </Container>
        
        </>
    );
}