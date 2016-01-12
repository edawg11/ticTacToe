$(document).ready(function(){
	init();

	var playerOneScore =[];
	var playerTwoScore =[];
	var playerOne = true;
	var count = 1;
	var x = $('<p>').html('X');
	var o = $('<p>').html('O');
	var theScore;
	var winners = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];

	function init(){
	$('.space').on('click' , handleClick)
	}

	function handleClick(){
		var $this = $(this);
		var numId = $this.attr('data');
		var numData = parseInt(numId);

		if(!numId) { 
			count+=2 
		}

		count%2 !==0 ? playerOne = true : playerOne = false;

		playerOne ? x.clone().appendTo($this) : o.clone().appendTo($this);

		playerOne ? playerOneScore.push(numData) : playerTwoScore.push(numData);

		$this.removeAttr('data');
		
		count+=1;
		findTheScore();
		findWinner(winners);
	}

	function findTheScore(){
		if (playerOne){
			theScore = playerOneScore.slice();
		} else {
			theScore = playerTwoScore.slice();
		}
	}

	function findWinner(arr){
		for (var i = 0; i<arr.length; i++){
			if (isWinner(arr[i]) === 3) {
				alert('you win')
			}
		// console.log('winner', isWinner(arr[i]));
		}	
	}  

	function isWinner(arr){
	    var counter = 0;
		for (var i = 0; i<arr.length;i++){
		    if (arr.indexOf(theScore[i]) !== -1) {
		    	counter+=1; 
			}
		} 
		return counter;
	}  
});









