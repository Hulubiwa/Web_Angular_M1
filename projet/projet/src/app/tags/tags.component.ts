import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { TagComponent } from '../tag/tag.component';
import { Tag } from '../tag';

@Component({
  selector: 'app-tags',
  imports: [TagComponent],
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

  deleteTag(t:Tag) {
    this.storageService.deleteTag(t.id);
    this.loadTags();
  }

  editing(t:Tag) {
    let tagName = window.prompt("Modifier le nom du tag : ", t.name);

    if (tagName != null && tagName != "") {
      this.storageService.editTag(t.id, tagName);
      this.loadTags();
    }
    return false;
  }

}
