import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Kamlesh Kumar';
  message: string;
  brandList = [
    {'url': 'https://www.triconinfotech.com', 'name': 'Tricon Infotech', 'description': 'This is all about Tricon Infotech'},
    {'url': 'https://www.isro.gov.in/', 'name': 'ISRO', 'description': 'This ia all about ISRO'},
    {'url': 'https://www.youtube.com/', 'name': 'Youtube', 'description': 'This is all about Youtube'}
  ]

  removeBrandFromList($event){
    console.log($event)
    
    this.brandList.splice($event, 1);
  }
}
