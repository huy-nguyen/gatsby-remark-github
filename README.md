# gatsby-remark-github

[![npm](https://img.shields.io/npm/v/gatsby-remark-github.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-remark-github)
[![CircleCI](https://circleci.com/gh/huy-nguyen/gatsby-remark-github/tree/master.svg?style=shield)](https://circleci.com/gh/huy-nguyen/gatsby-remark-github/tree/master)

This is a plugin for [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark), which is in turn a plugin for [GatsbyJS](https://www.gatsbyjs.org/).
This plugin is a simple wrapper around the [`remark-github-plugin`](https://github.com/huy-nguyen/remark-github-plugin), which  replace links to GitHub files in Markdown files with the actual content of those files, wrapped in Markdown code blocks that can optionally be further processed by a syntax highlighter (e.g. [`gatsby-remark-prismjs`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs)).

## Installation

```bash
# npm:
npm install gatsby-remark-plugin
# or yarn:
yarn add gatsby-remark-plugin
```

## Usage:

First, [create a GitHub personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) with the `public_repo` scope (if you only need to access public repos) or `repo` scope (if you need to also access private repos).

If you haven't already installed [`gatsby-transformer-remark`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark), you should install it.
If you want to have syntax highlighting by PrismJS, install [`gatsby-remark-prismjs`](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs) as well.

Then in your `gatsby-config.js`, add this plugin to the list of plugins for `gatsby-transformer-remark`, preferably as the first one but definitely before `gatsby-remark-prismjs`:

```javascript
module.exports = {
  // other configs ...
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-github',
            options: {
              marker: 'GITHUB-EMBED',
              insertEllipsisComments: true,
              ellipsisPhrase: '...',
              useCache: true,
              cacheKey: 'gatsby-remark-github-v1',
              token: '<Your Github Token, preferably read from an environment variable>',
            }
          },
          // ... other plugins ...
          'gatsby-remark-prismjs',
        ]
      }
    }
  ]
}
```

For sample input and output, please refer to the usage section of [`remark-github-plugin`](https://github.com/huy-nguyen/remark-github-plugin#usage).
You can also find a full real-world setup in [this repo](https://github.com/huy-nguyen/demo-remark-github-plugin).

## Configuration
This plugin takes the exact same configuration as that of [`remark-github-plugin`](https://github.com/huy-nguyen/remark-github-plugin).


