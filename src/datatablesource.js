export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Tên người dùng",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Tuổi",
    width: 100,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "caubengoxnghex",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "caubengoxnghex@yahoo.com",
    age: 22,
  },
  {
    id: 2,
    username: "gaconbietbay",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "phunguyen@gmail.com",
    status: "active",
    age: 22,
  },
  {
    id: 3,
    username: "khongduockhoc",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "duc246@gmail.com",
    status: "active",
    age: 21,
  },
  {
    id: 4,
    username: "kemdanuoclanh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "kemdanuoclanh@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 5,
    username: "wibuchua",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "dung123@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 6,
    username: "meomoc",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "duceda246@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 7,
    username: "tung",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "tung@gmail.com",
    status: "active",
    age: 20,
  },
  {
    id: 8,
    username: "tai",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "taivo@gmail.com",
    status: "active",
    age: 22,
  },
  {
    id: 9,
    username: "phuc123",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "phuc@gmail.com",
    status: "active",
    age: 22,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 24,
  },
  {
    id: 11,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
  {
    id: 12,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const categoryColumns = [
  {
    field: "name",
    headerName: "Category",
    width: 230,
    // renderCell: (params) => {
    //   return <div className="cellWithImg">{params.row.categoryName}</div>;
    // },
  },
  {
    field: "createAt",
    headerName: "Created At",
    width: 250,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 250,
  }
];

export const SKillColumns = [
  {
    field: "name",
    headerName: "Skill",
    width: 230,
    // renderCell: (params) => {
    //   return <div className="cellWithImg">{params.row.categoryName}</div>;
    // },
  },
  {
    field: "createAt",
    headerName: "Created At",
    width: 250,
  },
  {
    field: "updatedAt",
    headerName: "Updated At",
    width: 250,
  }
];

export const skillRows = [
  {
    id: 1,
    name: "HTML",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 2,
    name: "CSS",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 3,
    name: "Bootstrap",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 4,
    name: "Javascript",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 5,
    name: "PHP",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 6,
    name: "ASP.Net",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 7,
    name: "Coding",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 8,
    name: "My SQL",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 9,
    name: "SQL Server",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 10,
    name: "NodeJS",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 11,
    name: "Angular",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  },
  {
    id: 12,
    name: "Java/Spring boot",
    createAt: "2022-06-29T02:24:26.058+00:00",
    updatedAt: "2022-06-29T02:24:26.058+00:00",
  }
]

//temporary data
export const categoryRows = [
  {
    id: 1,
    categoryName: "A",
    numberService: 21,
  },
  {
    id: 2,
    categoryName: "B",
    numberService: 2,
  },
  {
    id: 3,
    categoryName: "C",
    numberService: 11,
  },
  {
    id: 4,
    categoryName: "D",
    numberService: 22,
  },
  {
    id: 5,
    categoryName: "E",
    numberService: 11,
  },
  {
    id: 6,
    categoryName: "F",
    numberService: 21,
  },
  {
    id: 7,
    categoryName: "G",
    numberService: 21,
  },
  {
    id: 8,
    categoryName: "H",
    numberService: 21,
  },
  {
    id: 9,
    categoryName: "E",
    numberService: 21,
  },
  {
    id: 10,
    categoryName: "Q",
    numberService: 21,
  },
  {
    id: 11,
    categoryName: "U",
    numberService: 21,
  },
  {
    id: 12,
    categoryName: "I",
    numberService: 21,
  },
  {
    id: 13,
    categoryName: "O",
    numberService: 21,
  },
];
export const subCategoryRows = [
  {
    id: 1,
    categoryName: "A",
    numberService: 7,
  },
  {
    id: 2,
    categoryName: "B",
    numberService: 5,
  },
  {
    id: 3,
    categoryName: "C",
    numberService: 0,
  },
  {
    id: 4,
    categoryName: "D",
    numberService: 1,
  },
  {
    id: 5,
    categoryName: "E",
    numberService: 3,
  }
];

export const serviceColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "serviceName",
    headerName: "Service",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgService"
            src={params.row.imgService}
            alt="avatar"
          />
          {params.row.serviceName}
        </div>
      );
    },
  },
  {
    field: "sellerName",
    headerName: "Seller",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imgSeller} alt="avatar" />
          {params.row.sellerName}
        </div>
      );
    },
  },
  {
    field: "createDate",
    headerName: "Create Date",
    width: 230,
  },
];

//temporary data
export const serviceRows = [
  {
    id: 1,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 5,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 6,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 7,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 8,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 9,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 10,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 11,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 12,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 13,
    serviceName: "A",
    sellerName: "Tai",
    createDate: "20/02/2022",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];
export const orderColumns = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "sellerName",
    headerName: "Seller Name",
    width: 220,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imgSeller} alt="avatar" />
          {params.row.sellerName}
        </div>
      );
    },
  },
  {
    field: "buyerName",
    headerName: "Buyer Name",
    width: 220,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imgBuyer} alt="avatar" />
          {params.row.buyerName}
        </div>
      );
    },
  },
  {
    field: "serviceName",
    headerName: "Service Name",
    width: 220,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImgService"
            src={params.row.imgService}
            alt="avatar"
          />
          {params.row.serviceName}
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 120,
  },
  {
    field: "createDate",
    headerName: "Create Date",
    width: 150,
  },
  {
    field: "deleveryDate",
    headerName: "Delevery Date",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const orderRows = [
  {
    id: 1,
    sellerName: "Vinh",
    buyerName: "Tai",
    serviceName: "A",
    amount: 2,
    createDate: "02/02/2022",
    deleveryDate: "04/02/2022",
    status: "active",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgBuyer:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    sellerName: "Vinh",
    buyerName: "Tai",
    serviceName: "A",
    amount: 2,
    createDate: "02/02/2022",
    deleveryDate: "04/02/2022",
    status: "active",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgBuyer:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 3,
    sellerName: "Vinh",
    buyerName: "Tai",
    serviceName: "A",
    amount: 2,
    createDate: "02/02/2022",
    deleveryDate: "04/02/2022",
    status: "active",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgBuyer:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 4,
    sellerName: "Vinh",
    buyerName: "Tai",
    serviceName: "A",
    amount: 2,
    createDate: "02/02/2022",
    deleveryDate: "07/02/2022",
    status: "active",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgBuyer:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 5,
    sellerName: "Vinh",
    buyerName: "Tai",
    serviceName: "A",
    amount: 2,
    createDate: "02/02/2022",
    deleveryDate: "06/02/2022",
    status: "pending",
    imgSeller:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgBuyer:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    imgService:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];
