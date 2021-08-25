import { Injectable } from '@angular/core';

export interface TemplateDocConfig {
  fileControl: File;
  url: string;
  fromLeft: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TemplateDocumentService {

  constructor() { }

  createDocument(src: string, templateDocConfig: TemplateDocConfig): Document {
    const doc = document.implementation.createHTMLDocument('New Document');
    const anchor = document.createElement('a');
    const img = document.createElement('img');
    img.src = src;
    anchor.append(img);
    anchor.href = templateDocConfig.url
    anchor.target = '_blank'
    doc.body.append(anchor);
    doc.body.style.cssText = `
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin: 0`;
    img.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      cursor: pointer;
      animation-duration: 3s;
      animation-name: slidein;
      `;
    const divNode = document.createElement("div");
    divNode.innerHTML = templateDocConfig.fromLeft ?
      "<br><style>@keyframes slidein { from {right: 100%} to {right: 0} }</style>" : "<br><style>@keyframes slidein { from {left: 100%} to {left: 0} }</style>";

    doc.body.appendChild(divNode);

    return doc;
  }
}
