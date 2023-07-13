export async function getData(userID) {
  const res = await fetch(`http://localhost:3001/${userID}`)

   if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  return data;
}