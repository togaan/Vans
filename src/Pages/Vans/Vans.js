import React from "react";
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { getVans } from "../../api";

// Loader function to fetch data from local JSON file
export function loader() {
  return defer({ vans: getVans() })
  //return defer({ vans: getVans(), user: await getUser() }) if we have more data
}


const Vans = () => {

    const dataPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    
    
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
  

    return (
        <div className="vans pb-5">
            
        <h1 className="fs-2 text-center mt-3 p-4">Explore our van options</h1>
          <React.Suspense fallback={<h2>Loading vans...</h2>}>
            <Await resolve={dataPromise.vans}>
              {vans => {
                  const displayedVans = typeFilter 
                  ? vans.filter(van => van.type.toLowerCase() === typeFilter)
                  : vans

                  return (
                    <>
                        <div className="names d-flex justify-content-center algin-items-center gap-3 mb-5">

                            <button
                                onClick={() => handleFilterChange("type", "simple")}
                                className={` btn ${typeFilter === "simple" ? "simple text-white" : "search"}`}
                            >Simple</button>

                            <button
                                onClick={() => handleFilterChange("type", "luxury")}
                                className={` btn ${typeFilter === "luxury" ? "luxury text-white" : "search"}`}
                            >Luxury</button>

                            <button
                                onClick={() => handleFilterChange("type", "rugged")}
                                className={` btn ${typeFilter === "rugged" ? "rugged text-white" : "search"}`}
                            >Rugged</button>

                            {typeFilter ? (
                                <button
                                    onClick={() => handleFilterChange("type", null)}
                                    className={`text-decoration-none text-black  ${typeFilter === null ? "clear-filters" : "search"}`}
                                >Clear filters</button>
                            ): null}
                        </div>

                        <div className="container mb-5">
                          <div className="row">
                              {displayedVans.map((item, index) => (
                                  <Link
                                      to={`/vansPage/${item.id}`}
                                      state={{ search: `?${searchParams.toString()}`, typeFilter: typeFilter }}
                                      className="text-decoration-none col-12 col-sm-6 col-md-4 col-lg-3 mt-5 "
                                      key={index}
                                      aria-label={`View details for ${item.name}, priced at $${item.price} per day`}
                                      >
                                      
                                      <div><img src={item.imageUrl} alt="van" className="img-fluid rounded-3"/></div>
                                      <div className="van-info ps-1 pe-1 mt-2 d-flex justify-content-between position-relative">
                                          <h4 className="fs-6 text-black">{item.name}</h4>
                                          <h4 className="fs-6 text-black">${item.price}</h4>
                                          <p className="position-absolute end-0 mt-4 me-1 text-black">/day</p>
                                      </div>
                                      <button
                                          className={`btn text-white fs-6 pt-0 pb-1 ps-3 pe-3 ms-1
                                              ${item.type === "simple" ? "simple" : item.type === "rugged" ? "rugged" : "luxury"}
                                              `}>
                                          {item.type}</button>
                                  </Link>
                              ))}
                          </div>
                        </div>
                    </>
                  )
                }}
            
            </Await> 
          </React.Suspense>
        </div>
    )
}

export default Vans

/**
 import React from "react";
 import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
 // Loader function to fetch data from local JSON file
export async function dataLoader() {
  const response = await fetch('../../vans.json'); // Adjust the path if necessary
  if (!response.ok) {
    throw new Response('Failed to fetch data', { status: response.status });
  }
  const data1 = await response.json();
  return data1;
}

const Vans = () => {
  const newDAta = useLoaderData()
  console.log(newDAta)
}

my app.js
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Vans, { dataLoader} from './Pages/Vans/Vans';
 
 const router = createBrowserRouter(createRoutesFromElements(
  <Route path='vansPage' element={<Vans/>} loader={dataLoader} />
))
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
 another way to filter items
 <NavLink
    className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? "active" : null} `}
    to="?type=simple"
>Reviews</NavLink>

if we want to add something to the url without changing the filter type we use a function to handle that

function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }
  
return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div>
      <div>
        <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
 */