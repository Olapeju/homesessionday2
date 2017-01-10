function reverseString(string){
	if (string.length === 0){
		return null;
	}
	var stringLen = string.length;
	var reversedText = "";

	for (i = stringLen; i >= 0; i--){
		reversedText += string.charAt(i);
	}
	if (string === reversedText){
		return true;
	}
	return reversedText;
}