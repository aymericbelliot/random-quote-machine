const quoteList = [
  { quote: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.", author: "Confusius" },
  { quote: "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.", author: "Jean-Paul Sartre" },
  { quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Ganghi" },
  { quote: "On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.", author: "Victor Hugo" },
  { quote: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
  { quote: "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.", author: "Confusius" },
  { quote: "Dans la vengeance et en amour, la femme est plus barbare que l'homme.", author: "Friedrich Nietzsche" },
  { quote: "La nature fait les hommes semblables, la vie les rend différents.", author: "Confusius" },
  { quote: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.", author: "Antoine de Saint-Exupéry" },
  { quote: "Agis avec gentillesse, mais n'attends pas de la reconnaissance.", author: "Confusius" },
  { quote: "Il n'existe que deux choses infinies, l'univers et la bêtise humaine... mais pour l'univers, je n'ai pas de certitude absolue.", author: "Albert Einstein" },
  { quote: "Une femme qu'on aime est toute une famille.", author: "Victor Hugo" },
  { quote: "La différence qu'il y a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !", author: "Coluche" },
  { quote: "Le bonheur c'est lorsque vos actes sont en accord avec vos paroles.", author: "Indira Gandhi" },
  { quote: "Lorsque l'on se cogne la tête contre un pot et que cela sonne creux, ça n'est pas forcément le pot qui est vide.", author: "Confusius" },
  { quote: "L'expérience prouve que celui qui n'a jamais confiance en personne ne sera jamais déçu.", author: "Léonard De Vinci" },
  { quote: "Ne demandez jamais quelle est l'origine d'un homme ; interrogez plutôt sa vie et vous saurez ce qu'il est.", author: "Abd El-Kader" },
  { quote: "Mieux vaut une conscience tranquille qu'une destinée prospère. J'aime mieux un bon sommeil qu'un bon lit.", author: "Victor Hugo" },
  { quote: "N'essayez pas de devenir un homme qui a du succès. Essayez de devenir un homme qui a de la valeur.", author: "Albert Einstein" },
  { quote: "Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions.", author: "Confusius" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: { color: 'red' },
      bgColor: { backgroundColor: 'red' },
      indexQuote: 0,
      quote: '',
      author: ''
    }
  }

  loadQuote() {
    let newColor = '';
    let newIndex = 0;
    do {
      newColor = 'hsl(' + Math.floor(Math.random() * 255) + ', 40%, 30%)';
      newIndex = Math.floor(Math.random() * quoteList.length);
    }
    while (newColor == this.state.color || newIndex == this.state.indexQuote);
    this.setState({
      color: { color: newColor },
      bgColor: { backgroundColor: newColor },
      indexQuote: newIndex,
      quote: quoteList[newIndex].quote,
      author: quoteList[newIndex].author
    }
    );
  }

  // Load first quote on load page
  componentDidMount() {
    this.loadQuote();
  }

  render() {
    return (
      <div className="App" style={this.state.bgColor}>
        <DisplayQuote load={this.loadQuote.bind(this)} color={this.state.color} bgColor={this.state.bgColor} quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }
}

class DisplayQuote extends React.Component {
  handleClick() {
    this.props.load();
  }

  render() {
    return (
      <div id="quote-box" className="container-fluid">
        <div id="text" className="d-flex" style={this.props.color}>
          <i className="fas fa-quote-left mr-3"></i>
          <blockquote className="text-left">{this.props.quote}</blockquote>
        </div>
        <p id="author" className="text-right" style={this.props.color}>- {this.props.author}</p>
        <div className="row">
          <div className="col-md-2">
            <a id="tweet-quote" className="btn btn-block btn-primary border-0" href="https://twitter.com/intent/tweet" target="_blank" style={this.props.bgColor}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="col-md-2">
            <a className="btn btn-block btn-primary border-0" href="https://tmbler.com" target="_blank" style={this.props.bgColor}>
              <i className="fab fa-tumblr"></i>
            </a>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <button id="new-quote" className="btn btn-block btn-primary border-0" onClick={this.handleClick.bind(this)} style={this.props.bgColor}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

// Render Application in html page
ReactDOM.render(<App />, document.querySelector("#root"));
