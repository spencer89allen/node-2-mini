module.exports = {
    getPlanes: (req, res, next) => {
        req.app.get('db')
            .get_planes()
            .then(planes => {
                res.send(planes)
            })
            .catch(err => {
                console.error(err);
                
                res.status(500).send({message: 'something whent wrong!'})
            })
    },

    

}