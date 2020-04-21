// minha forma
let forma = document.querySelector(".forma");

// inputs ...
let tl = document.querySelector(".tl-input");
let tr = document.querySelector(".tr-input");
let bl = document.querySelector(".bl-input");
let br = document.querySelector(".br-input");

// text area...
let code = document.querySelector(".code");

// regex que filtra teclas [0-9]
const myRegex = /[0-9]/;

// função altera border radius
let changeRadius = function (classeInput) {
  if (classeInput === "tl-input") {
    forma.style.borderTopLeftRadius = tl.value + "px";
  } else if (classeInput === "tr-input") {
    forma.style.borderTopRightRadius = tr.value + "px";
  } else if (classeInput === "bl-input") {
    forma.style.borderBottomLeftRadius = bl.value + "px";
  } else if (classeInput === "br-input") {
    forma.style.borderBottomRightRadius = br.value + "px";
  }
};
const changeTextArea = () => {
  let classTextArray = [
    "border-top-left-radius: ",
    "border-top-right-radius: ",
    "border-bottom-left-radius: ",
    "border-bottom-right-radius: ",
  ];
  let texto;

  code.value = "";
  texto = ""; // texto a ser inserido

  if (tl.value !== "" || tl.value !== 0) {
    texto = classTextArray[0] + tl.value + " px;\n";
  }
  if (tr.value !== "" || tr.value !== 0) {
    texto = texto + classTextArray[1] + tr.value + " px;\n";
  }
  if (bl.value !== "" || bl.value !== 0) {
    texto = texto + classTextArray[2] + bl.value + " px;\n";
  }
  if (br.value !== "" || br.value !== 0) {
    texto = texto + classTextArray[3] + br.value + " px;\n";
  }
  code.value = texto;
};

// função que escreve o valor do input no text area
const writeText = (event) => {
  setTimeout(() => {
    const classeInput = event.target.classList[0];
    changeRadius(classeInput); // muda o border radius
  }, 200);
  setTimeout(changeTextArea, 200);
};

// função pra verificar tecla digitada
const keyObserver = function (event) {
  const tecla = event.key;
  const verifica = myRegex.exec(tecla); // verifica se tecla é numero

  if (!verifica) {
    let text = event.target.value;
    if (text !== "") {
      text = text.substring(0, text.length - 1);
    } else {
      text = "0";
    }
    event.target.value = text;
  }
  if (event.target.value.charAt(0) === "0" && event.target.value.length > 1) {
    event.target.value = event.target.value.substring(
      1,
      event.target.value.length
    );
  }
};

function debounce(func, wait) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

tr.addEventListener("keyup", keyObserver);
tl.addEventListener("keyup", keyObserver);
bl.addEventListener("keyup", keyObserver);
br.addEventListener("keyup", keyObserver);

tl.addEventListener("input", writeText);
tr.addEventListener("input", writeText);
bl.addEventListener("input", writeText);
br.addEventListener("input", writeText);
