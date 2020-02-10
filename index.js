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
var scorehuman = document.querySelector(".scorehuman");
var scorehumannumber = 0;
var scorecomputer = document.querySelector(".scorecomputer");
var scorecomputernumber = 0;

imgm.addEventListener("click", function() {
  imgmove.setAttribute("src", "./images/ciseaux.png");
  mychoice = "Ciseaux";
  console.log(mychoice);
  random();
  mychoicetxt.textContent = "はさみ";
  resultat();
  scorehumanf();
});
console.log(imgm);
imgg.addEventListener("click", function() {
  imgmove.setAttribute("src", "./images/feuille.png");
  mychoice = "Feuille";
  console.log(mychoice);
  random();
  mychoicetxt.textContent = "シート";
  resultat();
  scorehumanf();
});
imgb.addEventListener("click", function() {
  imgmove.setAttribute("src", "./images/pierre.png");
  mychoice = "Pierre";
  console.log(mychoice);
  random();
  mychoicetxt.textContent = "ロダン";
  resultat();
  scorehumanf();
});

function random() {
  var tableau = [
    "./images/ciseaux.png",
    "./images/feuille.png",
    "./images/pierre.png"
  ];
  var randomnum = Math.floor(Math.random() * Math.floor(3));
  imgrandom.setAttribute("src", tableau[randomnum]);
  mycomputerchoice = ["Ciseaux", "Feuille", "Pierre"][randomnum];
  console.log(mycomputerchoice);
  randomchoicetxt.textContent = ["はさみ", "シート", "ロダン"][randomnum];
}

function resultat() {
  if (mychoice === mycomputerchoice) {
    resultath2.textContent = "Egalité";
  }
  if (mychoice === "Pierre" && mycomputerchoice === "Ciseaux") {
    resultath2.textContent = "Victoire";
  } else if (mychoice === "Ciseaux" && mycomputerchoice === "Feuille") {
    resultath2.textContent = "Victoire";
  } else if (mychoice === "Feuille" && mycomputerchoice === "Pierre") {
    resultath2.textContent = "Victoire";
  } else if (mychoice === "Pierre" && mycomputerchoice === "Feuille") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Ciseaux" && mycomputerchoice === "Pierre") {
    resultath2.textContent = "Défaite";
  } else if (mychoice === "Feuille" && mycomputerchoice === "Ciseaux") {
    resultath2.textContent = "Défaite";
  }
}

function scorehumanf() {
  if (resultath2.textContent === "Victoire") {
    scorehumannumber++;
    scorehuman.textContent = scorehumannumber;
    console.log(scorehuman);
  } else if (resultath2.textContent === "Défaite") {
    scorecomputernumber++;
    scorecomputer.textContent = scorecomputernumber;
    console.log(scorecomputer);
  }
}
