import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		//name: 'world'
	}
});

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
  
function trueMath() {
	let a = getRandomInt(20);
	let b = getRandomInt(20);
	console.log("a: ", a, "b: ", b);
	if (getRandomInt(2)) 
	  return (a+b); 
	  else 
		return (a-b);
  }

export default app;