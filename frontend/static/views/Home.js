import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
    <h1>Olá! Este é a plataforma Gado Verde</h1>
    <p>Aqui você vai encontrar dicas sobre bem estar animal e manejo de gado sustentável!</p>
    <p><a href="/posts" data-link>Ver posts recentes</a></p>
    `;
  }
}
