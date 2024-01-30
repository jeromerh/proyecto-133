object_detector=""
img=""
objects=[]
status=""

function preload(){
img=loadImage("habitacion.jpg")

}

function setup(){
canvas=createCanvas(650,420)
canvas.center()
object_detector=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="Status detectando objetos"
}


function modelLoaded(){
    console.log("Modelo cargado")
    status=true 
}

function gotResults(error,results){
   if(error)[
    console.error(error)
   ]
   console.log(results) 
   objects=results
}

function draw(){
image(img,0,0,650,420)
if(status!=""){
    r=random(255)
    g=random(255)
    b=random(255)
    object_detector.detect(img,gotResults)
    for(i=0;i<objects.length;i++){
     document.getElementById("status").innerHTML="status objeto detectado"
     document.getElementById("num_objets").innerHTML="el numero de objetos detectados es:"+objects.length
    }
}

}