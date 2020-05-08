function setup() {
    rectMode(CENTER);
    noStroke();
  
    //This line of code creates a 400 pixel by 400 pixel box
    //What do you think will happen if we change the first number?
    createCanvas(400, 400);    
}

function draw() {
    //This line of code sets the background color. We are using the Red
    //Green Blue(RGB) color system in our code. It uses numbers to 
    //represent colors. DI purple is (129, 61, 214).
    //Find cool colors using this link:
    //https://www.google.com/search?q=color+picker
    background(129, 61, 214);
    
    //Our background is set, lets draw and color shapes!

    //The fill() function sets the color of shapes we draw.
    //We chose RGB numbers to make DI orange (255,102,0).
    //Rect is short for Rectangle
    fill(255,102,0);   
    rect(50, 50, 100, 100);


    //Ellipse is a fancy word for an oval.
    fill(255,102,0);   
    ellipse(200, 200, 100, 100);
}


//--------------------------------Challenges------------------------------------
/*  Mild: 
        1. Change the color of the background to be your favorite color.
        2. Change the color of the square to yellow.
        3. Move the circle so it is no longer in the center of the canvas. 
        4. Make the circle into an oval that is 50 pixels wide and 30 pixels tall.      
    Medium: 
        1. Move the square so that it's in the bottom right corner.
        2. Make the circle and square two different colors.
        3. Add another square and another circle to the screen.
        3. Put a small square inside a large circle. Make sure the two shapes
           are different colors.
    Spicy:
        1. Make a smiley face
        2. Make the DI box and ball
        3. Make a snow man.
        4. Look at the reference for the rect() function. It teaches you how to
           make rounded squares (the mathematical term for these is squircle).
           Make a squircle on the screen in your favorite color. https://p5js.org/reference/#/p5/rect
*/