//Pierwsza linia kodu dodaje nasłuchiwanie zdarzenia "scroll" na oknie przeglądarki.
//W momencie, gdy użytkownik przewija stronę, funkcja "reveal" zostanie uruchomiona.
window.addEventListener("scroll", reveal);

//Funkcja "reveal" tworzy listę wszystkich elementów na stronie, które posiadają klasę "reveal".
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  //Następnie funkcja przechodzi przez każdy z tych elementów w pętli "for".
  for (var i = 0; i < reveals.length; i++) {
    //Dla każdego elementu zostaje pobrana wartość "top", czyli odległość od góry okna przeglądarki.
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    //Następnie obliczane jest położenie, w którym element ma się pojawić.
    //Domyślnie element zostanie odkryty, gdy jego górna krawędź jest oddalona od
    //dolnej krawędzi okna przeglądarki o 10 pikseli.
    var revealpoint = 2;
    //Jeśli odległość między górną krawędzią elementu a dolną krawędzią okna
    //przeglądarki jest mniejsza niż ustalony punkt pojawienia się (10 pikseli),
    //do elementu zostaje dodana klasa "active", która odpowiada za wyświetlanie elementu.
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
    //Jeśli element nie spełnia warunku, klasa "active" zostaje usunięta, co oznacza,
    //że element jest niewidoczny.
    else {
      reveals[i].classList.remove("active");
    }
  }
}
