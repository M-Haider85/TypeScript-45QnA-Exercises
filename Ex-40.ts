interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number) {
    const album: Album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Make three different albums
const album1 = make_album('Artist One', 'Aadat');
const album2 = make_album('Artist Two', 'Ik Tera Pyaar');
const album3 = make_album('Artist Three', 'Believer');

// Make an album with the number of tracks
const album4 = make_album('Nirvana', 'Nevermind', 12);

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);


