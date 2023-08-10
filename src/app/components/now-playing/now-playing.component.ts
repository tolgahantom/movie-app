import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css'],
})
export class NowPlayingComponent implements OnInit {
  nowPlayingMovies: Movie[] = [];
  loading: boolean = false;
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieServices) {}

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getNowPlayinMovies().subscribe((response) => {
      this.nowPlayingMovies = response.results;
      this.loading = false;
    });
  }
}
