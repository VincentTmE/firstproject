import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnotherComponent } from './app-another.component';

describe('AppAnotherComponent', () => {
  let component: AppAnotherComponent;
  let fixture: ComponentFixture<AppAnotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAnotherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
