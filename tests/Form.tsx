import React from "react";

const Form = () => (
  <form>
    <div className="control">
      <label htmlFor="name">Full name </label>
      <input id="name" maxLength={20} type="text" />
    </div>
    <div className="control">
      <label htmlFor="biography">Biography </label>
      <textarea id="biography"></textarea>
    </div>
    <div className="control">
      <label htmlFor="planet">Planet </label>
      <input id="planet" readOnly type="text" value="Earth" />
    </div>
    <div className="control">
      <label htmlFor="coupon">Coupon </label>
      <input disabled id="coupon" type="text" value="Not available" />
    </div>
    <div className="control">
      <label htmlFor="image">Image </label>
      <input id="image" type="file" />
    </div>
    <fieldset>
      <legend>Gender</legend>
      <div className="control">
        <input id="gender_male" name="gender" type="radio" />
        <label htmlFor="gender_male">Male</label>
      </div>
      <div className="control">
        <input id="gender_female" name="gender" type="radio" />
        <label htmlFor="gender_female">Female</label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Hobbies</legend>
      <div className="control">
        <input id="hobbies_hiking" type="checkbox" />
        <label htmlFor="hobbies_hiking">Hiking</label>
      </div>
      <div className="control">
        <input id="hobbies_dancing" type="checkbox" />
        <label htmlFor="hobbies_dancing">Dancing</label>
      </div>
      <div className="control">
        <input id="hobbies_gardening" type="checkbox" />
        <label htmlFor="hobbies_gardening">Gardening</label>
      </div>
    </fieldset>
    <div className="control">
      <label htmlFor="age_group">Age Group</label>
      <select id="age_group">
        <option>0 to 9 Years</option>
        <option>10 to 19 Years</option>
        <option>20 to 29 Years</option>
        <option>30 to 39 Years</option>
        <option>40 to 49 Years</option>
        <option>50 to 59 Years</option>
        <option>60 to 69 Years</option>
        <option>70 to 79 Years</option>
        <option>80 to 89 Years</option>
        <option>90 to 99 Years</option>
      </select>
    </div>
    <div className="control">
      <label htmlFor="idol">Idol</label>
      <select id="idol" size={2}>
        <option>Michael Jackson</option>
        <option>Jesus</option>
        <option>Mahatma Gandhi</option>
        <option>John Doe</option>
      </select>
    </div>
    <div className="control">
      <label htmlFor="interests">Interests</label>
      <select id="interests" multiple>
        <option>Readings</option>
        <option>Cinemas</option>
        <option>Theaters</option>
        <option>Operas</option>
        <option>Concerts</option>
      </select>
    </div>
    <div className="control">
      <label htmlFor="favourite_car">Favourite Car</label>
      <select id="favourite_car">
        <optgroup label="Swedish Cars">
          <option>Volvo</option>
          <option>Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option>Mercedes</option>
          <option>Audi</option>
        </optgroup>
      </select>
    </div>
    <div className="control">
      <label htmlFor="my_bike">Favourite Dish</label>
      <select id="my_bike" size={2}>
        <optgroup label="Vegetarian">
          <option>Green Salad</option>
          <option>French Fries</option>
        </optgroup>
        <optgroup label="Carnivorous">
          <option>Big Mac</option>
          <option>Roast Beef</option>
        </optgroup>
      </select>
    </div>
    <div className="control">
      <label htmlFor="public_transports">Public transports</label>
      <select id="public_transports" multiple>
        <optgroup label="Ground">
          <option>Train</option>
          <option>Bus</option>
        </optgroup>
        <optgroup label="Water">
          <option>Ship</option>
          <option>Submarine</option>
        </optgroup>
        <optgroup label="Air">
          <option>Plane</option>
          <option>Cable Car</option>
        </optgroup>
      </select>
    </div>
    <div className="control">
      <input id="accept_agbs" type="checkbox" />
      <label htmlFor="accept_agbs">I accept the terms and conditions</label>
    </div>
    <div className="control">
      <button type="submit">Register</button>
    </div>
    <div className="control">
      <button disabled>Cancel</button>
    </div>
  </form>
);

export default Form;
