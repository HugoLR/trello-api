let lists = require('../../../data.json');
lists = lists.boards[0].lists;

const controllers = {
  index: (req, res) => {
    res
      .status(200)
      .json({
        data:lists
      })
  },
  find: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      const list = lists.filter(list => list.id == req.params.id)
      res
        .status(200)
        .json({
          list:list
        })
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  create: (req, res) => {
    const {id} = req.body
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      res.status(400).json({message:"List already exist"})
    } else {
      const id = {id:lists.length + 1}
      const newList = {...id, ...req.body}
      res
        .status(200)
        .json({
          lists:[...lists, newList]
        })
    }
  },
  replace: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      const listUpdtated = lists.map(list => {

        if (list.id == id) {
          return req.body
        } else {
          return list
        }
      })
      res
        .status(200)
        .json({
          lists:listUpdtated
        })
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  delete: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)
    const cardIsEmpty = lists[id -1].cards.length === 0

    if (existingList) {

      if (cardIsEmpty) {
        res.status(400).json({message:"You can`t remove this object"})
      } else {
        const listDeleted = lists.filter(list => {
          return  list.id !== id
        })
        res
        .status(200)
        .json({message:listDeleted})
      }
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  findCard: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      const list = lists.filter(list => list.id == req.params.id)
      res
        .status(200)
        .json({
          cards:list[0].cards
        })
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  findIdCard: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)
    const {cardId} = req.params
    const existingCard = lists[id -1].cards.some(card => card.id == cardId)

    if (existingList) {

      if(existingCard) {
        const list = lists.filter(list => list.id == req.params.id)
        res
        .status(200)
        .json({
          card:list[0].cards[cardId -1]
        })
      } else {
        res.status(400).json({message:"Card doesn't  exist"})
      }
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  createCard: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      const cardId = {id:lists[req.params.id -1].cards.length + 1}
      const newCard = {...cardId, ...req.body}
      res
      .status(200)
      .json({
        Cards:[...lists[req.params.id -1].cards, newCard]
      })
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  replaceCard: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      const {cardId} = req.params
      const existingCard = lists[id -1].cards.some(card => card.id == cardId)

      if (existingCard) {
        const newCard = lists[id -1].cards.map( card => {

          if (card.id == cardId) {
            return req.body
          } else {
            return card
          }
        })
        res
          .status(200)
          .json({
            cards:newCard
          })
      } else {
        res.status(400).json({message:"Card doesn't  exist"})
      }
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  },
  deleteCard: (req, res) => {
    const {id} = req.params
    const existingList = lists.some(list => list.id == id)

    if (existingList) {
      const {cardId} = req.params
      const existingCard = lists[id -1].cards.some(card => card.id == cardId)

      if (existingCard) {

        const cardDeleted = lists[id-1].cards.filter(card => {
          return  card.id !== cardId
        })
        res
        .status(200)
        .json({cards:cardDeleted})
      } else {
        res.status(400).json({message:"Card doesn't  exist"})
      }
    } else {
      res.status(400).json({message:"List doesn't  exist"})
    }
  }
};

module.exports = controllers;
