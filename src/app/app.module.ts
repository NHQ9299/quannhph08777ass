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


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddSanPhamComponent, ChiTietSanPhamComponent, NavComponent, CategoryComponent, SlideComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SanPhamService],
})
export class AppModule { }
