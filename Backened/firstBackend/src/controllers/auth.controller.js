import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    console.log(0);
    const { fullName, email, password, phone, gender, dob } = req.body;

    
    if (!fullName || !email || !password || !phone || !gender || !dob) 
      {
      res.status(400).json({ message: "All Feilds Required" });
      error.statusCode = 400;
      return next(error);
    }

    

    const existingUser = await User.findOne({ email });
    if (existingUser) 
        {
      res.status(409).json({ message: "Email Already Registered" });
      error.statusCode = 409;
      return next(error);
    }
    console.log(0);
    const photoUrl = "https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}";


    const photo =
    {
      url: photoUrl,
      publicId:null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo
    });
      
    res.status(201).json({message:"user created successfully"});
  } catch (error) {
    error.statusCode = 500;
    return next(error);
  };

  {
    res.status(500).json({ message: "Internal server error" });
  }
};


export const LoginUser = (req, res) =>
   {
  res.json({ message: "Login Successfull from Controller" });
};

export const LogoutUser = (req, res) => 
  {
  res.json({ message: "Logout Successfull from Controller" });
};

