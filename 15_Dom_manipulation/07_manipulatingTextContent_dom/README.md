# textContent
### Returns a string of all the text contained in a given element

```html
<p>
    This is an <strong>awesome</strong> paragraph
</p>
```

```javascript
//Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent
tag.textContent // "This is an awesome paragraph

//alter the textContent:
tag.textContent = "blah, blah, blah...";
```
# innerHTML
### Similar to textContent, except it returns a string of all the HTML contained ni a given element
```html
<p>
    This is an <strong>awesome</strong> paragraph
</p>
```

```javascript
//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML //"This is an <strong>awesome</strong> paragraph"
```

```javascript
document.querySelector("h1").textContent = "END OF THIS LESSON" //Changes h1 title to END IF THIS LESSON
```

### .textContent renders everything in it as text and .innerHTML renders everything as HTML 