import Aviya from '../../../build/Aviya'
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
