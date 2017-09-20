import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SliderPage } from '../slider/slider';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs = [
    {root:HomePage, tabTitle:'Home', tabIcon:'home'},
    {root:AboutPage, tabTitle:'About', tabIcon:'information-circle'},
    {root:ContactPage, tabTitle:'Contact', tabIcon:'contacts'},
    {root:SliderPage, tabTitle:'Slider', tabIcon:'apps'},
    {root:CameraPage, tabTitle:'Camera', tabIcon:'camera'},
  ]

  constructor() {

  }
}
