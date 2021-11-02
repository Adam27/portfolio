import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainComponent } from './components/main/main.component';
import { HelpComponent } from './components/help/help.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'help', component: HelpComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
