import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        original_title: 'film 1',
        vote_average: 7.5,
        overview: 'lorem ipsum dolor',
        genres: [1, 2],
        release_date: new Date(1990, 10, 10),
        poster_path:
          "'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png',",
        backdrop_path:
          'https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png',
      },
    ];
  }

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find((movie) => movie.id == id) as Movie;
  }
}
