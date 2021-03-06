
# Style
### The style property is one way to manipulate an element's style

```javascript
//SELECT
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue"
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
```
## This is not DRY and a bad idea. 
### It is recommended for styles to be defined in a seperate file or files. The style property allows for quick styling, for example MDN.

## Separation of Concerns


![Image of seperation of concerns](sepCon.png)

# An Alternative
### Rather than directly manipulate style with JS, we can define a CSS class and then toggle it on or off with JS

```javascript
    var tag = document.getElementById("highlight");
    tag.style.color = "blue"
    tag.style.border = "10px solid red";
```

```css
/* DEFINE A CLASS IN CSS */
.some-class {
    color: blue;
    border: 10px solid red;
}
```

```javascript
var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");
```

# classList 
## A read-only list that contains the classes for a given element. It is not an array. 

```css
.another-class {
    color: purple;
    fontSize: 76px;
}
```

```javascript
var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");