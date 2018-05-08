import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  submitted = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
  }
}
