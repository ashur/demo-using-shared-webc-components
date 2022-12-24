# Using Shared WebC Components

This repo demonstrates how easy (and rad) it is to import external [WebC](https://github.com/11ty/webc) components that have been installed via NPM.

```html
<confetti-button
    text="It’s Confetti Time"
    webc:import="npm:@aaashur/demo-shared-webc-components"
></confetti-button>
```

[Read more](https://multiline.co/mment/2022/12/importing-external-webc-components) about why this is especially great for Eleventy projects that use statically generated components.

## Demo

[See a live demo](https://ashur-shared-webc-demo.netlify.app) of the imported component in action.
