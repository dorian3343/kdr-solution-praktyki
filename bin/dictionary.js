const Map1 = new Map([ 
  ["<p>", "p{"],
  ["<h1>", "h1{"],
  ["<h2>", "h2{"],
  ["<h3>", "h3{"],
  ["<h4>", "h4{"],
  ["<h5>", "h5{"],
  ["<h6>", "open"],
  ["<div>", "<div>"],
  ["<div style=","<div style="],
  ["<span style=","<span style="],
  ["<span>","<span>"],
  ["<p style=","<p style="],
  ["<h1 style=","<h1 style="],
  ["<h2 style=","<h2 style="],
  ["<h3 style=","<h3 style="],
  ["<h4 style=","<h4 style="],
  ["<h5 style=","<h5 style="],
  ["<h6 style=","<h6 style="],
  ["<pre style=","<pre style="],
  ["</pre>","</pre>"],
  ["<em>","<em>"],
  ["<strong>","<strong>"],
  ["<s>","<s>"],
  ["<sup>","<sup>"],
  ["<sub>","<sub>"],
  ["<blockquote>","<blockquote>"],
  ["<code>","<code>"],
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
  ["text-decoration:","text-decoration:"],
  ["underline;","underline;"],
  ["@","@ma"],
  ["{","@ot"],
  ["}","@za"],
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
]);


function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceWords(content,Map1) {
  const keysArray = [...Map1.keys()];
  const valuesArray = [...Map1.values()];
  let resultString = content;
  for (let i = 0; i < keysArray.length; i++) {
    const escapedKey = escapeRegExp(keysArray[i]);
    const regex = new RegExp(escapedKey, 'gi');
    resultString = resultString.replace(regex, valuesArray[i]);
  }
  console.log(resultString);
  return resultString;
  
}