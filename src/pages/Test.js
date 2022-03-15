import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Test = ({match}) => {
  const params = useParams();
  const [location] = useSearchParams();
  console.log(params);
  console.log(location.entries());
  return ( <h1>Hola {params.id}</h1> );
}
 
export default Test;