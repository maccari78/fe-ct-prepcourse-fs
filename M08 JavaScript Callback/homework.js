/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   if (typeof nombre !== 'string' || nombre === '') {
      return 'Por favor, proporciona un nombre válido';
   }

   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   if (typeof cb === 'function') {
      cb();  // Invocar el callback
   } else {
      console.log('El argumento proporcionado no es una función.');
   }
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      console.log('Por favor, proporciona dos números válidos.');
      return;
   }

   if (typeof cb !== 'function') {
      console.log('El tercer argumento debe ser una función.');
      return;
   }

   const resultado = cb(num1, num2);
   return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   if (!Array.isArray(arrayOfNumbers)) {
      console.log('Por favor, proporciona un arreglo de números.');
      return;
   }

   if (typeof cb !== 'function') {
      console.log('El segundo argumento debe ser una función.');
      return;
   }

   const suma = arrayOfNumbers.reduce((total, num) => total + num, 0);

   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   if (!Array.isArray(array)) {
      console.log('Por favor, proporciona un arreglo.');
      return;
   }

   if (typeof cb !== 'function') {
      console.log('El segundo argumento debe ser una función.');
      return;
   }

   for (let i = 0; i < array.length; i++) {
      cb(array[i]);
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   if (!Array.isArray(array)) {
      console.log('Por favor, proporciona un arreglo.');
      return;
   }

   if (typeof cb !== 'function') {
      console.log('El segundo argumento debe ser una función.');
      return;
   }

   const nuevoArray = [];
   for (let i = 0; i < array.length; i++) {
      const resultado = cb(array[i]);
      nuevoArray.push(resultado);
   }

   return nuevoArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   if (!Array.isArray(arrayOfStrings)) {
      console.log('Por favor, proporciona un arreglo de cadenas.');
      return;
   }

   const resultadoFiltrado = arrayOfStrings.filter(function(cadena) {
      return cadena.charAt(0).toLowerCase() === 'a';
   });

   return resultadoFiltrado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
