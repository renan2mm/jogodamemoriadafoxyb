document.addEventListener('DOMContentLoaded', () => {
  //opções de cartas
  const cards = [
    {
      name: '01',
      img: 'images/01.jpg'
    },
    {
      name: '02',
      img: 'images/02.jpg'
    },
    {
      name: '03',
      img: 'images/03.jpg'
    },
    {
      name: '04',
      img: 'images/04.jpg'
    },
    {
      name: '05',
      img: 'images/05.jpg'
    },
    {
      name: '06',
      img: 'images/06.jpg'
    },
    {
      name: '07',
      img: 'images/07.jpg'
    },
    {
      name: '08',
      img: 'images/08.jpg'
    },
    {
      name: '09',
      img: 'images/09.jpg'
    },
    {
      name: '10',
      img: 'images/10.jpg'
    },
    {
      name: '11',
      img: 'images/11.jpg'
    },
    {
      name: '12',
      img: 'images/12.jpg'
    },
    {
      name: '13',
      img: 'images/13.jpg'
    },
    {
      name: '14',
      img: 'images/14.jpg'
    },
    {
      name: '15',
      img: 'images/15.jpg'
    },
    {
      name: '16',
      img: 'images/16.jpg'
    },
    {
      name: '17',
      img: 'images/17.jpg'
    },
    {
      name: '18',
      img: 'images/18.jpg'
    },
    {
      name: '01',
      img: 'images/01.jpg'
    },
    {
      name: '02',
      img: 'images/02.jpg'
    },
    {
      name: '03',
      img: 'images/03.jpg'
    },
    {
      name: '04',
      img: 'images/04.jpg'
    },
    {
      name: '05',
      img: 'images/05.jpg'
    },
    {
      name: '06',
      img: 'images/06.jpg'
    },
    {
      name: '07',
      img: 'images/07.jpg'
    },
    {
      name: '08',
      img: 'images/08.jpg'
    },
    {
      name: '09',
      img: 'images/09.jpg'
    },
    {
      name: '10',
      img: 'images/10.jpg'
    },
    {
      name: '11',
      img: 'images/11.jpg'
    },
    {
      name: '12',
      img: 'images/12.jpg'
    },
    {
      name: '13',
      img: 'images/13.jpg'
    },
    {
      name: '14',
      img: 'images/14.jpg'
    },
    {
      name: '15',
      img: 'images/15.jpg'
    },
    {
      name: '16',
      img: 'images/16.jpg'
    },
    {
      name: '17',
      img: 'images/17.jpg'
    },
    {
      name: '18',
      img: 'images/18.jpg'
    }
  ]

  //embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random())

  //recupaerar elementos
  const board = document.querySelector('.board')
  const resultView = document.querySelector('#result')
  let cardsChosen = [] //cartas escolhidas
  let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
  let cardsWon = [] //cartas combinadas

  //criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/board.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

  //checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    //verificar clique na mesma imagem 
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/board.jpg')
      cards[optionTwoId].setAttribute('src', 'images/board.jpg')
      alert('Você clicou na mesma imagem')
    }
    //verificar combinação se click em imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou uma combinação')
      cards[optionOneId].setAttribute('src', 'images/check.jpg')
      cards[optionTwoId].setAttribute('src', 'images/check.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/board.jpg')
      cards[optionTwoId].setAttribute('src', 'images/board.jpg')
      alert('Errou, tente novamente')
    }
    cardsChosen = []
    cardsChosenId = []
    //mostrar placar
    resultView.textContent = 'Pares Encontrados: '+cardsWon.length
    if  (cardsWon.length === cards.length/2) {
      resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
    }
  }

  //virar as cartas
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
