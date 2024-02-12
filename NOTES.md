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
