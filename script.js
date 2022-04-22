var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var envioPalpite = document.querySelector(".envioPalpite");
var campoPalpite = document.querySelector(".campoPalpite");

var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }
  palpites.textContent += palpiteUsuario + "," + " ";

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você acertou!";
    ultimoResultado.style.color = "green";
    baixoOuAlto.textcontent = "";
    configFimdeJogo();
  } else if (contagemPalpites === 10) {
    document.body.style.backgroundImage = "url('all.jpg')";
    document.body.style.backgroundSize = "100%";
    document.body.style.color = "white";
    ultimoResultado.textContent = " Não foi dessa vez :( ";
    ultimoResultado.style.color = "white";
    baixoOuAlto.textcontent = " ";
    configFimdeJogo();
  } else {
    ultimoResultado.textContent = "Errado!";
    ultimoResultado.style.color = "red";

    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está baixo!";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "Seu palpite está alto!";
    }
  }

  contagemPalpites++;
  campoPalpite.value = "";
  campoPalpite.focus();
}
envioPalpite.addEventListener("click", conferirPalpite);

function configFimdeJogo() {
  campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  baixoOuAlto.textContent = " ";
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo jogo";
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll(".resultadoParas p");
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = " ";
  }

  botaoReinicio.parentNode.removeChild(botaoReinicio);

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = " ";
  campoPalpite.focus();
  document.body.style.backgroundImage =
    "url(../Aleatory-Number-JS-Game/img/frame.png)";
  document.body.style.backgroundSize = "35%";
  ultimoResultado.style.backgroundColor = "white";
  document.body.style.color = "black";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
