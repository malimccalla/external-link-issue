### Steps to reproduce

1. Clone this repo
2. `yarn install`
3. `yarn run dev`
4. Hover over the button.

### Expected

Tool tip should correctly animate up and display the text "Hello"

### Actually happens

The words "Hello" just appears in the dom

### Additional info

If you remove the `<link>` tag from `pages/index.js` and refresh the page everything works as expected. The link tag can be to any external resource and doesn't necessarily need to link to css (the tag simply being `<link />` will also cause this issue)
