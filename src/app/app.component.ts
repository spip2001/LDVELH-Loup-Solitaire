import { Component } from '@angular/core';
import { MatTabsModule} from '@angular/material/tabs';
import { FeuilleAventureComponent } from "./components/feuille-aventure/feuille-aventure.component";


@Component({
  selector: 'app-root',
  imports: [MatTabsModule, FeuilleAventureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LDVELH-Loup-Solitaire';
}
