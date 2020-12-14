# react-component-collaborators

> react component

[![NPM](https://img.shields.io/npm/v/react-component-collaborators.svg)](https://www.npmjs.com/package/react-component-collaborators) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Open source project that I created as NPM package to practice React framework and TypeScript.

Is a highly customizable React component that display images with information that could be used to show clients in homepage or employees/team members.

You can check the [Demo](https://carlosdsv.github.io/react-component-collaborators/) for easier implementation.

## Install

```bash
npm install --save react-component-collaborators
```

## Usage

```tsx
import React, { Component } from 'react'
import { CollaboratorsList } from 'react-component-collaborators'
import { CardComplete } from 'react-component-collaborators'
import { CardMinimal } from 'react-component-collaborators'

class Example extends Component {
  render() {
    return (
      <CollaboratorsList
        collaboratorsArray={collaboratorsArray}
        listStyleObject={listStyleObject}
      >
        <CardComplete
          cardStyleObject={cardStyleObject}
          imagePosition={imagePosition}
        />
      </CollaboratorsList>
    )
  }
}
```

## License

MIT © [carlosdsv](https://github.com/carlosdsv)
