const express = require("express");
const userRoutes = require("../../routes/users");
const request = require("supertest");

const app = express();
app.use("/users", userRoutes);

describe("testing user routes", () => {
  it("GET /users - success", async () => {
    const {body} = await request(app).get("/users");
    expect(body.users).toEqual([
        {
          id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d033",
          name: "Abraham",
          phone: "+61432094987",
          friends: [
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d037",
              name: "John",
              phoneNumber: "+61432094980"
            },
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d038",
              name: "Mark",
              phoneNumber: "+61432094981"
            },
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d039",
              name: "Matthew",
              phoneNumber: "+61432094991"
            }
          ]
        },
        {
          id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d034",
          name: "Isaac",
          phone: "+61432094997",
          friends: [
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d041",
              name: "Timothy",
              phoneNumber: "+61432094990"
            },
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d039",
              name: "Matthew",
              phoneNumber: "+61432094991"
            }
          ]
        },
        {
        id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d035",
        name: "Jacob",
        phone: "+61432094987",
        friends: [
          {
            id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d037",
            name: "John",
            phoneNumber: "+61432094980"
          },
          {
            id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d040",
            name: "Luke",
            phoneNumber: "+61432094982"
          }
        ]
        },
        {
          id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d036",
          name: "Paul",
          phone: "+61432094930",
          friends: [
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d041",
              name: "Timothy",
              phoneNumber: "+61432094990"
            },
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d042",
              name: "Barnabas",
              phoneNumber: "+61432094999"
            },
            {
              id: "e3e79740fcc8c17d435d14ecc2c8bf7c1782d039",
              name: "Matthew",
              phoneNumber: "+61432094991"
            }
          ]
        }
      ])
  });

  it("GET /users/:id/friends sorted- success", async () => {
    const id = "e3e79740fcc8c17d435d14ecc2c8bf7c1782d036";
    const {body} = await request(app).get(`/users/${id}/friends`);
    expect(body).toEqual([
      {
        "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d042",
        "name": "Barnabas",
        "phoneNumber": "+61432094999"
      },
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
    ])
  });

  it("GET /users/compare unique friends - success", async () => {
    const {body} = await request(app).get(`/users/compare?name1=Jacob&name2=Paul`);
    expect(body).toEqual([
      {
          "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d041",
          "name": "Timothy",
          "phoneNumber": "+61432094990"
      },
      {
          "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d042",
          "name": "Barnabas",
          "phoneNumber": "+61432094999"
      },
      {
          "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d039",
          "name": "Matthew",
          "phoneNumber": "+61432094991"
      },
      {
          "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d037",
          "name": "John",
          "phoneNumber": "+61432094980"
      },
      {
          "id": "e3e79740fcc8c17d435d14ecc2c8bf7c1782d040",
          "name": "Luke",
          "phoneNumber": "+61432094982"
      }
    ])
  });
})