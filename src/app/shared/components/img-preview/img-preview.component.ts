import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgPreviewComponent implements OnInit {
  @Input() imageSrc = '';

  constructor() { }

  ngOnInit(): void {
  }

}
