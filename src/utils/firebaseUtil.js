import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { collection, getDocs, getFirestore } from 'firebase/firestore';

export function firebaseConfig() {
  const config = {
    apiKey: 'AIzaSyCrbQ2awR3giFzX6YPQXx9QR3eUP1ldO8o',
    authDomain: 'react-sistemagestion.firebaseapp.com',
    projectId: 'react-sistemagestion',
    storageBucket: 'react-sistemagestion.appspot.com',
    messagingSenderId: '256085427990',
    appId: '1:256085427990:web:4f1a3208091cd88af3f237'
  };

  const app = initializeApp(config);
}

export function firebaseRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password).then(
    (credeneciales) => {
      // credeneciales.user
    }
  );
}

export async function firebaseIniciarSesion(email, password) {
  try {
    const credenciales = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
  } catch (e) {
    return false;
  }

  return true;
}

export async function firebaseBuscar(coleccionAbuscar) {
  const listado = [];
  const consulta = collection(getFirestore(), coleccionAbuscar);

  const result = await getDocs(consulta);

  result.forEach((document) => {
    const obj = document.data();
    obj.id = document.id;
    listado.push(obj);
  });

  return listado;
}
