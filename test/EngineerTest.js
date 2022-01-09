const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
    //Positive Test
    it("creating an object with 'name', 'id', 'email' and 'github' properties set to the 'name', 'id,'email' and 'github' arguments provided when called with the 'new' keyword", () => {
        // Arrange
      const name  = 'Wafa';
      const id    = 3;
      const email = 'wafamohessin@gmail.com';
      const github = 'WafaMohessin';

      // Act
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.name).toEqual(name);
    })
  
    it ("return 'github' when the getGithub() method is called using the instantiated object", () => {
  
      const name  = 'Wafa';
      const id    = 3;
      const email = 'wafamohessin@gmail.com';
      const github = 'WafaMohessin';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getGithub()).toEqual(github);
    })
  
    it ("return 'id' when the getID() method is called using the instantiated object", () => {
  
      const name  = 'Wafa';
      const id    = 3;
      const email = 'wafamohessin@gmail.com';
      const github = 'WafaMohessin';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getID()).toEqual(id);
    })
  
    it ("return 'email' when the getEmail() method is called using the instantiated object", () => {
  
      const name  = 'Wafa';
      const id    = 3;
      const email = 'wafamohessin@gmail.com';
      const github = 'WafaMohessin';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getEmail()).toEqual(email);
    })
  
    it ("return the object when the getRole() method is called using the instantiated object", () => {
  
      const name  = 'Wafa';
      const id    = 3;
      const email = 'wafamohessin@gmail.com';
      const github = 'WafaMohessin';
  
      const obj = new Engineer(name, id, email, github);
  
      // Assert
      expect(obj.getRole()).toEqual(new Engineer(name, id, email, github));
    })
    
  })