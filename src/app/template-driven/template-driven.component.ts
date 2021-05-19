import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  title = "Template driven Form";
  cities = ['Bangalore', 'paris', 'Madras'];
  countries = ['India', 'France', 'Germany']
  person = new Person(1,'Kar', this.cities[0], this.countries[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    //console.log("this person "+ this.person.name)
  }

  get diagnostic() { return JSON.stringify(this.person); }

  newPerson() {
    
  }
}
