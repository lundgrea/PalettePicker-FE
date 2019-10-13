import { 
  fetchAllFolders, 
  fetchAllPalettes, 
  fetchAPalette, 
  fetchAFolder, 
  fetchAFoldersPalettes, 
  deleteFolder, 
  deletePalette, 
  postNewPalette, 
  postNewFolder, 
  patchAPalette, 
  patchAFolder } from '../apiCalls/apiCalls'


  describe("fetchAllPalettes", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = [{
        c1: "#586BA4",
        c2: "#594157",
        c3: "#A0D2DB",
        c4: "#BEE7E8",
        c5: "#CFBCDF",
        created_at: "2019-10-11T19:15:40.747Z",
        folder_id: 11,
        id: 20,
        name: "Whale Life",
        updated_at: "2019-10-11T19:15:40.747Z"
      }
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAllPalettes();
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes");
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAllPalettes()).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllPalettes()).rejects.toEqual(Error("Failed to get palettes"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get palettes"));
      });
      expect(fetchAllPalettes()).rejects.toEqual(Error("Failed to get palettes"));
    });
  });




  describe("fetchAPalette", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = {
        c1: "#586BA4",
        c2: "#594157",
        c3: "#A0D2DB",
        c4: "#BEE7E8",
        c5: "#CFBCDF",
        created_at: "2019-10-11T19:15:40.747Z",
        folder_id: 11,
        id: 20,
        name: "Whale Life",
        updated_at: "2019-10-11T19:15:40.747Z"
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAPalette(20);
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes/20");
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAPalette(20)).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAPalette(20)).rejects.toEqual(Error("Failed to get palette with ID: 20"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get palette with ID: 20"));
      });
      expect(fetchAPalette(20)).rejects.toEqual(Error("Failed to get palette with ID: 20"));
    });
  });


  describe("fetchAFoldersPalettes", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = [
        {
        c1: "#586BA4",
        c2: "#594157",
        c3: "#A0D2DB",
        c4: "#BEE7E8",
        c5: "#CFBCDF",
        created_at: "2019-10-11T19:15:40.747Z",
        folder_id: 11,
        id: 20,
        name: "Whale Life",
        updated_at: "2019-10-11T19:15:40.747Z"
      },
      {
        c1: "#786BA4",
        c2: "#994157",
        c3: "#E0D2DB",
        c4: "#CEE7E8",
        c5: "#DFBCDF",
        created_at: "2019-11-11T19:15:40.747Z",
        folder_id: 11,
        id: 22,
        name: "Whole 30 Life",
        updated_at: "2019-12-11T19:15:40.747Z"
      },
    
    ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAFoldersPalettes(11);
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/folders/11/palettes");
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAFoldersPalettes(11)).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAFoldersPalettes(11)).rejects.toEqual(Error("Failed to get palettes with folder ID: 11"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get palettes with folder ID: 11"));
      });
      expect(fetchAFoldersPalettes(11)).rejects.toEqual(Error("Failed to get palettes with folder ID: 11"));
    });
  });



  describe("fetchAFolder", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = {
        name: 'Cookie Crisps',
        created_at: "2019-10-11T19:15:40.747Z",
        id: 19,
        updated_at: "2019-10-11T19:15:40.747Z"
      }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAFolder(19);
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/folders/19");
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAFolder(19)).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAFolder(19)).rejects.toEqual(Error("Failed to get folder with ID: 19"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get folder with ID: 19"));
      });
      expect(fetchAFolder(19)).rejects.toEqual(Error("Failed to get folder with ID: 19"));
    });
  });




  describe("fetchAllFolders", () => {
    let mockResponse;
    beforeEach(() => {
      mockResponse = [
        {id: 10, name: "Shy", created_at: "2019-10-11T19:15:40.738Z", updated_at: "2019-10-11T19:15:40.738Z"},
        {id: 12, name: "Monster Mash", created_at: "2019-10-11T19:15:40.740Z", updated_at: "2019-10-11T19:15:40.740Z"}
      ]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it("should call fetch with the correct url", () => {
      fetchAllFolders();
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/folders");
    });
  
    it("should return a successful response (HAPPY)", () => {
      expect(fetchAllFolders()).resolves.toEqual(mockResponse);
    });
  
    it("should return an error (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllFolders()).rejects.toEqual(Error("Failed to get folders"));
    });
  
    it("should return an error if the promise rejects (SAD)", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error("Failed to get folders"));
      });
      expect(fetchAllFolders()).rejects.toEqual(Error("Failed to get folders"));
    });
  });



  describe('postNewPalette', () => {
    let mockResponse
    let mockRequest;
    
    beforeEach(() => {
      mockRequest = {
        method: 'POST',
        body: {
          name: "Fiery Wicks",
          c1:"#8924EF",
          c2:"#DO9024",
          c3:"#E56A20",
          c4: "#00000",
          c5: "#FFFFFF",
          folder_id: 13
        },
        headers: {
          "Content-Type": "application/json"
        }
      }
      mockResponse = {"id": 33};
  
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
  
    it('should return a successful resonse', () => {
      expect(postNewPalette(mockRequest)).resolves.toEqual(mockResponse);
    });
  
    it('should return an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(postNewPalette('Yule Time', '#FFFFF', '#FFFFF', '#FFFFF', '#FFFFF', '#FFFFF', 1)).rejects.toEqual(Error('There was a problem adding your palette'))
    });
    it('should return an error if the promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('There was a problem adding your palette'))
      })
      expect(postNewPalette('Yule Time', '#FFFFF', '#FFFFF', '#FFFFF', '#FFFFF', '#FFFFF', 1)).rejects.toEqual(Error('There was a problem adding your palette'))
      })
  });



  describe('postNewFolder', () => {
    let mockResponse
    let mockRequest;
    
    beforeEach(() => {
      mockRequest = {
        method: 'POST',
        body: undefined,
        headers: {
          "Content-Type": "application/json"
        }
      }
      mockResponse = {"id": 33};
  
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
  
    it('should return a successful resonse', () => {
      expect(postNewFolder("Smoke Show")).resolves.toEqual(mockResponse);
    });
  

    it('should return an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(postNewFolder("Smoke Show")).rejects.toEqual(Error('There was a problem adding your folder'))
    });
    it('should return an error if the promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('There was a problem adding your folder'))
      })
      expect(postNewFolder("Smoke Show")).rejects.toEqual(Error('There was a problem adding your folder'))
      })
  });


  describe('deletePalette', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    })
  
    it('should be called with correct params', () =>{
      deletePalette(11)
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes/11", {method: "DELETE"});
    });
    
    it('should return a successful response', () =>{
      expect(deletePalette(11)).resolves.toEqual(true);
    });

    it("should call fetch with the correct url", () => {
      deletePalette(11);
      expect(window.fetch).toHaveBeenCalledWith(process.env.REACT_APP_BACKEND_URL + "/api/v1/palettes/11", {method: "DELETE"});
    });
  
    it('should return an error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      expect(deletePalette(11)).rejects.toEqual(Error('Could not delete palette with ID: 11'))
    });
    it('should return an error if the promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Could not delete palette with ID: 11'))
      })
      expect(deletePalette(11)).rejects.toEqual(Error('Could not delete palette with ID: 11'))
      })
  })