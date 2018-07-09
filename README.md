# GENERATE HTML

> Function to generate HTML strings in Javascript.

## Details

See the examples below on how to generate HTML using the `ghtml` function:

### Example 1

```javascript
var headers = ghtml({
    tag: 'tr',
    append: [
        ghtml({ tag: 'th', append: 'Name' }),
        ghtml({ tag: 'th', append: 'Age' }),
        ghtml({ tag: 'th', append: 'Gender' })
    ]
});

var rows = [ headers ];

var row = ghtml({
    tag: 'tr',
    append: [
        ghtml({ tag: 'td', append: 'Richard' }),
        ghtml({ tag: 'td', append: '30' }),
        ghtml({ tag: 'td', append: 'Male' })
    ]
});

rows.push(row);

var table = ghtml({
    tag: 'table',
    attr: {
        'class': 'class_name'
    },
    append: rows
})
```

```html
<table class="class_name">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
    </tr>
    <tr>
        <td>Richard</td>
        <td>30</td>
        <td>Male</td>
    </tr>
</table>
```

### Example 2

```javascript
var link = ghtml({
    tag: 'p',
    attr: {
        'href': 'https://www.google.co.uk'
    },
    append: 'Click Here'
});
```

```html
<a href="https://www.google.co.uk">Click Here</a>
```

### Example 3

```javascript
var br = '<br><br>';

var body = ghtml({
    tag: 'a',
    attr: {
        'class': 'class_name'
    },
    append: [
        'Hi', br,
        'Please see ... details below.', br,
        'Regards,', br,
        'Bob', br
    ]
});
```

```html
<p class="class_name">
    Hi<br>
    <br>
    Please see ... details below.<br>
    <br>
    Regards,<br>
    <br>
    IPautomata<br>
    <br>
</p>
```