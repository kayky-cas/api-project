import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <!-- Footer -->
    <footer class="page-footer font-small bg-dark pt-4">

    <!-- Footer Elements -->
      <div class="container">

        <!-- Call to action -->
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1 text-light">INFO IMÓVEIS</h5>
          </li>
        </ul>
        <!-- Call to action -->

      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3 text-light">© 2020 Copyright:
        <a href="https://github.com/kayky-cas">github.com/kayky-cas</a>
      </div>
      <!-- Copyright -->

    </footer>
    <!-- Footer -->
  `,
  styles: [
    'footer{ position: absolute; bottom: 0px; width: 100%}'
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
