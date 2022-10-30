
// function Boton(props) {
//     return(
//         <button>{props.numero}</button>
//     )
// }

// export default Boton;


const Boton = ({numero='default'}) => {
    return(
        <button>{numero}</button>
    )
}

export default Boton;