import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';
import { Auth } from './../../../services/auth.service';

@Component({
  selector: 'lib-profile',
  templateUrl: './app/content/user/profile/profile.component.html',
  styleUrls:  ['./app/content/user/profile/profile.component.css']
})
export class ProfileComponent {

  constructor(private translate: TranslateService, private auth: Auth) {}

}
