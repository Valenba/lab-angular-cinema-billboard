import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie
  constructor(private getMov: MoviesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movie = this.getMov.getMovie(Number(params.id)))
  }

}
