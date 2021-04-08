import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuprofileComponent } from './sidebar-menuprofile.component';

describe('SidebarMenuprofileComponent', () => {
  let component: SidebarMenuprofileComponent;
  let fixture: ComponentFixture<SidebarMenuprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
