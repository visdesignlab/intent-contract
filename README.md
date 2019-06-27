## Model

The users interaction with the system are modelled as an array of interactions `Array<Interactions>`.
In addition to selections, we also keep track of when the user changes the axes of the visualization.

## Development

The dependencies can be install using `yarn`:

```bash
yarn install
```

Builds can be prepared using:

```bash
yarn run build
yarn run dev # watches for changes
```
    
To perform linter checks you there is:

```bash
yarn run lint
yarn run lint-fix # tries to fix some of the warnings
```
