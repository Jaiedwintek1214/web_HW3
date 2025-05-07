document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const account = document.getElementById("account").value.trim();
  if (!account) {
    alert("請輸入帳號");
    return;
  }
  alert("模擬登入成功（資料未傳送）");
});
