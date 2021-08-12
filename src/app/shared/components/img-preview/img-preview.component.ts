import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgPreviewComponent implements OnInit {
  @Input() imageSrc = '';
  @Input() set imageFile(file: File | undefined) {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.changeDetectorRef.detectChanges();
      };
    }
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

}
