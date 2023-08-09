import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  upComingMovies: Movie[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieServices) {}

  ngOnInit(): void {
    this.movieService.getUpcomingMovies().subscribe((result) => {
      this.upComingMovies = result.results;
    });
  }
}
