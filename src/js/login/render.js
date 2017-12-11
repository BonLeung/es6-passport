export default (container) => {
  const tpl = `<form id="form">
                <input id="input" name="uname" type="text" />
                <input name="password" type="password" />
                <input id="submit" type="submit" value="登录" />
              </form>`
  container.innerHTML = tpl
}