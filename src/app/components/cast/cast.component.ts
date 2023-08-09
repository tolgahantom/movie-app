import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cast } from 'src/app/models/cast';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css'],
})
export class CastComponent implements OnInit {
  casts: Cast[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';

  constructor(private movieService: MovieServices, private route: Router) {}

  ngOnInit(): void {
    const id = +this.route.url.split('/')[2];
    this.movieService.getCastsByMovieId(id).subscribe((data) => {
      this.casts = data.cast;
    });
  }
}
