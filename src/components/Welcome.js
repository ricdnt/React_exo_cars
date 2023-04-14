
const bonjour = () => {
    console.log("Bonjour");
}

const bonsoir = (e) => {
    console.log(e);
}


const Welcome = () => {

    return (
        <div>
            <button onClick = { bonjour }>Invoquer une fonction</button>

            <button onClick = { () => bonsoir("Bonsoir") }>Invoquer une fct avec arg bonsoir</button>

            <button onClick = { () => console.log("Bonne nuit") }>clg sur le bouton</button>

        </div>
    )

}


export default Welcome;
