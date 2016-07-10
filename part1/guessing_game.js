var target
var user_input
var guess_input
var guesses=0
var finish=false
var random_color
var arr = new Array();

function do_game(){
	arr = ['cyan', 'maroon', 'blue', 'green', 'magenta', 'red', 'yellow', 'orange', 'pink', 'purple', 'black', 'white']
	arr.sort()
	random_color=arr[Math.floor(Math.random()*arr.length)]
	target=random_color


	while(!finish){
		user_input = prompt("I am thinking of these colors\n"+ arr + "\n"+"What color am I thinking of?")

		if(user_input == null)
			break
		guess_input= user_input
		guesses++
		finish=check_guess()
		
		
		
	}
}

 