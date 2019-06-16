import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveViewerComponent } from './primitive-viewer.component';

describe('PrimitiveViewerComponent', () => {
  let component: PrimitiveViewerComponent;
  let fixture: ComponentFixture<PrimitiveViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimitiveViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
