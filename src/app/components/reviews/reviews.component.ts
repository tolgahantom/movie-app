import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reviews } from 'src/app/models/reviews';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: Reviews[] = [];
  loading: boolean = false;
  constructor(private route: Router, private movieService: MovieServices) {}

  ngOnInit(): void {
    this.loading = true;
    const id = +this.route.url.split('/')[2];
    this.movieService.getReviewsById(id).subscribe((data) => {
      this.reviews = data.results;
      this.loading = false;
    });
  }

  findPoint(author: any) {
    return author.author_details.rating || 0;
  }
}
