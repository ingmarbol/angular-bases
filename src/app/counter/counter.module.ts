// Agrupador en donde vamos a tener la definición de los Componentes

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent],
  exports:[
    CounterComponent
  ]
})
export class CounterModule {

}
