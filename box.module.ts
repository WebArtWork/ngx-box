import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { BoxComponent } from './box.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		BoxComponent
	],
	providers: []

})

export class BoxModule { }
