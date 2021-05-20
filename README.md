# jQuery Simple Text Counter

### Install

using npm:  

```
npm install jquery-simple-txt-counter
```

### Usage

```javascript
$('textarea').simpleTxtCounter({
    maxLength: 100,
    countText: 'Maximum',
    countElem: '<div class="form-text"></div>',
    lineBreak: false,
});
```

### Options

| Option    | Default   | Description                                               |
| --------- |:---------:| --------------------------------------------------------- |
| maxLength | undefined | Maximum size (`maxlength` attribute is used if it exists) |
| countText | undefined | Pre text before counter                                   |
| countElem | `<div/>`  | Counter element                                           |
| lineBreak | true      | If `false`, it does not allow line breakage               |