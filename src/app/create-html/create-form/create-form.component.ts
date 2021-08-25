import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CropperComponent } from '../../shared/components/cropper/cropper.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { FileService } from '../../shared/services/file.service';
import { TemplateDocConfig } from '../../shared/services/template-document.service';

export interface CropperDialogData {
  imgFile: File;
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  @Output() templateDocConfigEventEmitter = new EventEmitter<TemplateDocConfig>()

  currentFileName = '';
  imageFile: File | null = null;
  formGroup: FormGroup;
  urlPattern: RegExp = /http(s)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=/]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/g;

  formControls = {
    fileControl: new FormControl(null, Validators.required),
    url: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern(this.urlPattern)
      ]),
    fromLeft: new FormControl(true),
  }

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private fileService: FileService
  ) {
    this.formGroup = this.formBuilder.group(this.formControls)
  }

  ngOnInit(): void {
    this.formControls.fileControl.valueChanges.subscribe((file: File) => {
      this.imageFile = file || null;
      this.currentFileName = file.name;
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
    dialog.afterClosed()
      .pipe(take(1))
      .subscribe((data: Blob) => {
        if (data) {
          const croppedName = this.currentFileName.startsWith('(cropped)') ? this.currentFileName : '(cropped)' + this.currentFileName
          const croppedImgFile = this.fileService.blobToFile(data, croppedName)
          this.formControls.fileControl.setValue(croppedImgFile)
        }
      })
  }

  submit() {
    if (this.formGroup.valid) {
      this.templateDocConfigEventEmitter.emit(this.formGroup.value)
    }
  }

}
