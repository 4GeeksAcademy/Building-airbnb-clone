# Airbnb Clone - Product Context

## 1) Page Descriptions (Home, Catalog, Room Detail)

### Home Page
The Home page is the entry point where users discover destinations and start a search. It shows a prominent search bar for location, dates, and guest count; category shortcuts (for example: Beachfront, Cabins, Trending); and a preview grid of listings personalized or popular for the selected context. It should help users quickly understand available options and move into broader exploration.

What it covers:
7 components — Bottom Nav, Top Header, Hero Search Bar, Category Chip Row, Listing Card Grid, Listing Card (individual), Wishlist Button

### Catalog Page
The Catalog page is the full results view after a search or filter action. It shows many listings in a scrollable grid/list, with controls to sort and filter by price, room type, amenities, cancellation policy, and property features. The page should support comparing multiple options efficiently before selecting one listing for deeper details.

What it covers:
9 components — reuses Bottom Nav, Top Header, Listing Card, Wishlist Button, Category Chip Row; adds Search Summary Bar, Filter Bar, Results Count Header, Map Panel Toggle

### Room Detail Page
The Room Detail page is the decision page for a single property. It shows complete information about the selected listing: photo gallery, title and host summary, ratings and reviews, price breakdown, amenities, house rules, and availability/calendar context. It should provide everything needed for the user to decide whether to reserve this place.

what it covers:
13 components — reuses Bottom Nav, Top Header, Wishlist Button, Divider; adds Photo Gallery, Title & Host Row, Rating Summary, Description block, Amenities List, Calendar, Booking Card (sticky), Host Section, Reviews Section, Location/Map

## 2) Main Components Per View (Airbnb Reference)

### Home Page Components
- Top navigation/header (logo, search trigger, user menu)
- Global search bar (location, check-in/check-out, guests)
- Category chips or horizontal category nav
- Listing card grid preview
- Listing card component (image carousel, title/location, rating, price/night)
- Footer

### Catalog Page Components
- Top navigation/header
- Search summary and editable search inputs
- Filters bar (price, type, amenities, etc.)
- Sort control
- Results count/summary
- Listing grid/list
- Listing card component (reused)
- Pagination or infinite scroll behavior
- Optional map panel (desktop pattern in Airbnb)
- Footer

### Room Detail Page Components
- Top navigation/header
- Listing title and location line
- Rating + reviews summary
- Photo gallery
- Host information block
- Reservation/booking card (dates, guests, total)
- Price breakdown section
- Amenities list
- Description section
- House rules and cancellation policy
- Reviews section
- Location/map section
- Footer

## 3) User and Goal

The primary user is a traveler planning a stay for specific dates and budget constraints. Their goal is to find a place that matches location, price, and amenity preferences, compare the best options quickly, and make a confident booking decision. Their journey flows from Home (initial discovery and search) to Catalog (comparison and filtering) to Room Detail (final evaluation before booking).
