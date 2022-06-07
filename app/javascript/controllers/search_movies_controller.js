import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'form', 'list']

  connect() {
  }

  update() {
    // http://localhost:3000/movies?query=superman
    this.url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(this.url, { headers: { 'Accept': 'text/plain' }})
      .then(response => response.text())
      .then((data) => {
        console.log(data)
        this.listTarget.outerHTML = data
      })
  }
}
