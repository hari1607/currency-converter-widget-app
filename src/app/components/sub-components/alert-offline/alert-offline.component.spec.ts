import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AlertOfflineComponent } from './alert-offline.component'

describe('AlertOfflineComponent', () => {
  let component: AlertOfflineComponent
  let fixture: ComponentFixture<AlertOfflineComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertOfflineComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertOfflineComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
