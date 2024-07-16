const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ab40f19f731d3fceb39d51ace97b7a2&page=1';
const IMG_PATH ='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?&api_key=5ab40f19f731d3fceb39d51ace97b7a2&query=';
    //https://api.themoviedb.org/3/movie/550?api_key=5ab40f19f731d3fceb39d51ace97b7a2

const main =document.getElementById ("section"); //this we are creating which we needed for webside 
const form =document.getElementById("form");
const search =document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url){
    fetch(url).then(res=>res.json()) //res=result
    .then(function(data){    //WE using data and printion in conslole
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class','card');// always remember to set attribute corectly for error free 

            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');   //attribue

            const div_column = document.createElement('div');
            div_column.setAttribute('class','column');   //attribute

            const image = document.createElement('img');
            image.setAttribute('class','thumbnail');   //attribute
            image.setAttribute('id','image');

            const title = document.createElement('h3');
            title.setAttribute('id','title');   //attribute

            const center = document.createElement('center');  //insted of center we use centre in vs code 
            

            title.innerHTML=`${element.title}`;
            image.src=IMG_PATH + element.poster_path;

            center.appendChild(image);  //this we are creating chile and parent relation
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);  //this we are craeting append child of div in main program

        });
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML="";   //this is create for replacing all old poster or search to new ones or result

    const searchItem = search.value ;  //thi sline is for removien old search 
    if(searchItem){
        returnMovies(SEARCHAPI + searchItem); //this is for searching
        search.value="";
    }
});