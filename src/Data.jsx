import { use } from "react"
import { PropTypes } from "prop-types"



export function Data({url}) {
    const apiData = use(fetch(url).then(res => res.json()))

    return <pre>{JSON.stringify(apiData, null, 2)}</pre>
}

Data.propTypes = {
    url: PropTypes.string.isRequired,
  }