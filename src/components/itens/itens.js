import "./itens.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
function Itens() {

  return (
    <div id="itens-container">
      <div id="itens-content">
        <div id="itens-title">
          <p>image</p>
        </div>
        <div>
          <p>Title</p>
          <p>Price</p>
        </div>

        <div id="btn-add-carrinho">
          <Button variant="secondary" id="btn-add-carrinho">Adicionar ao Carrinho</Button>
          <div id="div-add-remove">
            <button ><IoMdAdd /></button>
            <button><IoRemove /></button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Itens;
