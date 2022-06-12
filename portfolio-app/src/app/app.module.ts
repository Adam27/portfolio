import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PortfolioComponent } from './components/potfolio/portfolio.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoriesShowcaseComponent } from './components/categories-showcase/categories-showcase.component';
import { SwiperModule } from 'swiper/angular';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MatRippleModule } from '@angular/material/core';
import { MainComponent } from './components/main/main.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from './components/footer/footer.component';
import { AlbumComponent } from './components/album/album.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlbumSwiperComponent } from './components/album-swiper/album-swiper.component';





@NgModule({
  declarations: [
    AppComponent, ContactUsComponent,
    PortfolioComponent, NavComponent, CategoriesShowcaseComponent, HeaderComponent, LogoComponent, MainComponent, FooterComponent, AlbumComponent, AlbumSwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatRippleModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
