import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: [true, "Username was taken."],
      minLength: [3, "Username has to have 3 charecter at least."],
      minLength: [32, "Username has to not have more then 32 charecter."],
    },
    password: {
        type: String, //! conT pt1 //


      },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email already exists."],
      match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, "Email is invalid."],
    },
    phone: {
      type: String,
      unique: [true, "Phone already exists."],
      match: [
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,
        "Phone is invalid.",
      ],
    },
    
    recentlyProduct: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
    usedDiscountCode: {
      type: Array,
      default: [],
    },
    favoriteProducts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
      default: [],
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"],
    },
    cart: cartSchema,
    boughtProducts: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
