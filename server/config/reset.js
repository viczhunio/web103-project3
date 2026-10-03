import { pool } from './database.js'; 
import dotenv from 'dotenv'


const createTables = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events; 
        DROP TABLE IF EXISTS locations; 

        CREATE TABLE locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL, 
            description TEXT, 
            image TEXT
        ); 

        CREATE TABLE events (
            id SERIAL PRIMARY KEY, 
            location_id INTEGER REFERENCES locations(id), 
            title VARCHAR(255) NOT NULL, 
            description TEXT, 
            image TEXT, 
            event_time TIMESTAMP NOT NULL
        );
        `

        await pool.query(createTableQuery)
        console.log('Tables created'); 
}

const seedTables = async () => {
    await pool.query(`
        INSERT INTO locations (name, description, image) VALUES
            ('Manhattan', 'Parades, costume events, and haunted history', 'https://www.thecarnegiehotel.com/hs-fs/hubfs/CE492DB4-E20A-4F80-B121-D7CF89EEA4F7.webp?width=1140&name=CE492DB4-E20A-4F80-B121-D7CF89EEA4F7.webp'),
            ('Brooklyn', 'Ghost tours, Coney Island, and cemetery walks', 'https://lunaparknyc.com/app/uploads/2023/09/DSC00464_DxO.jpg'), 
            ('Queens', 'Pumpkin patches, spooky festivals, and trick or treating', 'https://patch.com/img/cdn20/shutterstock/23773254/20231026/125916/styles/raw/public/processed_images/shutterstock_editorial_13496342j.jpg'), 
            ('The Bronx', 'Botanical garden pumpkins and haunted attractions', 'https://newsroom.wcs.org/Portals/164/IMG_0278.jpg'), 
            ('Staten Island', 'Haunted houses and fall fun', 'https://www.silive.com/resizer/v2/652WM6PK3FG67JGSARTEVTILGY.jpg?auth=e37990c37df1d9898467b14dd4520b91f23131a1cc6c211de4a7f102e7396e3a&width=1280&smart=true&quality=90');

        INSERT INTO events (location_id, title, description, image, event_time) VALUES 
            (1, 'Spooky Spectacular Bazaar', 'Browse festive decorations, handcrafted treats, seasonal gifts, costumes, vintage finds, and plenty of unexpected treasures from local vendors.','https://grandbazaarnyc.org/wp-content/uploads/2026/06/Screenshot-2026-08-26-114843.png', '2026-10-25 10:00:00'),
            (1, 'Village Halloween Parade', 'On Halloween, New Yorkers from all walks of life will join in this quirky and fantastical parade through the heart of New York City’s Greenwich Village. Parading up Sixth Avenue from Canal Street to West 15th Street, costumed revelers will be joined by giant puppets and musical bands.', 'https://images.ctfassets.net/1aemqu6a6t65/6NOYU1eR7OmRkKnSiasbcX/ebc0afa45ae638dcafec9e7ace0fa4d2/Village-Halloween-Parade-Manhattan-NYC-Courtesy.jpg?w=1200&h=800&q=75', '2026-10-31 19:00:00' ),
            (1, 'Halloween At Miru', 'Celebrate Halloween above the city at MIRU — a stunning rooftop destination perched atop Pier 57 with sweeping views of the Hudson River and Manhattan skyline.', 'https://dice-media.imgix.net/attachments/2026-09-10/871b6fb4-fc3b-435f-9ae9-eaefce9ddd2b.jpg?rect=0%2C0%2C1254%2C1254&auto=format%2Ccompress&q=40&w=328&h=328&fit=crop&crop=faces%2Ccenter&dpr=2', '2026-10-31 20:00:00'), 
            (2, 'Coney Island', 'Step into a world of pumpkins, hay bales, and colorful seasonal decor as Luna Park’s iconic rides come alive in a cozy, spooktacular atmosphere perfect for families, friends, and autumn lovers of all ages.', 'https://lunaparknyc.com/app/uploads/2023/09/DSC00464_DxO.jpg', '2026-10-31 18:00:00'), 
            (2, 'Park Slope Halloween Parade', 'This annual family-friendly event has been a Brooklyn tradition since 1986. Costumed families, musicians, puppets and local groups take over Park Slope’s Seventh Avenue from 14th to 3rd Streets for parading, dancing and fun. Participants should take advantage of some of the borough’s best neighborhood trick-or-treating along Seventh and Fifth Avenues. People typically start lining up at 6pm, with the parade kicking off at 6:30pm.', 'https://images.ctfassets.net/1aemqu6a6t65/f2K63ZhdxIW0o2nvcEXqo/d26f4fc6174e3e9cee47b8a603b1efe5/Skyline-Brooklyn-NYC-Courtesy-Timelapse-Company.jpg?w=1200&h=800&q=75', '2026-10-31 18:00:00'),
            (3, 'Austin Street Open Street', 'Car free trick or treating streets, in artnership with Neighbors for a Safer Austin Street and Hive Public Space', 'https://www.6sqft.com/wp-content/uploads/2026/10/61st-Street-Halloween-Open-Street.jpg?w=1560&format=webp', '2026-10-25 14:00:00'), 
            (3, 'Little Bay Park- Halloween Pooch Parade', 'Bring your pet & march in our parade. Parade starts at Utopia Pkwy entrance and will continue along the waterfront path and end at the Little Bay Parking Lot.', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/at%2Fliving%2F2022-09%2Fdog-costumes%2Fdog-halloween-costume-pumpkins', '2026-10-10 11:00:00'),
            (3, 'Halloween Harvest Festival', 'Join us for the 2026 Halloween Harvest Festival, back with family-friendly workshops, a community resource fair, the Planted Culture Vegan Food Market, as well as New York’s second-largest dog costume contest co-presented with Chateau le Woof. It’s a Halloween Harvest like no other that you do not want to miss!', 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2021/8/31/5/rx_amazon_bat-wing-costume.jpeg.rend.hgtvcom.616.616.85.suffix/1630442218490.webp', '2026-10-31 12:00:00'), 
            (4, 'The Bronx Halloween Parade', 'Expect an unforgettable day filled with marching bands, live performances, stilt walkers, dancers, spooky characters, community organizations, creative costumes, free candy and giveaways, and plenty of surprises along the parade route.', 'https://www.bxtimes.com/wp-content/uploads/2023/10/231028_BronxHalloweenParade14-700x467.jpg', '2026-10-24 12:00:00'), 
            (4, 'Boo at the Zoo', 'Pumpkin carving, animal chats, hay maze, carnival games, magic shows, and more!', 'https://cdn.wcs.org/2026/08/20/10/58/59/2cff6e43-af4b-403d-acdc-637c0c041fa1/Terria%20Clay_7056_Boo%20at%20The%20Zoo_BZ_20251004%201.png', '2026-09-26 10:00:00'), 
            (5, 'Trick or Streets', 'Car free community celebration featuring costume contests, live music, face painting, and more!', 'https://www.nyc.gov/html/dot/images/pedestrians/tos-vernon-blvd-2025.jpg', '2026-10-24 12:00:00'), 
            (5, 'Zoo Spooktacular', 'The Staten Island Zoo’s annual Spooktacular is back for a family-friendly Halloween celebration. The event features music, trick-or-treat zones, arts-and-crafts, a family-friendly Scare Zone, and a disco dance party.', 'https://cdn.ma.to/prod/69d4291e-0e69-4f35-90a9-39ff8df62ec8-original.webp', '2026-10-17 14:30:00')

    `)
    console.log('Data added')
}

const reset = async () => {
    await createTables()
    await seedTables()
    await pool.end() 
}

reset()