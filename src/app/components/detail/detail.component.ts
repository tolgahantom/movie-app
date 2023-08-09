import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  selectedMovie: Movie;
  imagePath: string = 'https://image.tmdb.org/t/p/original';
  movieDate: Number;
  movieGenre: string;
  aboutMovie: string;
  inWatchList: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private movieService: MovieServices
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));

      this.movieService.getWatchlistItems().includes(id)
        ? (this.inWatchList = true)
        : (this.inWatchList = false);

      this.movieService.getWatchlistItems().forEach((id) => {});
      this.movieService.getMovieById(id).subscribe((data) => {
        this.selectedMovie = data;
        this.aboutMovie = this.selectedMovie.overview;
        this.movieDate = new Date(
          this.selectedMovie.release_date
        ).getFullYear();
      });
    });
  }

  findGenre(id: any) {
    return id.name;
  }

  addToWatchList(id: number) {
    if (!this.movieService.getWatchlistItems().includes(id))
      this.movieService.addToWatchList(id);
    this.inWatchList = true;
  }

  removeFromWatchList(id: number) {
    this.movieService.removeFromWatchlist(
      this.movieService.getWatchlistItems().indexOf(id)
    );

    this.inWatchList = false;
  }
}
