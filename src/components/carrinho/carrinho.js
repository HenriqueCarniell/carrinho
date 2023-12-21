import './carrinho.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Carrinho() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/getdata").then((response) => {
            setDados(response.data);
        });
    }, []);

    return (
        <div id="Container-Carrinnho">
            <div id="container-titulo-carrinho">
                <h1>Seus Itens do carrinho</h1>
            </div>
            <div>
                {
                    dados.map((item, key) => (
                        <div id="container-itens" key={key}>
                            <div id="image-gim">
                                <img src='https://companhiadacachaca.com.br/wp-content/uploads/2021/03/B%C3%A1lsamo-3.png' />
                            </div>
                            <h1>{item.Nome}</h1>
                            <div id="div-preco-quantidade">
                                <h3>Preço: {item.Preco}</h3> 
                                <p id="quantidade">{item.Quantidade}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Carrinho;