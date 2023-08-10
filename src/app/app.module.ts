import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
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
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomePageComponent,
    NowPlayingComponent,
    UpcomingComponent,
    TopRatedComponent,
    PopularComponent,
    SearchPageComponent,
    WatchListComponent,
    DetailComponent,
    AboutMovieComponent,
    ReviewsComponent,
    CastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
