# WEB103 Project 3 - Spooky Space

Submitted by: **Victoria Zhunio**

About this web app: **Spooky Space is a virtual community space for finding Halloween events across New York City. Users see five floating, glowing orbs, one for each borough (Manhattan, Brooklyn, Queens, The Bronx, and Staten Island). Clicking an orb opens that borough's page with its Halloween events, including parades, haunted attractions, zoo events, and festivals. The app uses React on the frontend, an Express API, and a PostgreSQL database hosted on Render.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Floating, glowing orbs as the location selector, with each borough's photo inside
- [x] Halloween theme with a custom banner, drifting ghosts, and custom Google Fonts
- [x] Real NYC Halloween events with images, descriptions, and start times
- [x] Loading, error, and "not found" messages so users always get feedback instead of a blank page
- [x] Live countdown that updates every second, with past events faded and crossed out

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='client/src/assets/spooky-space.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

Challenges I ran into:

- Connecting to the Render database: the app first failed with an SSL error because `.env` was not loaded before the database pool was created. Loading `dotenv` at the top of `database.js` fixed it.
- Wiring controllers, routes, and services together: a few bugs came from small typos, such as a wrong controller on a route, a misspelled table name in SQL, and a wrong export syntax in an API service file.
- Restyling the starter code: the starter's CSS was built for a fixed SVG venue map, so I replaced it with a flexbox layout for the orbs. I also learned that `#root` selectors in `index.css` override class selectors, so I had to raise the specificity of my header and font styles.
- Handling errors: I separated "not found" (a 404) from "something went wrong" (a thrown error) so users see an honest message in each case.

Note: the event data is based on real NYC Halloween events, but dates and times may change, so check each event's official page before attending. The Render free-tier database expires after about 30 days.

## License

Copyright 2026 Victoria Zhunio

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.