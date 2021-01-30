(function(JSON_INPUT) {
    var json_data = JSON.parse(JSON_INPUT);
    return(Object.keys(json_data)[0]);
})(input)