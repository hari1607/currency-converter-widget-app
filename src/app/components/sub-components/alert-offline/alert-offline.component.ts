import { Component, Output, EventEmitter } from '@angular/core'

/**
 * Banner Error
 *
 * Usage:
 * ```typescript
 * <alert-offline 
 *  (refresh)='refresh($event)'>
 * </alert-offline>
 * ```
 */
@Component({
  selector: 'alert-offline',
  templateUrl: './alert-offline.component.html',
  styleUrls: ['./alert-offline.component.scss']
})

export class AlertOfflineComponent {

  /**
   * Refresh Button Click Event
   */
  @Output() refresh = new EventEmitter<boolean>()
}