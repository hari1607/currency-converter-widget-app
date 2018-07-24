import { Component, ChangeDetectorRef, AfterViewChecked, Input } from '@angular/core'
import { CurrencyConverterService, CurrencyResultObject } from './currency-converter.service'
import { environment } from '../../../../environments/environment'
import CONFIG from '../../../app.config'
/**
 * Currency Converter
 *
 * Usage:
 * ```typescript
 * <currency-converter>
 * </currency-converter>
 * ```
 */
@Component({
  selector: 'currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements AfterViewChecked {

  /**
   * Currency amount
   */
  private amountValue : number

  /**
   * Selected amount (base) currency
   */
  private amountCurrency : string

  /**
   * Selectable currencies
   */
  public amountCurrencies = CONFIG.currencyConverter.defaultCurrencies

  /**
   * Converted currency result value
   */
  public resultValue : number

  /**
   * Selected currency result
   */
  private resultCurrency : string

  /**
   * Selectable result currencies
   */
  public resultCurrencies : Array<string> = []

  /**
   * Selected currency results
   */
  private apiResult: CurrencyResultObject

  /**
   * API error flag
   */
  apiError: boolean = false

  /**
   * Private modifiers
   */
  constructor( 
    private currencyConverterService : CurrencyConverterService, 
    private changeDetectionRef: ChangeDetectorRef 
  ) { }

  /**
   * the inputed amount changes
   * @param {number} amount the inputed amount to convert into a different amount based on the currencies selected
   */
  public amountValueChange(amount) {
    this.amountValue = amount
    this.result()
  }
  
  /**
   * called when the selected currency changes
   * @param {string} currency the selected currency amount
   */
  public amountCurrencyChange(currency) {
    if(this.amountCurrency !== currency) {
      this.amountCurrency = currency
      this.latestCurrencyInformation(currency)
    }
  }

  /**
   * called when the currency result changes
   * @param {string} currency the selected currency result
   */
  public resultCurrencyChange(currency) {
    this.resultCurrency = currency
    this.result()
  }

  /**
   * the inputed amount changes
   * @param {string} currency the selected currency amount
   */
  public latestCurrencyInformation(currency) {

    // 1) determine currency result options
    let selectedCurrencyIndex = this.amountCurrencies.indexOf(currency)
    this.resultCurrencies = this.amountCurrencies.slice()
    this.resultCurrencies.splice(selectedCurrencyIndex, 1)
    this.resultCurrency = this.resultCurrencies[0]

    // 2) get new currency results
    this.currencyConverterService.convertCurrency({
      base: this.amountCurrency, 
      symbols: this.resultCurrencies.toString()
    }).subscribe(
      <CurrencyResultObject>(data) => {
        this.apiError = false
        this.apiResult = data
        this.result()
      },
      err => {
        if(!err.ok) {
          this.apiError = true
          this.apiResult = undefined
          delete this.resultValue
        } 
      }
    )
  }

  /**
   * Calculates and returns the proper currency exchange result
   */
  private result() {
    if(this.amountValue === undefined || this.apiResult === undefined) {
      return
    }
    let theResult = Math.round((this.amountValue * this.apiResult.rates[this.resultCurrency]) * 100) / 100
    if( isNaN(theResult) ) {
      delete this.resultValue
    } else {
      this.resultValue = theResult
    }
  }

  /**
   * @hidden
   */
  ngAfterViewChecked(){
    if (!environment.production) {
      this.changeDetectionRef.detectChanges()
    }
  }

}
