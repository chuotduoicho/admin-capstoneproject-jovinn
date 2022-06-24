export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
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
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
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
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const categoryColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "categoryName",
    headerName: "Category",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.categoryName}</div>;
    },
  },
  {
    field: "numberService",
    headerName: "Number Service",
    width: 230,
  },
];

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
