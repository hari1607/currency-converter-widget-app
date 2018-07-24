import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Input Select Combo
 *
 * Usage:
 * ```typescript
 * <input-select-combo
 *  label='label'
 *  (valueChange)='valueChange($event)'
 *  [value]='value' 
 *  disabled='disabled'
 *  (optionChange)='optionChange($event)' 
 *  [options]='options'>
 * </input-select-combo>
 * ```
 */
@Component({
  selector: 'input-select-combo',
  templateUrl: './input-select-combo.component.html',
  styleUrls: ['./input-select-combo.component.scss']
})
export class InputSelectComboComponent  {

  /**
   * Combo label
   */
  @Input() label : boolean

  /**
   * Disable the numberic input
   */
  @Input() disableInput : boolean

  /**
   * Numberic input value
   */
  @Input() value : number

  /**
   * Numberic value change
   */
  @Output() valueChange = new EventEmitter <Array<string>> ()

  /**
   * Drop down selectable options list
   */
  @Input() options : Array<string>

  /**
   * Selectable option change
   */
  @Output() optionChange = new EventEmitter <Array<string>> ()

}
