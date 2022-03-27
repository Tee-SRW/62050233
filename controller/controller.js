const fromDB = require('../model/modelDB')

module.exports.homePage = (req,res)=>{
    res.render('../view/index')
}

//when input wrong
module.exports.wrongPage = (req,res)=>{
    res.render('../view/wrong')
}

//command LOAD
module.exports.loadPage = (req,res)=>{
    res.render('../view/load')
}

module.exports.addload = (req,res)=>{
    //combine binary
    const command = req.body.command
    const regis = req.body.register
    const memory = req.body.memAddress
    const combinebinary = command+regis+memory
    //check binary
    const binaryArray = combinebinary.split("")
    console.log("length",binaryArray.length)
    if(binaryArray.length === 14) {
        binaryArray[14] = '0'
        binaryArray[15] = '0'
        const makeBinary = binaryArray.join('')
        let data = new fromDB ({
            commandType : req.body.command,
            binary : makeBinary
        })
        console.log(makeBinary)
        console.log(data)
        //add to db
        fromDB.saveProduct(data,(err)=>{
            if(err) console.log(err)
            res.redirect('/showData/all')
        })
    } else {
        res.redirect('/wrongload')
    }
}

//command STORE
module.exports.storePage = (req,res)=>{
    res.render('../view/store')
}

module.exports.addstore = (req,res)=>{
    //combine binary
    const command = req.body.command
    const regis = req.body.register
    const memory = req.body.memAddress
    const combinebinary = command+regis+memory
    //check binary
    const binaryArray = combinebinary.split("")
    console.log("length",binaryArray.length)
    if(binaryArray.length === 14) {
        binaryArray[14] = '0'
        binaryArray[15] = '0'
        const makeBinary = binaryArray.join('')
        let data = new fromDB ({
            commandType : req.body.command,
            binary : makeBinary
        })
        console.log(makeBinary)
        console.log(data)
        //add to db
        fromDB.saveProduct(data,(err)=>{
            if(err) console.log(err)
            res.redirect('/showData/all')
        })
    } else {
        res.redirect('/wrongstore')
    }
}

//command ADD REGISTER
module.exports.addRegisterPage = (req,res)=>{
    res.render('../view/addRegister')
}

module.exports.addRegis = (req,res)=>{
    //combine binary
    const command = req.body.command
    const regis1 = req.body.register1
    const regis2 = req.body.register2
    const combinebinary = command+regis1+regis2
    //check binary
    const binaryArray = combinebinary.split("")
    console.log("length",binaryArray.length)
    if(binaryArray.length === 10) {
        binaryArray[10] = '0'
        binaryArray[11] = '0'
        binaryArray[12] = '0'
        binaryArray[13] = '0'
        binaryArray[14] = '0'
        binaryArray[15] = '0'
        const makeBinary = binaryArray.join('')
        let data = new fromDB ({
            commandType : req.body.command,
            binary : makeBinary
        })
        console.log(makeBinary)
        console.log(data)
        //add to db
        fromDB.saveProduct(data,(err)=>{
            if(err) console.log(err)
            res.redirect('/showData/all')
        })
    } else {
        res.redirect('/wrongRegis')
    }
}

//command ADD IMMEDIATE
module.exports.addImmediatePage = (req,res)=>{
    res.render('../view/addImmediate')
}

module.exports.addImme = (req,res)=>{
    //combine binary
    const command = req.body.command
    const regis = req.body.register
    const number = req.body.staticNum
    const combinebinary = command+regis+number
    //check binary
    const binaryArray = combinebinary.split("")
    console.log("length",binaryArray.length)
    console.log(combinebinary)
    if(binaryArray.length === 16) {
        const makeBinary = binaryArray.join('')
        let data = new fromDB ({
            commandType : req.body.command,
            binary : makeBinary
        })
        console.log(makeBinary)
        console.log(data)
        //add to db
        fromDB.saveProduct(data,(err)=>{
            if(err) console.log(err)
            res.redirect('/showData/all')
        })
    } else {
        res.redirect('/wrongImme')
    }
}

module.exports.showdataPage = (req,res)=>{
    let type = req.params.type
    fromDB.find().exec((err,doc)=>{
        if(type != 'all') {
            doc = doc.filter(data => {
                return data.commandType === type
            })
        }
        res.render('../view/showdataAll',{data:doc})
    })
}
