const searchMeal = () =>{
    const searchName = document.getElementById('input').value;
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meal =>{
    const mealContainer = document.getElementById('mealContainer');
  meal.forEach(mealItem => {
      // console.log(mealItem);
     const mealDiv = document.createElement('div');
     mealDiv.className = 'meal';
     mealDiv.innerHTML = `
     <img src="${mealItem.strMealThumb}">
     <button onclick = "displayIngredients(${mealItem.idMeal})">Details</button>
     `
     mealContainer.appendChild(mealDiv);

  });
}

 

displayIngredients = id =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => mealInfo(data.meals[0]))
}

const mealInfo = meal =>{
  // console.log(meal);
  const foodDetails = document.getElementById('foodDetail');

 

    
  foodDetails.innerHTML= `<h2>Ingredients:</h2>
  
  <h3>.${meal.strIngredient1}</h3>
  <h3>.${meal.strIngredient2}</h3>
  <h3>.${meal.strIngredient3}</h3>
  <h3>.${meal.strIngredient4}</h3>
  <h3>.${meal.strIngredient5}</h3>
  <h3>.${meal.strIngredient6}</h3>
  <h3>.${meal.strIngredient7}</h3>
  <h3>.${meal.strIngredient8}</h3>
  `
  
  
}





 
