import { Component, OnDestroy } from '@angular/core';
import { TemplateDocConfig } from '../shared/services/template-document.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-create-html',
  templateUrl: './create-html.component.html',
  styleUrls: ['./create-html.component.css']
})
export class CreateHtmlComponent implements OnDestroy{
  templateDocSubject$ = new BehaviorSubject<TemplateDocConfig | null>(null)

  constructor() { }

  public ngOnDestroy(): void {
    this.templateDocSubject$.complete();
  }
}
