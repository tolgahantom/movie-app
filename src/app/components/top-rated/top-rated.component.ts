import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  topRatedMovies: Movie[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieServices) {}

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe((result) => {
      this.topRatedMovies = result.results;
    });
  }
}
