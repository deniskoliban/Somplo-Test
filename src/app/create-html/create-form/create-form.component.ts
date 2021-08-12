import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CropperComponent } from '../../shared/components/cropper/cropper.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface CropperDialogData {
  imgFile: string;
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  imageSrc = '';
  imageFile: File | null = null;
  formGroup: FormGroup;
  urlPattern: RegExp = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?/gi;

  formControls = {
    fileControl: new FormControl('', Validators.required),
    url: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(this.urlPattern)
      ]),
    side: new FormControl(null),
  }

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group(this.formControls)
  }

  ngOnInit(): void {
    this.formControls.fileControl.valueChanges.subscribe((file: File) => {
      this.imageFile = file || null;
    })
  }

  openDialog() {
    const dialog = this.dialog.open(CropperComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        imgFile: this.imageFile
      }
    });
  }

}
