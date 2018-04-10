import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit{

  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })
    var canvas = <HTMLCanvasElement> document.getElementById("grid");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  title = 'app';

  color = 'black';

  drawnPixels = [];


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
