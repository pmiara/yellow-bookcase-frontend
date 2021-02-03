import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutPageService } from '../services/about-page.service';
import { AboutPage } from '../models/about-page.model';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  config$!: Observable<AboutPage>;

  constructor(private aboutPageService: AboutPageService) {}

  ngOnInit(): void {
    this.config$ = this.aboutPageService.getTitleAndContent();
  }
}
