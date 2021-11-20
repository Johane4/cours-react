import { Component } from "react";

// constante de l'appli
const denomination = [1, 5, 10, 20, 50, 100, 200];

// class unique
class Denomination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      tokens: [],
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
      message : ''
    });
  }

  // fonction de calcul
  // copie du tableau initial auxquel on doit soustraire les tokens du montant donné
  calculTokens(amount) {
    const Denomination = [...denomination];
    console.log(Denomination);
    Denomination.sort((a, b) => b - a);
    let q,
      tokens = [];
    // boucle du tableau pour récupérer les tokens totaux correspondants
    // au moment qu'on injecte dans un nouveau tableau pour affichage du résultat
    for (const d of Denomination) {
      if (amount >= d) {
        q = Math.floor(amount / d);
        tokens.push({
          token: d,
          quantity: q,
        });
        console.log(d);
        // rendu de monnaie jusqu'à ce qu'il ne reste rien
        amount = amount - q * d;
        console.log(amount);
      }
    }

    return tokens;
  }
  // on vérifie si la valeur de l'input nous renvoie un string vide,
  // si oui MAJ du message d'erreur
  handleSubmit(e) {
    e.preventDefault();
    const { amount } = this.state;

    if (amount.trim() === " ") {
      this.setState({
        message: "Attention vous devez donner un nombre",
      });

      return;
    }
    // on vérifie si le montant entré est inférieur à 1,
    // si oui MAJ du message d'erreur
    if (amount <= 0 ) {
      this.setState({
        message: `Attention le nombre ${amount} n'est pas compatible avec le système`,
      });

      return;
    }

    // MAJ de notre fonction de calcul
    this.setState({
      tokens: this.calculTokens(amount),
    });
  }

  // dans notre render, affichage des tokens de base
  // affichage des messages
  // affichage du résultat du rendu de monnaie après calcul
  render() {
    const { tokens, message } = this.state;
    return (
      <>
        <ul>
          {denomination.map((token, i) => (
            <li key={i}>{token}</li>
          ))}
        </ul>
        {message && (
          <p>{message}</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="amount" onChange={this.handleChange} />
          </div>
          <div>
            <button>Calcul</button>
          </div>
        </form>
        {tokens.length > 0 && (
          <ul>
            {tokens.map(({ token, quantity }, i) => (
              <li key={i}>
                Token : {token} - Quantity : {quantity}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Denomination;
