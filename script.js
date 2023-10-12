function calculateMinCost(ropes) {
  //your code here
	ropes = ropes.map(String);

    while (ropes.length > 1) {
        // Find the two shortest ropes in the array.
        ropes.sort((a, b) => a.length - b.length);

        // Combine the two shortest ropes.
        const combinedRope = ropes[0] + ropes[1];

        // Remove the two shortest ropes and add the combined rope.
        ropes.splice(0, 2, combinedRope);
    }

    // The last rope in the array is the minimum cost.
    return parseInt(ropes[0]);
  
  
  
}  
