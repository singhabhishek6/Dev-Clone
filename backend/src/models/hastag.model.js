const mongoose = require('mongoose');

//genrate random color
const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++)
    {
      color += letters[Math.floor(Math.random() * 16)];
    }

   return color;
}


// Create hastag schema
const hastagSchema = new mongoose.Schema({
    tag_name: { type: String, required: true },
    tag_description: { type: String, required: false},
    submission_guidelines: { type: String, required: false },
    tag_about: { type: String, required: false },
    tag_count: { type: Number, required: false, default:0},
    tag_img: { type: String, required: false },
    tag_card_color: { type: String, required: false, default: randomColor() },
    tag_post_id:[{type:mongoose.Schema.Types.ObjectId,required:false}],
    tag_moderators: [{ type: mongoose.Schema.Types.ObjectId,ref:"user",required: false }]
}, {
    versionKey: false,
    timestamps:true,
});



module.exports = mongoose.model('hastag', hastagSchema); // Create hastags collection in Database