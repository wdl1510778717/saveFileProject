/**
 * 下载文件
 */
var downloadTextFile = function (mobileCode) {
    if (mobileCode == "") {
        mobileCode = '';
    }
    var file = new File([mobileCode], "手机号.txt", { type: "text/plain;charset=utf-8" });
    saveAs(file);
}