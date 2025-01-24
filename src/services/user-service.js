import User from "../models/user-model.js";

class UserService {
    async createUser(payload) {
        try {
            const user = await User.create(payload);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(payload) {
        try {
            const user = await User.findOne({ email: payload.email });
            if (!user) {
                throw new Error("User not found");
            }
            if(!user.comparePassword(payload.password)) {
                throw new Error("Incorrect password");
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;