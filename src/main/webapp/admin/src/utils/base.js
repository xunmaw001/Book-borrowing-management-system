const base = {
    get() {
        return {
            url : "http://localhost:8080/tushujieyueguanli/",
            name: "tushujieyueguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tushujieyueguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "图书借阅管理系统"
        } 
    }
}
export default base
