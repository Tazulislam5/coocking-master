const searchMeal = () =>{
    const searchName = document.getElementById('inputValue').value;
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

 const handleSearch = document.getElementById("button").addEventListener('click', searchMeal());

 const displayMeal = (meal) =>{
    //  console.log(meal);
     const mealDiv = document.getElementById('mealItem');
     
        
   
 } 

 
