import { Component } from '@angular/core';
import { NavController,  } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
modalRef;
  constructor(public navCtrl: NavController) {

  }

  openModal(course,img){

    this.navCtrl.push('ModalPage', {
      image: img,
      name: course
    });

  }


}



 