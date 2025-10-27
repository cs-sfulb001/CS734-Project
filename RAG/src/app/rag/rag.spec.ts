import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAG } from './rag';

describe('RAG', () => {
  let component: RAG;
  let fixture: ComponentFixture<RAG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RAG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
