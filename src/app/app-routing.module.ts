import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThoiTrangNamComponent } from './thoi-trang-nam/thoi-trang-nam.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'thoi-trang-nam', component: ThoiTrangNamComponent},
  { path: 'quan-ly-san-pham', component: QuanLySanPhamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }