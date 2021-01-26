import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() icon;
  @Input() title;
  @Input() subtitle;
  @Input() whiteText;
  constructor() { }

  ngOnInit(): void {
  }

}
