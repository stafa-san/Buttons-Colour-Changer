# Button-Colour-Changer
 Button Colour Resetter
 
Challenge 001: Change the Color of All Bottons
- First focus on the appearance side of things, thus HTML & CSS. Leave the dynamic part out until completion of the logic.
- Consider a breakdown approach where you have the primary function. And have the other important parts in their own function.
	- Since I am going to be dealing with all the buttons on the page. I need to find a way to easily grab all the buttons at once and store them in a new variable, which is essentially an array.
	- I need to be able to keep the original state of all the buttons in an array for easy reference later on. A much cleaner way is to use a for loop function to easily grab all of them. Else, i'd have to write a long list of codes.
		- This is done by initializing the declared array outside of the for loop function.
		- The array is initialized in the for loop function by pushing values of the first array through calling the first array using the class list object.
	- I now need to create a primary function to use in calling all the actions defined in the html. An if else statement should help sort that out. This function is what is defined on the front page. Arguments should be passed in the if/else paramenter, while the function should called in it.
	- I need to now take each of the function being called in the primary function and clearly define them.
