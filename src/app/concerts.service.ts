

import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';


const { Storage }= Plugins;
const STORAGE_KEY= "concert";

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {

  
  private concertTableau= []

  public input = {
    salle: null,
    groupe: null,
    date: null,
    genre: null,
    ville: null,
    note: null,
    commentaire: null
  };

  

  constructor() { }
  public async getConcert(){
    const data:any = await Storage.get({key: STORAGE_KEY});
    this.concertTableau= JSON.parse(data.value) || [];
    return this.concertTableau;
  }

  public getConcertData(){
    return{
      salle: this.input.salle,
      groupe: this.input.groupe,
      date: this.input.date,
      genre: this.input.genre,
      ville: this.input.ville,
      note: this.input.note,
      commentaire: this.input.commentaire
    }
  }
  public async addConcert(data){
    this.concertTableau.push(data);
    this.input.salle= null,
    this.input.groupe= null,
    this.input.date= null,
    this.input.genre= null,
    this.input.ville= null,
    this.input.note= null,
    this.input.commentaire= null,
    this.persist();

  }
  private async persist(){
    await Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.concertTableau)

    });
  }
  public validation(){
    return this.input.salle && this.input.groupe && this.input.date && this.input.genre && this.input.ville && this.input.note && this.input.commentaire
  }
  public deleteConcert(pos){
    this.concertTableau.splice(pos,1);
    this.persist();
  }
  public modifConcert(){
    this.persist();
  }
}
