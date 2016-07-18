import { Component } from '@angular/core';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lib-footer',
  templateUrl: './app/footer/footer.component.html',
  styleUrls:  ['./app/footer/footer.component.css'],
  pipes: [TranslatePipe],
})
export class FooterComponent {

 }
