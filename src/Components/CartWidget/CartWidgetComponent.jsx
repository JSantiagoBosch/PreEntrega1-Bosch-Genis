import cart from './assets/cart.svg'
import './CartWidgetComponent.css'

export default function CartWidgetComponent() {
    return (
        <div className='estiloCart'>
            <img src={cart} alt="cart-widget"/>
            0
        </div>
    )
}