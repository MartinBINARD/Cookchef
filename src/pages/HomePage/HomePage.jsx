import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { deleteRecipe as deleteR, updateRecipe as updateR } from 'src/apis';
import { useFetchRecipes } from 'src/hooks';
import {
  recipesState,
  selectFilteredRecipes,
  wishlistDisplayState,
} from 'src/state';
import Loading from '../../components/Loading/Loading';
import styles from './HomePage.module.scss';
import Recipe from './components/Recipe/Recipe';
import Search from './components/Search/Search';
import Wishlist from './components/Wishlist/Wishlist';

export default function HomePage() {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading] = useFetchRecipes(page);
  const recipes = useRecoilValue(selectFilteredRecipes(filter));
  const setRecipes = useSetRecoilState(recipesState);
  const showWishlist = useRecoilValue(wishlistDisplayState);

  async function updateRecipe(updatedRecipe) {
    const savedRecipe = await updateR(updatedRecipe);
    setRecipes(
      recipes.map((r) => (r._id === savedRecipe._id ? savedRecipe : r))
    );
  }

  async function deleteRecipe(_id) {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
  }

  return (
    <>
      <div className="flex-fill container d-flex flex-column p-20">
        <h1 className={`my-30 ${styles.title}`}>
          Découvrez nos nouvelles recettes{' '}
          <small className={styles.small}>- {recipes.length}</small>
        </h1>
        <div
          className={`card flex-fill d-flex flex-column p-20 mb-20 ${styles.contentCard}`}
        >
          <Search setFilter={setFilter} />
          {isLoading && !recipes.length ? (
            <Loading />
          ) : (
            <div className={styles.grid}>
              {recipes &&  recipes
                .filter((r) => r.title.toLowerCase().startsWith(filter))
                .map((r) => (
                  <Recipe
                    key={r._id}
                    recipe={r}
                    updateRecipe={updateRecipe}
                    deleteRecipe={deleteRecipe}
                  />
                ))}
            </div>
          )}
          <div className="d-flex flex-row justify-content-center align-items-center p-20">
            <button
              onClick={() => setPage(page + 1)}
              className="btn btn-primary"
            >
              Charger plus de recettes
            </button>
          </div>
        </div>
      </div>
      {showWishlist && <Wishlist />}
    </>
  );
}