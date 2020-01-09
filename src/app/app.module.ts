import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { BannerComponent } from './about/banner/banner.component';
import { OurCompanyComponent } from './about/our-company/our-company.component';
import { AboutComponent } from './about/about.component';
import { WhyChooseUsComponent } from './about/why-choose-us/why-choose-us.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    OurWorkComponent,
    BannerComponent,
    OurCompanyComponent,
    AboutComponent,
    WhyChooseUsComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
