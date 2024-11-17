import { useState } from "react";
import "./Searchbar.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"]

const Searchbar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const swtchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  }

  const handleChange = (e) => {
    e.preventDefault();

    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }


  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={() => swtchType(type)} className={query.type === type ? 'active' : ""}>
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        <input type="number" name="minPrice" min={0} max={100000000} placeholder="min Price" onChange={handleChange} />
        <input type="number" name="maxPrice" min={0} max={100000000} placeholder="max Price" onChange={handleChange} />
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Searchbar