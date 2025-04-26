const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy the serenity of the mountains in this cozy cabin. A perfect retreat for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish and modern apartment with all the amenities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Country House",
    description:
      "Experience the charm of the countryside in this rustic house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: 1000,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxurious Villa",
    description:
      "Indulge in luxury in this exquisite villa with private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Beverly Hills",
    country: "United States",
  },
  {
    title: "Charming Bungalow",
    description:
      "Relax in this charming bungalow located in a peaceful neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description:
      "Unwind at this beautiful lakefront retreat with stunning views and serene surroundings.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the beauty of the desert in this tranquil oasis with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    price: 1300,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Stay in a historic loft with character and modern upgrades in downtown.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
    price: 1600,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Tropical Paradise",
    description:
      "Soak up the sun in this tropical paradise with palm trees and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    price: 2200,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy the serenity of the mountains in this cozy cabin. A perfect retreat for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish and modern apartment with all the amenities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Country House",
    description:
      "Experience the charm of the countryside in this rustic house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: 1000,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxurious Villa",
    description:
      "Indulge in luxury in this exquisite villa with private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Beverly Hills",
    country: "United States",
  },
  {
    title: "Charming Bungalow",
    description:
      "Relax in this charming bungalow located in a peaceful neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description:
      "Unwind at this beautiful lakefront retreat with stunning views and serene surroundings.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the beauty of the desert in this tranquil oasis with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    price: 1300,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Stay in a historic loft with character and modern upgrades in downtown.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
    price: 1600,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Tropical Paradise",
    description:
      "Soak up the sun in this tropical paradise with palm trees and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    price: 2200,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy the serenity of the mountains in this cozy cabin. A perfect retreat for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish and modern apartment with all the amenities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Country House",
    description:
      "Experience the charm of the countryside in this rustic house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: 1000,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxurious Villa",
    description:
      "Indulge in luxury in this exquisite villa with private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Beverly Hills",
    country: "United States",
  },
  {
    title: "Charming Bungalow",
    description:
      "Relax in this charming bungalow located in a peaceful neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description:
      "Unwind at this beautiful lakefront retreat with stunning views and serene surroundings.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the beauty of the desert in this tranquil oasis with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    price: 1300,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Stay in a historic loft with character and modern upgrades in downtown.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
    price: 1600,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Tropical Paradise",
    description:
      "Soak up the sun in this tropical paradise with palm trees and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    price: 2200,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy the serenity of the mountains in this cozy cabin. A perfect retreat for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish and modern apartment with all the amenities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Country House",
    description:
      "Experience the charm of the countryside in this rustic house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: 1000,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxurious Villa",
    description:
      "Indulge in luxury in this exquisite villa with private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Beverly Hills",
    country: "United States",
  },
  {
    title: "Charming Bungalow",
    description:
      "Relax in this charming bungalow located in a peaceful neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description:
      "Unwind at this beautiful lakefront retreat with stunning views and serene surroundings.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the beauty of the desert in this tranquil oasis with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    price: 1300,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Stay in a historic loft with character and modern upgrades in downtown.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
    price: 1600,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Tropical Paradise",
    description:
      "Soak up the sun in this tropical paradise with palm trees and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    price: 2200,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy the serenity of the mountains in this cozy cabin. A perfect retreat for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish and modern apartment with all the amenities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Country House",
    description:
      "Experience the charm of the countryside in this rustic house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: 1000,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxurious Villa",
    description:
      "Indulge in luxury in this exquisite villa with private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Beverly Hills",
    country: "United States",
  },
  {
    title: "Charming Bungalow",
    description:
      "Relax in this charming bungalow located in a peaceful neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description:
      "Unwind at this beautiful lakefront retreat with stunning views and serene surroundings.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the beauty of the desert in this tranquil oasis with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    price: 1300,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Stay in a historic loft with character and modern upgrades in downtown.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
    price: 1600,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Tropical Paradise",
    description:
      "Soak up the sun in this tropical paradise with palm trees and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    price: 2200,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage with stunning ocean views. Perfect for a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Mountain View Cabin",
    description:
      "Enjoy the serenity of the mountains in this cozy cabin. A perfect retreat for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city in this stylish and modern apartment with all the amenities.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Country House",
    description:
      "Experience the charm of the countryside in this rustic house surrounded by nature.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: 1000,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Luxurious Villa",
    description:
      "Indulge in luxury in this exquisite villa with private pool and stunning views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Beverly Hills",
    country: "United States",
  },
  {
    title: "Charming Bungalow",
    description:
      "Relax in this charming bungalow located in a peaceful neighborhood.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Austin",
    country: "United States",
  },
  {
    title: "Lakefront Retreat",
    description:
      "Unwind at this beautiful lakefront retreat with stunning views and serene surroundings.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Desert Oasis",
    description:
      "Discover the beauty of the desert in this tranquil oasis with modern comforts.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    price: 1300,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Historic Downtown Loft",
    description:
      "Stay in a historic loft with character and modern upgrades in downtown.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800",
    price: 1600,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Tropical Paradise",
    description:
      "Soak up the sun in this tropical paradise with palm trees and ocean breeze.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    price: 2200,
    location: "Honolulu",
    country: "United States",
  }
];

module.exports = { data: sampleListings };
