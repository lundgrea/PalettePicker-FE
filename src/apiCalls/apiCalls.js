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