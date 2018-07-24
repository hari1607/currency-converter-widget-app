import { Component, Input } from '@angular/core'

/**
 * Tooltip
 *
 * Usage:
 * ```typescript
 * <tooltip
 *  buttonText='buttonText' 
 *  bodyText='bodyText'
 * </tooltip>
 * ```
 */
@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  /**
   * Sets button text
   */
  @Input() buttonText : string

  /**
   * Sets body text
   */
  @Input() bodyText : string

  /**
   * Show / hide tooltip property
   */
  public showToolTip : boolean = false

}
