// var button = document.getElementById("myButton");
// var output = document.getElementById("output");

// button.addEventListener("click", function() {
// 	output.innerHTML = "Hello, World!";
// });

// Iteration 2
// var button = document.getElementById("myButton");
// var productList = document.getElementById("productList");

// button.addEventListener("click", function() {
//     // resultsDiv.innerHTML = '';
// 	// Create a new XMLHttpRequest object
// 	var xhr = new XMLHttpRequest();

// 	// Set the request URL and method
// 	var url = "https://nci.solus.ai/get_trending_recos";
// 	var method = "POST";

// 	// Create a new request
// 	xhr.open(method, url);

// 	// Set the request header content type
// 	xhr.setRequestHeader("Content-Type", "application/json");

// 	// Handle the response
// 	xhr.onload = function() {
// 		if (xhr.status === 200) {
// 			var response = JSON.parse(xhr.responseText);
// 			var products = response.Product_List;

// 			// Display the products in separate boxes
// 			for (var i = 0; i < products.length; i++) {
// 				var productBox = document.createElement("div");
// 				productBox.className = "productBox";
// 				productBox.innerHTML = products[i];
// 				productList.appendChild(productBox);
// 			}
// 		} else {
// 			console.log("Error: " + xhr.status);
// 		}
// 	};

// 	// Handle the error
// 	xhr.onerror = function() {
// 		console.log("Error: " + xhr.status);
// 	};

// 	// Send the request with the JSON payload
// 	var jsonPayload = JSON.stringify({ "Reco_Count": 10 });
// 	xhr.send(jsonPayload);
// });



// iteration 3


// script.js
const button = document.querySelector('.button');
const resultsDiv = document.querySelector('#results');

button.addEventListener('click', () => {
    // Remove old result boxes
    resultsDiv.innerHTML = '';

    // Make API request
    fetch('https://nci.solus.ai/get_trending_recos', {
        method: 'POST',
        body: JSON.stringify({ Reco_Count: 10 }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Add new result boxes
        const products = data.Product_List;
        for (let i = 0; i < products.length; i++) {
            const resultBox = document.createElement('div');
            resultBox.classList.add('result-box');
            resultBox.textContent = products[i];
            resultsDiv.appendChild(resultBox);
        }
    })
    .catch(error => console.error(error));
});
