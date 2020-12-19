import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'tag',
    loadChildren: () => import('./tags/tags.module').then((m) => m.TagsModule),
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('./archive/archive.module').then((m) => m.ArchiveModule),
  },
  {
    path: 'rss',
    loadChildren: () => import('./rss/rss.module').then((m) => m.RssModule),
  },
  { path: 'types', loadChildren: () => import('./types/types.module').then(m => m.TypesModule) },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
