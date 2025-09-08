export const fetchProperties = async () => {
  const response = await fetch('https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing');
  if (!response.ok) throw new Error('Failed to fetch properties');
  const data = await response.json();
  
  // Enhance API data with additional property fields based on API data
  return data.map((property, index) => ({
    ...property,
    price: generateConsistentPrice(property.id, false), // Sale price
    rentPrice: generateConsistentPrice(property.id, true), // Rental price
    type: index % 2 === 0 ? 'sale' : 'rent', // Consistent type assignment
    rating: generateConsistentRating(property.id), // Consistent rating
    description: `Beautiful ${property.name} located in ${property.city}, ${property.state}. Modern amenities and prime location.`
  }));
};

// Helper function to generate consistent prices based on property ID
const generateConsistentPrice = (id, isRental) => {
  const seed = parseInt(id) || 1;
  if (isRental) {
    return 1500 + (seed * 123) % 3000; // $1,500 - $4,500/month
  } else {
    return 200000 + (seed * 12345) % 500000; // $200,000 - $700,000
  }
};

// Helper function to generate consistent rating based on property ID
const generateConsistentRating = (id) => {
  const seed = parseInt(id) || 1;
  return (4.0 + (seed * 7) % 10 / 10).toFixed(1); // Rating between 4.0-5.0
};
