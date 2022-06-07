import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['movies']
  connect() {
    console.log(this.moviesTarget.classList)
  }

  revealMovies(event) {
    this.moviesTarget.classList.remove('d-none')
    event.currentTarget.classList.add('d-none')
  }
}
