export default class Aviya {
    constructor(){
        this.htmlFile = null;
        this._htmlString = null;
        this._dependencies = [];
        this._events = [];
    };

    addEventListener(selector, type, trigger){
        this._events.push({selector, type, trigger})
    }

    addDependency(dependency){
        this._dependencies.push(dependency)
    }

    _htmlFileRender(){
        let componentPatten = `<${this.constructor.name}(.*?)>(.*?)<\/${this.constructor.name}>`;
        let re = new RegExp(componentPatten, "gi");
        return this.htmlFile.match(re).map(htmlMatch => htmlMatch.replace(/(\\r\\n|\\n|\\r|\\")/gm,'')).join('')
    }

    _renderHtmlToDOMElement(element){
        this._htmlString = this.htmlFile ? this._htmlFileRender() : this.html();
        for (let selectedElement of document.querySelectorAll(element)){
            selectedElement.insertAdjacentHTML('afterend', this._htmlString);
            selectedElement.remove()
        }
    }

    _bindEventsToComponent(){
        for (let event of this._events){
            for (let registerEvent of document.querySelectorAll(event.selector)){
                if (!registerEvent.getAttribute('event_id')){
                    let eventID = Math.random().toString(36).substr(2, 9);
                    registerEvent.setAttribute('event_id', `${this.constructor.name}_event_${eventID}`);
                    document.querySelector(`[event_id=${this.constructor.name}_event_${eventID}]`)
                            .addEventListener(event.type, event.trigger);
                }
            }
        }
    }

    _renderComponentsDependencies(){
        for (let dependency of this._dependencies){
            if (typeof dependency === 'function'){
                let dumbComponent = new Aviya();
                dumbComponent.html = function () {
                    return dependency();
                };
                dumbComponent.render(dependency.name)
            }
            else dependency.render();
        }
    }

    render(element=this.constructor.name){
        this._renderHtmlToDOMElement(element);
        this._bindEventsToComponent();
        this._renderComponentsDependencies();
    }
}
