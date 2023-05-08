
  const Map1 = new Map([ 
  ["<p>", "<p>"],
  ["<h1>", "h1!{"],
  ["<h2>", "value3"],
  ["<h3>", "value3"],
  ["<h4>", "value3"],
  ["<h5>", "value3"],
  ["<h6>", "value3"],
  ["<div>", "<div>"],
  ["<div style=","<div style="],
  ["<span style=","<span style="],
  ["<span>","<span>"],
  ["pt;","pt;"],
  ["px;","px;"],
  ["font-size:","font-size:"],
  [";",";"],
  ["font-family:","font-family:"],
  ["justify;","justify;"],
  ["color:","color:"],
  ["rgb(","rgb("],
  [");",");"],
  ["padding-","padding-"],
  ["center;","center;"],
  ["left;","left;"],
  ["right;","right;"],
  ["background-","background-"],
  ["line-height","line-height"],
  ["<p style=","<p style="],
  ["<h1 style=","<h1 style="],
  ["<h2 style=","<h2 style="],
  ["<h3 style=","<h3 style="],
  ["<h4 style=","<h4 style="],
  ["<h5 style=","<h5 style="],
  ["<h6 style=","<h6 style="],
  ["<pre style=","<pre style="],
  ["</pre>","</pre>"],
  ["@","@ma"],
  ["{","@ot"],
  ["}","@za"],
  ["<em>","<em>"],
  ["<strong>","<strong>"],
 ["text-decoration:","text-decoration:"],
  ["underline;","underline;"],
  ["<s>","<s>"],
  ["<sup>","<sup>"],
  ["<sub>","<sub>"],
  ["<blockquote>","<blockquote>"],
  ["<code>","<code>"]
]);
const Map2 = new Map([ 
  ["</strong>","</strong>"],
  ["</span>","</span>"],
  ["</p>","</p>"],
  ["</em>","</em>"],
  ["</h1>","</h1>"],
  ["</h2>","</h2>"],
  ["</h3>","</h3>"],
  ["</div>","</div>"],
  ["</h4>","</h4>"],
  ["</h5>","</h5>"],
  ["</h6>","</h6>"],
  ["</code>","</code>"],  
  ["</blockquote>","</blockquote>"],
  ["</sub>","</sub>"],
  ["</sup>","</sup>"],
  ["</s>","</s>"],
])

function stringContainsKey(string, keyMap) {

  const valuesArray = [...Map1.keys()];
  console.log(valuesArray); 
  let counter = 0;

for (let i = 0; i < valuesArray.length; i++) {
  if (string.includes(valuesArray[i])) {
    counter++;

  }
}

const valuesArray2 = [...Map2.keys()];
console.log(valuesArray2); 
let counter2 = 0;

for (let i = 0; i < valuesArray2.length; i++) {
if (string.includes(valuesArray2[i])) {
  counter2++;
}
}

console.log("Open:" + counter);
console.log("CLose:" + counter2);
}
