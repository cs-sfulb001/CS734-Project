import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAGMessageDisplay } from './ragmessage-display';

describe('RAGMessageDisplay', () => {
  let component: RAGMessageDisplay;
  let fixture: ComponentFixture<RAGMessageDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RAGMessageDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAGMessageDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
