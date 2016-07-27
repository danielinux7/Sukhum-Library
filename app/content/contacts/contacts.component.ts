import { Component } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
@Component({
  selector: 'lib-contacts',
  templateUrl: './app/content/contacts/contacts.component.html',
  styleUrls:  ['./app/content/contacts/contacts.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class ContactsComponent {
  html = `<div>
  <p align="justify">Почтовый индекс: 384900; Республика Абхазия, г. Сухум, ул. Лакоба, д. 111.<br>
  Тел.: </p><ul><li>(8-10-995)442-664-15
  </li><li>(8-10-995)442-624-41</li></ul>
  Для корреспонденции: 354000; Российская Федерация, Краснодарский край, г. Сочи, ул. Воровского, д.1, почтампта, а/я 964<br>
  Директор Национальной библиотеки - Борис Шаликович Чолария.<p></p>

  </div>`;
}
