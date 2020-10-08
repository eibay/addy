const {getUsers, getFriends, getFriendsById, getUser, postUser} = require('../../helper/db');

describe("getUsers()", () => {
  const users = getUsers().users;

  it("should return true", () => {
    expect(users.length).toBeGreaterThan(3);
  });

  it("should include a user named Abraham", () => {
    const name = users.map(user => user.name);
    expect(name).toContain('Abraham');
  })
});

describe("getFriends()", () => {
  it("should return a list of Paul's friends", () => {
    const friends = getFriends('Paul');
    expect(friends).toHaveLength(3);
  })

  it("should return a list of Jacob's friends", () => {
    const friends = getFriends('Jacob');
    expect(friends).toHaveLength(2);
  })
})

describe("getUser()", () => {
  it('should return the user based on given id', () => {
    const id = "e3e79740fcc8c17d435d14ecc2c8bf7c1782d033";
    const user = getUser(id);
    expect(user).toEqual(
      [
        {
            "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d033",
            "name": "Abraham",
            "phone": "+61432094987",
            "friends": [
                {
                    "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d037",
                    "name": "John",
                    "phoneNumber": "+61432094980"
                },
                {
                    "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d038",
                    "name": "Mark",
                    "phoneNumber": "+61432094981"
                },
                {
                    "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d039",
                    "name": "Matthew",
                    "phoneNumber": "+61432094991"
                }
            ]
        }
    ]
    )
  })

  describe("getFriends()", () => {
    it('should return the list of friends based on given user name', () => {
      const friends = getFriends("Isaac");
      expect(friends).toEqual(
        [
          {
            id: 'e3e79740fcc8c17d435d14ecc2c8bf7c1782d041',
            name: 'Timothy',
            phoneNumber: '+61432094990'
          },
          {
            id: 'e3e79740fcc8c17d435d14ecc2c8bf7c1782d039',
            name: 'Matthew',
            phoneNumber: '+61432094991'
          }
        ]
      );
    });
  });

  describe("getFriendsById()", () => {
    it('should return the list of friends based on given user name', () => {
      const id = "e3e79740fcc8c17d435d14ecc2c8bf7c1782d034";
      const friends = getFriendsById(id);
      expect(friends).toEqual(
        [
          {
              "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d039",
              "name": "Matthew",
              "phoneNumber": "+61432094991"
          },
          {
              "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d041",
              "name": "Timothy",
              "phoneNumber": "+61432094990"
          }
      ]
      );
    });
  });
})

