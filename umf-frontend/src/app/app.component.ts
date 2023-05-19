import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'umf-frontend';
  menuAppTitle = 'umf-frontend';

  constructor(private router: Router,
              private titleService: Title,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router
      .events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
        let child = this.activatedRoute.firstChild;
        while (child.firstChild) {
          child = child.firstChild;
        }
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return this.titleService.getTitle();
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }
}
