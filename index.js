var playlist = require('./rahmanPlaylist');
var output = {};
playlist.songs.forEach(function(song, index){
    song.track.artists.forEach(function(artist){
            if(output[artist.name] !== undefined){
                output[artist.name].push(song.track.name)
            }else{
                output[artist.name] = [song.track.name];
            }
    })
})
console.log(output);