import {useEffect, useState} from 'react';

export default function useForm(initial = {}) {

  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let {name, value, type} = e.target;

   if(type === 'number') {
    value = parseInt(value);
   }

   if(type === 'file') {
     [value] = e.target.files;
   }

    setInputs({
      ...inputs,
      [name]: value
    });
  }


  function resetInputs() {
    setInputs(initial);
  }

  function clearInputs() {
    let blankInputs = Object.fromEntries(Object.entries(inputs).map(([key, value ])=> [key, '']));
    setInputs(blankInputs);
  }


  return {inputs, handleChange, resetInputs, clearInputs}
}