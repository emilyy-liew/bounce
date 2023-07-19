export async function getData(userID) {
  const response = await fetch(`http://localhost:3001/data/${userID}`);

   if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  const data = await response.json();
  return data;
}

export async function updateData(userID, attributeName, attributeValue) {
  const response = await fetch(`http://localhost:3001/data/${userID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text',
    },
    body: JSON.stringify({
      attributeName,
      attributeValue,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update data');
  }
}

export async function createNewUser(userID) {
  const response = await fetch(`http://localhost:3001/newUser`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'text'
    },
    body: JSON.stringify({
      userID
    })
  });

  if (!response.ok) {
    throw new Error('Failed to create new user');
  }
}