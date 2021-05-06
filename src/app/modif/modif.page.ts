import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConcertsService } from './../concerts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.page.html',
  styleUrls: ['./modif.page.scss'],
})
export class ModifPage implements OnInit {

  constructor(public formConcert: ConcertsService, private router: Router, private toastCtrt: ToastController) { }

  ngOnInit() {
  }
  public modifConcerts (){
    this.formConcert.modifConcert();
    this.router.navigateByUrl('/home');
  }

}
