import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Htz } from './htz';

describe('Htz', () => {
  let component: Htz;
  let fixture: ComponentFixture<Htz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Htz],
    }).compileComponents();

    fixture = TestBed.createComponent(Htz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
