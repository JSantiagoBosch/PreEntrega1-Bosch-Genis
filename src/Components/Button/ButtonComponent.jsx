import './ButtonComponent.css'

export default function ButtonComponent (props) {

    return (
        <>
            <li className="paddingLi">
                <button className="estilosBoton">{props.texto}</button>
            </li>
        </>
   
    )
}