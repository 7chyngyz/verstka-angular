import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="flex">
    <!-- <app-sidebar></app-sidebar> -->
    <!-- <app-apperance></app-apperance> -->
    <router-outlet></router-outlet>
  </div>
  `,
  standalone: false,
})
export class AppComponent {
  title = 'verstka-tailwind';
}
