console.log("🔥 RENDER BADGES CALL");

import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBb-2GlOsnUDzDXZ8-mgd6XIr8ny4ZkJoo",
  authDomain: "my-disneyland-paris.firebaseapp.com",
  databaseURL: "https://my-disneyland-paris-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-disneyland-paris",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);
const activitiesRef = ref(db, "planning/activities");
const eventsRef = ref(db, "planning/events");

/* =========================
   BADGES
========================= */

const badges = [

    // =========================
    // Attractions
    // =========================

    { id: "btm", category: "attractions", name: "Big Thunder Mountain", image: "btm.png" },
    { id: "frozen", category: "attractions", name: "Frozen Ever After", image: "frozen.png" },
    { id: "tower_terror", category: "attractions", name: "The Tower of Terror", image: "tot.png" },
    { id: "autopia", category: "attractions", name: "Autopia", image: "autopia.png" },
    { id: "blanche_neige", category: "attractions", name: "Blanche-Neige et les Sept Nains", image: "blanche_neige.png" },
    { id: "buzz", category: "attractions", name: "Buzz Lightyear Laser Blast", image: "buzz.png" },
    { id: "cabane_robinson", category: "attractions", name: "La Cabane des Robinson", image: "cabane_robinson.png" },
    { id: "carrousel_lancelot", category: "attractions", name: "Le Carrousel de Lancelot", image: "carrousel_lancelot.png" },
    { id: "cars_road_trip", category: "attractions", name: "Cars ROAD TRIP", image: "cars_road_trip.png" },
    { id: "casey_jr", category: "attractions", name: "Casey Jr. Le Petit Train du Cirque", image: "casey_jr.png" },
    { id: "contes_fees", category: "attractions", name: "Le Pays des Contes de Fées", image: "contes_fees.png" },
    { id: "phantom_manor", category: "attractions", name: "Phantom Manor", image: "phantom_manor.png" },
    { id: "crush_coaster", category: "attractions", name: "Crush's Coaster", image: "crush_coaster.png" },
    { id: "dumbo", category: "attractions", name: "Dumbo the Flying Elephant", image: "dumbo.png" },
    { id: "flight_force", category: "attractions", name: "Avengers Assemble: Flight Force", image: "flight_force.gif" },
    { id: "indiana_jones", category: "attractions", name: "Indiana Jones et le Temple du Péril", image: "indiana_jones.png" },
    { id: "labyrinthe_alice", category: "attractions", name: "Le Labyrinthe d'Alice", image: "labyrinthe_alice.png" },
    { id: "mad_hatter_tea_cups", category: "attractions", name: "Mad Hatter's Tea Cups", image: "mad_hatter_tea_cups.png" },
    { id: "nautilus", category: "attractions", name: "Les Mystères du Nautilus", image: "nautilus.png" },
    { id: "orbitron", category: "attractions", name: "Orbitron", image: "orbitron.png" },
    { id: "passage_aladdin", category: "attractions", name: "Le Passage Enchanté d'Aladdin", image: "passage_aladdin.png" },
    { id: "peter_pan", category: "attractions", name: "Peter Pan's Flight", image: "peter_pan.png" },
    { id: "pinocchio", category: "attractions", name: "Les Voyages de Pinocchio", image: "pinocchio.png" },
    { id: "pirates", category: "attractions", name: "Pirates of the Caribbean", image: "pirates.png" },
    { id: "railroad", category: "attractions", name: "Disneyland Railroad", image: "railroad.png" },
    { id: "raiponce_spin", category: "attractions", name: "Raiponce Tangled Spin", image: "raiponce_spin.png" },
    { id: "ratatouille", category: "attractions", name: "Ratatouille : L'Aventure Totalement Toquée de Rémy", image: "ratatouille.png" },
    { id: "small_world", category: "attractions", name: "it's a small world", image: "small_world.png" },
    { id: "space", category: "attractions", name: "Star Wars Hyperspace Mountain", image: "space.png" },
    { id: "star_tours", category: "attractions", name: "Star Tours : L'Aventure Continue", image: "star_tours.png" },
    { id: "thunder_mesa", category: "attractions", name: "Thunder Mesa Riverboat Landing", image: "thunder_mesa.png" },
    { id: "web", category: "attractions", name: "Spider-Man W.E.B. Adventure", image: "web.png" },
    { id: "cars_quatre_roues", category: "attractions", name: "Cars Quatre Roues", image: "cars_quatre_roues.png" },
    { id: "tapis_volants", category: "attractions", name: "Les Tapis Volants", image: "tapis_volants.png" },
    { id: "slinky_dog", category: "attractions", name: "SLinky Dog Zig Zag Spin", image: "slinky_dog.png" },
    { id: "rc_racer", category: "attractions", name: "RC Racer", image: "rc_racer.png" },
    { id: "toy_soldiers", category: "attractions", name: "Toy Soldiers Parachute Drop", image: "toy_soldiers.png" },

    // =========================
    // Restaurants
    // =========================

    { id: "lucky_nugget", category: "restaurants", name: "The Lucky Nugget Saloon", image: "lucky_nugget.png" },
    { id: "chez_remy", category: "restaurants", name: "Bistrot Chez Rémy", image: "chez_remy.png" },
    { id: "captain_jack", category: "restaurants", name: "Captain Jack's", image: "captain_jack.png" },
    { id: "plaza_gardens", category: "restaurants", name: "Plaza Gardens Restaurant", image: "plaza_gardens.png" },
    { id: "hakuna_matata", category: "restaurants", name: "Hakuna Matata Restaurant", image: "hakuna_matata.png" },
    { id: "auberge_cendrillon", category: "restaurants", name: "Auberge de Cendrillon", image: "auberge_cendrillon.png" },
    { id: "casa_coco", category: "restaurants", name: "Casa de Coco", image: "casa_coco.png" },
    { id: "cowboy_cookout", category: "restaurants", name: "Cowboy Cookout Barbecue", image: "cowboy_cookout.png" },
    { id: "silver_spur", category: "restaurants", name: "Silver Spur Steakhouse", image: "silver_spur.png" },
    { id: "colonel_hathi", category: "restaurants", name: "Colonel Hathi's Outpost", image: "colonel_hathi.png" },
    { id: "chalet_marionnette", category: "restaurants", name: "Au Chalet de la Marionnette", image: "chalet_marionnette.png" },
    { id: "toad_hall", category: "restaurants", name: "Toad Hall Restaurant", image: "toad_hall.png" },
    { id: "agrabah_cafe", category: "restaurants", name: "Agrabah Café", image: "agrabah_cafe.png" },
    { id: "bella_notte", category: "restaurants", name: "Pizzeria Bella Notte", image: "bella_notte.png" },
    { id: "cafe_hyperion", category: "restaurants", name: "Café Hyperion", image: "cafe_hyperion.png" },
    { id: "casey", category: "restaurants", name: "Casey's Corner", image: "casey.png" },
    { id: "walt", category: "restaurants", name: "Walt's", image: "walt.png" },
    { id: "hollywood_gardens", category: "restaurants", name: "Hollywood Gardens", image: "hollywood_gardens.png" },
    { id: "pym", category: "restaurants", name: "PYM Kitchen", image: "pym.png" },
    { id: "stark_factory", category: "restaurants", name: "Stark Factory", image: "stark_factory.png" },
    { id: "regal_view", category: "restaurants", name: "The Regal View", image: "regal_view.png" },
    { id: "nordic_crowns_tavern", category: "restaurants", name: "Nordic Crowns Tavern", image: "nordic_crowns_tavern.png" },

    // =========================
    // Spectacles
    // =========================

    { id: "roi_lion", category: "shows", name: "Le Roi Lion et les Rythmes de la Terre", image: "roi_lion.png" },
    { id: "together", category: "shows", name: "Together", image: "together.png" },
    { id: "stars_on_parade", category: "shows", name: "Stars on Parade", image: "stars_on_parade.png" },
    { id: "dreams_factory", category: "shows", name: "La Fabrique des Rêves de Minnie", image: "dreams_factory.png" },
    { id: "mickey_magicien", category: "shows", name: "Mickey et le Magicien", image: "mickey_magicien.png" },
    { id: "cascade_of_lights", category: "shows", name: "Cascade Of Lights", image: "cascade_of_lights.png" },
    { id: "tales_of_magic", category: "shows", name: "Tales of Magic", image: "tales_of_magic.png" },
    { id: "philarmagique", category: "shows", name: "Mickey et son Orchestre Philharmagique", image: "philharmagique.png" },
    { id: "splashes_of_colour", category: "shows", name: "A Million Splashes of Colour", image: "splashes_of_colour.png" },
    { id: "animation_academy", category: "shows", name: "Animation Academy", image: "animation_academy.png" },
    { id: "celebration_arendelle", category: "shows", name: "Célébration à Arendelle", image: "celebration_arendelle.png" },
    { id: "stitch_live", category: "shows", name: "Stitch Live !", image: "stitch_live.png" },

    // =========================
    // Lands
    // =========================

    { id: "frontierland", category: "lands", name: "Frontierland", image: "frontierland.png" },
    { id: "adventureland", category: "lands", name: "Adventureland", image: "adventureland.png" },
    { id: "fantasyland", category: "lands", name: "Fantasyland", image: "fantasyland.png" },
    { id: "discoveryland", category: "lands", name: "Discoveryland", image: "discoveryland.png" },
    { id: "mainStreet", category: "lands", name: "Main Street", image: "main_street.png" },
    { id: "world_premiere", category: "lands", name: "World Premiere", image: "world_premiere.png" },
    { id: "avengers_campus", category: "lands", name: "Avengers Campus", image: "avengers_campus.png" },
    { id: "world_of_pixar", category: "lands", name: "World of Pixar", image: "world_of_pixar.png" },
    { id: "adventure_way", category: "lands", name: "Adventure Way", image: "adventure_way.png" },
    { id: "world_of_frozen", category: "lands", name: "World of Frozen", image: "world_of_frozen.png" },


    // =========================
    // Événements
    // =========================

    { id: "birthday", category: "events", name: "Joyeux anniversaire !", image: "birthday.png" },
    { id: "ete", category: "events", name: "EN ÉTÉÉÉÉ !", image: "summer.png" },
    { id: "halloween", category: "events", name: "Halloween", image: "halloween.png" },
    { id: "hiver", category: "events", name: "Fais frisquet", image: "hiver.png" },

];

