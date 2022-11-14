import { useState } from "react"

export const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setInputs({
      ...inputs,
      [name]: type === 'checkbox' ? checked : value 
    });
  }

  const resetForm = () => {
    setInputs(initialState)
  }

  return {inputs, handleChange, resetForm}
}
