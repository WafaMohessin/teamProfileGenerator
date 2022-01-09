const Employee = require('../lib/Employee.js');

describe("Employee", () => {
  //Positive Test
  it("createing an object with 'name', 'id' and 'email' properties set to the 'name', 'id, and 'email' arguments provided when called with the 'new' keyword", () => {
      // Arrange
    const name  = 'Wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    // Act
    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.name).toEqual(name);
  })

  it ("return 'name' when the getName() method is called using the instantiated object", () => {

    const name  = 'Wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getName()).toEqual(name);
  })

  it ("return 'id' when the getID() method is called using the instantiated object", () => {

    const name  = 'Wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getID()).toEqual(id);
  })

  it ("return 'email' when the getEmail() method is called using the instantiated object", () => {

    const name  = 'Wafa';
    const id    = 3;
    const email = 'wafamohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getEmail()).toEqual(email);
  })

  it ("return the object when the getRole() method is called using the instantiated object", () => {

    const name  = 'Wafa';
    const id    = 3;
    const email = 'WafaMohessin@gmail.com';

    const obj = new Employee(name, id, email);

    // Assert
    expect(obj.getRole()).toEqual(new Employee(name, id, email));
  })
  
})