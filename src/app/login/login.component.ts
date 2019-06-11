import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AuthorizationService} from "../_services";
import {Router} from "@angular/router";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private notificationService: NotificationsService
  ) { }


  ngOnInit() {
    this.authService
      .authenticated
      .subscribe(
        (isAuth) => {
          if (isAuth) {
            this.router.navigate(['/home']);
            this.notificationService.success(
              'Hello!',
              'I know you already!'
            )
          }
        }
      );
  }

  tryGoogleLogin() {
    this.authService
      .doGoogleLogin()
      .then(
        (res) => {
          this.router.navigate(['/home']);
          this.notificationService.success(
            'Great!',
            'You are Welcome!'
          )
        }
      )
      .catch(
        (err) => {
          this.notificationService.alert(
            'Hmmmm...',
            'Something is wrong! Try again later...'
          )
        }
      );
  }

}
