import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  ngAfterContentInit() {
    // @ts-ignore
    window['hbspt'].forms.create({
      region: "eu1",
      portalId: "25834459",
      formId: "f1b5a7fe-ec40-421b-b901-5bf60cc9c8f8",
      target: "#hs-contact-form"
    });
  }

}
