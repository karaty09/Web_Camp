function body_camp() {
  const url = "http://localhost:3000/usercamp";
  fetch(url, { method: "GET" })
    .then((r) => {
      return r.json();
    })
    .then((res) => {
      console.log(res);

      var table = document.getElementById("tblData");

      table.innerHTML = "";

      for (var i = 0; i < res.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);

        const item = res[i];
        console.log;
        cell1.innerHTML = item.place;
        cell2.innerHTML = item.name;
        cell3.innerHTML = item.phonenumber;
        cell4.innerHTML = item.adults;
        cell5.innerHTML = item.children;
        cell6.innerHTML = item.datecome;
        cell7.innerHTML = item.dateback;
        cell8.innerHTML = item.room_selection;
        cell9.innerHTML = "<button class='btn btn-danger' onclick='item_dele(" + item.id + ")'>Delete</button>"
                            + " <button class='btn btn-warning' onclick='item_edit(" + item.id + ")'>Edit</button>"
      }
  });
}

function btn_add_click(){
  const data = {
    "place": document.getElementById("place").value,
    "name": document.getElementById("name").value,
    "phonenumber": document.getElementById("phonenumber").value,
    "adults": document.getElementById("adults").value,
    "children": document.getElementById("children").value,
    "datecome": document.getElementById("datecome").value,
    "dateback": document.getElementById("dateback").value,
    "room_selection" : document.getElementById("room_selection").value
  };
  const url = "http://localhost:3000/usercamp";
  fetch(url, {
    method: "POST",
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then((r) => { return r.json() })
    .then((res) => {
        console.log(res);
        successbox();
    })
}

function item_dele(uid) {
  var x = confirm("Sure?");
  if (x) {
      const url = "http://localhost:3000/usercamp/" + uid;
      fetch(url, {
          method: "DELETE"
      }).then((r) => { return r.json() })
          .then((res) => {
              console.log(res);
              body_load();
          })
  }
}

function item_edit(uid) {
  //alert(uid)
  const url = "http://localhost:3000/usercamp/" + uid;
  fetch(url, {
      method: "GET"
  }).then((r) => {
      return r.json();
  }).then((res) => {
      //alert(JSON.stringify(res));
      var place = document.getElementById('place');
      var name = document.getElementById("name");
      var phonenumber = document.getElementById("phonenumber");
      var adults = document.getElementById("adults");
      var children = document.getElementById("children");
      var datecome = document.getElementById("datecome");
      var dateback = document.getElementById("dateback");
      var room_selection = document.getElementById("room_selection");
      place.value = res.place;
      name.value = res.name;
      phonenumber.value = res.phonenumber;
      adults.value = res.adults;
      children.value = res.children;
      datecome.value = res.datecome;
      dateback.value = res.dateback;
      room_selection.value = res.room_selection;
      document.getElementById("btn_save").innerHTML = `<button id="btn_save" class="btn btn-success" onclick="btn_save_click(${uid})"> Save Your Book </button>`
  })
}

function btn_save_click(uid) {
  const data = {
    "place": document.getElementById("place").value,
    "name": document.getElementById("name").value,
    "phonenumber": document.getElementById("phonenumber").value,
    "adults": document.getElementById("adults").value,
    "children": document.getElementById("children").value,
    "datecome": document.getElementById("datecome").value,
    "dateback": document.getElementById("dateback").value,
    "room_selection" : document.getElementById("room_selection").value
  };
  const url = "http://localhost:3000/usercamp/" + uid;
  console.log(url);
  fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  
    .then((r) => {
      return r.json();
    })
    .then((res) => {
      // console.log(res);
      body_camp();
    });
}

function contact01() {
  Swal.fire({
    title: "<strong>Contact Me</strong>",
    html:
      'By this <b><a href="https://web.facebook.com/it.walailak" target="_blank">links</a></b>, ' +
      "to contact me.",
    imageUrl:
      "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/279560270_5821053641244444_1641496247686643675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFyqpXyD0MQxM2xpd7p72gtWylXctbtv-pbKVdy1u2_6u-d29MBkAYEFOdTiNSdyWHEkSUAoYDdooeCzlkxgwPS&_nc_ohc=yO4LCvikMGMAX8zcoND&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfCfrBQjexnMwx6yzRp6Ogevya5TTZuTZRIx6LnfZcB5rg&oe=63B9D566",
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
}

function infolyn() {
  Swal.fire(
    "Detail Resort",
    '<b>Facilities</b><br><i class="fa-solid fa-car"></i> Car park<br><i class="fa-solid fa-utensils"></i> Restaurant<br><i class="fa-solid fa-wifi"></i> Free wifi<br><i class="fa-sharp fa-solid fa-bell-concierge"></i> 24h service<br><i class="fa-solid fa-person-swimming"></i> Outdoor swimming pool ',
    "info"
  );
}

function inforiver() {
  Swal.fire(
    "Detail Resort",
    '<b>Facilities</b><br><i class="fa-solid fa-car"></i> Car park<br><i class="fa-solid fa-utensils"></i> Restaurant<br><i class="fa-solid fa-wifi"></i> Free wifi<br><i class="fa-sharp fa-solid fa-bell-concierge"></i> 24h service<br><i class="fa-solid fa-person-swimming"></i> Outdoor swimming pool ',
    "info"
  );
}

function infortentriver() {
  Swal.fire(
    "Detail Resort",
    '<b>Facilities</b><br><i class="fa-solid fa-car"></i> Car park<br><i class="fa-solid fa-utensils"></i> Restaurant<br><i class="fa-solid fa-wifi"></i> Free wifi<br><i class="fa-sharp fa-solid fa-bell-concierge"></i> 24h service<br><i class="fa-solid fa-person-swimming"></i> Outdoor swimming pool ',
    "info"
  );
}

function successbox(){ 
Swal.fire(
  'Good job!',
  'Your booking was successful!',
  'success'
);
}