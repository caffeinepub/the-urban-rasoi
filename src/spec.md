# Specification

## Summary
**Goal:** Replace the location dropdown with an embedded interactive map showing the exact Indore address.

**Planned changes:**
- Remove the north/south location filter dropdown from the Contact page
- Add a single embedded interactive map component displaying the exact address: 622, Ushanagar, Narendra Tiwari Marg, Annapurna Road, Indore
- Update backend ContactData type to return a single location object instead of multiple options
- Ensure the map is responsive and integrates with the existing Bootstrap layout

**User-visible outcome:** Users will see an interactive map on the Contact page showing the exact dhaba location with a marker, instead of selecting between north/south locations.
