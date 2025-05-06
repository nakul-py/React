/* eslint-disable no-useless-catch */
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, name, password}){
        
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if (userAccount) {
                // call another method
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email , password)
        } catch (error) {
            throw error;
        }
    }
    async getCurrentUser({email, password, name}){
        try {
            return await this.account.get(name,email,password)
        } catch (error) {
            throw error
        }
    }
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }

}
    
const authService = new AuthService()
export default authService

