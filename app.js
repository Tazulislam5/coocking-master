const searchMeal = () =>{
    const searchName = document.getElementById('inputValue').value;
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchName}`;

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

    

}

 const handleSearch = document.getElementById('button').addEventListener('click', searchMeal);
