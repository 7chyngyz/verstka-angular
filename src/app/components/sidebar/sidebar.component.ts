import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  template: `
  <div class="flex justify-between py-[45px] px-[30px]">
    <div class="flex items-center gap-[15px]">
    <img src="/assets/zoro3.jpg" class="w-[50px] h-[40px] rounded-[50%]" alt="zoro">
    <h1 class="text-lg font-medium">Zoro</h1>
    </div>
  </div>
  `,
})
export class SidebarComponent {

}
