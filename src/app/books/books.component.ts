import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  name: string = 'Clean Code';
  author: string = 'Robert C. Martin';
  src: string =
    'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg';

  name2: string = 'The Pragmatic Programmer';
  author2: string = 'David Thomas';
  src2: string =
    'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71f743sOPoL._AC_UY436_FMwebp_QL65_.jpg';
}
