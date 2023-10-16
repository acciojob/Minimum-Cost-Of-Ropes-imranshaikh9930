function minCostToConnectRopes(ropes) {
  //your code here
 let pq = new MinHeap(n);
        for(let i = 0; i < n; i++) {
            pq.insertKey(arr[i]);
        }
        pq.MinHeapify(0);
        let res = 0;
    
        //using a loop while there is more than one element in priority queue.
        while (pq.heap_size > 1) 
        {
            //storing the first and second numbers from priority queue.
            let first = pq.extractMin();
            
            let second = pq.extractMin();
         
    
            //adding their sum in result.
            res += first + second;
            
            //pushing the sum of first and second numbers in priority queue.
            pq.insertKey(first + second);
            //pq.MinHeapify(0);
        }
        //returning the result.
        return res;
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
