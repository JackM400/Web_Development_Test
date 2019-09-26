	console.log("hit");
	
	
	function BMI(Height,Mass,Result)
			{
				
				var m = document.getElementById("Mass").value;
				console.log(m);
				
				
				var h =document.getElementById("Height").value;
				var r = (m / h)/h;
				
				console.log(h);
				console.log(r);
				
				document.getElementById("Result").value = r;
			}