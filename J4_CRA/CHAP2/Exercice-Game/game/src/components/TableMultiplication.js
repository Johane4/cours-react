import { Component } from 'react';

class TableMultiplication extends Component {

  render() {
    // on passe en id le numéro de table qu'on va vouloir récupérer de l'url dynamiquement
    const { id: tableNumber } = this.props.match.params;
    console.log(tableNumber);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <table>
        <thead>
          <tr>
            <td><h1>Table de {tableNumber}</h1></td>
          </tr>
        </thead>
        <tbody>
          {numbers.map((num, i) => <tr key={i}><td>{tableNumber} x {num} = {tableNumber * num}</td></tr>)}
        </tbody>
      </table>
    )
  }
}
export default TableMultiplication;
