import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrl: './slide-list.component.scss'
})
export class SlideListComponent {
  @Input() slides: { imageUrl: string, caption: string }[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteSlide(index: number) {
    this.delete.emit(index);
  }
}
