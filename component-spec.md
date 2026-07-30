# Airbnb Clone — Mobile Component Specification (375px viewport)

> Based on the three reference screenshots (`Airbnb image_homepage.PNG`, `Airbnb image_catalog.PNG`, `Airbnb_amenities.PNG`) and the project brief images.  
> Format: for each page, every distinct visual component is listed with its **name**, **props**, **layout relationship** to siblings, and **reuse status**.

---

## 1. Home Page (375px)

### 1.1 Bottom Navigation Bar
- **Props**: `activeTab: "home" | "catalog" | "rooms"`, `onTabChange: (tab) => void`
- **Layout**: Fixed to bottom of viewport, full-width, z-index above all content. Sits below the listing grid.
- **Reuse**: Shared across all three pages. The active tab highlights the current page.

### 1.2 Top Header Bar
- **Props**: `logoUrl: string`, `onMenuPress: () => void`
- **Layout**: Fixed to top of viewport, full-width, height ~48px. Contains logo (left) and user profile icon (right). Floats above the search bar.
- **Reuse**: Shared across all three pages (identical).

### 1.3 Search Bar (Hero)
- **Props**: `placeholder: string`, `onFocus: () => void`, `value: string`, `onChange: (val) => void`
- **Layout**: Full-width, directly below the top header. Shows a rounded pill with a magnifying glass icon, the text "Where to?", and a date label. Tapping navigates to the search overlay.
- **Reuse**: This page-specific large hero variant. A condensed version appears in the Catalog header.

### 1.4 Category Chip Row
- **Props**: `categories: Array<{id: string, label: string, icon: string}>`, `activeId: string`, `onSelect: (id) => void`
- **Layout**: Horizontal scrollable row, full-width, below the search bar. Each chip is a 2-line icon+label button ~72px wide. Overflow is hidden; the user swipes horizontally. No scrollbar visible.
- **Reuse**: Shared between Home and Catalog pages.

### 1.5 Listing Card Grid
- **Props**: `listings: Listing[]`, `onCardPress: (id) => void`
- **Layout**: Single-column vertical scroll on mobile. Each card is full-width, the next card sits below the previous one. The grid is the main body content filling the space between the category row and the bottom nav.
- **Reuse**: The grid container itself is page-specific. The **individual card** is reused across Home, Catalog, and Wishlist.

### 1.6 Listing Card (individual)
- **Props**: `listing: { id, title, location, pricePerNight, rating, imageUrl }`, `onPress: () => void`, `onWishlistToggle: () => void`
- **Layout** (top to bottom inside the card):
  - Image container (16:10 aspect ratio, rounded corners, contains a heart/wishlist button in the top-right corner)
  - Title row (bold, 14px, single line)
  - Location line (12px, grey, single line)
  - Price line ("$X night", 14px, bold)
  - Rating badge (small star icon + number, right-aligned on the same row as price)
- **Reuse**: This card is the most-reused component in the product. It appears on Home, Catalog, and any "similar listings" section on the Room Detail page.

### 1.7 Wishlist / Heart Button
- **Props**: `isActive: boolean`, `onToggle: () => void`, `size: "small" | "medium"`
- **Layout**: Absolutely positioned inside the listing card image, top-right corner. Circular, transparent background with a heart outline icon.
- **Reuse**: Appears on every listing card on every page that shows cards.

---

## 2. Catalog Page (375px)

### 2.1 Bottom Navigation Bar
- **Same as 1.1** — active tab switches to "catalog".

### 2.2 Top Header Bar
- **Same as 1.2** — identical component.

### 2.3 Search Summary Bar
- **Props**: `location: string`, `dates: string`, `guests: number`, `onEdit: () => void`
- **Layout**: Full-width, below the top header. Shows a compact summary of the current search query (e.g. "Miami Beach · Nov 12-17 · 2 guests"). Tapping opens the search edit overlay.
- **Reuse**: Unique to Catalog. Not present on Home.

### 2.4 Filter Bar
- **Props**: `activeFilters: string[]`, `onFilterPress: (filterId) => void`, `onClearAll: () => void`
- **Layout**: Horizontal scrollable row, full-width, below the search summary. Contains pill-shaped buttons for common filters (Price, Type, Instant Book, etc.) plus a "Filters" button with a funnel icon.
- **Reuse**: Unique to Catalog. (The filter pills themselves are a reusable atom, but the bar layout is page-specific.)

