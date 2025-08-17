import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements AfterViewInit {
  @ViewChildren('content') contentElements!: QueryList<ElementRef>;

  observer!: IntersectionObserver;
  @ViewChild('navbarNav', { static: false })
  navbarNav!: ElementRef;

  closeNav() {
    if (this.navbarNav.nativeElement.classList.contains('show')) {
      this.navbarNav.nativeElement.classList.remove('show');
    }
  }
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    this.contentElements.forEach((content) => {
      this.observer.observe(content.nativeElement);
    });
  }
}
