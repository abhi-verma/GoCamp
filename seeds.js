var mongoose = require("mongoose");

var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
         name: "Granite Hill",
         image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
         name: "Desert Mesa",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5JVjPCJYUnDKYpXYZOLu2S8Odifdm5-5htHzl5PlVPU7GV_78Q",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
         name: "Canyon Floor",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zVikQlHG1tbgyhsaNd2hZr1qhoDg2Ut68oYT5TDOywU2lBxPtA",
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    }
]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        }
        console.log("Remove Campgrounds.")
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err) {
                    console.log(err)
                } else {
                    console.log("Added a campground");
                    //Create a comment
                    Comment.create(
                        {
                            text: "Great Place :) No internet :/",
                            author: "Homer"
                        }, function(err, comment)
                        {
                            if(err) {
                                console.log(err)
                            } else {
                                campground.comments.push(comment._id);
                                campground.save();
                                console.log("Created new comment.");
                            }
                        
                        });
                }
            });
        });
    });
}

module.exports = seedDB;