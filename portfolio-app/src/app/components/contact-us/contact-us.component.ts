import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_9kx6l2s', 'template_3cbhk1a', e.target as HTMLFormElement, 'user_cQKsCDm2R5gfJ9OJwHd4i')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

}
