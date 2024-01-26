// complete the given function
function palindrome(str){
	str=str.toLowerCase();
let s=0;
	let e=str.length-1;
	while (s<=e) {
		if(str.charAt(s)!==str.charAt(e)){
			return false;
		}
		s++;
		e--;
	}
	return true;
}
module.exports = palindrome