### 2.5 Results Count Header
- **Props**: `count: number`, `sortOrder: "asc" | "desc"`, `onSortChange: (order) => void`
- **Layout**: Full-width, below the filter bar. Left-aligned text: "300+ stays". Right-aligned sort toggle (e.g. "Sort by" dropdown or "Top picks" / "Price" toggle).
- **Reuse**: Unique to Catalog.

### 2.6 Listing Card Grid (Catalog)
- **Props**: `listings: Listing[]`, `onCardPress: (id) => void`
- **Layout**: Same single-column vertical scroll as Home. Each card is the same **ListingCard** component (1.6). The grid scrolls to the bottom nav.
- **Reuse**: The grid container style is shared with Home. The card is the same reused component.

### 2.7 Listing Card (individual)
- **Identical to 1.6** — the same reused component.

### 2.8 Wishlist / Heart Button
- **Identical to 1.7** — the same reused component.

### 2.9 Map Panel Toggle
- **Props**: `onShowMap: () => void`
- **Layout**: Floating button near the bottom of the screen, just above the bottom nav. Circular, with a map pin icon. Semi-transparent white background with shadow.
- **Reuse**: Unique to Catalog. Tapping could open a full-screen map overlay (not part of this spec).

---

## 3. Room Detail Page (375px)

### 3.1 Bottom Navigation Bar
- **Same as 1.1** — active tab switches to "rooms" (or hidden if the detail page is a modal/overlay).

### 3.2 Top Header Bar
- **Same as 1.2** — identical component, but may include a back arrow instead of the logo on mobile.

### 3.3 Photo Gallery (Hero)
- **Props**: `photos: string[]`, `onShare: () => void`, `onSave: () => void`
- **Layout**: Full-width, 300px height, below the top header. The first image fills the container. A "View all photos" button overlays the bottom-right corner. Share and wishlist buttons overlay the top-right corner.
- **Reuse**: Unique to Room Detail.

### 3.4 Title & Host Row
- **Props**: `title: string`, `location: string`, `hostName: string`, `superhost: boolean`
- **Layout**: Below the photo gallery. Two-column layout on the same row:
  - Left: "Entire rental unit" badge, title (18px bold), location (12px grey link)
  - Right: Host avatar (small circle) with "Superhost" badge if applicable
- **Reuse**: Unique to Room Detail.

### 3.5 Rating & Reviews Summary
- **Props**: `rating: number`, `reviewCount: number`
- **Layout**: Below the title row. Single line: star icon, rating number, review count text ("128 reviews"). Acts as a link to the reviews section below.
- **Reuse**: Unique to Room Detail (though the rating badge from ListingCard is a simpler variant).

### 3.6 Divider / Section Separator
- **Props**: `thickness: "thin" | "thick"`
- **Layout**: Full-width horizontal rule, 1px, colour #DDDDDD. Used between every major section.
- **Reuse**: Shared across all pages as a utility atom.

### 3.7 About This Space / Description
- **Props**: `description: string`, `maxGuests: number`, `bedrooms: number`, `beds: number`, `bathrooms: number`
- **Layout**: Below the first divider. Shows:
  - "Sleeping arrangements" header (16px bold)
  - Bedroom details (e.g. "Bedroom 1: 1 king bed")
  - "About this space" paragraph text
- **Reuse**: Unique to Room Detail.

### 3.8 Amenities List
- **Props**: `amenities: Array<{icon: string, label: string}>`
- **Layout**: Below the description + divider. Header "Amenities" (16px bold). Two-column grid of amenity items, each with an icon and label. A "Show all XX amenities" link at the bottom.
- **Reuse**: Unique to Room Detail. The individual amenity row is a reusable atom.

### 3.9 Calendar / Date Selector
- **Props**: `checkIn: Date | null`, `checkOut: Date | null`, `onDateChange: (start, end) => void`, `blockedDates: Date[]`
- **Layout**: Below amenities + divider. Header "Select check-in date" (16px bold). A 2-month inline calendar grid (previous month + current month side by side). Each day is a tappable cell.
- **Reuse**: Unique to Room Detail. (A simplified version appears in the booking card when expanded.)

