// function initMap() {
// 	// Extraire les coordonnées de l'URL
// 	var url = "https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%AA%D9%88%D9%81%D9%8A%D9%82+%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D9%8A+TCH%E2%80%AD/@15.2788125,44.2206989,17z/data=!3m1!4b1!4m6!3m5!1s0x1603c58c4ebb60fd:0xb307baba481175ed!8m2!3d15.2787566!4d44.2206946!16s%2Fg%2F11kq528nlg?entry=ttu";
// 	var coordinates = url.match(/@([^,]+),([^,]+)/);
  
// 	// Si les coordonnées sont trouvées, les utiliser pour initialiser la carte
// 	if (coordinates && coordinates.length === 3) {
// 	  var lat = parseFloat(coordinates[1]);
// 	  var lng = parseFloat(coordinates[2]);
  
// 	  // Options de la carte
// 	  var mapOptions = {
// 		center: {lat: lat, lng: lng},
// 		zoom: 17
// 	  };
  
// 	  // Créer une nouvelle instance de la carte dans la div avec l'ID "myMap"
// 	  var map = new google.maps.Map(document.getElementById("myMap"), mapOptions);
  
// 	  // Créer un marqueur pour l'emplacement
// 	  var marker = new google.maps.Marker({
// 		position: {lat: lat, lng: lng},
// 		map: map,
// 		title: "AL-TAFIQ CONSULTING HOSPITAL"
// 	  });
// 	} else {
// 	  console.error("Les coordonnées ne sont pas trouvées dans l'URL.");
// 	}
//   }

// // Call the initMap function after the Google Maps API has loaded
// window.addEventListener('load', initMap)