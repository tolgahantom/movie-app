import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  populerMovies: Movie[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieServices) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((response) => {
      this.populerMovies = response.results;
    });
  }
}
