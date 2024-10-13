import { useState } from "react";
import "./Searchbar.scss";

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
        <input type="text" name="location" placeholder="City location" />
        <input type="number" name="minPrice" min={0} max={100000000} placeholder="min Price" />
        <input type="number" name="maxPrice" min={0} max={100000000} placeholder="max Price" />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar