

function Card({nombre, fechaNacimiento, clubes, cromo, late}) {
    return(
        <div>
            <h1 style={{backgroundColor: 'blue'}}>
                {nombre}
            </h1>
            <p>{fechaNacimiento}</p>
            <p>{clubes}</p>
            <small>{cromo?'Esta figurita es cromo 🌟 ​':'No es un cromo 😬 '}</small>
            <small>{late?'Late ✔️​':'Nola ✖️​'}</small>
        </div>
    )
}

export default Card;