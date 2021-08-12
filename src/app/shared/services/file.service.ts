import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  blobToFile(blob: Blob, name: string): File {
    return new File([blob], name, { type: blob.type })
  }
}
