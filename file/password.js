var password="";password=prompt('Do you love me? (Input yes or no):','');
if (password != 'yes')   {alert("sorry to bother you");
window.opener=null; window.close();}  // 密码不正确就关闭

var password="";password=prompt('what is your name?(Input your name in Chinese)','');
if (password != '胡思思')   {alert("密码不正确,无法进入本站!!");
window.opener=null; window.close();}