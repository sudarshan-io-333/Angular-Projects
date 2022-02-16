import { Component } from '@angular/core';


@Component({
    selector: 'app-success-alert',
    template: `<p>You are IN Successfull..</p>`,
    styles: [
        `
        h3{
            padding : 20px;
           background-color:red;
        }`
    ]
})

export class SuccessAlertComponent{

}