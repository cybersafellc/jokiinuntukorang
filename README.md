# Api Spec

## URL

- URL : URL : https://api-muhammad-fiqri.rpnanda.com

## Admin Create Account

Endpoint : POST /users

Request Body :

```json
{
  "username": "example",
  "password": "example",
  "first_name": "example",
  "last_name": "example",
  "key": "PLEASE_CONTACT_DEVELOPER_FOR_GET_KEY"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully created",
  "data": {
    "username": "example"
  },
  "refrance": null,
  "error": false
}
```

## Admin Login

Endpoint : POST /users/login

Request Body :

```json
{
  "username": "example",
  "password": "example"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully login",
  "data": {
    "access_token": "eyJhbGcidOiJIUzI1NiIssdfInR5cCI6IkpXVCJ9.eyJpZCI6IjsdfdhNmYzNDIyLTQdfsdf0NjAtNDE4Mi1hNzZlLTczN2MxYzMzOTUzYyIsImlhdCI6MTcxOTkyMjc0NiwiZXhwIdsfjoxNzE5OTUxNTQ2fQ.wZ1UpxB9s3Z9NY2z-HIL2mcES4Yd6JTfDNAHjqMTFhk"
  },
  "refrance": null,
  "error": false
}
```

## Admin Verify Access Token

Endpoint : GET /users/verify-token

Headers :

- Authorization : Bearer access_token

Response Body

```json
{
  "status": 200,
  "message": "token verified",
  "data": null,
  "refrance": null,
  "error": false
}
```

## Get Admin Profile

Endpoint : GET /users

Headers :

- Authorization : Bearer access_token

Response Body:

```json
{
  "status": 200,
  "message": "successfully get",
  "data": {
    "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
    "username": "rusnanda",
    "first_name": "bang",
    "last_name": "jago"
  },
  "refrance": null,
  "error": false
}
```

## Admin Update Password

Endpoint : PUT /users/password

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "current_password": "anjay123",
  "new_password": "suek123"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully update password",
  "data": {
    "username": "rusnanda"
  },
  "refrance": null,
  "error": false
}
```

## Admin Update Name

Endpoint : PUT /users/name

Headers:

- Authorization : Bearer access_token

Request Body :

```json
{
  "first_name": "bang", //optional
  "last_name": "jago" //optional
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully update name",
  "data": {
    "username": "rusnanda",
    "first_name": "bang",
    "last_name": "jago"
  },
  "refrance": null,
  "error": false
}
```

## Created Product

Endpoint : POST /products

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "nama": "cofee bango",
  "harga": 13000,
  "img": "https://gambar-ecek-ecek.com/gambar.png"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully created",
  "data": {
    "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
    "nama": "cofee bango",
    "harga": 13000,
    "img": "https://gambar-ecek-ecek.com/gambar.png"
  },
  "refrance": null,
  "error": false
}
```

## Update Product

Endpoint : PUT /products

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
  "data_update": {
    "nama": "Indomie Goreng", // optional
    "harga": 13000, // optional
    "img": "https://gambar-ecek-ecek.com/gambar.png" //optional
  }
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully update",
  "data": {
    "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
    "nama": "Indomie Goreng",
    "harga": 13000,
    "img": "https://gambar-ecek-ecek.com/gambar.png"
  },
  "refrance": null,
  "error": false
}
```

## Delete Product

Endpoint : DELETE /products

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "id": "6bb1196e-5a8c-451c-8168-c36e34a0b3a8"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully deleted",
  "data": {
    "id": "6bb1196e-5a8c-451c-8168-c36e34a0b3a8",
    "nama": "test",
    "harga": 23,
    "img": "test.png"
  },
  "refrance": null,
  "error": false
}
```

Endpoint : GET /products

## Get Product

### Get All Product

Endpoint : GET /products

Response Body :

