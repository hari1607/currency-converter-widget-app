import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import CONFIG from '../../../app.config'

/**
 * Currency Result Object Interface
 */
export interface CurrencyResultObject {
  base: string
  date: string
  rates: CurrencyRateObject
}

/**
 * Currency Rate Object Interface
 */
interface CurrencyRateObject {
  CAD : number
  USD : number
  EUR : number
}

/**
 * Currency Converter Service
 */
@Injectable()
export class CurrencyConverterService {

  /**
   * @hidden
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Currency Converter API URL
   */
  private CURRENCY_COVERTER_URL = CONFIG.currencyConverter.apiUrl

  /**
   * Creating currency request
   * @param {object} parameters attaches base currency and other currency symbols to request
   */
  public convertCurrency(parameters) {
    let options = { params: parameters }
    return this.get(this.CURRENCY_COVERTER_URL, options)
  }

  /**
   * general httpClient Request
   * @param {string} url designated url
   * @param {object} parameters get request payload
   */
  private get(url, options) {
    return this.httpClient.get<CurrencyResultObject>(url, options)
  }

}
