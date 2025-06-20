import { Component } from '@angular/core';
import { FeuilleAventureService } from '../../services/feuille-aventure/feuille-aventure.service';

@Component({
  selector: 'app-disciplines-kai',
  imports: [],
  templateUrl: './disciplines-kai.component.html',
  styleUrl: './disciplines-kai.component.scss'
})
export class DisciplinesKaiComponent {

  constructor(public feuilleAventureService: FeuilleAventureService) {
  
  }

}
