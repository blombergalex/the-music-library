export const Essence = {
    albumTitle: 'Essence',
    artist: 'Elih',
    songs: ['Boomerang', 'Coffeblues', 'Hear her heartbeat', 'Sacred Road', 'Simple Things', 'Let Go', 'Inner Child', 'Expanding into the Unknown', 'Set my Heart on Fire', 'Returning to the Source'],
    cover: '/album-covers/essence.png'
}

export const TheCodeOfTheFlowers = {
    albumTitle: 'The Code of the Flowers',
    artist: 'Ayla Nereo',
    songs: ['Whispers', 'Tightrope Walker', 'Look at the River', 'Seeds', 'Ivory Tongue', 'Little Beckon', 'Waves', 'Turning Wake', 'Wild Burn', 'We Forgot', 'Hum', 'Drive by Fires', 'The Course'], 
    cover: '/album-covers/thecodeoftheflowers.png'
}

export const Pellucidity = {
    albumTitle: 'Pellucidity',
    artist: 'Yaima',
    songs: ['Reservoir', 'Chasing Antares', 'Sweet Kiss', 'Reflection', 'Pellucidity', 'Gajumaru', 'Destiny', 'Dust Moves Again', 'Canaan', 'Kyo'],
    cover: '/album-covers/pellucidity.png'
}

export const AnAwesomeWave = {
    albumTitle: 'An Awesome Wave',
    artist: 'alt-J',
    songs: ['Intro','Interlude 1', 'Tasselate', 'Breezeblocks', 'Interlude 2', 'Something Good', 'Dissolve Me', 'Matilda', 'Me', 'Fitzpleasure', 'Interlude 3', 'Bloodflood', 'Taro', 'Hand-Made'],
    cover: '/album-covers/anawesomewave.png'
}

export const ShapeShifter = {
    albumTitle: 'ShapeShifter',
    artist: 'Gundelach',
    songs: ['Golden', 'Vi Er Nærme Nå', 'Vinter', 'Country Pluck - Interlude', 'Fruit', 'Seadrones', 'Rolling In The Water', 'Crystal Fire', 'ShapeShifter - Interlude', 'Arms Around Me'], 
    cover: '/album-covers/shapeshifter.png'
}

export const CaressYourSoul = {
    albumTitle: 'Caress Your Soul',
    artist: 'Sticky Fingers',
    songs: ['How To Fly', 'Clouds & Cream', 'Australia Street', 'These Girls', 'Sex', 'Bootleg Rascal', 'Caress Your Soul', 'Laika', 'Freddy Crabs', 'Kiss The Breeze', 'Let It All Out'],
    cover: '/album-covers/caressyoursoul.png'
}

export const TheHangingGardensOfBeatenberg = {
    albumTitle: 'The Hanging Gardens Of Beatenberg',
    artist: 'Beatenberg',
    songs: ['Rafael', 'Beuty Like A Tightened Bow', 'Chelsea Blakemore', 'Pluto - Live', 'Southern Suburbs', 'Scorpionfish', 'Ithaca', 'Cavendish Square', 'Facebook Apologie', 'Echoes', 'All About Me', 'Cape To Rio', 'The Prince Of The Hanging Gardens'],
    cover: '/album-covers/thehanginggardensofbeatenberg.png'
}

export const Success = {
    albumTitle: 'Success',
    artist: 'Beautiful Chorus',
    songs: ["Earth's New Heaven", 'Success', 'Joy', 'Abundance'], 
    cover: '/album-covers/success.png'
}

export const TheCollection = {
    albumTitle: 'The Collection',
    artist: 'Bobby McFerrin',
    songs: ["Don't Worry Be Happy", 'Turtle Shoes - Live', 'Another Night In Tunisia', 'Even For Me - Live', 'Mañana Iguana', 'Drive', 'I Hear Music', "Walkin'", "'Round Midnight - Live"],
    cover: '/album-covers/thecollection.png',
    albumLink: URL='https://open.spotify.com/album/5QXK9xXDSYvSOXYSJHdwOD'
}

export const HoneyBones = {
    albumTitle: 'Honey Bones',
    artist: 'Dope Lemon',
    songs: ['Marinade','Uptown Folks', 'Fuck Things Up', 'Coyote', 'How Many Times', 'Stonecutters', 'Honey Bones', 'The Way You Do', "Won't Let You Go", 'Best Girl'], 
    cover: '/album-covers/honeybones.png'
}

export const BlueColoredMountain = {
    albumTitle: 'Blue Colored Mountain',
    artist: 'Szymon',
    songs: ['Yakuza', 'Freenicks', 'Blue Colored Mountain', 'Orestes', 'Anhalt', 'Untitled', 'Come Back Home'], 
    cover: '/album-covers/bluecoloredmountain.png',
    albumLink: URL='https://open.spotify.com/album/0cxxdWtB00NG8ErYYdNwgR'
}

export const Rampljus = {
    albumTitle: 'Rampljus',
    artist: 'Håkan Hellström',
    songs: ['Alla drömmar är uppfyllda', 'Tillsammans i mörker', 'Vägen med regnbågen över', 'Bit dig i läppen', 'Studentfylleflaken', 'Va inte född att följa efter', 'Snälla släck inte ljusen', 'Det här är Shooowbiizzz', 'På väg upp', 'Kaos är min lady', 'Vita små moln', 'Rampljus', 'Verkar som vi klarat det', 'Ska flyga nu (feat. Leila K'],
    cover: '/album-covers/rampljus.png',
    albumLink: URL='https://open.spotify.com/album/4beG5mWxyeC6IB1fetQzQn'
}

export const albums = [Essence, TheCodeOfTheFlowers, Pellucidity, AnAwesomeWave, ShapeShifter, CaressYourSoul, TheHangingGardensOfBeatenberg, Success, TheCollection, HoneyBones, BlueColoredMountain, Rampljus];

export const albumTitles = albums.map(album => album.albumTitle);