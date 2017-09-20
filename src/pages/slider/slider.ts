import {Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
    selector:'page-slider',
    templateUrl:'slider.html'
})

export class SliderPage {
    @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl:NavController) {

    }

    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    }
} 