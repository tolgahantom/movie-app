import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { PopularComponent } from './components/popular/popular.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutMovieComponent } from './components/about-movie/about-movie.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CastComponent } from './components/cast/cast.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: NowPlayingComponent },
      { path: 'upcoming', component: UpcomingComponent },
      { path: 'top-rated', component: TopRatedComponent },
      { path: 'popular', component: PopularComponent },
    ],
  },
  { path: 'search', component: SearchPageComponent },
  { path: 'watch-list', component: WatchListComponent },
  {
    path: 'movie/:id',
    component: DetailComponent,
    children: [
      { path: '', component: AboutMovieComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'cast', component: CastComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
