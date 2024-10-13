import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppModalComponent } from './whats-app-modal.component';

describe('WhatsAppModalComponent', () => {
  let component: WhatsAppModalComponent;
  let fixture: ComponentFixture<WhatsAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsAppModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
