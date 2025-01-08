import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UiService } from '../../../shared/ui.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.initModules();
  }

  initModules(): void {
    console.log('initModules');




  }
}
