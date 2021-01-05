 $('.search-btn').on('click', function (){
     $.ajax({
         url: 'http://www.omdbapi.com/?apikey=2b2e9a45&s=' + $('.input-keyword').val(),
         success: results => {
             //di json-nya tuh ada tulisan "search", itu mesti dihilangin dg cara:
             const movies = results.Search; // agar yg tampil hanya object dlmnya aja
             
             //bikin dulu variable card kosong krn mau ditumpuk dg card lainnya
             let cards = '';
             
             movies.forEach( film => {          
                cards += showCards(film);
             });
             //lalu minta jquery untuk mencari class namanya myFilm di html
             //lalu isikan dengan cards di atas
             $('.myMovie').html(cards);
    
             //ketika tombol modal di-klik, jquery nyari class modal-btn
             //yg ketika di-klik akan jalanin sebuah function
             $('.modal-btn').on('click', function () {
                //console.log($(this).data('imdbid')); supaya bisa tes konsep this-nya
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=2b2e9a45&i=' + $(this).data('imdbid'),
                    success: m => { //gak perlu metode Search krn API yg dipanggil beda
                        const movieDetail =`
                        <div class="w3-row">
                            <div class="w3-half"><p>${m.Title}</p></div>
                            <div class="w3-half"><p>${m.Plot}</p></div>
                        </div>
                        `;
                        //minta jquery nyariin class isiDetail n naruh movieDetail ke dalamnya
                        $('.isiDetail').html(movieDetail);
                    },
                    error: e => {
                        console.log(e.responseText)
                    }
                });
             });
         },
         error: e => {
             console.log(e.responseText)
         }
     });

 });
 

 function showCards(film) {
     return `
     <div class="col-md-4 my-5">
         <div class="card">
             <img src="${film.Poster}" class="card-img-top">
             <div class="card-body">
                 <h5 class="card-title">${film.Title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${film.Year}</h6>
                 <a href="#" class="btn btn-primary modal-btn" onclick="document.getElementById('id01').style.display='block'" data-imdbid="${film.imdbID}">Show Details</a>
             </div>
         </div>
     </div>
     `;
 }