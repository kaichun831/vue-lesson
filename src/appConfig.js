// let appCofig = AppConfig.getInstance()
// let appCofig2 = AppConfig.getInstance()

// let bottle = new Bottle()
// let bottle2 = new Bottle()
class AppConfig {
  static #instance = null
  #isLogin = false

  static getInstance() {
    if (AppConfig.#instance != null) {
      return AppConfig.#instance
    }
    AppConfig.#instance = new AppConfig()
    return AppConfig.#instance
  }
  isLogin() {
    return this.#isLogin
  }
  setIsLogin(value) {
    this.#isLogin = value
  }
}
export default AppConfig
