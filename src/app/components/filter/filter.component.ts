/* ••[1]••••••••••••••••••••••••• filter.component.ts •••••••••••••••••••••••••••••• */

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-filter',
	styleUrl: './filter.component.scss',
	templateUrl: './filter.component.html',
})
export class FilterComponent {
	@Output() public filterChange: EventEmitter<string> =
		new EventEmitter<string>();

	public inputHandler(_inputEvent: Event, inputRefValue: string): void {
		// const valueFromEvent: string = (_inputEvent.target as HTMLInputElement)
		// 	.value;
		// console.log('valueFromEvent: %O', valueFromEvent);
		// console.log('inputRefValue: %O', inputRefValue);

		this.filterChange.emit(inputRefValue);
	}
}
