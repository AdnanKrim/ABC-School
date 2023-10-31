import { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    class: '',
    registrationNumber: '',
    selectedMonths: [],
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMonthChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, selectedMonths: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your desired form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Father's Name:
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Class:
        <input type="text" name="class" value={formData.class} onChange={handleChange} />
      </label>
      <br />
      <label>
        Registration Number:
        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
      </label>
      <br />
      <label>
        Select Month (Multiple Selection):
        <select name="selectedMonths" multiple value={formData.selectedMonths} onChange={handleMonthChange}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          {/* Add more options for other months */}
        </select>
      </label>
      <br />
      <label>
        Amount:
        <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};


// give me a form for my react compo which has this input filelds given below--- name, father name, class, registration number, select month, amount and a submit button. the select month fileld should be a dropdown selector. there I can select multiple month

export default Payment;