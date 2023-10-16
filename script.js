function minCostToConnectRopes(ropes) {
  //your code here
	ropes = ropes.map(String);
   while (ropes.length > 1) {
        // Convert the ropes to numbers
        ropes = ropes.map(Number);

        // Find the two shortest ropes in the array.
        ropes.sort((a, b) => a - b);

        // Combine the two shortest ropes.
        const combinedRope = ropes[0] + ropes[1];

        // Remove the two shortest ropes and add the combined rope.
        ropes.splice(0, 2, combinedRope);
    }

    // The last rope in the array is the minimum cost.
    return ropes[0];
  
  
}  


function calculateMinCost() {
            const ropeLengthsInput = document.getElementById("rope-lengths");
            const resultElement = document.getElementById("result");

            const ropeLengths = ropeLengthsInput.value.split(',').map(Number);

            // Call the function to calculate the minimum cost
            const minimumCost = minCostToConnectRopes(ropeLengths);

            // Display the result
            resultElement.textContent = minimumCost;
        }
