import { Component } from '@angular/core';
@Component({
  selector: 'lib-footer',
  templateUrl: './app/footer/footer.component.html',
  styleUrls:  ['./app/footer/footer.component.css']
})
export class FooterComponent {
  footer_en = {
            resources:'RESOURCES',
            about:'About',
            books:'Books & Training',
            instruments: 'Instruments',
            community: 'Community',
            help:'HELP',
            google: 'Google Group',
            reportproblems: 'Report Problems',
            feedback: 'Feedback',
            contribute: 'Contribute',
            communityheader:'COMMUNITY',
            events: 'Events',
            meetups: 'Meetups',
            twitter: 'Twitter',
            apsny: 'Apsny Fund'
  }
  footer = {
            resources:'РЕСУРСЫ',
            about:'Около',
            books:'Книги и обучение',
            instruments: 'инструменты',
            community: 'сообщество',
            help:'ПОМОГИТЕ',
            google: 'Группа Google',
            reportproblems: 'Отчет о проблемах',
            feedback: 'Обратная связь',
            contribute: 'Делать вклад',
            communityheader:'СООБЩЕСТВО',
            events: 'Мероприятия',
            meetups: 'Meetups',
            twitter: 'Щебетать',
            apsny: 'Апсны фонд'
  }
 }
