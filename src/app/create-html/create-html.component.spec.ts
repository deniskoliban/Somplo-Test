import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHtmlComponent } from './create-html.component';

describe('CreateHtmlComponent', () => {
  let component: CreateHtmlComponent;
  let fixture: ComponentFixture<CreateHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
