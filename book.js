const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true, minlength: 2 },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  genre: {
    type: String,
    required: true,
    enum: ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Biography"],
  },
  inStock: { type: Boolean, required: true, default: true },
  rating: {
    type: [Number],
    validate: {
      validator: (arr) => arr.every((nbr) => nbr < 6 && nbr > 0),
      message: "rating must be between 1 and 5!",
    },
  },
  publishedAt: {
    type: Date,
    required: true,
    validate: {
      validator: (date) => new Date() > date,
      message: "Published Date must be in the past!",
    },
  },
  publisher: {
    name: { type: String },
    location: { type: String },
  },
});
bookSchema.virtual("avgRating").get(function () {
  return (
    this.rating.reduce((sum, rating) => sum + rating, 0) / this.rating.length
  );
});

bookSchema.methods.description = function () {
  return `${this.publisher.name} wrote ${this.title}`;
};
bookSchema.statics.getInStock = function () {
  const books = this.where("inStock").equals(true);
  return books;
};

bookSchema.post("find", async function () {
  console.log(`this is all Book`);
});

const Book = model("books", bookSchema);

module.exports = Book;
