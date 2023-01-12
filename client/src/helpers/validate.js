let validURL = (str) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};

let validName = (str) => {
  let pattern = /^[a-zA-Z\s]+$/;
  return pattern.test(str);
};

export let validate = (input) => {
  let errors = {};

  // Name obligatorio.
  if (!input.name) {
    errors.name = 'Name cannot be null.';
  }
  // Solo letras
  if (input.name && !validName(input.name)) {
    errors.name = 'Name invalid. Only letters please';
  }
  // Summary obligatorio.
  if (!input.summary) {
    errors.summary = 'Summary cannot be null.';
  }
  // El score tiene que ser de 1 a 100, puede ser nulo.
  if (input.score < 1 || input.score > 100) {
    errors.score = 'The score is 1 - 100.';
  }
  // El healthScore tiene que ser de 1 a 100, puede ser nulo.
  if (input.healthScore < 1 || input.healthScore > 100) {
    errors.healthScore = 'The health score is 1 - 100.';
  }
  // La imagen puede no ingresarse, si se ingresa tiene que pasar la validación.
  if (input.image && !validURL(input.image)) {
    errors.image = 'Invalid URL.';
  }
  // Obligatorio los pasos.
  if (!input.steps) {
    errors.steps = 'Enter the recipe steps.';
  }
  return errors;
};
