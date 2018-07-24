import { Component, EventEmitter, Input, Output } from '@angular/core'

/**
 * Select Option
 *
 * Usage:
 * ```typescript
 * <select-option
 *  (optionChange)='optionChange($event)' 
 *  [options]='options'
 * </select-option>
 * ```
 */
@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent {

  /**
   * List of options
   */
  public _options : Array<string> = []

  /**
   * Selected option
   */
  public _selectedOption : string
  
  /**
   * Dynamically setting the list of options
   */
  @Input() set options(theOptions : Array<string>) {
    this._options = theOptions
    this._selectedOption = this._options !== undefined ? this._options[0] : undefined
    this.selectedOptionChange(this._selectedOption)
  }
  
  /**
   * Emitted option event change
   */
  @Output() optionChange = new EventEmitter<string>()

  /**
   * Selected option change event
   */
  public selectedOptionChange(optionValue) {
    this.optionChange.emit(optionValue)
  }

  /**
   * Checks and displays the currenctly selected option
   */
  public viewSelected(value1, value2) {
    return value1 === value2
  }

}
