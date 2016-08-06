import { Component } from '@angular/core';
import { DynamicHTMLOutlet } from './../../directives/dynamic-html-outlet/dynamicHtmlOutlet.directive';
import { TranslateService, LangChangeEvent } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'lib-contacts',
  templateUrl: './app/content/contacts/contacts.component.html',
  styleUrls:  ['./app/content/contacts/contacts.component.css'],
  directives: [DynamicHTMLOutlet]
})
export class ContactsComponent {
  html_ru = `<div>
  <p align="justify">Почтовый индекс: 384900; Республика Абхазия, г. Сухум, ул. Лакоба, д. 111.<br>
  Тел.: </p><ul><li>+7(840) 226-64-15
  </li><li>+7(840) 226-24-41</li>
  <li>+7(940) 925-81-80</li>
  <li>+7(940) 774-25-62</li></ul>
  E-mail.: <ul><li>nbraabch@sukhum.city</li></ul>
  Для корреспонденции: 354000; Российская Федерация, Краснодарский край, г. Сочи, ул. Воровского, д.1, почтампта, а/я 964<br>
  Директор Национальной библиотеки - Борис Шаликович Чолария.<p></p>
  </div>`;

  html_en = `<div>
  <p align="justify"> Postal Code: 384900; The Republic of Abkhazia, Sukhum, ul. Lakoba, d. 111.<br>
  Tel.: </p><ul><li>(8-10-995)442-664-15
  </li><li>(8-10-995)442-624-41</li></ul>
  For correspondence: 354000; Russian Federation, Krasnodar, Sochi, UL. Vorovskogo, 1, BT, and / I 964<br>
   Director of the National Library - Boris Shalikovich Cholariya<p></p>
  </div>`;
  html_ab = `<div>
  <p align="justify"> Postal Code: 384900; The Republic of Abkhazia, Sukhum, ul. Lakoba, d. 111.<br>
  Tel.: </p><ul><li>(8-10-995)442-664-15
  </li><li>(8-10-995)442-624-41</li></ul>
  For correspondence: 354000; Russian Federation, Krasnodar, Sochi, UL. Vorovskogo, 1, BT, and / I 964<br>
   Director of the National Library - Boris Shalikovich Cholariya<p></p>
  </div>`;

  html_tr = `<div>
  <p align="justify"> Postal Code: 384900; The Republic of Abkhazia, Sukhum, ul. Lakoba, d. 111.<br>
  Tel.: </p><ul><li>٨-١٠-٩٩٥ ١٥-٦٦٤-٤٤٢
  </li><li>(8-10-995)442-624-41</li></ul>
   للمراسلة: ٣٥٤٠٠٠ الاتحاد الروسي، كراسندار، سوتشي، شارع فَرفسكفا، مكتب بريد ٩٦٤<br>
   مدير المكتبة الوطنية - بوريس شاليكوفتش كولاريا<p></p>
  </div>`;

  html_ar = `<div>
  <p align="justify">الرمز البريدي: ٣٨٤٩٠٠. جمهورية أبخازيا، سوخومي، لاكوبا ، د. ١١١<br>
  هاتف: </p><ul><li>٨-١٠-٩٩٥ ١٥-٦٦٤-٤٤٢
  </li><li>٨-١٠-٩٩٥ ١٥-٦٦٤-٤٤٢</li></ul>
  للمراسلة: ٣٥٤٠٠٠ الاتحاد الروسي، كراسندار، سوتشي، شارع فَرفسكفا، مكتب بريد ٩٦٤<br>
   مدير المكتبة الوطنية - بوريس شاليكوفتش كولاريا<p></p>
  </div>`;

  html: string;

  constructor(translate: TranslateService) {

    if (translate.currentLang === 'ru') {
        this.html = this.html_ru;
    }
    else if (translate.currentLang === 'en') {
        this.html = this.html_en;
    }
    else if (translate.currentLang === 'ab') {
        this.html = this.html_ab;
    }
    else if (translate.currentLang === 'tr') {
        this.html = this.html_tr;
    }
    else if (translate.currentLang === 'ar') {
        this.html = this.html_ar;
    }

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (translate.currentLang === 'ru') {
          this.html = this.html_ru;
      }
      else if (translate.currentLang === 'en') {
          this.html = this.html_en;
      }
      else if (translate.currentLang === 'ab') {
          this.html = this.html_ab;
      }
      else if (translate.currentLang === 'tr') {
          this.html = this.html_tr;
      }
      else if (translate.currentLang === 'ar') {
          this.html = this.html_ar;
      }

    });
  }

}
