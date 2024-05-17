
function processTextBox1(){
	const textBox = document.getElementById("TB1");
	let command = textBox.value;
	console.log(command);
	const fs = require('fs')
	fs.writeFile('commands.txt', command, (err) => {

	    // In case of a error throw err.
	    if (err) throw err;
	})
}