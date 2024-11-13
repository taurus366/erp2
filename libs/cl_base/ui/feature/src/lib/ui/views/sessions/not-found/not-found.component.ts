import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  styleUrls: ['./not-found.component.css'],
  imports: [MatButton, MatIcon, RouterLink],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
