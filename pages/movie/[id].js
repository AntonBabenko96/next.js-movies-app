import { MainLayout } from "@/components/MainLayout";
import { API } from "@/api/api";
import { useRouter } from "next/router";
import css from "@/styles/MoviesId.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, addToCart } from "../../store/slice";

export default function Movie({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const inCart = useSelector((state) =>
    state.movies.cart.some((movie) => movie.id === data.id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const { original_title, overview, release_date, poster_path, id } = data;
  return (
    <MainLayout>
      <div className={css.component}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            className={css.poster}
          />
        ) : (
          ""
        )}

        <div>
          <h2 className={css.title}>{original_title}</h2>
          <p className={css.date}>{release_date}</p>
          <h3 className={css.overviewTitle}>Overview</h3>
          <p className={css.overview}>{overview}</p>
        </div>
      </div>
      <button onClick={() => router.back()}>Go back</button>
      {inCart ? (
        <button onClick={() => dispatch(deleteFromCart({ id }))}>Remove</button>
      ) : (
        <button onClick={handleAddToCart}>Add to cart</button>
      )}
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  if (!id) {
    return {
      notFound: true,
    };
  }
  const data = await API.fetchMovieById(id);
  return {
    props: { data },
  };
}
