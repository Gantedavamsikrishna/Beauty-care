import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css'],
})
export class Home1Component implements AfterViewInit {
  @ViewChildren('content') contentElements!: QueryList<ElementRef>;

  observer!: IntersectionObserver;

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
