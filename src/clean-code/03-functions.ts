(() => {
  function getlMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBiographyById(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  function createMovie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    if (isRetired) return 3000;

    return 4000;
  };
})();