```json
{
  "status": 200,
  "message": "successfully get all products",
  "data": [
    {
      "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
      "nama": "Indomie Goreng",
      "harga": 13000,
      "img": "https://gambar-ecek-ecek.com/gambar.png"
    },
    {
      "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
      "nama": "cofee",
      "harga": 10000,
      "img": "okdoeaw"
    }
  ],
  "refrance": null,
  "error": false
}
```

### Get Product By ID

Endpoint : GET /products?id=913ef096-1d2b-4de2-b7c2-bb0bec62b664

Response Body :

```json
{
  "status": 200,
  "message": "successfully get product with id 913ef096-1d2b-4de2-b7c2-bb0bec62b664",
  "data": {
    "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
    "nama": "Indomie Goreng",
    "harga": 13000,
    "img": "https://gambar-ecek-ecek.com/gambar.png"
  },
  "refrance": null,
  "error": false
}
```

### Get Product With Pagination

Endpoint : GET /products?skip=0&take=1

Response Body :

```json
{
  "status": 200,
  "message": "successfully get all products",
  "data": [
    {
      "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
      "nama": "Indomie Goreng",
      "harga": 13000,
      "img": "https://gambar-ecek-ecek.com/gambar.png"
    }
  ],
  "refrance": null,
  "error": false
}
```

## Get Product By Search

Endpoint : GET /products?search=indomie

Response Body :

```json
{
  "status": 200,
  "message": "successfully get with search: indomie",
  "data": [
    {
      "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
      "nama": "Indomie Goreng",
      "harga": 13000,
      "img": "https://gambar-ecek-ecek.com/gambar.png"
    }
  ],
  "refrance": null,
  "error": false
}
```

## Created Address

Endpoint : POST /address

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "alamat_1": "JL. Fikri",
  "alamat_2": "No 2",
  "kota": "Pekanbaru",
  "provinsi": "riau",
  "kode_pos": 92932,
  "negara": "indonesia",
  "telepon": "+628833223322"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully created",
  "data": {
    "id": "a139e979-8ff6-4504-b889-8334ec6aa4dd",
    "alamat_1": "JL. Fikri",
    "alamat_2": "No 2",
    "kota": "Pekanbaru",
    "provinsi": "riau",
    "kode_pos": 92932,
    "negara": "indonesia",
    "telepon": "+628833223322"
  },
  "refrance": null,
  "error": false
}
```

## Update Address

Endpoint : PUT /address

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "id": "a139e979-8ff6-4504-b889-8334ec6aa4dd",
  "data_update": {
    "alamat_1": "JL. Fikri", //optional
    "alamat_2": "No 2", //optional
    "kota": "Pekanbaru", //optional
    "provinsi": "riau", //optional
    "kode_pos": 92932, //optional
    "negara": "indonesia", //optional
    "telepon": "+628833223322" //optional
  }
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully update",
  "data": {
    "id": "a139e979-8ff6-4504-b889-8334ec6aa4dd",
    "alamat_1": "JL. Fikri",
    "alamat_2": "No 2",
    "kota": "Pekanbaru",
    "provinsi": "riau",
    "kode_pos": 92932,
    "negara": "indonesia",
    "telepon": "+628833223322"
  },
  "refrance": null,
  "error": false
}
```

## Delete Address

