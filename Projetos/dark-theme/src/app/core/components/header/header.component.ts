import { Component } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public icon: string = ETheme.ICON_MOON
  public textTheme: string = ETheme.TEXT_MOON;

  public toggle(){

    const theme = document.body.classList.toggle('dark-theme')

    if (theme){

      this.textTheme = ETheme.TEXT_SUN
      this.icon = ETheme.ICON_SUN
    } else {

      this.textTheme = ETheme.TEXT_MOON
      this.icon = ETheme.ICON_MOON
    }
  }

}
