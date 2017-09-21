import { Component , Inject , AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage implements AfterViewInit {
  image;
  canvasContext;
  filter=1;
  filters = 
     {
       blur : { name:'blur', max:'10', min: '0', value:0, map:"px"}, 
       opacity: {name:'opacity', max:100, min: 1, value:'100',map:"%"},
       grayscale: {name:'grayscale', max:100, min: 0, value:0, map:"%"},
       brightness: {name:'brightness', max:500, min: 25, value:100, map:"%"},
       sepia: {name:'sepia', max:'100', min: '0', value:'0', map:"%"}
     }
  

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    allowEdit : true,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(public navCtrl: NavController, private camera: Camera, public alertCtrl: AlertController, public photoLibrary: PhotoLibrary, @Inject(DOCUMENT)private document) {}
    
  ngAfterViewInit() {
    this.image = new Image();
    this.image.src = 'assets/camera.jpg';
    this.canvasContext = this.getCanvas();
    this.image.onload = () => this.canvasContext.drawImage(this.image, 0, 0,400,400);
  }
  getSnap(){
    this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    //console.log(imageData);
    // this.showAlert("",imageData);
    this.image.src = base64Image;
    }, (err) => {
    // Handle error
    this.showAlert('Error','failed to click image');
    });
  }

showAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title || "Alert",
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


applyFilterFromJs(filterProp,event){
 switch (filterProp.name) {
   case "blur":
      this.filters.blur.value = event.value;
     break;
  case "opacity":
      this.filters.opacity.value = event.value;
     break;  
  case "grayscale":
    this.filters.grayscale.value = event.value;
    break; 
  case "brightness":
    this.filters.brightness.value = event.value;
    break;  
  case "sepia":
    this.filters.sepia.value = event.value;
    break;      
 
   default:
     break;
 }

  this.canvasContext.filter = `
    blur(${this.filters.blur.value}${this.filters.blur.map})
    opacity(${this.filters.opacity.value}${this.filters.opacity.map})
    grayscale(${this.filters.grayscale.value}${this.filters.grayscale.map})
    brightness(${this.filters.brightness.value}${this.filters.brightness.map})
    sepia(${this.filters.sepia.value}${this.filters.sepia.map})
  `
  this.canvasContext.drawImage(this.image, 0, 0,400,400);
}

getCanvas(){
  let canvas =  this.document.getElementById('canvas');
  let context = canvas.getContext('2d');
  return context;
}

save(){
  const album = 'MyAppName';
  let image = this.canvasContext.toDataURL();
  this.photoLibrary.saveImage(image, album);
}

}
