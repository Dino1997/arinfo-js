var identbutton = document.getElementById("imagebutton");
var imag = document.getElementById("contentimage");
var runtext = function() {
  if (imag.getAttribute("src") === "./images/magicarpe.png") {
    imag.setAttribute("src", "./images/léviator.png");
  }
  // else if (imag.getAttribute("src") === "./images/pikachu.png") {
  //   imag.setAttribute("src", "./images/raichu.png");
  // }
  else {
    imag.setAttribute("src", "./images/magicarpe.png");
  }
};
identbutton.addEventListener("click", runtext);

var button = document.getElementById("random");
var h3 = document.getElementById("h3");
function getRandominit() {
  h3.textContent = Math.floor(Math.random() * Math.floor(3));
}
button.addEventListener("click", function() {
  getRandominit();
});

//  image changeante //

var imgm = document.querySelector(".ciseaux");
var imgg = document.querySelector(".feuille");
var imgb = document.querySelector(".pierre");
var imgmove = document.querySelector(".imgmove");
var imgrandom = document.querySelector(".imgrandom");
var mychoice = "";
var mycomputerchoice = "";
var mychoicetxt = document.querySelector(".mychoicetxt");
var randomchoicetxt = document.querySelector(".randomchoicetxt");
var resultath2 = document.querySelector(".result");

imgm.addEventListener("click", function() {
  imgmove.setAttribute("src", "./images/ciseaux.jpg");
  mychoice = "Ciseaux";
  console.log(mychoice);
  random();
  mychoicetxt.textContent = "Ciseaux";
  resultat();
});
console.log(imgm);
imgg.addEventListener("click", function() {
  imgmove.setAttribute("src", "./images/feuille.jpg");
  mychoice = "Feuille";
  console.log(mychoice);
  random();
  mychoicetxt.textContent = "Feuille";
  resultat();
});
imgb.addEventListener("click", function() {
  imgmove.setAttribute("src", "./images/pierre.jpg");
  mychoice = "Pierre";
  console.log(mychoice);
  random();
  mychoicetxt.textContent = "Pierre";
  resultat();
});

function random() {
  var tableau = [
    "./images/ciseaux.jpg",
    "./images/feuille.jpg",
    "./images/pierre.jpg"
  ];
  var randomnum = Math.floor(Math.random() * Math.floor(3));
  imgrandom.setAttribute("src", tableau[randomnum]);
  mycomputerchoice = ["Ciseaux", "Feuille", "Pierre"][randomnum];
  console.log(mycomputerchoice);
  randomchoicetxt.textContent = ["Ciseaux", "Feuille", "Pierre"][randomnum];
}

function resultat() {
  if (mychoice === mycomputerchoice) {
    resultath2.textContent = "Egalité";
  }
  if (mychoice === "Pierre" && mycomputerchoice === "Ciseaux") {
    resultath2.textContent = "victoire";
  } else if (mychoice === "Ciseaux" && mycomputerchoice === "Feuille") {
    resultath2.textContent = "victoire";
  } else if (mychoice === "Feuille" && mycomputerchoice === "Pierre") {
    resultath2.textContent = "victoire";
  } else if (mychoice === "Pierre" && mycomputerchoice === "Feuille") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Ciseaux" && mycomputerchoice === "Pierre") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Feuille" && mycomputerchoice === "Ciseaux") {
    resultath2.textContent = "Défaite";
  }
}
