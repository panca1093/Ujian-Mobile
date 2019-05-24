import { CREATE_DATA, DELETE_EMPLOYEE } from "./actionTypes";

export const createData = items => {
  var arrData = [];
  var rawData = items.val();

  Object.keys(rawData).forEach(id => {
    arrData.push({
      key: id,
      namaKaryawan: rawData[id].namaKaryawan,
      usia: rawData[id].usia,
      jabatan: rawData[id].jabatan,
      image: {
        uri:
          "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
      }
    });
  });

  return {
    type: CREATE_DATA,
    payload: arrData
  };
};

export const deleteEmp = key => {
  return {
    type: DELETE_EMPLOYEE,
    employeeKey: key
  };
};
