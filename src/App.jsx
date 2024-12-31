import "./App.css"
import { Data } from "./Data"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

const apiUrl = 'https://production-api.gousto.co.uk/cmsreadbroker/v1/categories?limit=4&offset=0&recipesCount=4'

function App() {

  return (
    <>
    <ErrorBoundary fallback = {<div>Error!</div>}>
      <Suspense fallback = {<div>Loading...</div>}>
        <Data url = {apiUrl}/>
      </Suspense>
    </ErrorBoundary>
    </>
  )
}

export default App