const landRequirements = {
    frontierland: [
        "btm",
        "phantom_manor",
        "thunder_mesa"
    ],

    adventureland: [
        "pirates",
        "indiana_jones",
        "cabane_robinson",
        "passage_aladdin"
    ],

    fantasyland: [
        "blanche_neige",
        "pinocchio",
        "peter_pan",
        "dumbo",
        "mad_hatter_tea_cups",
        "carrousel_lancelot",
        "casey_jr",
        "contes_fees",
        "small_world",
        "labyrinthe_alice"
    ],

    discoveryland: [
        "space",
        "buzz",
        "orbitron",
        "autopia",
        "nautilus",
        "star_tours"
    ],

    avengers_campus: [
        "flight_force",
        "web"
    ],

    world_of_pixar: [
        "crush_coaster",
        "cars_road_trip",
        "ratatouille",
        "toy_soldiers",
        "slinky_dog",
        "rc_racer",
        "cars_quatre_roues"
    ],

    world_premiere: [
        "tower_terror",
        "tapis_volants"
    ],

    adventure_way: [
        "raiponce_spin"
    ],

    world_of_frozen: [
        "frozen"
    ],

    mainStreet: [
        "railroad"
    ]
};


/* =========================
   HAS DONE
========================= */

function hasDone(activities, attractionId) {

  for (const date in activities) {
    const day = activities[date];
    if (!day) continue;

    for (const key in day) {
      const act = day[key];
      if (!act) continue;

      // CAS STRING
      if (typeof act === "string") {
        if (act === attractionId) return true;
      }

      // CAS OBJET
      if (typeof act === "object") {
        if (act.id === attractionId) return true;
      }
    }
  }

  return false;
}

