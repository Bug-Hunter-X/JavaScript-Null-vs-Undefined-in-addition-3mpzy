function foo(a, b) {
  // Check for both null and undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; //Or handle it in a more appropriate way
  }
  return a + b; 
}