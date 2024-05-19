import bcrypt from "bcryptjs";

export const users = [
  {
    name: "John Doe",
    phone_No: "9493939493948",
    email: "john@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Jane Smith",
    phone_No: "343553366543",
    email: "jane@ex.com",
    password: bcrypt.hashSync("password", 10),
    },
  {
    name: "Johny Dairy",
    phone_No: "1234567890",
    email: "john.doe@ex.com",
    password: bcrypt.hashSync("password123", 10),
  },
  {
    name: "Alice Johnson",
    phone_No: "0987654321",
    email: "alice.johnson@ex.com",
    password: bcrypt.hashSync("alicePass", 10),
  },
  {
    name: "Bob Brown",
    phone_No: "5556667777",
    email: "bob.brown@ex.com",
    password: bcrypt.hashSync("bobSecure", 10),
  },
  {
    name: "Charlie Davis",
    phone_No: "1112223333",
    email: "charlie.davis@ex.com",
    password: bcrypt.hashSync("charliePwd", 10),
  },
  {
    name: "Diana Evans",
    phone_No: "4445556666",
    email: "diana.evans@ex.com",
    password: bcrypt.hashSync("diana1234", 10),
  },
  {
    name: "Edward Green",
    phone_No: "7778889999",
    email: "edward.green@ex.com",
    password: bcrypt.hashSync("edwardPass", 10),
  },
  {
    name: "Fiona Hill",
    phone_No: "2223334444",
    email: "fiona.hill@ex.com",
    password: bcrypt.hashSync("fionaSecure", 10),
  },
  {
    name: "George Clark",
    phone_No: "3334445555",
    email: "george.clark@ex.com",
    password: bcrypt.hashSync("georgePwd", 10),
  },
  {
    name: "Hannah Scott",
    phone_No: "8889990000",
    email: "hannah.scott@ex.com",
    password: bcrypt.hashSync("hannah123", 10),
  },
  {
    name: "Ian Turner",
    phone_No: "5554443333",
    email: "ian.turner@ex.com",
    password: bcrypt.hashSync("ianSecure", 10),
  },
  {
    name: "Jill White",
    phone_No: "1119998888",
    email: "jill.white@ex.com",
    password: bcrypt.hashSync("jillPwd", 10),
  },
  {
    name: "Kevin Brown",
    phone_No: "6667778888",
    email: "kevin.brown@ex.com",
    password: bcrypt.hashSync("kevinPass", 10),
  },
  {
    name: "Laura Adams",
    phone_No: "9998887777",
    email: "laura.adams@ex.com",
    password: bcrypt.hashSync("lauraSecure", 10),
  },
  {
    name: "Michael Thompson",
    phone_No: "4443332222",
    email: "michael.thompson@ex.com",
    password: bcrypt.hashSync("michaelPwd", 10),
  },
];


 export const spamContacts = [
  {
    name: "Spam Contact 1",
    phone_No: "1111111111",
    spam_number: true,
    user_id: 1,
  },
  {
    name: "Spam Contact 2",
    phone_No: "2222222222",
    spam_number: true,
    user_id: 2,
  },
  {
    name: "Spam Contact 3",
    phone_No: "3333333333",
    spam_number: true,
    user_id: 3,
  },
  {
    name: "Spam Contact 4",
    phone_No: "4444444444",
    spam_number: true,
    user_id: 4,
  },
  {
    name: "Spam Contact 5",
    phone_No: "5555555555",
    spam_number: true,
    user_id: 5,
  },
  {
    name: "Spam Contact 6",
    phone_No: "6666666666",
    spam_number: true,
    user_id: 6,
  },
  {
    name: "Spam Contact 7",
    phone_No: "7777777777",
    spam_number: true,
    user_id: 7,
  },
  {
    name: "Spam Contact 8",
    phone_No: "8888888888",
    spam_number: true,
    user_id: 8,
  },
  {
    name: "Spam Contact 9",
    phone_No: "9999999999",
    spam_number: true,
    user_id: 9,
  },
  {
    name: "Spam Contact 10",
    phone_No: "0000000000",
    spam_number: true,
    user_id: 10,
  },
  {
    name: "Spam Contact 11",
    phone_No: "1212121212",
    spam_number: true,
    user_id: 11,
  },
  {
    name: "Spam Contact 12",
    phone_No: "2323232323",
    spam_number: true,
    user_id: 12,
  },
  {
    name: "Spam Contact 13",
    phone_No: "3434343434",
    spam_number: true,
    user_id: 13,
  },
  {
    name: "Spam Contact 14",
    phone_No: "4545454545",
    spam_number: true,
    user_id: 14,
  },
  {
    name: "Spam Contact 15",
    phone_No: "5656565656",
    spam_number: true,
    user_id: 15,
  },
  {
    name: "Spam Contact 16",
    phone_No: "6767676767",
    spam_number: true,
    user_id: 16,
  },
  {
    name: "Spam Contact 17",
    phone_No: "7878787878",
    spam_number: true,
    user_id: 17,
  },
  {
    name: "Spam Contact 18",
    phone_No: "8989898989",
    spam_number: true,
    user_id: 18,
  },
  {
    name: "Spam Contact 19",
    phone_No: "9090909090",
    spam_number: true,
    user_id: 19,
  },
  {
    name: "Spam Contact 20",
    phone_No: "1010101010",
    spam_number: true,
    user_id: 20,
  },
];

