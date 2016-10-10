var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather= React.createClass({
  getInitialState:function(){
    return {
      isLoading: false
    }
  },
  handelSearch : function (location) {
    var that=this;

    debugger;
    that.setState({isLoading:true});
    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location,
        temp,
        isLoading:false
      });
    },function (errorMessage) {
      that.setState({
        isLoading:false
      });
        alert(errorMessage);
    });

  },
  render: function () {
    var {isLoading,temp,location}= this.state;

    function renderMessage(){
       if(isLoading){
         return <h3>Fetching weather ...</h3>;
       }else if(temp && location){
         return <WeatherMessage temp={temp}  location={location}/>;
       }
    }
    return (
      <div>
        <h3 className='page-title'>Weather</h3>
        <WeatherForm onSearch={this.handelSearch} />

        {renderMessage()}
      </div>
    );
  }
});


module.exports = Weather;
