import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("address.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS userLocation (lat REAL NOT NULL, lng REAL NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS auth (userName TEXT NOT NULL, token TEXT NOT NULL, email TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const insertUserLocation = (lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO userLocation (lat, lng) values (?, ?);",
        [lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const fetchUserLocation = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM userLocation;",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const deleteUserLocation = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM userLocation ",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const insertAuth = (userName, token, email) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO auth (userName, token, email) values (?, ?, ?);",
        [userName, token, email],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const fetchAuth = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM auth;",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const deleteAuth = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM auth ",
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};
