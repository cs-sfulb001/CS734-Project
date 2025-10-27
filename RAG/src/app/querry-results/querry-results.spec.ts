import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerryResults } from './querry-results';

describe('QuerryResults', () => {
  let component: QuerryResults;
  let fixture: ComponentFixture<QuerryResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuerryResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuerryResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
