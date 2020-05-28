---
path: "/functional-programming"
date: 2020-02-07T17:12:33.962Z
title: "Functional Programming"
---

What is functional programming? Several qualities make code functional, and in this blog post, I will try to explain the properties of functional programming.

Functional programming is declarative rather than imperative. Declarative statements tell us what we are doing, whereas imperative statements tell us how we are doing it. For example, "I am baking a cake" is declarative; however, if I told you the recipe to bake a cake, that would be imperative.
A code example would be:

```
//declarative code
function doubleArr (arr) {
  const doubleArr = arr.map(x => x *2 );
  return doubleArr;
}

//imperative code
function doubleArr(arr) {
  const newArr = [];
  let x;
  for (let i = 0; i < arr.length; i++){
  	x = arr[i] * 2;
  	newArr.push(x);
  }
  return newArr;
}
```

Functional code tries not to change the scope and to avoid globalization. There is a quote from "The Pragmatic Programmer" by Andy Hunt and Dave Thomas, which states, "coupling is the enemy of change because it links together ideas that must change in parallel." There is a delicate balance between keeping code modular and figuring out which parts of the application must communicate for the application to be functional.

Functional programming utilizes pure functions. A pure function is a function that takes in an input and always returns the same output without any side effects. Examples of side-effects are things that modify external variables (i.e., anything which writes to the screen, writes to a file, writes to the network, logs to the console, or calls other functions).

Functional programming also uses function composition. Functional composition combines two or more functions to produce a new function or perform a computation. For example, `f(g(x))` will perform `f(x)` using `g(x)` as the input.

An excellent functional programming library I have been utilizing is Ramda.js. Check it out [here](https://ramdajs.com/)!

Sources and Resources:

- "Composing Software" by Eric Elliot
- "The Prgamatic Programmer" by Andy Hunt and Dave Thomas
