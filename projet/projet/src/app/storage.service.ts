import { Injectable } from '@angular/core';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  getTags(): Tag[] {
    const tags = localStorage.getItem('tags');
    if (tags) {
      return JSON.parse(tags);
    } else {
      return [];
    }
  }

  addTag(nameTag : string): void {
    const tags = this.getTags();
    const tag: Tag = {
      id: tags.length,
      name: nameTag,
      color: "#FFFFFF"
    };
    tags.push(tag);
    localStorage.setItem('tags', JSON.stringify(tags));
  }

  deleteTag(id: number): void {
    const tags = this.getTags();
    const updatedTags = tags.filter(tag => tag.id !== id);
    localStorage.setItem('tags', JSON.stringify(updatedTags));
  }

  editTag(id: number, nameTag: string): void {
    const tags = this.getTags();
    const tagIndex = tags.findIndex(tag => tag.id === id);
    tags[tagIndex].name = nameTag;
    localStorage.setItem('tags', JSON.stringify(tags));
  }
}
