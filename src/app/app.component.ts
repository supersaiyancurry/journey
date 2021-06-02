import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'journey';
  result: string;
  submissionForm = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(private user: UsersService) {
    this.getData();
  }

  get fName() {
    return this.submissionForm.get('fName');
  }
  get lName() {
    return this.submissionForm.get('lName');
  }
  get email() {
    return this.submissionForm.get('email');
  }

  getData() {
    this.user.getData().subscribe((data) => {
      console.log(data);
    });
  }

  postData(user) {
    if (this.submissionForm.valid) { // check if the form is valid before moving forward.
      // this.user.postData(user).subscribe(data => this.user.push(data));
      this.result = 'Saving...';
      this.user.postData(user).subscribe(u => { // it would also be nice to have a model for user that would fix the error for u.id
        console.log(u);
        this.result = `Thank you for submitting, ${user.fName}! You now have id: ${u.id}`; // string interpolation is sweet!
      }); // use the response to show the result
    } else {
      this.result = 'Please complete all the required fields';
    }
  }
}
