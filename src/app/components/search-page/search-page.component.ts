import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { MovieServices } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  @ViewChild('search') search: any;
  couldFind: boolean = true;
  searchedMovies: any[] = [];
  genres: any[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';
  movieGenre: string;

  constructor(
    private movieService: MovieServices,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.renderer.selectRootElement(this.search.nativeElement).focus();
  }

  ngOnInit(): void {
    this.movieService.getGenres().subscribe((result) => {
      this.genres = result.genres;
    });
  }

  searchMovie(movieName: string) {
    this.movieService.searchMovie(movieName).subscribe((result) => {
      this.searchedMovies = result.results;
      this.couldFind = true;
      if (this.searchedMovies.length == 0) {
        this.couldFind = false;
      }
    });
  }

  findYear(date: Date) {
    return new Date(date).getFullYear();
  }

  getGenreById(id: number) {
    return this.genres.find((genre) => genre.id == id);
  }
}
