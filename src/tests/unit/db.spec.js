const {getUsers, getFriends, getUser, postUser} = require('../../helper/db');

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

