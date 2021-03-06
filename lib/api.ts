import map from "../constants/map";

let API_BASE_URL = "https://desafio-m7.herokuapp.com";

export async function auth(data, callback?) {
  const call = await fetch(API_BASE_URL + "/auth", {
    method: "post",

    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await call.json();
  return res;
}

export async function checkEmail(email) {
  const call = await fetch(API_BASE_URL + "/users/" + email);
  const res = await call.json();

  return res;
}

export async function authToken(data) {
  const call = await fetch(API_BASE_URL + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = call.json();
  return res;
}

export async function modifyData(data, token) {
  const call = await fetch(API_BASE_URL + "/users/modify", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + token,
      "Access-Control-Request-Method": "PATCH",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(data),
  });
  const res = await call.json();
  return res;
  if (res !== false) {
    window.alert("Información modificada con exito");
  } else {
    window.alert("Error al modificar la información");
  }
}

export async function createPetReport(data, token) {
  try {
    const call = await fetch(API_BASE_URL + "/pets/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + token,
        Accept: "application/json",
        "Access-Control-Request-Method": "POST",
      },
      body: JSON.stringify(data),
    });
    const res = await call.json();
    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function myPets(token) {
  const call = await fetch(API_BASE_URL + "/pets/me", {
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
  });

  const res = await call.json();
  return res;
}

export async function deletePetReport(data, token) {
  const call = await fetch(API_BASE_URL + "/pets/delete/", {
    method: "delete",
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify(data),
  });

  const res = await call.json();
  return res;

  if (res == true) {
    window.alert("Exito al eliminar el reporte de la mascota");
  }
}

export async function toEditPetReport(id, token) {
  const call = await fetch(API_BASE_URL + "/pets/toEdit/" + id, {
    headers: {
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
  });

  const res = await call.json();
  return res;
}

export async function editPetReport(data, token) {
  const call = await fetch(API_BASE_URL + "/pets/edit", {
    method: "PATCH",
    headers: {
      "Access-Control-Request-Method": "PATCH",
      "content-type": "application/json",
      authorization: "bearer " + token,
    },
    body: JSON.stringify(data),
  });
  const res = await call.json();

  if (res == true) {
    window.alert("Exito al modificar el reporte de la mascota");
  }
}

export async function petsAround(lat, lng) {
  const call = await fetch(
    API_BASE_URL + "/pets/around?lat=" + lat + "&lng=" + lng
  );
  const res = await call.json();
  return res;
}

export async function mapSearch(search) {
  const call = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${map.API_KEY}`
  );
  const res = await call.json();
  return res;
}

export async function infoAboutPet(data) {
  const call = await fetch(API_BASE_URL + "/pets/info", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const res = await call.json();
  return res;
}

export async function sendNotification(data) {
  const call = await fetch(API_BASE_URL + "/notifications", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await call.json();
  return res;
}
