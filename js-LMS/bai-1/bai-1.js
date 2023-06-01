let diemVl, diemHh, diemSh;
diemVl = +prompt("Nhập vào điểm Vật lý");
diemHh = +prompt("Nhập vào điểm Hóa Học");
diemSh = +prompt("Nhập vào điểm Sinh học");
let tongDiem = diemVl + diemHh + diemSh;
alert("Tổng điểm = " + tongDiem);
let trungBinh = (diemVl + diemHh + diemSh) / 3;
alert("Điểm Trung bình = " + trungBinh);
