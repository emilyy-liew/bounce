export async function getData(userID) {
  const response = await fetch(`https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/data/${userID}`);

   if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await response.json();
  return data;
}

export async function updateData(userID, attributeName, attributeValue) {
  const response = await fetch(`https://2p4s2d45nb.execute-api.eu-north-1.amazonaws.com/test/data/${userID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      attributeName: attributeName,
      attributeValue: attributeValue,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update data: ');
  }
}