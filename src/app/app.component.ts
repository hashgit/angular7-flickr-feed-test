import { Component, OnInit, Input  } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flickr-feed';
  @Input() tags = '';

  images:any = [];

  constructor(public api:ApiService) {

  }

  ngOnInit() {
    this.getImages();
  }

  search() {
    this.getImages();
  }

  getImages() {
    this.images = [];
    this.api.getImages(this.tags).subscribe((data: { items: [] }) => {
      console.log(data);
      this.images = data.items.map((item) => {
        return { data: item, show: false };
      });
    });
  }
}
