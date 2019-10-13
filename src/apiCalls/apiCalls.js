export const fetchAllFolders = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/folders")
    const data = await response.json()
    return data
  } catch {
    throw new Error('Failed to get folders')
  }
}

export const fetchAllPalettes = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes")
    const data = await response.json()
    return data
  } catch {
    throw new Error('Failed to get palettes')
  }
}

export const fetchAPalette = async paletteId => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${paletteId}`)
    const data = await response.json()
    return data
  } catch {
    throw new Error(`Failed to get palette with ID: ${paletteId}`)
  }
}

export const fetchAFolder = async folderId => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/folders/${folderId}`)
    const data = await response.json()
    return data
  } catch {
    throw new Error(`Failed to get folders with ID: ${folderId}`)
  }
}

export const fetchAFoldersPalettes = async folderId => {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/folders/${folderId}/palettes`)
    const data = await response.json()
    return data
  } catch {
    throw new Error(`Failed to get palettes with folder ID: ${folderId}`)
  }
}

export const deleteFolder = async folderId => {
  try {
    const option = {
      method: "DELETE"
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/folders/${folderId}`, option)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`Could not delete folder with ID of: ${folderId} and its associated palettes`);
  }
};

export const deletePalette = async paletteId => {
  try {
    const option = {
      method: "DELETE"
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${paletteId}`, option)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`Could not delete palette with ID: ${paletteId}`);
  }
};


export const postNewPalette = async (name, c1, c2, c3, c4, c5, folderId) => {
  const newPalette = 
  { 
    name: name, 
    c1: c1, 
    c2: c2, 
    c3: c3, 
    c4: c4, 
    c5: c5, 
    folder_id: folderId
  }

  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newPalette),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/folders/${folderId}/palettes`, options)
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was a problem adding your palette');
  }
};

export const postNewFolder = async name => {
  const newFolder = { name: name }

  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newFolder),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/folders`, options)
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was a problem adding your folder');
  }
};


export const patchAPalette= async (paletteId, key, newValue) => {
  const updatedPalette = `{${key}: newValue }`

  try {
    const options = {
      method: "POST",
      body: JSON.stringify(updatedPalette),
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/palettes/${paletteId}`, options)
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was a problem updating your palette');
  }
};





// updateAFolder = folderId => {
//   updateFolder(folderId)
//   .then(networkMessage => this.setState({networkMessage}))
//   .catch(error => this.setState({error}))
// }
