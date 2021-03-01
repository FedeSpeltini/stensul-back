const Trade = require('../models/trades');
const { response } = require('express');

const test = (req, res) => {
    res.json({
        ok: true,
        msg: 'registro'
    })
}


const createNewTrade = async(req, res = response ) => {

    try {

        

        await trade.save();
    
        res.status(200).json({
            type: trade.type,
            user_id: trade.user_id,
            symbol: trade.symbol,
            shares: trade.shares,
            price: trade.price,
            timestamp: trade.timestamp,
            id
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al generar la transacción'
        });
    }
}


const getTrades = async(req, res = response ) => {

    try {

        //let object_query = JSON.parse(req.params.object_query);
        let trades = await Usuario.findAll();

    
        res.status(200).json({
            type: trade.type,
            user_id: trade.user_id,
            symbol: trade.symbol,
            shares: trade.shares,
            price: trade.price,
            timestamp: trade.timestamp,
            id
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al buscar las transacciones'
        });
    }
}

const getTrades = async(req, res = response ) => {

    try {

        let id = JSON.parse(req.params.object_query);
        let trades = await Usuario.findAll();

    
        res.status(200).json({
            type: trade.type,
            user_id: trade.user_id,
            symbol: trade.symbol,
            shares: trade.shares,
            price: trade.price,
            timestamp: trade.timestamp,
            id
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error al buscar las transacciones'
        });
    }
}

const modifyTrade = async(req, res = response ) => {
   
        res.status(405).json({
            ok: false,
            msg: 'No se pueden alterar ninguna transacciones'
        });
    
}

module.exports = { createNewTrade, getTrades, modifyTrade }