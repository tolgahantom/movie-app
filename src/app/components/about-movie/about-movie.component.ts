import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-about-movie',
  templateUrl: './about-movie.component.html',
  styleUrls: ['./about-movie.component.css'],
})
export class AboutMovieComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/original';
  aboutText: string;

  constructor(private movieService: MovieServices, private router: Router) {}

  ngOnInit(): void {
    const id = +this.router.url.split('/')[2];
    this.movieService.getMovieById(id).subscribe((data) => {
      this.aboutText = data.overview;
    });
  }
}
