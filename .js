// id       | bigint(20) | NO   | PRI | NULL                | auto_increment                |
// | user     | char(100)  | NO   | UNI |                     |                               |
// | pw       | char(100)  | NO   |     |                     |                               |
// | namef    | char(100)  | NO   |     |                     |                               |
// | namel    | char(100)  | NO   |     |                     |                               |
// | uidcad   | bigint(20) | NO   | MUL | 0                   |                               |
// | datacad  | datetime   | YES  |     | 1970-01-01 00:00:00 |                               |
// | updated  | timestamp  | NO   |     | current_timestamp() | on update current_timestamp() |
// | status   | int(11)    | NO   |     | 1                   |                               |
// | hash     | char(32)   | YES  |     |                     |                               |
// | phone    | char(50)   | YES  |     |                     |                               |
// | cpfnpj   | char(50)   | YES  |     |                     |                               |
// | hashtime | int(11)    | NO   |     | 600

// {
//     id: string,
//     user:string,
//     namef:string,
//     namel:string,
//     status:string,
//     phone:string,
//     cpfnpj:string,

// }

[
  {
    // agenda: "1970-01-01T00:00:00.000Z",
    // anexo: 0,
    // atended: 0,
    // atendedobs: null,
    cliente_id: "1",
    // close_owner_id: 0,
    closedata: null,
    customers: {
      id: "1",
      user: "contato@mycore.com.br",
      namef: "Márcio",
      namel: "Araújo",
      phone: "",
      user: "contato@mycore.com.br",
    },
    description: "descrição",
    id: "1",
    openby: "E",
    opendata: "2024-09-16T18:16:00.000Z",
    opid: 4,
    opids: "4",
    owner_id: 4,
    prio: 3,
    proto: "202409161816001",
    // sla: "1970-01-01T00:00:00.000Z",
    status: "A",
    // subject: "",
    suporte_child: [],
    type_id: 4,
    updated: "2024-09-16T15:16:00.000Z",
  },
];

const dayReport = [
  {
    data_abertura: "2024-09-23",
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    total_abertos: 1,
  },
];

const prioReport = [
  {
    data_abertura: "2024-09-23",
    prio: 2,
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    prio: 4,
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    prio: 4,
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    prio: 4,
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    prio: 4,
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    prio: 4,
    total_abertos: 1,
  },
  {
    data_abertura: "2024-09-19",
    prio: 4,
    total_abertos: 1,
  },
];
