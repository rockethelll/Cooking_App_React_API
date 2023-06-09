import useSWR from "swr"
import Card from "./components/Card.jsx"
import { useState, useCallback } from "react"
import { debounce } from "lodash"

function App() {
  const [inputSearch, setInputSearch] = useState('')

  const fetcher = async (url) => {
    return await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Une erreur s'est produite")
        }
        return res.json()
      })
      .then((data) => data.meals)
      .catch((error) => {
        console.log(error.message)
      })
  }

  const { data: meals, error } = useSWR(import.meta.env.VITE_API_URL + inputSearch, fetcher)

  const handleInputChange = useCallback(debounce((value) => setInputSearch(value), 700), []);

  if (error) return <div>Une erreur s'est produite</div>
  if (!meals) return <div>Chargement en cours...</div>

  return (
    <>
      <h1>React Cook</h1>
      <input
        type='text'
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <div className="meals-container">
        {meals && meals.slice(0, 24).map((recipe) => {
          return <Card key={recipe.idMeal} recipe={recipe} />
        })}
      </div>
    </>
  )
}

export default App