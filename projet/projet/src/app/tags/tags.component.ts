import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  loader: boolean = false;
  tags: Tag[] = [];

  constructor(private storageService: StorageService) {
    if (this.loader) {
      this.loadTags();
    }
  }

  loadTags() {
    this.loader = true;
    this.tags = this.storageService.getTags();
  }

  dialogAddTag(){
    let tagName = window.prompt("Ajouter le nom du tag : ");

    if (tagName != null && tagName != "") {
      this.storageService.addTag(tagName);
      this.loadTags();
    }
    return false;
  }

}
