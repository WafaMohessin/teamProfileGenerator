const Employee = require('../lib/Employee.js');

describe("Employee", () => {
  //Positive Test
  it("creating an object with 'name', 'id' and 'email' properties set to the 'name', 'id, and 'email' arguments provided when called with the 'new' keyword", () => {
      // Arrange
    const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    /* const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com'; 
    const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';
    const github = 'WafaMohessin'; */
    

    // Act
    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.name).toEqual(name);
  })

  it ("returning'name' when the getName() method is called using the instantiated object", () => {

    const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getName()).toEqual(name);
  })

  it ("returning 'id' when the getID() method is called using the instantiated object", () => {

    const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getID()).toEqual(id);
  })

  it ("returning 'email' when the getEmail() method is called using the instantiated object", () => {

    const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getEmail()).toEqual(email);
  })

  it ("returning the object when the getRole() method is called using the instantiated object", () => {

    const name  = 'wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getRole()).toEqual(new Employee(name, id, email));
  })
  
})