import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addressform:FormGroup;

  constructor(private fb:FormBuilder){
    this.addressform = this.fb.group({
      fname:[''],
      lname:[''],
      address:this.getAddressFromGroup()
      // address:this.fb.group({
      //   area:[''],
      //   city:['']
      // })
    })
  }

  getAddressFromGroup(): FormGroup{
    return this.fb.group({
      area:[''],
      city:['']
    })as FormGroup;
  } 

  getAddressFormsGroupFOrChild(): FormGroup{
    return this.addressform.get('address') as FormGroup
  }

  

  submit(){
    console.log(this.addressform.value)
  }
}
