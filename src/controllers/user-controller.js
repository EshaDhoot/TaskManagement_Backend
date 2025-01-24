import UserService from "../services/user-service.js";

const userService = new UserService();

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            data: user,
            message: "User registered successfully",
            error: {},
            success: true
        });
    } catch (error) {
        console.error("Error registering user from userController");
        res.status(500).json({
            data: {},
            message: "Error registering user",
            error: error.message,
            success: false
        });
    }
}

export const signIn = async (req, res) => {
    try {
        const token = await userService.signIn(req.body);
        res.status(200).json({
            data: token,
            message: "User signed in successfully",
            error: {},
            success: true
        })
    } catch (error) {
        console.error("Error signing in from userController");
        res.status(500).json({
            data: {},
            message: "Error signing in",
            error: error.message,
            success: false
        });
    }
}