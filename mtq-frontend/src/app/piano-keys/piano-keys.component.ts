import { Component, Input, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-piano-keys',
  standalone: true,
  imports: [],
  templateUrl: './piano-keys.component.html',
  styleUrl: './piano-keys.component.scss'
})
export class PianoKeysComponent implements AfterViewInit {
  @ViewChild('wrap') wrap!: any;
  @Input() octaveCount: number = 1;
  @Input() noteCount?: number;
  @Input() hoverable: boolean = true;
  @Input() clickable: boolean = true;
  @Input() width: number = 50;
  
  ngAfterViewInit(): void {
    const wrapElem = this.wrap.nativeElement;
    if(this.hoverable) wrapElem.classList.add("hoverable");
    wrapElem.style.setProperty("--w", `${this.width}px`);
    for(let i = 0; i < this.octaveCount; i++) {

    }
  }
}
