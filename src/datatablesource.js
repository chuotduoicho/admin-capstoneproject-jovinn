export const userColumns = [
  {
    field: "fullName",
    headerName: "Tên người dùng",
    width: 230,
    renderCell: (params) => {
      return (
        <div>
          {params.row.firstName +" "+ params.row.lastName}
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
    field: "phoneNumber",
    headerName: "Số ĐT",
    width: 230,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.isEnabled?'active':'disabled'}`}>
          {params.row.isEnabled?"active":"disabled"}
        </div>
      );
    },
  },
];

export const adminColumns = [
  {
    field: "username",
    headerName: "Tên đăng nhập",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phoneNumber",
    headerName: "Số ĐT",
    width: 230,
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
    field: "id",
    headerName: "Mã danh mục",
    width: 250,
  },
  {
    field: "name",
    headerName: "Tên danh mục",
    width: 230,
  },
  {
    field: "createAt",
    headerName: "Khởi tạo lúc",
    width: 250,
  },
  {
    field: "updatedAt",
    headerName: "Cập nhật lúc",
    width: 250,
  }
];

export const transactionColumns = [
  {
    field: "paymentCode",
    headerName: "ID",
    width: 160,
  },
  {
    field: "userId",
    headerName: "Mã người dùng",
    width: 230,
  },
  {
    field: "fullName",
    headerName: "Họ tên",
    width: 250,
  },
  {
    field: "dateCreated",
    headerName: "Ngày tạo",
    width: 250,
  },
  {
    field: "amount",
    headerName: "Số tiền",
    width: 160,
  },
  {
    field: "method",
    headerName: "Phương thức",
    width: 160,
  },
  {
    field: "description",
    headerName: "Ghi chú",
    width: 250,
  }
];

export const SKillColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 250,
  },
  {
    field: "name",
    headerName: "Tên kỹ năng",
    width: 230,
  },
  {
    field: "subCategoryId",
    headerName: "Mã danh mục con",
    width: 250,
  }
];

//temporary data

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
