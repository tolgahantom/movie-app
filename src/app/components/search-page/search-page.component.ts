import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { MovieServices } from 'src/app/services/movie.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  @ViewChild('search') search: any;
  loading: boolean = false;
  couldFind: boolean = true;
  searchedMovies: any[] = [];
  genres: any[] = [];
  imagePath: string = 'https://image.tmdb.org/t/p/original';
  movieGenre: string;

  constructor(
    private movieService: MovieServices,
    private renderer: Renderer2,
    private navigate: NavigationService
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
    this.loading = true;
    this.movieService.searchMovie(movieName).subscribe((result) => {
      this.searchedMovies = result.results;
      this.couldFind = true;
      if (this.searchedMovies.length == 0) {
        this.couldFind = false;
      }
      this.loading = false;
    });
  }

  findYear(date: Date) {
    return new Date(date).getFullYear();
  }

  getGenreById(id: number) {
    return this.genres.find((genre) => genre.id == id);
  }

  goBack() {
    this.navigate.goBack();
  }
}
