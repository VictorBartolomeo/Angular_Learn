import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap";
import {DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  snapped!: boolean;


  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  onAddSnap(): void {
    if (this.snapped) {
      this.unSnap()
    } else {
      this.snap()
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.snapped = false;
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Unsnap!';
    this.snapped = true;
  }

  protected readonly location = location;
}
