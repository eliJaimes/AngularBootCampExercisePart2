/* ••[1]••••••••••••••••••••••••• posts-table.component.ts •••••••••••••••••••••••••••••• */

import { catchError, Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../entities/post.type';
import { PostsService } from '../../services/posts.service';

@Component({
	selector: 'app-posts-table',
	styleUrl: './posts-table.component.scss',
	templateUrl: './posts-table.component.html',
})
export class PostsTableComponent implements OnInit {
	private posts: Array<Post> = [];

	public filteredPosts: Array<Post> = [];

	private posts$!: Observable<Array<Post>>;

	public filteredPosts$!: Observable<Array<Post>>;

	public constructor(private readonly postsService: PostsService) {}

	public ngOnInit(): void {
		this.posts$ = this.postsService.posts$.pipe(
			catchError((error: Error): Observable<Array<Post>> => {
				console.error('❌ - Something wrong occurred: %O', error);
				return of([]);
			}),
		);

		this.filteredPosts$ = this.posts$;
	}

	public filterChangeHandler(event: string): void {
		const filterValue: string = event.toLowerCase();

		this.filteredPosts = this.posts.filter(
			(currentValue: Post): boolean =>
				currentValue.title.includes(filterValue) ||
				currentValue.body.includes(filterValue),
		);
	}

	public clearFilterHandler(): void {
		this.filteredPosts = this.posts;
	}
}
