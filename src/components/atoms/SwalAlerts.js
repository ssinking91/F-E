import Swal from "sweetalert2";

const alertsLogin = () => {
  Swal.fire({
    title: "<strong>sorry...</strong>",
    icon: "info",
    html: "로그인 후 사용이 가능합니다🔥",
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonColor: '#20d7ff',
    confirmButtonText: '<i class="fa fa-thumbs-up">확인</i> ',
  });
};

const alertsLocation = () => {
  Swal.fire({
    title: "<strong>관심 지역...</strong>",
    icon: "info",
    html: "관심 지역 설정해 주세요🔥",
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonColor: '#20d7ff',
    confirmButtonText: '<i class="fa fa-thumbs-up">확인</i> ',
  });
};

const alertsEmail = () => {
  Swal.fire({
    title: "<strong>이메일 형식...</strong>",
    icon: "info",
    html: "이메일 형식에 맞지 않습니다🔥",
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonColor: '#20d7ff',
    confirmButtonText: '<i class="fa fa-thumbs-up">확인</i> ',
  });
};

export { alertsLogin, alertsLocation, alertsEmail };