Endpoint : DELETE /address

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "id": "a139e979-8ff6-4504-b889-8334ec6aa4dd"
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully deleted",
  "data": {
    "id": "a139e979-8ff6-4504-b889-8334ec6aa4dd",
    "alamat_1": "JL. Fikri",
    "alamat_2": "No 2",
    "kota": "Pekanbaru",
    "provinsi": "riau",
    "kode_pos": 92932,
    "negara": "indonesia",
    "telepon": "+628833223322"
  },
  "refrance": null,
  "error": false
}
```

## Get Address

### Get All Address

Endpoint : GET /address

Headres :

- Authorization : Bearer access_token

Response Body :

```json
{
  "status": 200,
  "message": "successfully get all",
  "data": [
    {
      "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
      "alamat_1": "Jl. D.I Panjaitan s",
      "alamat_2": "Rumah No J1",
      "kota": "pekanbaru",
      "provinsi": "riau",
      "kode_pos": 29723,
      "negara": "indonesia",
      "telepon": "+6281261345871"
    }
  ],
  "refrance": null,
  "error": false
}
```

### Get Address By ID

Endpoint : GET /address?id=acee669f-0113-4d7f-ba06-113d5bb7daf2

Headres :

- Authorization : Bearer access_token

Response Body :

```json
{
  "status": 200,
  "message": "successfully get address by id",
  "data": {
    "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
    "alamat_1": "Jl. D.I Panjaitan s",
    "alamat_2": "Rumah No J1",
    "kota": "pekanbaru",
    "provinsi": "riau",
    "kode_pos": 29723,
    "negara": "indonesia",
    "telepon": "+6281261345871"
  },
  "refrance": null,
  "error": false
}
```

## Created Order

Endpoint : POST /orders

Headers :

- Authorization : Bearer access_token

Request Body :

```json
{
  "address_id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
  "diskon": 45,
  "items": [
    {
      "product_id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
      "qty": 10
    },
    {
      "product_id": "9d77a3a0-34e9-4660-a352-b2278867defb",
      "qty": 2
    }
  ]
}
```

Response Body :

```json
{
  "status": 200,
  "message": "successfully created order",
  "data": {
    "id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
    "tanggal": "2024-07-02T13:10:43.000Z",
    "diskon": 45,
    "total_harga": 82500,
    "address": {
      "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
      "alamat_1": "Jl. D.I Panjaitan s",
      "alamat_2": "Rumah No J1",
      "kota": "pekanbaru",
      "provinsi": "riau",
      "kode_pos": 29723,
      "negara": "indonesia",
      "telepon": "+6281261345871"
    },
    "users": {
      "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
      "first_name": "example",
      "last_name": "example"
    },
    "items": [
      {
        "id": "06a15583-7128-48f5-82f2-307c437c0581",
        "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
        "qty": 2,
        "harga_beli": 10000,
        "total_harga": 20000,
        "product": {
          "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
          "nama": "cofee",
          "harga": 10000,
          "img": "okdoeaw"
        }
      },
      {
        "id": "c371b07e-251a-42f0-8c35-d2b64b092966",
        "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
        "qty": 10,
        "harga_beli": 13000,
        "total_harga": 130000,
        "product": {
          "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
          "nama": "Indomie Goreng",
          "harga": 13000,
          "img": "https://gambar-ecek-ecek.com/gambar.png"
        }
      }
    ]
  },
  "refrance": null,
  "error": false
}
```

## Get Order

### Get All Order

Endpoint : GET /orders

Headers :

- Authorization : Bearer access_token

Response Body

```json
{
  "status": 200,
  "message": "successfully get",
  "data": [
    {
      "id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
      "tanggal": "2024-07-02T13:10:43.000Z",
      "diskon": 45,
      "total_harga": 82500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "06a15583-7128-48f5-82f2-307c437c0581",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        },
        {
          "id": "c371b07e-251a-42f0-8c35-d2b64b092966",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "081832dd-ecea-4313-a58d-56049c4eda7e",
      "tanggal": "2024-07-02T13:06:43.000Z",
      "diskon": 45,
      "total_harga": 71500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "c5ec5672-5a68-4737-b186-45ad039ca509",
          "orders_id": "081832dd-ecea-4313-a58d-56049c4eda7e",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "dc01635e-eb05-486e-8859-3d73d04b12b3",
      "tanggal": "2024-07-02T08:43:57.000Z",
      "diskon": 30,
      "total_harga": 35000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "fee41563-b6d0-4105-96d4-2b3f14e5f395",
          "orders_id": "dc01635e-eb05-486e-8859-3d73d04b12b3",
          "qty": 5,
          "harga_beli": 10000,
          "total_harga": 50000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    },
    {
      "id": "ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2",
      "tanggal": "2024-07-02T08:43:51.000Z",
      "diskon": 30,
      "total_harga": 7000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "e6e148b1-00c0-4368-88c3-8762688c328b",
          "orders_id": "ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2",
          "qty": 1,
          "harga_beli": 10000,
          "total_harga": 10000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    },
    {
      "id": "39426bc7-378f-436b-9263-150a2820dbba",
      "tanggal": "2024-07-02T08:43:43.000Z",
      "diskon": 30,
      "total_harga": 14000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "762ad40d-290e-40c0-bc48-0a815742f884",
          "orders_id": "39426bc7-378f-436b-9263-150a2820dbba",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    }
  ],
  "refrance": null,
  "error": false
}
```

### Get Orders with Pagination

Endpoint : GET /orders?skip=0&take1

Headers :

- Authorization : Bearer access_token

Response Body :

```json
{
  "status": 200,
  "message": "successfully get",
  "data": [
    {
      "id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
      "tanggal": "2024-07-02T13:10:43.000Z",
      "diskon": 45,
      "total_harga": 82500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "06a15583-7128-48f5-82f2-307c437c0581",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        },
        {
          "id": "c371b07e-251a-42f0-8c35-d2b64b092966",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    }
  ],
  "refrance": null,
  "error": false
}
```

## Get Order By Search

Endpoint : GET /orders?search=example

Headers :

- Authorization : Bearer access_token

Response Body :

```json
{
  "status": 200,
  "message": "testing",
  "data": [
    {
      "id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
      "tanggal": "2024-07-02T13:10:43.000Z",
      "diskon": 45,
      "total_harga": 82500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "username": "example",
        "password": "$2b$10$eMzvDGb/y5.We4zrKYvOKuGTUj429jrb/59e4y2vEYbwHK0PLHzvK",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "06a15583-7128-48f5-82f2-307c437c0581",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        },
        {
          "id": "c371b07e-251a-42f0-8c35-d2b64b092966",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "081832dd-ecea-4313-a58d-56049c4eda7e",
      "tanggal": "2024-07-02T13:06:43.000Z",
      "diskon": 45,
      "total_harga": 71500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "username": "example",
        "password": "$2b$10$eMzvDGb/y5.We4zrKYvOKuGTUj429jrb/59e4y2vEYbwHK0PLHzvK",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "c5ec5672-5a68-4737-b186-45ad039ca509",
          "orders_id": "081832dd-ecea-4313-a58d-56049c4eda7e",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    }
  ],
  "refrance": null,
  "error": false
}
```

## Get Order By Date

Endpoint : GET /orders?date=2024-07-02

Headers :

- Authorization : Bearer access_token

Response Body :

```json
{
  "status": 200,
  "message": "successfully get",
  "data": [
    {
      "id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
      "tanggal": "2024-07-02T13:10:43.000Z",
      "diskon": 45,
      "total_harga": 82500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "06a15583-7128-48f5-82f2-307c437c0581",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        },
        {
          "id": "c371b07e-251a-42f0-8c35-d2b64b092966",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "081832dd-ecea-4313-a58d-56049c4eda7e",
      "tanggal": "2024-07-02T13:06:43.000Z",
      "diskon": 45,
      "total_harga": 71500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "c5ec5672-5a68-4737-b186-45ad039ca509",
          "orders_id": "081832dd-ecea-4313-a58d-56049c4eda7e",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "dc01635e-eb05-486e-8859-3d73d04b12b3",
      "tanggal": "2024-07-02T08:43:57.000Z",
      "diskon": 30,
      "total_harga": 35000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "fee41563-b6d0-4105-96d4-2b3f14e5f395",
          "orders_id": "dc01635e-eb05-486e-8859-3d73d04b12b3",
          "qty": 5,
          "harga_beli": 10000,
          "total_harga": 50000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    },
    {
      "id": "ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2",
      "tanggal": "2024-07-02T08:43:51.000Z",
      "diskon": 30,
      "total_harga": 7000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "e6e148b1-00c0-4368-88c3-8762688c328b",
          "orders_id": "ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2",
          "qty": 1,
          "harga_beli": 10000,
          "total_harga": 10000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    },
    {
      "id": "39426bc7-378f-436b-9263-150a2820dbba",
      "tanggal": "2024-07-02T08:43:43.000Z",
      "diskon": 30,
      "total_harga": 14000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "762ad40d-290e-40c0-bc48-0a815742f884",
          "orders_id": "39426bc7-378f-436b-9263-150a2820dbba",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    }
  ],
  "refrance": null,
  "error": false
}
```

## Get Order By Range Date

Endpoint : GET /orders?start_date=2024-07-01&end_date=2024-08-01

Headers :

- Authorization : Bearer access_token

Response Body :

```json
{
  "status": 200,
  "message": "successfully get",
  "data": [
    {
      "id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
      "tanggal": "2024-07-02T13:10:43.000Z",
      "diskon": 45,
      "total_harga": 82500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "06a15583-7128-48f5-82f2-307c437c0581",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        },
        {
          "id": "c371b07e-251a-42f0-8c35-d2b64b092966",
          "orders_id": "91eab1a8-729e-4c01-99fa-e2a5f225a2b3",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "081832dd-ecea-4313-a58d-56049c4eda7e",
      "tanggal": "2024-07-02T13:06:43.000Z",
      "diskon": 45,
      "total_harga": 71500,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "7a6f3422-4460-4182-a76e-737c1c33953c",
        "first_name": "example",
        "last_name": "example"
      },
      "items": [
        {
          "id": "c5ec5672-5a68-4737-b186-45ad039ca509",
          "orders_id": "081832dd-ecea-4313-a58d-56049c4eda7e",
          "qty": 10,
          "harga_beli": 13000,
          "total_harga": 130000,
          "product": {
            "id": "913ef096-1d2b-4de2-b7c2-bb0bec62b664",
            "nama": "Indomie Goreng",
            "harga": 13000,
            "img": "https://gambar-ecek-ecek.com/gambar.png"
          }
        }
      ]
    },
    {
      "id": "dc01635e-eb05-486e-8859-3d73d04b12b3",
      "tanggal": "2024-07-02T08:43:57.000Z",
      "diskon": 30,
      "total_harga": 35000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "fee41563-b6d0-4105-96d4-2b3f14e5f395",
          "orders_id": "dc01635e-eb05-486e-8859-3d73d04b12b3",
          "qty": 5,
          "harga_beli": 10000,
          "total_harga": 50000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    },
    {
      "id": "ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2",
      "tanggal": "2024-07-02T08:43:51.000Z",
      "diskon": 30,
      "total_harga": 7000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "e6e148b1-00c0-4368-88c3-8762688c328b",
          "orders_id": "ec3ca298-6813-4bfc-9e0e-95b0d6a17ee2",
          "qty": 1,
          "harga_beli": 10000,
          "total_harga": 10000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    },
    {
      "id": "39426bc7-378f-436b-9263-150a2820dbba",
      "tanggal": "2024-07-02T08:43:43.000Z",
      "diskon": 30,
      "total_harga": 14000,
      "address": {
        "id": "acee669f-0113-4d7f-ba06-113d5bb7daf2",
        "alamat_1": "Jl. D.I Panjaitan s",
        "alamat_2": "Rumah No J1",
        "kota": "pekanbaru",
        "provinsi": "riau",
        "kode_pos": 29723,
        "negara": "indonesia",
        "telepon": "+6281261345871"
      },
      "users": {
        "id": "6e2ee82b-4ae6-4042-9ddc-128a2795f508",
        "first_name": "rusnanda",
        "last_name": "purnama"
      },
      "items": [
        {
          "id": "762ad40d-290e-40c0-bc48-0a815742f884",
          "orders_id": "39426bc7-378f-436b-9263-150a2820dbba",
          "qty": 2,
          "harga_beli": 10000,
          "total_harga": 20000,
          "product": {
            "id": "9d77a3a0-34e9-4660-a352-b2278867defb",
            "nama": "cofee",
            "harga": 10000,
            "img": "okdoeaw"
          }
        }
      ]
    }
  ],
  "refrance": null,
  "error": false
}
```
