import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { PortfolioComponent } from './components/potfolio/portfolio.component';


const routes: Routes = [
  {path: '', component: ContactUsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
