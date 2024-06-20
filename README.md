# jQuery Simple Text Counter

### Install

using npm:  

```
npm install jquery-simple-txt-counter
```

### Usage

```javascript
import 'jquery-simple-txt-counter/jquery-simple-txt-counter';
```

or

```html
<script src="jquery-simple-txt-counter/jquery-simple-txt-counter.js"></script>
```

and

```javascript
$('textarea').simpleTxtCounter({
    maxLength: 100,
    countText: 'Maximum:',
    countTextAfter: ' (min 15)',
    countElem: '<div class="form-text"></div>',
    lineBreak: false,
});
```

also, add function to change text color based on "minlength" of textarea

```javascript
$('textarea').keyup(function () {
    min = this.getAttribute("minlength");
    var len = $(this).val().length;
    if (len >= min) {
        $('#simple-txt-counter-0').attr('style', 'color:inherit');
    } 
    else {
        $('#simple-txt-counter-0').attr('style', 'color:red');
    }
});
```

### Example

* With customized insert  

```html
<div class="btn-group">
    <textarea minlength="15" maxlength="200"></textarea>
    <button type="button">ADD</button>
</div>
```

```javascript
$('textarea').simpleTxtCounter({
    after: '.btn-group'
});
```

### Options

| Option    | Default   | Description                                               |
| --------- |:---------:| --------------------------------------------------------- |
| after     | undefined | selector to after inserting the counter element           |
| maxLength | undefined | Maximum size (`maxlength` attribute is used if it exists) |
| countText | undefined | Pre text before counter                                   |
| countElem | `<div/>`  | Counter element                                           |
| lineBreak | true      | If `false`, it does not allow line breakage               |
