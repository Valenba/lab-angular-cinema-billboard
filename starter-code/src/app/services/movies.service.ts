import { Injectable } from '@angular/core';
import {sampleMovies} from '../../sample-movies';

interface movie{
    id: number;
    title: string;
    poster: string;
    synopsis: string;
    genres: Array<string>;
    year: number;
    director: string;
    actors: Array<string>;
    hours?: Array<string>;
    room?: number;
}


@Injectable()
export class MoviesService {
 movies:Array<movie> = sampleMovies;

    
    constructor() { }

    getMovies(){
        return this.movies;
    }

    getMovie(id){
      return this.movies[id-1];
    }


}