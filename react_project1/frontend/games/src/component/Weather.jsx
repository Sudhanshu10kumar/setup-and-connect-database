const Weather=()=>{
    let temp=25;
    if(temp<15){
        return <h3>It's cold outside</h3>
    }
    else if(temp<=15 ||temp<30){
        return <h3>Normal Weither</h3>
    }
    else{
        return <h3>very hot </h3>
    }
};

export default Weather;