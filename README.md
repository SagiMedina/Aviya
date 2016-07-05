# Aviya

If you had the chance to enjoy React you probably liked declarative views and encapsulated components.
It is Great! But you also probably think it is overkill for some of your more simpler projects

Aviya a simple Class for you to extend that will give you the options to write your app using declarative views, encapsulated components and even, if you liked it, JSX style.


## Installation

```

npm install aviya
```

## Usage

Entry point:

HTML

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

JS

``` javascript
// index.js
import Hello from './Hello';
Hello.render('#app');
```

The Hello Component:

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

Declarative views:

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

Use with events:

``` javascript
// Hello.js
import Aviya from 'Aviya'

class Hello extends Aviya{
    constructor(){
        super();
        //this.addEventListener('element', 'event', function);
        this.addEventListener('#hello', 'click', this.logHello);
    };

    html(){
        return(
            `
                <div>
                    <button id="hello" type="button">Click Me!</button>
                </div>
            `
        )
    }

    logHello(){
      console.log('Hi');
    }
}

export default new Hello();
```


JSX like:

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

And if you don't like to write your html code inside your JS code you can use the htmlFile var
Note: you can use [webpack's html-loader](https://github.com/webpack/html-loader) for this one.

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

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
