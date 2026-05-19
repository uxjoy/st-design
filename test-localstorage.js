// Test if localStorage exists and has the expected methods
if (typeof localStorage !== 'undefined') {
  console.log('localStorage exists:', localStorage);
  console.log('typeof localStorage.getItem:', typeof localStorage.getItem);
  console.log('localStorage.getItem:', localStorage.getItem);
} else {
  console.log('localStorage is undefined');
}
