import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit() {

    this.authService.startSigninCallbackMainWindow();
  }
}
