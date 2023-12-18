import "./header.css";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { RiAccountCircleFill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import Categorias from "./categorias/categorias";

function Header() {
  // props
  const [open, setOpen] = useState(false);

  //funções
  let HandleChangeOpen = () => {
    setOpen(true);
  };
  let HandleChangeClose = () => {
    setOpen(false);
  };

  return (
    <div id="container">
      <div id="logo">
        <img
          src="https://img.freepik.com/vetores-gratis/logotipo-do-supermercado-com-compras_23-2148470294.jpg?w=826&t=st=1695394037~exp=1695394637~hmac=c61d4a6e51d859f2a7f7ad4406e4c1f8d04d68879d6c3d1bfe78a3df090ba089"
          width="80px"
          height="80px"
          alt="logo super mercado"
        ></img>
      </div>
      <div id="div-input-header">
        <input></input>
        <button>
          <i>
            <PiMagnifyingGlassBold color="white" />
          </i>
        </button>
      </div>
      <div id="div-list-header">
        <ul>
        <div id="all-categorias">
          <li
            id="categorias"
            onMouseOver={HandleChangeOpen}
            onMouseOut={HandleChangeClose}
          >
            Categorias
            <i>
              <AiOutlineArrowDown />
            </i>
          </li>
          {open && (
            <Categorias open={HandleChangeOpen} close={HandleChangeClose} />
          )}
          </div>
          <div id="entre">
            <li><i><RiAccountCircleFill/></i>Entre</li>
          </div>
          <li>Carrinho</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
