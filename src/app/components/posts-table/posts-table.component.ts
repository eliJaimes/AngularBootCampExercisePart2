/* ••[1]••••••••••••••••••••••••• posts-table.component.ts •••••••••••••••••••••••••••••• */

import {
	catchError,
	combineLatest,
	map,
	Observable,
	of,
	startWith,
	Subject,
} from 'rxjs';
import { Component } from '@angular/core';
import { Post } from '../../entities/post.type';
import { PostsService } from '../../services/posts.service';

@Component({
	selector: 'app-posts-table',
	styleUrl: './posts-table.component.scss',
	templateUrl: './posts-table.component.html',
})
export class PostsTableComponent {
	private filterChangeSubject$$: Subject<string> = new Subject<string>();

	private filterChange$: Observable<string> =
		this.filterChangeSubject$$.asObservable();

	private posts$: Observable<Array<Post>> = this.postsService.posts$.pipe(
		catchError((error: Error): Observable<Array<Post>> => {
			console.error('❌ - Something wrong occurred: %O', error);
			return of([]);
		}),
	);

	public filteredPosts$: Observable<Array<Post>> = combineLatest({
		filterChange: this.filterChange$.pipe(
			startWith(''),
			map((filterChangeValue: string): string =>
				filterChangeValue.toLowerCase(),
			),
		),
		posts: this.posts$,
	}).pipe(
		map(
			({
				filterChange,
				posts,
			}: {
				filterChange: string;
				posts: Array<Post>;
			}): Array<Post> => {
				return posts.filter(
					(currentValue: Post): boolean =>
						currentValue.title.includes(filterChange) ||
						currentValue.body.includes(filterChange),
				);
			},
		),
	);

	public constructor(private readonly postsService: PostsService) {}

	public filterChangeHandler(event: string): void {
		this.filterChangeSubject$$.next(event);
	}

	public clearFilterHandler(): void {
		this.filterChangeSubject$$.next('');
	}
}
