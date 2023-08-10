import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieServices {
  apiKey = '?api_key=274ea6ed71667c063cf16ee8af82a432';
  url = 'https://api.themoviedb.org/3/';
  myWatchList: number[] = [];
  storageList: any = localStorage.getItem('MyWatchList');

  //https://api.themoviedb.org/3/genre/movie/list?api_key=274ea6ed71667c063cf16ee8af82a432

  constructor(private http: HttpClient) {
    if (this.storageList) {
      this.myWatchList = JSON.parse(this.storageList);
    }
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(this.url + 'genre/movie/list' + this.apiKey);
  }

  getNowPlayinMovies(): Observable<any> {
    return this.http.get<Movie[]>(this.url + 'movie/now_playing' + this.apiKey);
  }

  getUpcomingMovies(): Observable<any> {
    return this.http.get<Movie[]>(this.url + 'movie/upcoming' + this.apiKey);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get<Movie[]>(this.url + 'movie/top_rated' + this.apiKey);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(this.url + 'movie/popular' + this.apiKey);
  }

  getMovieById(id: number): Observable<any> {
    return this.http.get<Movie[]>(this.url + 'movie/' + id + this.apiKey);
  }

  getCastsByMovieId(id: number): Observable<any> {
    return this.http.get<any>(
      this.url + 'movie/' + id + '/credits' + this.apiKey
    );
  }

  getReviewsById(id: number): Observable<any> {
    return this.http.get<any>(
      this.url + 'movie/' + id + '/reviews' + this.apiKey
    );
  }

  searchMovie(data: any): Observable<any> {
    return this.http.get<any>(
      this.url + 'search/movie' + this.apiKey + '&query=' + data
    );
  }

  addToWatchList(id: number) {
    this.myWatchList.push(id);
    this.saveToLS();
  }

  removeFromWatchlist(index: number) {
    this.myWatchList.splice(index, 1);
    this.saveToLS();
  }

  saveToLS() {
    localStorage.setItem('MyWatchList', JSON.stringify(this.myWatchList));
  }

  getWatchlistItems() {
    return this.myWatchList;
  }
}
