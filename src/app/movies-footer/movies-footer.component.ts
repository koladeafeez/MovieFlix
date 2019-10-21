import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-footer',
  templateUrl: './movies-footer.component.html',
  styleUrls: ['./movies-footer.component.css']
})
export class MoviesFooterComponent implements OnInit {
  title: string = "MovieFlix";
  constructor() { }

  ngOnInit() {
  }

}
