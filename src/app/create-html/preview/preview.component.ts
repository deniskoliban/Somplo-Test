import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TemplateDocConfig, TemplateDocumentService } from '../../shared/services/template-document.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements AfterViewInit {

  @ViewChild('frameElement') iframeRef: ElementRef<HTMLIFrameElement> | undefined;
  @Input() set templateDocConfig(templateDocConfig: TemplateDocConfig | null) {
    if (templateDocConfig?.fileControl && this.iframeRef?.nativeElement) {
      const reader = new FileReader();
      reader.readAsDataURL(templateDocConfig.fileControl);
      reader.onload = () => {
        const doc = this.templateDocumentService.createDocument(reader.result as string, templateDocConfig)
        const destDocument = this.iframeRef?.nativeElement?.contentDocument;
        const srcDoc = doc.documentElement;
        if (destDocument) {
          const newNode = destDocument.importNode(srcDoc, true);
          destDocument.replaceChild(newNode, destDocument.documentElement);
        }
      };
    }
  }

  constructor(private templateDocumentService: TemplateDocumentService) { }

  public ngAfterViewInit(): void {
    this.iframeRef?.nativeElement?.contentDocument?.body?.append('Your document will be displayed here...')
  }

}
