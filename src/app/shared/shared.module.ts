import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostTagsComponent } from './post/post-tags/post-tags.component';
import { PostNotesComponent } from './post/post-notes/post-notes.component';
import { PostCommentsComponent } from './post/post-comments/post-comments.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { ParagraphLoremIpsumComponent } from './paragraph-lorem-ipsum/paragraph-lorem-ipsum.component';
import { DefaultPostComponent } from './default-post/default-post.component';
import { DefaultPostTagsComponent } from './default-post/default-post-tags/default-post-tags.component';

@NgModule({
  declarations: [
    LoremIpsumComponent,
    PostComponent,
    PostTagsComponent,
    PostNotesComponent,
    PostCommentsComponent,
    ParagraphLoremIpsumComponent,
    DefaultPostComponent,
    DefaultPostTagsComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    RouterModule
  ],
  exports: [
    LoremIpsumComponent,
    PostComponent,
    DefaultPostComponent,
  ]
})
export class SharedModule { }
