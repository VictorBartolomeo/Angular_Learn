import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap";
import {FaceSnapComponent} from "../face-snap/face-snap.component";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Stéphane',
        'Moto vroum vroum!',
        "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/465136330_10234438145756646_4352170126300271164_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=b04a48&_nc_ohc=r0uL_yWd8GUQ7kNvgGwmNT8&_nc_oc=AdhlghImnRG4dWoAOlQ42eBkoeSKEZQDLd09zGo7uRfv7TX9zUF-OzJkAoq3G99Ts9Q&_nc_zt=23&_nc_ht=scontent-fra3-2.xx&_nc_gid=A0Q9DgOQ-6Gxk4IUbB61zU5&oh=00_AYHGUrDp_st2HIAPA2ABo8PYcFAQFetCHi32_eiehPVX0g&oe=67D46595",
        new Date(),
        0
      ),
      new FaceSnap(
        'Romain',
        'Trader Stonks',
        "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/416044473_10160063365617336_1567941276108029831_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RHClERrdezsQ7kNvgHkEkd3&_nc_oc=Adh6QmBkPJrpZIIa2fjgX5naL1bSSBVyCnwjANgzMXNwwEXxAw1cdwk2VwEb5AakoFE&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=A6vDIPTmyg5LYIvhoAQEzfW&oh=00_AYGmr9j-noJrO_CzK67uYzVdlEuWW0JigxzzCnI0qk96NQ&oe=67D47995",
        new Date(),
        149
      ),
      new FaceSnap(
        'Axel',
        'Quel kiffeur',
        "https://media.licdn.com/dms/image/v2/D4E35AQHW2mPUz-bJ9g/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1729674569276?e=1742209200&v=beta&t=pdwMYb3vsHTGOAQtOvMWg0Z8CQZQV7woXGqNkz_TasU",
        new Date(),
        -15
      )
    ]

    this.faceSnaps[2].setLocation("Perplexity Headquarters");
    this.faceSnaps[1].setLocation("Barcelone");
  }
}
