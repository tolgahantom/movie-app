import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  sliderMovies: Movie[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private router: Router, private movieService: MovieServices) {}

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe((result) => {
      this.sliderMovies = result.results.slice(0, 5);
    });
  }

  goSearchPage() {
    this.router.navigate(['search']);
  }
}
