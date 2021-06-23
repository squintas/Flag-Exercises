


let requestOptions={
    method:"GET"
}

fetch("https://jsonplaceholder.typicode.com/photos",requestOptions)
    .then( response => response.json())
    .then( resultJson => [resultJson[0].url,resultJson[1].url,resultJson[2].url])
    .then (mapResponse => console.log(mapResponse));
    
