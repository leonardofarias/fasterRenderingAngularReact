var MYCOMPONENT = React.createClass({
  displayName:'MYCOMPONENT',
  render:function(){
      return React.DOM.div(null, "Renderizando rapidamente AngularJs com ", this.props.framework);

  }
});