function hasBirthday(events) {

  for (const key in events) {

    const event = events[key];
    if (!event || !event.details) continue;

    if (event.details.toLowerCase().includes("anniversaire")) {
      return true;
    }
  }

  return false;
}
/* =========================
   RENDER
========================= */

function isBadgeUnlocked(badge, activities, events) {

    // Badge anniversaire
    if (badge.id === "birthday") {
        return hasBirthday(events);
    }

    // Badges Lands
    if (badge.category === "lands") {

        const attractions = landRequirements[badge.id] || [];

        return attractions.every(id => hasDone(activities, id));
    }

    // Badges Events
    if (badge.category === "events") {

        const month = new Date().getMonth() + 1;

        switch (badge.id) {

            case "ete":
                return month >= 6 && month <= 9;

            case "noel":
             return Object.values(events).some(e =>
                e.details?.toLowerCase().includes("noël") ||
                e.details?.toLowerCase().includes("noel")  );    

            case "halloween":
             return Object.values(events).some(e =>
                 e.details?.toLowerCase().includes("halloween"));    

            default:
                return false;
        }
    }

    

    // Tous les autres badges
    return hasDone(activities, badge.id);
}

function renderBadges(activities, events) {

  const { unlocked, total } = getUnlockedStats(activities, events, null);

  updateProgress(unlocked, total);
}

