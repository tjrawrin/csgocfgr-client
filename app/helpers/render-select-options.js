import Ember from 'ember';

export function renderSelectOptions(params) {
  const [option, initialValue] = params;
  if (option.id === initialValue) {
    return `<option value="${option.id}" selected>(${option.id}) ${option.optionName}</option>`;
  } else {
    return `<option value="${option.id}">(${option.id}) ${option.optionName}</option>`;
  }
}

export default Ember.Helper.helper(renderSelectOptions);
