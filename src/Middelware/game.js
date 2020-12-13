
const Product = require('../Model/product');

// Usuário vai fazer a cerveja
    let ownBeer = (req, res) => {
        const {id, malt1, hops1, malt2, hops2, time, challenge, fruit, style} = req.body
        Product.create({userId: id,
            malt_1: malt1,
            malt_2: malt2,
            hops_1: hops1,
            hops_2: hops2,
            fruit,
            style,
            challenge,
            time
        }, (err, product) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            } else {
                console.log(product)
                res.status(200).send('Cerveja criada com Sucesso!')
            }
        })
    }

// Usuário faz a votação, vai pro db a contagem de votos dele e da cerveja
    let ownRating = (req, res) => {
        const {vote, userid} = req.body
        const {id} = req.params
        let like = 0;
        let dislike = 0;
        if ( vote) {
            like = 1
        } else {
            dislike = 1
        }
        Product.findOne({'userId': userid}, (err, user) => {
          if (err) {
             console.log(err)
             res.status(404).send('Usuário não encontrado')
         } else {
             let count = user.userVote
             user.update({userVote: count + 1}, (err, update) => {
                 if (err) {
                     console.log(err)
                     res.status(500).send('Não foi possível votar')
                } else {
                     console.log('Obrigado por Votar')
            }
        })
    }
})
        Product.findOne({'_id': id}, (err, beer) => {
            if(err) {
                console.log(err)
            } else {
                let dislikevote = beer.beerVote.dislike
                let likevote = beer.beerVote.like
                beer.update({beerVote: {
                    like: likevote+like,
                    dislike: dislikevote + dislike
            }}, (err, updatebeer) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log(updatebeer)
                }
            })}
        })
    }

    // pegar quantos votos tem uma cerveja 
    let beerRating = (req,res) => {
        const {id} = req.params
        Product.findOne({'_id': id}, (err, user) => {
    if (err) {
        res.status(404).send('Usuário não encontrado!')
    } else {
        res.status(200).send(user.beerVote)
    }
  })
}

// pegar o ranking das cervejas do desafio
    let rankingBeer = (req, res) => {
        const { challenge } = req.body;
         Product.find({challenge}, (err, ranking) => {
            if (err) {
                console.log(err)
                res.status(404).send('Ranking não encontrado')
            } else {
                res.status(200).send(ranking)
            }
        })


    }


module.exports = {
    ownBeer,
    ownRating,
    beerRating,
    rankingBeer,
}

