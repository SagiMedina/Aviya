Welcome to Aviya!
===================


Hey! If you had the chance to enjoy  **React**. you probably liked the **declarative views** and the **encapsulated components.**
It is Great!  <i class="icon-thumbs-up"></i>
But you also probably think it is overkill for some of your more **simpler projects**. <i class=" icon-thumbs-down"></i>

**Aviya** a simple Class for you to extend that will give you the options to write your app using **declarative views**, **encapsulated components** and even, if you liked it, **JSX** style.


----------


----------
[TOC]


----------


----------


<i class="icon-wrench"></i> Installation
-------------

```sh
npm install aviya
```


----------


----------

<i class="icon-code"></i> Usage
-------------
#### <i class=" icon-bullseye"></i> Basic

Entry point:

 - HTML

``` html
// index.html
<header>
//...
</header>
<body>
  <div id="app"></div>
//...
</body>
```

 - JS

``` javascript
// index.js
import Hello from './Hello';
Hello.render('#app');
```


----------


Hello Component:

``` javascript
// Hello.js
import Aviya from 'Aviya'

class Hello extends Aviya{
    constructor(){
        super();
    };

    html(){
        return(
            `
                <div>
                    <h1>Hello</h1>
                </div>
            `
        )
    }
}

export default new Hello();
```


----------


#### <i class="icon-sitemap"></i> Declarative views

You can use <i class="icon-sitemap"></i> **Declarative views**  just like you did with React.
This is how:

``` javascript
// Hello.js
import Aviya from 'Aviya'
import World from './World'

class Hello extends Aviya{
    constructor(){
        super();
        this.addDependency(World);
    };

    html(){
        return(
            `
                <div>
                    <h1>Hello</h1>
                    <World></World>
                </div>
            `
        )
    }
}

export default new Hello();
```

``` javascript
// World.js
import Aviya from 'Aviya'

class World extends Aviya{
    constructor(){
        super();
    };

    html(){
        return(
            `
                <h2>World</h2>
            `
        )
    }
}

export default new World();
```


----------

#### <i class="icon-play"></i> Use with events

This is how you handle <i class="icon-play"></i> **events**:

``` javascript
// World.js
import Aviya from 'Aviya'

class World extends Aviya{
    constructor(){
        super();
        this.addEventListener('#hello', 'input', this.logHelloWorld);
        this.addEventListener('#reset', 'click', this.Reset);
    };

    html(){
        return(
          `
              <div>
                  <input id="hello" type="text"/>
                  <button id="reset">Reset!</button>
              </div>
          `
        )
    }

    logHelloWorld(){
        document.getElementById('title').innerHTML = `Hello ${document.getElementById('hello').value}`;
    }

    Reset(){
        document.getElementById('title').innerHTML = `Hello World`;
        document.getElementById('hello').value = `World`;
    }
}

export default new World();
```


----------


#### <i class="icon-lightbulb"></i> Dump Components

Just like React's Stateless Functions, You can use functions to create Components

``` javascript
// Hello.js
import Aviya from 'Aviya'
import World from './World'
import Dumb from './Dumb'

class Hello extends Aviya{
    constructor(){
        super();
        this.addDependency(World);
        this.addDependency(Dumb);
    };

    html(){
        return(
            `
                <div>
                    <h1 id="title">Hello</h1>
                    <World></World>
                    <Dumb></Dumb>
                </div>
            `
        )
    }
}

export default new Hello();
```

``` javascript
// Dumb.js
export default function Dumb () {
    return `<p>This is a Dumb Component</p>`
}

```


----------

#### <i class="icon-unlink"></i> JSX Like

We use ES 2015 features to imitate <i class="icon-unlink"></i>**JSX** functionality

``` javascript
// Hello.js
import Aviya from 'Aviya'

class Hello extends Aviya{
    constructor(){
        super();
        this.title = 'Welcome to Aviya'
        this.someList = ['Hi', 'How', 'Are', 'You', '?']
    };

    html(){
        return(
            `
                <h1>${this.title}</h1>
                <ul>
                    ${this.someList.map( word => `<li>${word}</li>`).join('\n')}
                </ul>
            `
        )
    }
}

export default new Hello();
```

----------

#### <i class="icon-file"></i> Write your html in a separate file

> **Note:** You will have to wrape the html with tags naming after your component name

 - HTML

``` html
// hello.html
<Hello>
  <h1>Hello</h1>
</Hello>
```

 - JS

``` javascript
// Hello.js
import Aviya from 'Aviya'

class Hello extends Aviya{
    constructor(){
        super();
        //used with webpack's html-loader
        this.htmlFile = require('html!./hello.html')
    };
}

export default new Hello();
```

> **Tip:** use [webpack's html-loader](https://github.com/webpack/html-loader) for this one.

----------


----------


<i class="icon-list"></i> TO-DO
-------------

Aviya is constantly under development.
You are all welcome to join us!

> ~~Code Examples~~
 ~~Dump Components~~
 More Tests
Comparison With Alternative Packeges



----------


----------



License
-------------
MIT (http://www.opensource.org/licenses/mit-license.php)
