import React from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import CartWidgetComponent from '../CartWidget/CartWidgetComponent';

export default function NavbarComponent(){

    return (
        <>
            <nav className="navbar-collapse">
                
                <ul className="navbar-nav mx-auto">
                            
                    <ButtonComponent texto="Cervezas"/>
                    <ButtonComponent texto="Fabricas"/>
                    <ButtonComponent texto="Locales"/>
                    <ButtonComponent texto="Tienda"/>
                    <ButtonComponent texto="Contacto"/>
                            
                </ul>

                <CartWidgetComponent/>

            </nav>
        </>          
    )
}