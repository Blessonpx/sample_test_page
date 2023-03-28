// var button = document.getElementById("myButton");
// var output = document.getElementById("output");

// button.addEventListener("click", function() {
// 	output.innerHTML = "Hello, World!";
// });
var button = document.getElementById("myButton");
var productList = document.getElementById("productList");

button.addEventListener("click", function() {
	// Create a new XMLHttpRequest object
	var xhr = new XMLHttpRequest();

	// Set the request URL and method
	var url = "https://nci.solus.ai/get_trending_recos";
	var method = "POST";

	// Create a new request
	xhr.open(method, url);

	// Set the request header content type
	xhr.setRequestHeader("Content-Type", "application/json");

	// Handle the response
	xhr.onload = function() {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			var products = response.Product_List;

			// Display the products in separate boxes
			for (var i = 0; i < products.length; i++) {
				var productBox = document.createElement("div");
				productBox.className = "productBox";
				productBox.innerHTML = products[i];
				productList.appendChild(productBox);
			}
		} else {
			console.log("Error: " + xhr.status);
		}
	};

	// Handle the error
	xhr.onerror = function() {
		console.log("Error: " + xhr.status);
	};

	// Send the request with the JSON payload
	var jsonPayload = JSON.stringify({ "Reco_Count": 10 });
	xhr.send(jsonPayload);
});
