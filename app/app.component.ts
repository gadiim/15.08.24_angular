import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '15.08.24_intro';
  message = "hello, angular-18!";
  Author = "William Henry 'Bill' Gates III";
  AuthorPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/330px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg";
  AuthorPhotoAlt = "Bill Gates Photo";
  AuthorBiography = "William Henry Gates III (born October 28, 1955) is an American business magnate best known for co-founding the software company Microsoft with his childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president, and chief software architect, while also being its largest individual shareholder until May 2014. He was a pioneer of the microcomputer revolution of the 1970s and 1980s.";
  Quote1 = "Patience is a key element of success";
  Quote2 = "If you think your teacher is tough, wait till you get a boss ";
  Quote3 = "Life is not fair — get used to it!";
  Quote4 = "Success is a lousy teacher. It seduces smart people into thinking they can’t lose";
  Quote5 = "Be nice to nerds. Chances are you’ll end up working for one";
  AuthorUrl1 = "https://en.wikipedia.org/wiki/Bill_Gates";
  AuthorUrl2 = "https://www.gatesfoundation.org/";
  AuthorUrl3 = "https://www.gatesnotes.com/";
  AuthorSocialLink1 = "https://twitter.com/billgates";
  AuthorSocialLink2 = "https://www.facebook.com/BillGates/";
  AuthorSocialLink3 = "https://www.linkedin.com/in/williamhgates/";
  AuthorSocialLink4 = "https://www.instagram.com/thisisbillgates/";
  AuthorSocialLink5 = "https://www.youtube.com/user/thegatesnotes";
}
