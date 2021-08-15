import { useGlobalContext } from '../helpers/context';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>No Cocktails Matched Your Search</h2>;
  }

  return <div>Cocktail List Component</div>;
};

export default CocktailList;
