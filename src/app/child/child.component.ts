import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit(): void {
  }

  getControlGroup(): FormGroup{
    return this.controlContainer.control as FormGroup;
  }

}
