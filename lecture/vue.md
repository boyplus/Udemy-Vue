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

```javascript
new Vue({
  el: '#app',
  data:{
    counter: 0
  },
  methods:{
    increase: function(){
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
  data:{
    counter: 0,
    secondCounter: 0
  },
  methods:{
    result: function(){
      console.log('methods');
     	return this.count > 5;
  	}
  }
  computed:{
  	out: function(){
  		console.log('computed');
  		return this.counter > 5;
		}
	}
});
```



From that code, methods **result()** will be executed everytime we click the button, but for the **out** function it will be executed only when we click on increase or decrease (not increase second button) because it listen for only **counter**

***Note** we don't have to invoked the out function, we call it **as the variable** (no parentheses)

- Watch -> the object that hold the function (name of function is similar to data) for watching the change of variable (function will be executed everytime that value has changed)
- 

