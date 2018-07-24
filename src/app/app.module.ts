// Angular Imports
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {FormsModule} from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http'

// External Imports

import { NgxCurrencyModule } from 'ngx-currency'

// Components
import { AppComponent } from './app.component'
import { NumericInputComponent, SelectOptionComponent, TooltipComponent, AlertOfflineComponent } from './components/sub-components'
import { InputSelectComboComponent } from './components/input-combo'
import { CurrencyConverterComponent, CurrencyConverterService } from './components/main-components'



@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    NumericInputComponent,
    SelectOptionComponent,
    TooltipComponent,
    AlertOfflineComponent,
    InputSelectComboComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
