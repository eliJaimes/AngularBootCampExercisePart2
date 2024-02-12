/* ••[1]••••••••••••••••••••••••• post-item.component.ts •••••••••••••••••••••••••••••• */

import { Component, Input } from '@angular/core';
import { Post } from '../../entities/post.type';

@Component({
	selector: 'app-post-item',
	styleUrl: './post-item.component.scss',
	templateUrl: './post-item.component.html',
})
export class PostItemComponent {
	@Input() public post!: Post;
}
