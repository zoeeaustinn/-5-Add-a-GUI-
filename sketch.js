

    let gui;
    
    let x1 = 0, y1 = 5, d1 = 20;
    let x2 = 50, y2 = 5, d2 = 20;
    let x3 = 100, y3 = 5, d3 = 20;
    let x4 = 150, y4 = 5, d4 = 20;
    let x5 = 200, y5 = 5, d5 = 20;
    let x6 = 250, y6 = 5, d6 = 20;
    let x7 = 300, y7 = 5, d7 = 20;
    let x8 = 350, y8 = 5, d8 = 20;
    let x9 = 400, y9 = 5, d9 = 20;  

    let j, b, cb;
    let isMoving = true; // WATCHES MOVEMENT
    let hueValue = 0;




function setup() {
createCanvas(400, 400);
    colorMode(HSB); 
    gui = createGui();

    //GUI FUNCTIONS
    j = createJoystick ("Joystick", 240, 280, 100, 100);//RANDOM COLORS
    b = createButton ("press", 345, 280, 50, 50); //STOP BUTTON
    diameterSlider = createSlider("diameter", 125 , 335, 100, 20, 10, 100);


    b.onPress = function(){
      isMoving = !isMoving; //knows when toggle moves
    };
  }

function draw() {
background(0);

    drawGui();



    //HUE BASED ON JOYSTICK POSITION
    
    hueValue = map(j.valX, -1, 1, 0, 360);
    

    //ADDING A CIRCLE 
    fill(hueValue, 100, 100); //
    noStroke();


    ellipse(x1, y1, diameterSlider.val);
    ellipse(x2, y2, diameterSlider.val);
    ellipse(x3, y3, diameterSlider.val);
    ellipse(x4, y4, diameterSlider.val);
    ellipse(x5, y5, diameterSlider.val);
    ellipse(x6, y6, diameterSlider.val);
    ellipse(x7, y7, diameterSlider.val);
    ellipse(x8, y8, diameterSlider.val);
    ellipse(x9, y9, diameterSlider.val);
    
    
    // Moves circle if true
    if (isMoving) {
      y1 += 2; 
      y2 += 2; 
      y3 += 2; 
      y4 += 2; 
      y5 += 2; 
      y6 += 2; 
      y7 += 2; 
      y8 += 2; 
      y9 += 2; 
    }
    
    
    // RESETS POSITION TO TOP OF THE SCREEN
  if (y1 > height)  y1 = 0;
  if (y2 > height)  y2 = 0;
  if (y3 > height)  y3 = 0;
  if (y4 > height)  y4 = 0;
  if (y5 > height)  y5 = 0;
  if (y6 > height)  y6 = 0;
  if (y7 > height)  y7 = 0;
  if (y8 > height)  y8 = 0;
  if (y9 > height)  y9 = 0;
  
   }
