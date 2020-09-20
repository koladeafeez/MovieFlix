import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from "../login/auth.service";

@Component({
  templateUrl: "./user-profile.component.html",
  styles: [
    `
      h1 {
        color: #ffffff;
      }
      label {
        color: #ffffff;
      }
      .profile-cover {
        margin-left: 2rem;
        margin-top: 3rem;
      }
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .cancel {
        background: #ffffff;
        color: #000000;
        margin-left: 0.5rem;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern("[a-zA-Z].*"),
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.router.navigate(["movies"]);
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(["movies"]);
  }
}
