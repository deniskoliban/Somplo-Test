import { Component, Inject, OnInit } from '@angular/core';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CropperDialogData } from '../../../create-html/create-form/create-form.component';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {
  imageFile: File | null = null;
  croppedImage: Blob | null = null;
  croppedImageBase64 = '';

  constructor(
    public dialogRef: MatDialogRef<CropperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CropperDialogData
  ) {}

  ngOnInit(): void {
    this.imageFile = this.data.imgFile
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = base64ToFile(event.base64!);
    this.croppedImageBase64 = event.base64 as string;
  }

}
