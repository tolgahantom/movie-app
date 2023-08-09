export interface Movie {
  id: number;
  original_title: string;
  vote_average: number;
  overview: string;
  genres: number[];
  poster_path: string;
  release_date: Date;
  backdrop_path: string;
}
