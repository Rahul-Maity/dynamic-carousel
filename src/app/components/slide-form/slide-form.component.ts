import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-form',
  templateUrl: './slide-form.component.html',
  styleUrl: './slide-form.component.scss'
})
export class SlideFormComponent {
  @Output() add = new EventEmitter<{ imageUrl: string, caption: string }>();
  newSlide: { imageUrl: string, caption: string } = { imageUrl: '', caption: '' };
  urlError: boolean = false;

  addSlide() {
    this.urlError = !this.isValidImageUrl(this.newSlide.imageUrl);
    if (!this.urlError && this.newSlide.caption.trim() !== '') {
      this.add.emit({ ...this.newSlide });
      this.newSlide = { imageUrl: '', caption: '' }; // Reset newSlide after adding
    } else {
      alert("Give a valid URL of the image");
    }
  }

  isValidImageUrl(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }
}