### 3.10 Booking Card (Sticky Bottom)
- **Props**: `pricePerNight: number`, `rating: number`, `reviewCount: number`, `onReserve: () => void`
- **Layout**: Fixed to bottom of viewport, just above the bottom nav (or replacing it). Full-width, white background, shadow at top edge. Shows:
  - Left: "$X night" + rating star
  - Right: "Reserve" button (rounded, pink/red, full width on tap)
- **Reuse**: Unique to Room Detail. The reservation flow is page-specific.

### 3.11 Host Section
- **Props**: `hostName: string`, `joinedDate: string`, `responseRate: number`, `onMessage: () => void`
- **Layout**: Below the calendar + divider. Shows host avatar, name, "Superhost" badge, response rate, and a "Contact host" button.
- **Reuse**: Unique to Room Detail.

### 3.12 Reviews Section
- **Props**: `reviews: Array<{author: string, avatar: string, date: string, text: string, rating: number}>`, `averageRating: number`
- **Layout**: Below the host section + divider. Header "Reviews" (16px bold) with average rating. Two review cards visible; a "Show all XX reviews" link at the bottom.
- **Reuse**: Unique to Room Detail.

### 3.13 Location / Map Section
- **Props**: `coordinates: {lat: number, lng: number}`, `address: string`
- **Layout**: Below reviews + divider. Header "Location" (16px bold). A static map placeholder (grey rectangle, 200px height) with the address below.
- **Reuse**: Unique to Room Detail.

---

## 4. Shared / Cross-Page Component Summary

| Component | Home | Catalog | Room Detail |
|-----------|------|---------|-------------|
| Bottom Navigation Bar | ✓ | ✓ | ✓ (or hidden) |
| Top Header Bar | ✓ | ✓ | ✓ (with back) |
| Listing Card | ✓ | ✓ | (similar listings) |
| Wishlist Button | ✓ | ✓ | ✓ |
| Category Chip Row | ✓ | ✓ | — |
| Divider | — | — | ✓ |
| Section Header (16px bold) | — | — | ✓ (reused per section) |

---

## 5. Data Model Referenced by Props

```typescript
interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;           // primary thumbnail
  category: string;           // "beach", "cabins", etc.
  isWishlisted: boolean;
}

interface Room extends Listing {
  photos: string[];           // all gallery images
  description: string;
  host: Host;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: Amenity[];
  reviews: Review[];
  coordinates: { lat: number; lng: number };
  address: string;
}

interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  joinedDate: string;
  responseRate: number;
}

interface Amenity {
  icon: string;
  label: string;
}

interface Review {
  author: string;
  avatar: string;
  date: string;
  text: string;
  rating: number;
}
```

---

## 6. Layout Hierarchy (375px Vertical Stack)

```
Home                           Catalog                       Room Detail
━━━━━━━━━━━━━━━━━━━━━━━━      ━━━━━━━━━━━━━━━━━━━━━━━━━━    ━━━━━━━━━━━━━━━━━━━━━━━━━━
Top Header Bar                 Top Header Bar                Top Header Bar (with back)
Search Bar (hero)              Search Summary Bar            Photo Gallery (hero)
Category Chip Row (scroll)     Filter Bar (scroll)           Title & Host Row
Listing Card                   Results Count Header          Rating & Reviews Summary
  [image + heart]              Listing Card                  ─── divider ───
  [title]                        [image + heart]             About This Space / Description
  [location]                     [title]                     ─── divider ───
  [price] [rating]               [location]                  Amenities List
Listing Card                    [price] [rating]             ─── divider ───
  ...                          Listing Card                  Calendar / Date Selector
Listing Card                    ...                           ─── divider ───
  ...                          Map Panel Toggle (float)      Host Section
Bottom Nav Bar                 Bottom Nav Bar                ─── divider ───
                                                             Reviews Section
                                                             ─── divider ───
                                                             Location / Map Section
                                                             Booking Card (sticky bottom)
                                                             Bottom Nav Bar
```