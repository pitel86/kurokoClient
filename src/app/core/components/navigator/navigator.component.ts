import { Component, Input, OnInit } from '@angular/core';
import { NavigatorInterface } from '../../models/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  @Input() navigator!:NavigatorInterface[];
  constructor() { }

  ngOnInit(): void {
  }

}
