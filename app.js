"use strict"; //

const ReactElement = React.createElement;

export default class Button extends React.Component {
  // no puedo escribir el render porque no sabe donde buscarlo, dado que creamos una app desde cero sin usar el npx
  render() {
    return ReactElement('button', {}, "Super Boton");
  }
}

const domContainer = document.getElementById("myApp");
ReactDOM.render(ReactElement(Button), domContainer);
