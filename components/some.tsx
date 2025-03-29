export default async function page() {
  const response = await fetch("https://api.twitter.com", {
    next: {
      revalidate: 30,
    },
  });

  const data = await response.json();

  console.log(data);
}
