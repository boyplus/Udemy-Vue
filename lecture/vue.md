# Udemy-Vue

**Chaper1 "Introduction"**

When we want to create vue project we have to follow this

1. install **node**

2. Install **vue cli**

   ```bash
   yarn global add @vue/cli
   ```

3. create project

   ```bash
   vue create project-name
   ```

**OR**

include vue-js in html file

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```



**Coding step**

In the **pure js** file + No-Library (main.js) we have to create the Vue instance

In the vue instance we can pass many properties such as el, data, methods, computed



**Example**

```html
<!-- index.html -->
<div id="app">
    {{myMessage}}
</div>
```

```javascript
//main.js
new Vue({
    el: '#app',
    data: {
        myMessage: 'Hello world'
    }
});
```



**Another example**

```javascript
new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        increase: function() {
            this.counter++;
        }
    }
});
```



**Properties of Vue instance**

- **el** -> hold the id, class of dom element in html file that we want to control

- **data** -> the object which hold the key and value that we want to collect.

- **methods** -> the object which hold the function and these function make the html to be **rerendered** every time that data has been changed value

  Foe example, when we click button and we invoked the function and update the count value -> **html will be rerender**).

- **Computed** -> similar to methods object,  but the difference is the purpose of computed is to listen to some variable, will be executed every time that the value in computed function is changed (but for the method it listen for all variable)

  

```html
<div id="app">
  <button @click="counter++">Increase</button>
  <button @click="counter--">Decrease</button>
  <button @click="secondCounter++">Increase Second</button>
  {{result()}} {{out}}
</div>
```



```javascript
new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    methods: {
        result: function() {
            console.log('methods');
            return this.count > 5;
        }
    },
    computed: {
        out: function() {
            console.log('computed');
            return this.counter > 5;
        }
    }
});
```



From that code, methods **result()** will be executed everytime we click the button, but for the **out** function it will be executed only when we click on increase or decrease (not increase second button) because it listen for only **counter**

***Note** we don't have to invoked the out function, we call it **as the variable** (no parentheses)

- **Watch** -> the object that hold the function (name of function is similar to data) for watching the change of variable (function will be executed everytime that value has changed)



**Display data in vue to the html**

-> we can access the variable in data to html by using **{{myVar}}**

```javascript
new Vue({
    el: '#app',
    data: {
        number: 12
    }
});
```

```html
<div id="app">
  <p>{{number}}</p>
</div>
```



**Vue-directive**

- **v-on:** -> listen to the event ex. input, click, mousemove

  ```html
  <div v-on:click="increase">Increase</div>
  ```

- **v-bind:** -> bind the value in data for using in html attribute, we use **v-bind:** because the value in attribute in html is in "", so we cannot access data in vue by using {{}}

  ```html
  <div v-bind:id="dynamicId"></div>
  ```

- **v-once:** -> render the element only once (if the data change, it will not be rerendered

***Note** in methods of vue instance, if we want to access the variable in data, we have to use **this** key word ex. **this.counter++;**



**Shorthand for v-on: directive**

-> we can use @ ex. **@click="increase"** is similar to **v-on:click="increase"**



**Shorthand for v-bind: directive**

-> we can use **:** for the shorthand for **v-bind:**

```html
<a v-bind:href="url"></a>
<a :href="url"></a>
```



**Handle the input**

-> we can use **v-on:input** to listen to the **inputChange** event, we can also receive the event object from input element

```html
<input type="text" v-on:input="myChange" />
```

```javascript
new Vue({
    data: {
        msg: ''
    },
    methods: {
        myChange: function(event) {
            this.msg = event.target.value;
        }
    }
});
```



**Two way of binding**

-> we can use v-model: to handle the input

```html
<input type="text" v-model="msg">
```

```javascript
new Vue({
    data: {
        msg: ''
    }
});
```

**"The x value in data will be the text from input"**

<>

**The callback function in Vue directive**

-> if there is only one statement in callback function, we can pass that statement in vue directive

```html
<button @click="counter++">Increase</button>
```

<br>

**Dynamic Styling with CSS classes**

-> we can pass the object of css class that we want to add in html by the object is className : someBooleanVar

-> the css classes will be add to the element of the boolean var is true

```html
<div @click="attachRed = !attachRed" :class="{red:attachRed, blue:!attachRed}">
  Hello class
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        attachRed: false
    }
});
```

<br>

**Dynamic Styling with CSS classes using object and names**

-> we can use the computed function to return the object for css class in html

-> easy to read

```html
<div :class="divClasses">
    Hello class
</div>
<div :class="[color,font]">
    Hello name class
</div>
```

```javascript
new Vue({
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    }
});
```

<br>

**Setting css style without class**

-> color is the variable in data of vue instance

```html
<div :style="{backgroundColor: color}">
    My style without css
</div>
```

```html
<div :style="myStyle">
    My style without css and computed function
</div>
```

```javascript
new Vue({
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }
    }
});
```





**Conditional Rendering with v-if**

-> we can render some element by using **v-if** and **v-else**

-> Syntax is **v-if="booleanValue"**

```html
<div id="app">
    <div v-if="showParagraph">This is a paragraph</div>
    <div v-else>This is another paragraph</div>
    <button @click="showParagraph=!showParagraph">
        Toggle paragraph
    </button>
</div>
```





```javascript
new Vue({
    el: '#app',
    data: {
        showParagraph: true
    }
});
```

***Note we can also make the nested if in html and use the method that return some boolean value in v-if**



<hr>

**Rendering List with v-for**

-> when we have the list of items that we want to render we can accomplish by using **v-for**

**Syntax**

```html
<div v-for="value in values">{{value}}</div>
```

-> we can also map the **index** in v-for like this

```html
<div v-for="(value,index) in values">{{index}}: {{value}}</div>
```



**Example**

```html
<div id="app">
    <ul>
        <li v-for="(ingredient,index) in ingredients">
            {{ingredient}} ({{index}})
        </li>
    </ul>
    <hr />
    <ul>
        <li v-for="person in persons">
            <div v-for="(value,key,index) in person">
                {{key}}: {{value}} ({{index}})
            </div>
        </li>
    </ul>
    <hr />
    <template v-for="(ingredient,index) in ingredients">
        <p>{{ingredient}}</p>
        <p>{{index}}</p>
    </template>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            { name: 'boy', age: 19, color: 'red' },
            { name: 'new', age: 20, color: 'green' },
            { name: 'now', age: 12, color: 'blue' }
        ]
    }
});
```





**Looping through a list of number**

```html
<span v-for="n in 10">{{n}}</span>
```

<br/>

### Add key to the element

- we should assign the **key** to the element that we create in **v-for** because we will have to kepp track of them

```html
<li v-for="ingredient in ingredients" :key="ingredient">{{ingredient}}</li>
```

