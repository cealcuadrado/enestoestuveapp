import { PostComponent } from './post/post.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTagsComponent } from './post/post-tags/post-tags.component';
import { PostNotesComponent } from './post/post-notes/post-notes.component';
import { PostCommentsComponent } from './post/post-comments/post-comments.component';

@NgModule({
  declarations: [
    LoremIpsumComponent,
    PostComponent,
    PostTagsComponent,
    PostNotesComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoremIpsumComponent,
    PostComponent
  ]
})
export class SharedModule { }
