import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input() id: number = 0; 
  @Input() name: string = ''; 
  @Input() color: string = '#FFFFFF'; 
}
