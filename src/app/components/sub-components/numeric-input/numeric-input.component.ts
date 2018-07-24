import { Component, EventEmitter, Input, Output } from '@angular/core'
import CONFIG from '../../../app.config'
/**
 * Numeric Input
 *
 * Usage:
 * ```typescript
 * <numeric-input
 *  (valueChange)='valueChange($event)'
 *  [value]='value' 
 *  disabled='disabled'>
 * </numeric-input>
 * ```
 */
@Component({
  selector: 'numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent {

  /**
   * @hidden
   */
  public config = CONFIG

  /**
   * Disable user input
   */
  @Input()  disabled : boolean = false

  /**
   * Set input value
   */
  @Input()  value : number

  /**
   * Input value emit event change
   */
  @Output() valueChange = new EventEmitter<number>()

  /**
   * called when the input value changes
   * @param {number} eventValue the numeric input
   */
  public updateAmount(eventValue) {
    this.value = eventValue
    this.valueChange.emit(this.value)
  }

}
