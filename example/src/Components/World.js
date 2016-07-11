import Aviya from '../../../build/Aviya'

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
