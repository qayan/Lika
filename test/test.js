function pricecheck(price) { 
  if (price < 100) {
    return "Very cheap!";
  }
  if (price > 1000) {
    return price + " is too expensive!";
  }
  return "Not bad."
}
