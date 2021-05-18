import { Component } from "@angular/core";
import { UsersService } from "./users.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "journey";
  result: String;
  submissionForm = new FormGroup({
    fName: new FormControl("", Validators.required),
    lName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
  });

  constructor(private user: UsersService) {
    this.getData();
  }

  get fName() {
    return this.submissionForm.get("fName");
  }
  get lName() {
    return this.submissionForm.get("lName");
  }
  get email() {
    return this.submissionForm.get("email");
  }

  getData() {
    this.user.getData().subscribe((data) => {
      console.log(data);
    });
  }

  postData(user) {
    // this.user.postData(user).subscribe(data => this.user.push(data));
    this.user.postData(user);
    this.result = "Thank you for submitting," + " " + user.fName + "!";
  }
}
