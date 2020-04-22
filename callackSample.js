function tellSong(song ,callback){
    console.log("Çalan Şarkı",song);
    if (song == callback("ah azize")){
        console.log("İstediğin şarkı çalıyor");
    }
    else {
        console.log("bu şarkı kötü lütfen %s çalın",callback());
    }
}

function wantSong(song1){
    return song1;
}

tellSong("ah azize",wantSong);