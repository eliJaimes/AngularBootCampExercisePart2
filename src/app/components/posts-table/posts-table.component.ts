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
import { Component, OnInit } from '@angular/core';
import { Post } from '../../entities/post.type';
import { PostsService } from '../../services/posts.service';

@Component({
	selector: 'app-posts-table',
	styleUrl: './posts-table.component.scss',
	templateUrl: './posts-table.component.html',
})
export class PostsTableComponent implements OnInit {
	private posts$!: Observable<Array<Post>>;

	public filteredPosts$!: Observable<Array<Post>>;

	private filterChangeSubject$$: Subject<string> = new Subject<string>();

	private filterChange$: Observable<string> =
		this.filterChangeSubject$$.asObservable();

	public constructor(private readonly postsService: PostsService) {}

	public ngOnInit(): void {
		this.posts$ = this.postsService.posts$.pipe(
			catchError((error: Error): Observable<Array<Post>> => {
				console.error('❌ - Something wrong occurred: %O', error);
				return of([]);
			}),
		);

		this.filteredPosts$ = combineLatest({
			filterChange: this.filterChange$.pipe(startWith('')),
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
					console.log('filterChange: %O', filterChange);
					console.log('posts: %O', posts);

					const filterValue: string = filterChange.toLowerCase();

					return posts.filter(
						(currentValue: Post): boolean =>
							currentValue.title.includes(filterValue) ||
							currentValue.body.includes(filterValue),
					);
				},
			),
		);
	}

	public filterChangeHandler(event: string): void {
		console.log('%c\nfilterChangeHandler', 'color: SpringGreen');
		console.log('event: %O', event);
		this.filterChangeSubject$$.next(event);
	}

	public clearFilterHandler(): void {
		console.log('%c\nclearFilterHandler', 'color: SpringGreen');
		this.filterChangeSubject$$.next('');
	}
}
