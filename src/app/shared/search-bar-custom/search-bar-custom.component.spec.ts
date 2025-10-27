import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCustomComponent } from './search-bar-custom.component';

describe('SearchBarCustomComponent', () => {
  let component: SearchBarCustomComponent;
  let fixture: ComponentFixture<SearchBarCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
