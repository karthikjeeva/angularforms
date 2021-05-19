import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  {
  title = "Reactive Form";
  name = new FormControl('');
  skillsForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group ({
      name: '',
      skills: this.fb.array([])
    })
   }

   get skills() : FormArray {
     return this.skillsForm.get("skills") as FormArray
   }

   newSkill(): FormGroup {
     return this.fb.group({
       skill: '',
       exp: ''
     })
   }

   addSkills() {
     this.skills.push(this.newSkill());
   }

   removeSkill(i: number) {
     this.skills.removeAt(i);
   }

   onSubmit() {
     console.log(this.skillsForm.value);
   }

}
