import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { deleteFromCart, loadCart } from "../store/slice";
import { MainLayout } from "@/components/MainLayout";
import { useEffect } from "react";

import css from "../styles/Movies.module.css";
import Link from "next/link";

export default function Cart() {
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  const movies = useSelector((state) => state.movies.cart);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <MainLayout title="Cart">
      <h1>Cart</h1>
      <ul className={css.moviesList}>
        {movies.map(({ title, id, poster_path }) => {
          return (
            <li key={id} className={css.posterList}>
              <Link
                className={css.moviesItem}
                href={{
                  pathname: "/movie/[id]",
                  query: {
                    id: `${id}`,
                  },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  className={css.poster}
                />
                {title}
              </Link>
              <button onClick={() => dispatch(deleteFromCart({ id }))}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => router.back()}>Go back</button>
    </MainLayout>
  );
}
