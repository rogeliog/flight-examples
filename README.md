# Flight Examples

## Development

```bash
npm install & bower install
npm start
```

# Adding new code examples.

For each new code example use the following file structure:

* Hogan template: `/views/examples/my_example.hogan`
* Flight compontents `/public/examples/my_example/js`
* CSS `/public/examples/my_example/css`


Add the hogan partial to `/views/examples.hogan` and also to `/routes/index.js`

If you are adding some CSS, `@import` it at the top of `/public/css/main.css`


Each example has the following HTML structure:

```html
  <div class="Example" data-example-name="my_example">
    
    <div class="Example-header">
      <div class="Example-title"> The title </div>
      <div class="Example-description"> Lorem ipsum </div>
    </div>
    
    <div class="Example-code-wrapper">
      <textarea class="Example-code"> <!-- Highlighted code-->
         function youCode() {
         }
      </textarea>
    </div>
    
    <div class="Example-app">
      <!-- Your example "app" -->
    </div>
  </div>
```


## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
