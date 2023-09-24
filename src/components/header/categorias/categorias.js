import './categorias.css'

function Categorias({open, close}) {
    return ( 
        <div id="div-categoria" onMouseOver={open} onMouseOut={close}>
            <ul>
                <li>Vodka</li>
                <li>Whisky</li>
                <li>Tequila</li>
                <li>Rum</li>
                <li>Gin</li>
                <li>Cerveja</li>
                <li>Vinho</li>
                <li>Champanhe</li>
                <li>Saqué</li>
                <li>Cachaça</li>
            </ul>
        </div>
     );
}

export default Categorias;
