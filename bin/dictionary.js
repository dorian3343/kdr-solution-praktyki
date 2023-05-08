
  const Map1 = new Map([ 
  ["<p>", "<p>"],
  ["<h1>", "h1!{"],
  ["<h2>", "value3"],
  ["<h3>", "value3"],
  ["<h4>", "value3"],
  ["<h5>", "value3"],
  ["<h6>", "value3"],
  ["div", "<div>"],
  ["</div>","</div>"],
  ["<div style=","<div style="],
  ["<span style=","<span style="],
  ["</span>","</span>"],
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
  ["</p>","</p>"],
  ["background-","background-"],
  ["line-height","line-height"],
  ["<p style=","<p style="],
  ["<h1 style=","<h1 style="],
  ["<h2 style=","<h2 style="],
  ["<h3 style=","<h3 style="],
  ["<h4 style=","<h4 style="],
  ["<h5 style=","<h5 style="],
  ["<h6 style=","<h6 style="],
  ["</h1>","</h1>"],
  ["</h2>","</h2>"],
  ["</h3>","</h3>"],
  ["</h4>","</h4>"],
  ["</h5>","</h5>"],
  ["</h6>","</h6>"],
  ["<pre style=","<pre style="],
  ["</pre>","</pre>"],
  ["@","@ma"],
  ["{","@ot"],
  ["}","@za"],
  ["<em>","<em>"],
  ["</em>","</em>"],
  ["<strong>","<strong>"],
  ["</strong>","</strong>"],
]);

function stringContainsKey(string, keyMap) {

  const valuesArray = [...Map1.keys()];
  console.log(valuesArray); 
  let counter = 0;

for (let i = 0; i < valuesArray.length; i++) {
  if (string.includes(valuesArray[i])) {
    counter++;
    console.log(`Found ${valuesArray[i]} in ${string}`);
  }
}

console.log(counter);
}
