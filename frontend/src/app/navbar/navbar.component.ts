import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('navbarNav', { static: false })
  navbarNav!: ElementRef;

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }
  closeNav() {
    if (this.navbarNav.nativeElement.classList.contains('show')) {
      this.navbarNav.nativeElement.classList.remove('show');
    }
  }
}
