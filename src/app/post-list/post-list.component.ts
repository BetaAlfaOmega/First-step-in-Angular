import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() loveIts: number = 0;
  @Input() createdAt: Date = new Date();
  love = 0;

  constructor() {}

  ngOnInit(): void {
    this.love = this.loveIts;
  }

  onLove() {
    this.love = this.love + 1;
  }

  onHate() {
    this.love = this.love - 1;
  }
}
