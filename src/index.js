import React, { useState } from "react";
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

  if (pas < 0) {
    pas = 1;
    alert("passo será considerado 1");
  }

  if (
    inicio.value.length === 0 ||
    fim.value.length === 0 ||
    passo.value.length === 0
  ) {
    alert("erro: preencha todos os dados!");
  } else if (ini > f) {
    alert("erro: Fim não pode ser menor que inicio!");
  } else if ((f - ini) / pas > 10000) {
    alert("Informe uma diferença de valores menor para melhor visualização!");
  } else {
    for (ini; ini <= f; ini += pas) {
      res.innerHTML += ini + "\u{1F603}";
    }
    res.innerHTML += " Fim " + "\u{1F496}";
  }
};

const limpar = () => {
  document.getElementById("txtinicio").value = "";
  document.getElementById("txtfim").value = "";
  document.getElementById("txtpasso").value = "";
  let res = document.getElementById("res");

  res.innerHTML = "contando...";
  document.getElementById("txtinicio").focus();
};

function App() {
  const [estado, setEstado] = useState("START");

  const contando = () => {
    setEstado("contando");
  };

  const voltar = () => {
    setEstado("START");
  };

  if (estado === "START") {
    return <button onClick={contando}>Vamos contar ?</button>;
  }
  return (
    <div className="App">
      {titulo}
      <p>
        Inicio:
        <input type="Number" name="inicio" id="txtinicio" />
      </p>
      <p>
        Fim:
        <input type="Number" name="fim" id="txtfim" />
      </p>
      <p>
        Passo:
        <input type="Number" name="passo" id="txtpasso" min="1" />
      </p>
      <p>
        <button onClick={contar}>Contar</button>
        <button onClick={limpar}>Limpar</button>
        <button onClick={voltar}>Voltar</button>
      </p>
      {rest}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
