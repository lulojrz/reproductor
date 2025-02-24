const nombreCancion = document.querySelector(".container-player h1");
const nombreArtista = document.querySelector(".container-player p");
const progreso = document.getElementById("reproductor");
const cancion = document.getElementById("cancion");
const atras = document.querySelector(".atras");
const pausar = document.querySelector(".pausar i ");
const adelante = document.querySelector(".adelante");
let indiceactual = 0;

const canciones = [
  {
    id: 1,
    nombre: "I dont wanna close my eyes",
    artista: "Aerosmith",
    fuente: "audio/1.mp3",
  },
  {
    id: 2,
    nombre: "Have you ever seen the rain",
    artista: "Creedence clearwater",
    fuente: "audio/2.mp3",
  },
];
const actualizarInfo = () => {
  nombreCancion.textContent = canciones[indiceactual].nombre;
  nombreArtista.textContent = canciones[indiceactual].artista;
  cancion.src = canciones[indiceactual].fuente;
  cancion.addEventListener("loadeddata", function () {});
};
pausar.addEventListener("click", reproducirPausar);

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
   
   
  } else {
    pausarCancion();

  }
}
function pausarCancion() {
  cancion.pause();
  pausar.classList.remove("bi-pause-fill");
  pausar.classList.add("bi-play-fill");
}
function reproducirCancion() {
  cancion.play();
  pausar.classList.add("bi-pause-fill")
  pausar.classList.remove("bi-play-fill");
}
cancion.addEventListener("loadedmetadata", function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
})
cancion.addEventListener("timeupdate",function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;

    }
})

progreso.addEventListener("click",function(){
    cancion.currentTime = progreso.value;
})
progreso.addEventListener("change",function(){
    reproducirCancion()
})
adelante.addEventListener("click",function(){
    indiceactual = indiceactual + 1;
    actualizarInfo()
    reproducirCancion()
})
atras.addEventListener("click",function(){
    indiceactual = indiceactual - 1;    
    if(indiceactual < 0){
        alert("no hay mas canciones")
    } else{
        actualizarInfo()
        reproducirCancion()
    }
})

actualizarInfo();
