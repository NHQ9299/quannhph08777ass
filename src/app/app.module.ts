import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddSanPhamComponent } from './add-san-pham/add-san-pham.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { SanPhamService } from './services/san-pham.service';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ThoiTrangNamComponent } from './thoi-trang-nam/thoi-trang-nam.component';
import { GiayDepComponent } from './giay-dep/giay-dep.component';
import { PhuKienComponent } from './phu-kien/phu-kien.component';
import { HomeComponent } from './home/home.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AddSanPhamComponent, ChiTietSanPhamComponent, NavComponent, CategoryComponent, SlideComponent, ThoiTrangNamComponent, GiayDepComponent, PhuKienComponent, HomeComponent, QuanLySanPhamComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SanPhamService],
})
export class AppModule { }
