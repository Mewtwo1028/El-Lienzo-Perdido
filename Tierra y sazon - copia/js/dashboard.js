


//obtener los datos de la bd
fetch('http://10.11.4.96:5000/api/menu')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos recibidos de la API
    console.log(data[0]);
  })
  .catch(error => {
    // Manejo de errores en caso de que la petición falle
    console.error('Error:', error);
  });