let currentCategory = null;
/* =========================
   FIREBASE LIVE
========================= */
console.log("activitiesRef =", activitiesRef);
let activities = {};
let events = {};

onValue(activitiesRef, (snapshot) => {
    activities = snapshot.val() || {};

    renderBadges(activities, events);

    if (currentCategory) {
        renderCategory(currentCategory, activities, events);
    }
});

onValue(eventsRef, (snapshot) => {
    events = snapshot.val() || {};

    renderBadges(activities, events);

    if (currentCategory) {
        renderCategory(currentCategory, activities, events);
    }
});

const home = document.getElementById("badge-home");
const categoryPage = document.getElementById("badge-category-page");
const categoryTitle = document.getElementById("category-title");

document.querySelectorAll(".badge-category").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        currentCategory = category;

        home.classList.add("hidden");
        categoryPage.classList.remove("hidden");

        categoryTitle.textContent = card.querySelector("h3").textContent;

        renderCategory(category, activities, events);
    });

});

document.getElementById("back-button").addEventListener("click", () => {

    currentCategory = null;

    categoryPage.classList.add("hidden");
    home.classList.remove("hidden");

    renderBadges(activities, events);
});

function renderCategory(category, activities, events) {

    const grid = document.getElementById("badge-grid");
    grid.innerHTML = "";

    const filtered = badges.filter(b => b.category === category);

    let unlocked = 0;
    let total = filtered.length;

    for (const badge of filtered) {

        const ok = isBadgeUnlocked(badge, activities, events);

        if (ok) unlocked++;

        const div = document.createElement("div");
        div.className = "small-badge " + (ok ? "unlocked" : "locked");

        div.innerHTML = ok
            ? `
                <img src="../badges/${badge.image}">
                <p>${badge.name}</p>
            `
            : `
                🔒
                <p>???</p>
            `;

        grid.appendChild(div);
    }

    updateProgress(unlocked, total);
}

function getUnlockedStats(activities, events, category = null) {

    let total = 0;
    let unlocked = 0;

    const list = category
        ? badges.filter(b => b.category === category)
        : badges;

    for (const badge of list) {

        total++;

        const ok = isBadgeUnlocked(badge, activities, events);

        if (ok) unlocked++;
    }

    return { unlocked, total };
}

function updateProgress(unlocked, total) {

    document.getElementById("progress-text").textContent =
        `${unlocked} / ${total} badges débloqués`;

    document.getElementById("progress-fill").style.width =
        `${(unlocked / total) * 100}%`;
}
