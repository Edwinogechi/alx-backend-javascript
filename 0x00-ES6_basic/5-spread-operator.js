// Define a function named concatArrays
export default function concatArrays(array1, array2, string) {
	// Return a new array by concatenating array1, array2, and string
  return [...array1, ...array2, ...string];
}
