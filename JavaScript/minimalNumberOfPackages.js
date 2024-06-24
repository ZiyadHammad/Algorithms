// finish the function to figure out the minimum number of packages needed to hold a given number of items.
// A large package can hold 5 items and a small package can hold 1 item.
// a used package can have some empty space left over.

// For example if we have 13 items, 3 large packages and 10 small packages,
// the function should return 3. if its not possible return -1

// Calculate the number of large packages needed.
// Check if we have enough available large packages.
// Calculate the remaining items after using large packages.
// Check if the remaining items can be accommodated using the available small packages.
// Return the total number of packages used or -1 if it is not possible.

function minimalNumberOfPackages( items, availableLargePackages, availableSmallPackages ) {
  let largeNeeded = Math.floor(items / 5);

  if (largeNeeded > availableLargePackages) {
    largeNeeded = availableLargePackages;
  }

  let remainingItems = items - (largeNeeded * 5)
  let smallNeeded
  
  if (remainingItems === 0) {
    return `${largeNeeded} large packages are needed for ${items} items`
  } else if (remainingItems > 0 && (availableLargePackages - largeNeeded) > 0) {
    return `${largeNeeded + 1} large packages are needed for ${items} items`
  } else if (remainingItems <= availableSmallPackages) {
    smallNeeded = remainingItems
    return `${largeNeeded} large & ${smallNeeded} small packages are needed for ${items} items`
  } 

    return -1
}

console.log(minimalNumberOfPackages(13, 3, 10));

module.exports = minimalNumberOfPackages;