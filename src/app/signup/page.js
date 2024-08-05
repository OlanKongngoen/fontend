
  export default function Signup() {
  return (

  <div>
    <div classname="row g-3">
      <div classname="col-md-6">
        <label htmlfor="inputEmail4" classname="form-label">Email</label>
        <input type="email" classname="form-control" id="inputEmail4" />
      </div>
      <div classname="col-md-6">
        <label htmlfor="inputPassword4" classname="form-label">Password</label>
        <input type="password" classname="form-control" id="inputPassword4" />
      </div>
    </div>
    <div classname="row g-3">
      <div classname="col-12">
        <label htmlfor="inputAddress" classname="form-label">Address</label>
        <input type="text" classname="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div classname="col-12">
        <label htmlfor="inputAddress2" classname="form-label">Address 2</label>
        <input type="text" classname="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
    </div>
    <div classname="row g-3">
      <div classname="col-md-6">
        <label htmlfor="inputCity" classname="form-label">City</label>
        <input type="text" classname="form-control" id="inputCity" />
      </div>
      <div classname="col-md-4">
        <label htmlfor="inputState" classname="form-label">State</label>
        <select id="inputState" classname="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div classname="col-md-2">
        <label htmlfor="inputZip" classname="form-label">Zip</label>
        <input type="text" classname="form-control" id="inputZip" />
      </div>
    </div>
    <div classname="row g-3">
      <div classname="col-12">
        <div classname="form-check">
          <input classname="form-check-input" type="checkbox" id="gridCheck" />
          <label classname="form-check-label" htmlfor="gridCheck">
            Check me out
          </label>
        </div>
      </div>
    </div>
    <div classname="row g-3">
      <div classname="col-12">
        <button type="submit" classname="btn btn-primary">Sign in</button>
      </div>
    </div>
  </div>
  );
  }
