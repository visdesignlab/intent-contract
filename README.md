## Model

The users interaction with the system are modelled as an array of interactions `Array<Interactions>`.
In addition to selections, we also keep track of when the user changes the axes of the visualization.

### Usage

The contract is provided using TypeScript interfaces and enums.
We use [quicktype](https://quicktype.io/) to automagically generate the corresponding Python 3.7 bindings. 
To create the Python bindings you can use the following command:

```bash
yarn run bindgen
```

The bindings will end up in `dist/interactions.py`.

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
