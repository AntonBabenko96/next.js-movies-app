import Link from "next/link";
import { MainLayout } from "@/components/MainLayout";
import { API } from "@/api/api";
import Router from "next/router";
import css from "@/styles/Movies.module.css";

export default function Movies({ data }) {
  const { results: movies } = data;
  return (
    <MainLayout title="Movies">
      <h1>Movies</h1>
      <button
        onClick={() => {
          Router.push("/");
        }}
      >
        Go back
      </button>
      <ul className={css.moviesList}>
        {movies.map(({ title, id, poster_path }) => {
          if (!title) return null;
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
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const data = await API.fetchTrendingMovies();
  return {
    props: { data },
  };
}
