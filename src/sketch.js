import React from 'react';
import Sketch from 'react-p5';
import DTA_data from './assets/DTA_data.csv'


let table;
let img_table;
let img_index;
let font;
let intro;
let a;

export default function App() {

  const preload = p5 => {
    table = p5.loadTable(DTA_data, "csv", "header");
    font = "Carrois Gothic SC"
  }
  const setup = (p5, canvasParentRef) => {
    // array of the image links loaded into images
    img_table = [];

    //cycle through the table
    for (let r = 0; r < table.getRowCount(); r++) {
      // get each image link from column 3
      img_table.push(p5.loadImage(table.getString(r, 3)));
    }
    
    // establish intro page being loaded before other context
    intro = true;
    
    // canvas size equivalent to array length so that each pixel location on the x axis corresponds with an image in the array
    p5.createCanvas(img_table.length, img_table.length);
  
    // text formatting
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textFont(font);
    p5.textSize(15);
  
    // data source link formatting
    a = p5.createA("https://archive.org/details/digitaltransgenderarchive", "data source: internet archive", "_blank"); // _blank makes the link open in another tab
    a.style('font-family', "Carrois Gothic SC");
    a.style('color', 'white');
  }

  const keyPressed = p5 => {
    // key press deactivates intro page
    // minor bug with the p5 display window: need to click on the page before pressing a key to establish the cursor in the frame. so you technically have to click and then press a key. this is something that would hopefully not be an issue if embedded in a site of its own but this is outside the scope of this assignment.
    intro = false; 
  }
  
  const draw = p5 => {
    if (intro) {
      // black background, white text
      p5.background(0);
      let txt = "the following visualization shows the covers of drag and transgender magazines uploaded to the internet archive by the digital transgender archive.\n\nsome of the images contain nudity, sexual content, and language which might be considered offensive. if you are in one of these images and would like it removed, please contact allisonlehn@gmail.com\n\nslide your cursor left and right to see the cover images through the years. press any key to dismiss this screen."
      p5.text(txt,20,0,p5.width - 40,p5.height);
      p5.fill(255);
      
      // specify link position
      a.position(p5.width/2 - a.width/2 - 17,p5.height-40);
    } 
    else {
      // make link invisible
      a.hide()
      // white background, black text
      p5.background(255);
      
      // ensure mouseX never goes beyond boundary
      if (p5.mouseX < p5.width) {
        img_index = p5.mouseX;
      } 
      else {
        img_index = p5.width - 1;
      }
      
      // set image index to mouseX position
      let img = img_table[img_index];
      console.log("aaaaaaa")
      // format image in center of page
      // p5.image(img, p5.width / 2 - img.width / 2, p5.height / 2 - img.height / 2);
      p5.image(img, 0,0);
      p5.redraw()
      // format year text
      p5.text(table.getString(img_index, 2), p5.width / 2, 30);
      p5.fill(0);
    }
  }
  
  return <Sketch preload={preload} setup={setup} keyPressed={keyPressed} draw={draw} />
}




// function draw() {
//   if (intro) {
//     // black background, white text
//     background(0);
//     let txt = "the following visualization shows the covers of drag and transgender magazines uploaded to the internet archive by the digital transgender archive.\n\nsome of the images contain nudity, sexual content, and language which might be considered offensive. if you are in one of these images and would like it removed, please contact allisonlehn@gmail.com\n\nslide your cursor left and right to see the cover images through the years. press any key to dismiss this screen."
//     text(txt,20,0,width - 40,height);
//     fill(255);
    
//     // specify link position
//     a.position(width/2 - a.width/2 - 17,height-40);
    
    
//   } 
//   else {
//     // make link invisible
//     a.hide()
//     // white background, black text
//     background(255);
    
//     // ensure mouseX never goes beyond boundary
//     if (mouseX < width) {
//       img_index = mouseX;
//     } 
//     else {
//       img_index = width - 1;
//     }
    
//     // set image index to mouseX position
//     let img = img_table[img_index];
//     // format image in center of page
//     image(img, width / 2 - img.width / 2, height / 2 - img.height / 2);
//     // format year text
//     text(table.getString(img_index, 2), width / 2, 30);
//     fill(0);
//   }
// }