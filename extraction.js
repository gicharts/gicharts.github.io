
keys = document.querySelectorAll('table[aria-label="Chart data table"] > thead > tr > th').values().toArray().map( t => t.innerText)
rows = [];
document.querySelectorAll('table[aria-label="Chart data table"] > tbody > tr td').forEach( (d, i)=> {
	let colNum = i % keys.length;
	console.log({colNum});
	console.log({key: keys[colNum]});
	if(i % keys.length === 0){
	   console.log("pushing")
	   rows.push({});
	}
	row = rows[rows.length - 1]
	row[keys[colNum]] = d.innerText;
})
