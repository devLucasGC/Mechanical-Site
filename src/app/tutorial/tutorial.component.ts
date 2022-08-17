import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  public title: string = "Meu primeiro projeto Angular";

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    // this._router.navigate(['login']);
  }

}
