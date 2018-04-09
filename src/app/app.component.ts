import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  color = 'black';

  addSquare($event){
    console.log($event);
    var canvasElementId = 'grid';
    var canvasSetup = document.getElementById("grid");
    var text = canvasSetup;
    var canvas = <HTMLCanvasElement> document.getElementById("grid");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(((Math.ceil(($event.screenX-593)/15)*15)-15),(((Math.ceil(($event.screenY-115)/15)*15)-15)),15,15);
  }

  setColor(colorset) {
    this.color = colorset;
    console.log(this.color);
  }

}
