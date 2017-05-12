/**
 * Created by Maxim on 4/17/2017.
 */

if (VK !== undefined) {
  VK.init({
    apiId: 5993950
  });


  VK.Auth.login(function(response) {
    if (response.session) {
      /* Пользователь успешно авторизовался */
      console.log('session');
      //alert(response.session.user.id);
      user = response.session.user;
      var greetingsElement = document.querySelector('#Greetings');
      greetingsElement.innerHTML += user.first_name + " " + user.last_name;
      //userInfoElement.innerHTML += user.id + '<br>' + user.first_name + '<br>'
      //  + user.last_name;
      if (response.settings) {
        /* Выбранные настройки доступа пользователя, если они были запрошены */
        console.log('settings');
      }
    } else {
      /* Пользователь нажал кнопку Отмена в окне авторизации */
      console.log('cancel');
    }
  });
}
else {
  console.log('Unknown VK');
}

var coordinatesIP, coordinatesGPS;
ymaps.ready(init);

function init() {
  var geolocation = ymaps.geolocation,
    myMap = new ymaps.Map('map', {
      center: [55, 34],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    });

  // Сравним положение, вычисленное по ip пользователя и
  // положение, вычисленное средствами браузера.
  geolocation.get({
    provider: 'yandex',
    mapStateAutoApply: true
  }).then(function (result) {
    // Красным цветом пометим положение, вычисленное через ip.
    result.geoObjects.options.set('preset', 'islands#redCircleIcon');
    result.geoObjects.get(0).properties.set({
      balloonContentBody: 'Мое местоположение по IP'
    });
    coordinatesIP = result.geoObjects.get(0).geometry.getCoordinates();
    myMap.geoObjects.add(result.geoObjects);
  });

  geolocation.get({
    provider: 'browser',
    mapStateAutoApply: true
  }).then(function (result) {
    // Синим цветом пометим положение, полученное через браузер.
    // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
    result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
    result.geoObjects.get(0).properties.set({
      balloonContentBody: 'Мое местоположение по GPS'
    });
    coordinatesGPS = result.geoObjects.get(0).geometry.getCoordinates();
    myMap.geoObjects.add(result.geoObjects);
  });

  //window.setTimeout(postOnTheWall, 2000);
}


function postOnTheWall() {
  var coordinates = coordinatesGPS;
  if (coordinates === undefined || typeof coordinates[0] !== "number" || typeof coordinates[1] !== "number") {
    coordinates = coordinatesIP;
  }
  VK.Api.call('wall.post', {friends_only: 0,
      message:'Я я в опасности.' +
      ' В данный момент нахожусь в указанном месте.',
      lat: coordinates[0],
      long: coordinates[1]},
    function(r) {
      if(r.response) {
        var postedElement = document.querySelector('.Is_posted');
        postedElement.style.visibility = 'visible';
      }
    }
  );
}
