import { ConcertsService } from './../concerts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
})
export class ConcertPage implements OnInit {

  constructor(public formConcert: ConcertsService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {
  }
public async validConcert(){
  if(!this.formConcert.validation()){
    const toast = await this.toastCtrl.create({
      message:'Remplir les champs ',
      color:'warning',
      duration: 1500,
      position: 'top'
    });
    toast.present();
    return;
  }
  this.formConcert.addConcert(this.formConcert.getConcertData());
  this.router.navigateByUrl('/home');
}
}
