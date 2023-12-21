import React, { useState, useEffect } from "react";
import axios from "axios";
import "./itens.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import Button from "react-bootstrap/Button";

function Itens() {

  //State que armazena os dados do banco de dados
  const [dados, setDados] = useState([]);

  //States que armazena os dados atualizados
  const [add, setAdd] = useState(0);

  //Processamento dos Dados no Backend
  useEffect(() => {
    axios.get("http://localhost:4000/getdata")
      .then((response) => {
        setDados(response.data);
      });
  }, []);

  // Envia dados da quantidade atualizado para o banco de dados
  let HandleSendDados = (id) => {
    try {
      axios.put(`http://localhost:4000/dadosupdate/${id}`, {
        Newquantidade: add,
      })
        .then(() => {
          setDados(dados.map(itens => itens.id === id ? { ...itens, Quantidade: add } : itens));
        });
    } catch (err) {
      console.log(err)
    }
  }
  // Funções para somar a quantidade de itens
  let HandleAddFunction = () => {
    setAdd(add + 1)
    console.log(add)

  }

  return (
    <div id="itens-container">
      {
        dados.map((item, key) => (
          <div key={key} id="itens-content">
            <div id="itens-title">
              <p>image</p>
            </div>
            <div>
              <p>{item.Nome}</p>
              <p>{item.Preco}</p>
            </div>

            <div id="btn-add-carrinho">
              {
                dados.map((itens) => (
                  <Button key={itens.idproduto} variant="secondary" id="btn-add-carrinho" onClick={() => { HandleSendDados(itens.idproduto); window.location.reload(); }}>
                    Adicionar ao Carrinho
                  </Button>
                ))
              }
              <div id="div-add-remove">
                <button onClick={HandleAddFunction}>
                  <IoMdAdd /> {/*Adicionar*/}
                </button>
                {add}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Itens;
