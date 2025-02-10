import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  template: `
  <div class="bg-gray-100 h-[100%] w-[350px] py-[45px] px-[30px] border">
    <div class="flex justify-between">
      <div class="flex items-center gap-[15px]">
        <img src="/assets/zoro3.jpg" class="w-[50px] h-[40px] rounded-[50%]" alt="zoro">
        <h1 class="text-lg font-medium">Zoro</h1>
      </div>
    </div>
    <div class="flex flex-col px-[30px] gap-[40px] pt-12">
    <h3 class="menu-item" routerLink="/dashboard">Dashboard</h3>
<div class="flex justify-between items-center">
  <h3 class="menu-item" routerLink="/view-site">View site</h3>
  <button class="text-gray text-[18px] font-medium">--></button>
</div>
<div class="flex justify-between items-center">
  <h3 class="menu-item" routerLink="/posts">Posts</h3>
  <button class="text-gray text-[38px]">-</button>
</div>
<div class="flex justify-between items-center">
  <h3 class="menu-item" routerLink="/drafts">Drafts</h3>
  <button class="badge">22</button>
</div>
<div class="flex justify-between items-center">
  <h3 class="menu-item" routerLink="/scheduled">Scheduled</h3>
  <button class="badge">16</button>
</div>
<div class="flex justify-between items-center">
  <h3 class="menu-item" routerLink="/published">Published</h3>
  <button class="badge">64</button>
</div>
  </div>
  `,
  styles: [`
    .menu-item {
      @apply text-[20px] font-medium px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 cursor-pointer;
    }
    .badge {
      @apply text-blue-600 text-[18px] font-medium bg-blue-200 w-[30px] h-[30px] rounded-[10px] flex items-center justify-center;
    }
  `]
})
export class SidebarComponent {}
