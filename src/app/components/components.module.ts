/* ••[1]••••••••••••••••••••••••• components.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { NgModule } from '@angular/core';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsTableComponent } from './posts-table/posts-table.component';

@NgModule({
	declarations: [FilterComponent, PostItemComponent, PostsTableComponent],
	/* NOTE: FilterComponent, PostsTableComponent, PostItemComponent need to be
	exported so other modules can see it */
	exports: [FilterComponent, PostItemComponent, PostsTableComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}
