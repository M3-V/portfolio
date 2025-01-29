async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/homepage");

  const {Titre, Bio, Title_2, Description, Profile_photo} = strapiData.data;

  return (
    <main className="container mx-auto py-6">
      <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100">Contactez moi</button>
      {/*<img src={Profile_photo} alt="" /> A retenter en avancant dans le tuto*/}
      <img className="size-20 rounded" src={Profile_photo} alt="" />
      <h1 className="text-5xl font-bold">{Titre}</h1>
      <h3 className="text-5l font-bold">{Bio}</h3>
      <h2 className="text-2xl font-bold">{Title_2}</h2>
      <p className="text">{Description}</p>
    </main>
  );
}