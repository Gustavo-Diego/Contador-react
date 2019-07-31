import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const rest = <div id="res">contando...</div>;

const titulo = <h1>Contador de números</h1>;

const contar = () => {
  let inicio = document.getElementById("txtinicio");
  let fim = document.getElementById("txtfim");
  let passo = document.getElementById("txtpasso");
  let res = document.getElementById("res");

  let ini = Number(inicio.value);
  let f = Number(fim.value);
  let pas = Number(passo.value);

  if (
    inicio.value.length === 0 ||
    fim.value.length === 0 ||
    passo.value.length === 0
  ) {
    alert("erro: preencha todos os dados!");
  } else if (ini > f) {
    alert("erro: Fim não pode ser menor que inicio!");
  } else {
    for (ini; ini <= f; ini += pas) {
      res.innerHTML += ini + "\u{1F603}";
    }
    res.innerHTML += " Fim " + "\u{1F496}";
  }
};

const limpar = () => {
  let inicio = (document.getElementById("txtinicio").value = "");
  let fim = (document.getElementById("txtfim").value = "");
  let passo = (document.getElementById("txtpasso").value = "");
  let res = document.getElementById("res");

  res.innerHTML = "contando...";
  let ini = document.getElementById("txtinicio").focus();
};

function App() {
  return (
    <div className="App">
      {titulo}
      <p>
        Inicio:<input type="Number" name="inicio" id="txtinicio" />
      </p>
      <p>
        Fim:<input type="Number" name="fim" id="txtfim" />
      </p>
      <p>
        Passo:<input type="Number" name="passo" id="txtpasso" min="1" />
      </p>
      <p>
        <button onClick={contar}>Contar</button>
        <button onClick={limpar}>Limpar</button>
      </p>
      {rest}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
