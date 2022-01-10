const Manager = require('../lib/Manager.js');

describe("Manager", () => {
    //Positive Test
    it("creating an object with 'name', 'id', 'email' and 'officeNumber' properties set to the 'name', 'id,'email' and 'officeNumber' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const officeNumber = 7;

      // Act
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.name).toEqual(name);
    })
  
    it ("returnig 'officeNumber' when the getOfficeNumber() method is called using the instantiated object", () => {
  
      const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const officeNumber = 7;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getOfficeNumber()).toEqual(officeNumber);
    })
  
    it ("returning'id' when the getID() method is called using the instantiated object", () => {
  
      const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const officeNumber = 7;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getID()).toEqual(id);
    })
  
    it ("returning 'email' when the getEmail() method is called using the instantiated object", () => {
  
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const officeNumber = 7;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getEmail()).toEqual(email);
    })
  
    it ("returning the object when the getRole() method is called using the instantiated object", () => {
  
      const name  = 'wafa';
      const id    = 3;
      const email = 'wafamohessin@gmail.com';
      const officeNumber = 7;
  
      const obj = new Manager(name, id, email, officeNumber);
  
      // Assert
      expect(obj.getRole()).toEqual(new Manager(name, id, email, officeNumber));
    })
    
  })