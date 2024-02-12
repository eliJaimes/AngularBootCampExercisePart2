# First commit

- Use the same application as Exercise 1

# Change post service

- Refactor the service to expose an observable property instead of a method, this will allow to use a declarative approach instead of a procedural one

# Avoid subscribing on the controller

- Refactor PostsTableComponent so instead of subscribing to the posts$ observable in the controller, we will subscribe in the view, using the async pipe

- The async pipe will handle the subscription/un subscription for us

- Note: this change will break filtering mechanism

# Create a Subject to collect filter changes

- Create a Subject called filterChangeSubject$$

- From tha Subject expose an observable calling asObservable method

- Use filterChangeSubject$$ to emit next notifications on the filterChange$ observable

# Add combineLatest operator to compose the filteredPosts$ Observable

- Instead of assigning the posts$ observable directly to the filteredPosts$ observable, run it trough a combineLatest creation operator

- Until this point the effect will be the same as a simple assignation

# Add a second source to the combineLatest operator

- Include the filterChange$ observable as a source in the combineLatest creation operator

- Since the filterChange$ observable only emits values when we dispatch them trough the filterChangeSubject$$ subject, we will not have any emissions at first

- Add a startWith operator to the filterChange$ observable

# Filter the posts based on filterChange values

- Add logic to filter the posts based on the filterChange$ emitted values

# Add clearFilter logic

- On clearFilterHandler method emit an empty value on the filterChangeSubject$$ subject

- Clean old code

# Refactor and clean a little bit more
