const axios = require('axios')
console.log(axios);
const urls = [],

baseurl = 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe';
const getdata = async function(){
    const arrayOfPromises = urls.map(url => axios.get(url[0]));
    for await (let request of arrayOfPromises){
        console.log(request.data);
    }
};

async function getMovieDetails(){
    const response = await axios.get(baseurl);
    urls.push(response.data.people);
    await getdata();
}

getMovieDetails();
