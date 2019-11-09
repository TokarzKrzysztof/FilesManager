import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftSideComponent } from './top-left-side.component';

describe('TopLeftSideComponent', () => {
  let component: TopLeftSideComponent;
  let fixture: ComponentFixture<TopLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopLeftSideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
