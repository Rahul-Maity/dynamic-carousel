import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-carousel';
  slides: { imageUrl: string, caption: string }[] = [
    { imageUrl: "https://cdn.pixabay.com/photo/2023/05/05/06/19/street-7971714_1280.jpg", caption: "london city street" },
    { imageUrl: "https://cdn.pixabay.com/photo/2023/05/25/18/10/flowers-8017976_1280.jpg", caption: "flower image" },
    { imageUrl: "https://cdn.pixabay.com/photo/2024/02/23/17/26/clock-8592484_1280.jpg", caption: "alarm clock image" }
  ];

  addSlide(newSlide: { imageUrl: string, caption: string }) {
    this.slides.push({ ...newSlide });
  }

  deleteSlide(index: number) {
    this.slides.splice(index, 1);
  }
}
