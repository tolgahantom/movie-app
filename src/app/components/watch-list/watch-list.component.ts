import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  watchList: Movie[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(
    private movieService: MovieServices,
    private navigate: NavigationService
  ) {}

  ngOnInit(): void {
    this.movieService.getWatchlistItems().forEach((movieId) => {
      this.movieService.getMovieById(movieId).subscribe((result) => {
        this.watchList.push(result);
      });
    });
  }

  getYear(date: Date) {
    return new Date(date).getFullYear();
  }

  findGenre(id: any) {
    return id.name;
  }

  goBack() {
    this.navigate.goBack();
  }
}
