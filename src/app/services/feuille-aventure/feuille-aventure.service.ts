import { Injectable } from '@angular/core';
import { DisciplinesKai, DisciplineKai } from './disciplines-kai-enum';


@Injectable({
  providedIn: 'root'
})
export class FeuilleAventureService {

  private _disciplines_kai: DisciplineKai[] = [
    DisciplinesKai.CAMOUFLAGE, 
    DisciplinesKai.CHASSE, 
    DisciplinesKai.SIXIEME_SENS, 
    DisciplinesKai.ORIENTATION, 
    DisciplinesKai.GUERISON
  ];
  private _endurance: number = 20;
  private _habilete: number = 10;
  private _armes: string[] = ['Épée'];
  private _objets: string[] = ['Potion de guérison'];

  

  constructor() { }

  get endurance(): number {
    return this._endurance;
  }

  set endurance(value: number) {
    this._endurance = value;
  }

  get habilete(): number {
    return this._habilete;
  }

  set habilete(value: number) {
    this._habilete = value;
  }

  get armes(): string[] {
    return this._armes;
  }

  ajouterArme(arme: string): void {
    this._armes.push(arme);
  }

  retirerEquipement(item: string): void {
    this._armes = this._armes.filter(e => e !== item);
  }

  get disciplines_kai(): DisciplineKai[] {
    return this._disciplines_kai;
  }

  get objets(): string[] {
    return this._objets;
  }

  set objets(value: string[]) {
    this._objets = value;
  }

  
}
