import { Router } from '@angular/router';
import { ConcertsService } from './../concerts.service';

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public listConcert= [
    {
      salle: 'bercy',
      groupe: 'oasis',
      date: '22/07/2022',
      ville: 'Paris',
      note: '5/5',
      genre: 'pop',
      commentaire: 'génial'
    },
    {
      salle: 'zenith',
      groupe: 'Led ZEP',
      date: '27/03/2021',
      ville: 'Lille',
      note: '5/4',
      genre: 'rock',
      commentaire: ' A faire'
    }
  ]
  
  constructor(public IConcert: ConcertsService, private alertCtrl: AlertController, private router: Router) {}
  public concertTableau=[];

  public async ngOnInit(){
    this.concertTableau= await this.IConcert.getConcert();
  }

  public async deleteOneConcert(pos){
    const alert = await this.alertCtrl.create({
      header: 'suppression ?',
      buttons:[
        { text: 'NON' },
        { 
          text: 'OUI', 
          handler: ()=> { this.IConcert.deleteConcert(pos)}
        }
      ]
    });
    alert.present();
    
  }
  public modifConcerts(pos){
    this.IConcert.input = this.concertTableau[pos]
    this.router.navigateByUrl('/modif');
  }

}
