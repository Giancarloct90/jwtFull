(async () => {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect('mongodb://localhost:27017/Dunder'), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };
        console.log('db online');
    } catch (e) {

    }
})();