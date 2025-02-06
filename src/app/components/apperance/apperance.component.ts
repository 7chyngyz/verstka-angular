import { Component } from '@angular/core';


@Component({
  selector: 'app-apperance',
  standalone: false,
  template: `
  <!-- block-1 -->
  <div class="flex justify-between px-[100px] py-[40px]">
    <h1 class="text-[35px] font-medium">Apperance</h1>
    <span class="text-[35px] font-medium">:</span>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
  <!-- block-2 -->
  <div class=" flex justify-between px-[100px] py-[40px]">
    <div class="flex flex-col">
      <h1 class="text-[20px] font-semibold">Company logo</h1>
      <p class="text-[20px] font-semibold opacity-50">Update your company logo.</p>
    </div>
    <div class="flex items-center gap-10">
      <img class="w-[120px] border rounded-[20px]" src="/assets/shesteronka.png" alt="">
      <button class="w-[150px] h-[50px] text-lg font-medium border rounded-[10px]">Replace logo</button>
    </div>
    <button class="mt-[40px] w-[100px] h-[50px] text-lg font-medium bg-red-100 border-red-600 rounded-[10px] text-red-600">Remove</button>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
  <!-- block-3 -->
  <div class=" flex gap-[400px] px-[100px] py-[40px]">
    <div class="flex flex-col">
      <h1 class="text-[20px] font-semibold">Brand color</h1>
      <p class="text-[20px] font-semibold opacity-50">Select of customize your brand color.</p>
    </div>
    <div class="flex flex-col gap-7">
      <div class="flex items-center gap-3">
      <span class="w-[30px] h-[30px] bg-black rounded-[50%]"></span>
      <span class="w-[30px] h-[30px] bg-violet-700 rounded-[50%]"></span>
      <span class="w-[30px] h-[30px] bg-blue-800 rounded-[50%]"></span>
      <span class="w-[30px] h-[30px] bg-blue-700 rounded-[50%]"></span>
      <span class="w-[30px] h-[30px] bg-blue-600 rounded-[50%]"></span>
      <span class="w-[30px] h-[30px] bg-blue-500 rounded-[50%]"></span>
      <span class="w-[30px] h-[30px] bg-green-800 rounded-[50%]"></span>
      </div>
      <div class="flex gap-3 items-center">
        <p class="text-lg font-medium opacity-50">Custom color: </p>
        <button class="w-[100px] h-[40px] border rounded-[10px] font-medium"><span class="opacity-50 text-lg">#</span>2C68F6</button>
        <span class="w-[30px] h-[30px] bg-blue-700 rounded-[50%]"></span>
      </div>
    </div>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
  <!-- block-4 -->
  <div class=" flex gap-[420px] px-[100px] py-[40px]">
    <div class="flex flex-col">
      <h1 class="text-[20px] font-semibold">Interface theme</h1>
      <p class="text-[20px] font-semibold opacity-50">Select or customize your UI theme.</p>
    </div>
    <div class="flex items-center gap-10">
      <img class="w-[150px] h-[100px] border rounded-[7px]" src="/assets/zoro1.jpg" alt="zoro">
      <img class="w-[150px] h-[100px] border rounded-[7px]" src="/assets/zoro2.jpg" alt="zoro">
      <img class="w-[150px] h-[100px] border rounded-[7px]" src="/assets/zoro3.jpg" alt="zoro">
    </div>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
   <!-- block-5 -->
   <div class=" flex gap-[420px] px-[100px] py-[40px]">
    <div class="flex flex-col">
      <h1 class="text-[20px] font-semibold">Interface theme</h1>
      <p class="text-[20px] font-semibold opacity-50">Select or customize your UI theme.</p>
    </div>
    <div>
      <button class="pl-[20px] bg-blue-700 text-blue-700 w-[55px] h-[27px] rounded-[20px]"><span class="bg-white text-white text-[15px] w-[25px] h-[25px] rounded-[50%] flex items-end ml-[8px]">1</span></button>
    </div>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
   <!-- block-6 -->
   <div class=" flex gap-[420px] px-[100px] py-[40px]">
    <div class="flex flex-col">
      <h1 class="text-[20px] font-semibold">Sidebar feature</h1>
      <p class="text-[20px] font-semibold opacity-50">What shows in the desktop sidebar.</p>
    </div>
    <div>
      <select class="w-[300px] border-2 px-[20px] h-[40px] rounded-[10px] text-[16px] font-medium outline-none">
        <option value="">Recent changes</option>
        <option value="">Recent changes-2</option>
        <option value="">Recent changes-3</option>
      </select>
    </div>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
   <!-- block-6 -->
   <div class=" flex gap-[420px] px-[100px] py-[40px]">
    <div class="flex flex-col">
      <h1 class="text-[20px] font-semibold">Tables view</h1>
      <p class="text-[20px] font-semibold opacity-50">How are tables displayed in the app.</p>
    </div>
    <div class="flex items-center gap-10">
      <img class="w-[150px] h-[100px] border rounded-[7px]" src="/assets/zoro1.jpg" alt="zoro">
      <img class="w-[150px] h-[100px] border rounded-[7px]" src="/assets/zoro3.jpg" alt="zoro">
    </div>
  </div>
  <hr class="w-[1650px] h-[2px] bg-gray-300 ml-[80px]">
  <!-- block-7 -->
   <div class="flex justify-end mb-[50px] px-[100px] gap-[20px] py-[40px]">
    <button class="border-4 text-lg font-medium w-[100px] h-[40px] rounded-[10px]">Cancel</button>
    <button class="bg-blue-700 text-lg font-medium text-white  w-[150px] h-[40px] rounded-[10px]">Save changes</button>
   </div>
  `,
})
export class ApperanceComponent {

}
