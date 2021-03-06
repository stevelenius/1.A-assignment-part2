//choose day or night scene
let daynight = prompt('Show snow creature in day or night? (Refresh browser to change)', 'day');
  console.log(daynight);
  function setup() {
  createCanvas(1000,800);
  if(daynight === "night") {
    background("#000060"); //night
  } else {
    background("#A0C0E0"); //day
  }
}
 
  function draw() {
    //snow surface at bottom of canvas
    strokeWeight(0);
    fill("#EEE");
    quad(0, 600, 1000, 600, 1000, 800, 0, 800);

    //snow creature body circles
   	fill("#D0D0D0");
    stroke("#606060");
    strokeWeight(10);
    ellipse(500, 550, 250);
    ellipse(500, 325, 200);
    ellipse(500, 150, 150);
    //two eyes (lumps of coal)
    strokeWeight(20);
    point(480, 140);
    point(520, 140);
    //arced smile (smaller lumps of coal)
    strokeWeight(8);
    point(480, 195);
    point(490, 200);
    point(500, 202);
    point(510, 200);
    point(520, 195);
    //buttons (medium-size lumps of coal)
    strokeWeight(15);
    point(500, 265);
    point(500, 305);
    point(500, 345);
    //nose (carrot)
    strokeWeight(8);
    stroke("#E0B000");
    line(490, 160, 525, 165);
    line(490, 180, 525, 165);
    //arms
    strokeWeight(10);
    stroke("#887060");
    line(250, 250, 400, 300);
    line(750, 250, 600, 300);
    //hands or mittens
    fill("#D0D0D0");
    stroke("#606060");
    strokeWeight(5);
    ellipse(250, 250, 40);
    ellipse(750, 250, 40);
    //white moon if night, or . . .
    strokeWeight(0)
    if(daynight === "night") {
      fill("#FFF");
      ellipse(850, 150, 75);
    } else {
      //yellow sun if day
      fill("#FFD800");
      ellipse(850, 150, 150);
    }
  }

