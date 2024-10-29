describe("Shopping Cart Functionality", function() {

  // Mock the DOM elements
  var originalCartValue, originalItems, mockCartValue, mockItems;

  beforeEach(function() {
    // Backup the original global variables
    originalCartValue = cartValue;
    originalItems = items;

    // Mock the cart value element
    mockCartValue = { innerHTML: 0 };
    // Mock the items array
    mockItems = [
      { name: "This was our pact", quantity: 2, dollars: 7, cents: 49 },
      { name: "The famous five", quantity: 3, dollars: 4, cents: 59 }
    ];

    // Reassign the global variables to use the mocks
    cartValue = mockCartValue;
    items = mockItems;
  });

  it("should correctly update the cart quantity", function() {
    updateCart();

    expect(cartValue.innerHTML).toBe(5); // 2 + 3 = 5 items in the cart
  });

  it("should correctly calculate the total price", function() {
    updatePrice();

    expect(finalDollars).toBe(28); // 2*7.49 + 3*4.59 = 34.75 dollars
    expect(finalCents).toBe(75);   // 75 cents
  });

  afterEach(function() {
    // Restore the original global variables
    cartValue = originalCartValue;
    items = originalItems;
  });

});
