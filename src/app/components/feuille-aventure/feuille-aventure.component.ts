import { Component } from '@angular/core';
import { FeuilleAventureService } from '../../services/feuille-aventure/feuille-aventure.service';
import { DisciplinesKaiComponent } from "../disciplines-kai/disciplines-kai.component";

@Component({
  selector: 'app-feuille-aventure',
  imports: [DisciplinesKaiComponent],
  templateUrl: './feuille-aventure.component.html',
  styleUrl: './feuille-aventure.component.scss'
})
export class FeuilleAventureComponent {

  constructor(public feuilleAventureService: FeuilleAventureService) {

  }
}
