timer_check = "";
answer = "";
score = 0;
var previousresults = "";


timercounter = 0;
random = ["apple","ball" ,"cat","dog","pizza","burger","bicuit","house","leaf","dog","tree"];
console.log(random);

function preload(){
    classifer = ml5.imageClassifier('DoodleNet');
}


function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased (classifyCanvas)  ;
 
}

function draw(){
  strokeWeight(12);
 stroke(0);
 if(mouseIsPressed){
 line(pmouseX,pmouseY,mouseX,mouseY);
}
check_sketch();
}

function update(){
    background("white");
}

function check_sketch(){
    timercounter++;
    document.getElementById("timer").innerHTML = "timer: " + timercounter;
    if (400 < timercounter) {
        timercounter = 0
        timer_check = "completed"
    }
    if( timer_check == "completed" || answer == "set"){
    timer_check = "";
    answer = "";
    update();
    score+1;
    }

}


function classifyCanvas(){
    classifier.classify(canvas , gotResults);
}


function gotResults(error,results){
    if(error){
      console.log(error);
    }else{
      if((results[0].confidence > 0.5)  && (previousresults != results[0].label)){
      console.log(results);
      previousresults = results[0];
    
    document.getElementById("objectid").innerHTML = results[0].label;
    document.getElementById("accuracyid").innerHTML = results[0].confidence.toFixed(4);
    document.getElementById("Sketchtobedrawn").innerHTML = "Sketchtobedrawn :" + random;
    
      }
    }
    }
    
