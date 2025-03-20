const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2p760/",
            name: "springboot2p760",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2p760/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot的智慧社区管理系统的设计与实现"
        } 
    }
}
export default base
