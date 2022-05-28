import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUserDataLoadingComponent } from './item-user-data-loading.component';

describe('ItemUserDataLoadingComponent', () => {
  let component: ItemUserDataLoadingComponent;
  let fixture: ComponentFixture<ItemUserDataLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemUserDataLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUserDataLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
