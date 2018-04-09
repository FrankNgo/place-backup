import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  color = 'black';

  drawnPixels = [];

  ngOnInit() {
    var canvas = <HTMLCanvasElement> document.getElementById("grid");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    // console.log(this.drawnPixels);
    // ctx.fillRect(((Math.ceil((100)/15)*15)-15),(((Math.ceil((100)/15)*15)-15)),15,15);
  }

  addSquare($event){
    // console.log($event);
    var canvas = <HTMLCanvasElement> document.getElementById("grid");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    var colors = this.color;
    var x = (Math.ceil(($event.offsetX)/15)*15)-15;
    var y = (Math.ceil(($event.offsetY)/15)*15)-15;
    ctx.fillRect(x,y,15,15);
    this.drawnPixels.push({x,y,colors});
    console.log(this.drawnPixels);  
  }

  setColor(colorset) {
    this.color = colorset;
  }

}
