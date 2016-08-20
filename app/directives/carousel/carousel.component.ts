import {Component} from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'css-carousel',
  templateUrl: './app/directives/carousel/carousel.component.html',
  styleUrls:  ['./app/directives/carousel/carousel.component.css']
})
export class CSSCarouselComponent {
	public images = IMAGES;
}

var IMAGES: Image[] = [
	{ "title": "We are covered", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/covered.jpg" },
	{ "title": "Generation Gap", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/generation.jpg" },
	{ "title": "Potter Me", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/potter.jpg" },
	{ "title": "Pre-School Kids", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/preschool.jpg" },
	{ "title": "Young Peter Cech", "url": "https://raw.githubusercontent.com/christiannwamba/angular2-carousel-component/master/images/soccer.jpg" }
];
