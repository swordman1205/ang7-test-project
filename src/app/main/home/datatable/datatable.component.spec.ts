import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDatatableComponent } from './datatable.component';

describe('HomeDatatableComponent', () => {
  let component: HomeDatatableComponent;
  let fixture: ComponentFixture<HomeDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
