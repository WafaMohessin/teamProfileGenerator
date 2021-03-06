const Intern = require('../lib/Intern.js');

describe("Intern", () => {
    //Positive Test
    it("creating an object with 'name', 'id', 'email' and 'school' properties set to the 'name', 'id,'email' and 'school' arguments provided when called with the 'new' keyword", () => {
        // Arrange
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const school = 'MSU';

      // Act
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.name).toEqual(name);
    })
  
    it ("returning 'school' when the getSchool() method is called using the instantiated object", () => {
  
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const school = 'MSU';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getSchool()).toEqual(school);
    })
  
    it ("returning 'id' when the getID() method is called using the instantiated object", () => {
  
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const school = 'MSU';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getID()).toEqual(id);
    })
  
    it ("returning 'email' when the getEmail() method is called using the instantiated object", () => {
  
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const school = 'MSU';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getEmail()).toEqual(email);
    })
  
    it ("returning the object when the getRole() method is called using the instantiated object", () => {
  
        const name  = 'wafa';
        const id    = 3;
        const email = 'wafamohessin@gmail.com';
        const school = 'MSU';
  
      const obj = new Intern(name, id, email, school);
  
      // Assert
      expect(obj.getRole()).toEqual(new Intern(name, id, email, school));
    })
    
  })