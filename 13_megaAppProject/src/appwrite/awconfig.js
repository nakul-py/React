// awconfig.js major configuration of appwrite.
import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, content, featuredImage, status, userId, ID}) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique(),
            {title, content, featuredImage, status,userId})
        } catch (error) {
            console.log("Appwrite service :: createpost :: error" ,error)
        }
    }

    async updatePost(ID,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique(),
            {title, content, featuredImage, status})
        } catch (error) {
            console.log("Appwrite service :: updatepost :: error", error)
        }
    }

    async deletePost(ID){
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique())
            return true
        } catch (error) {
            console.log("Appwrite service :: deletepost :: error", error)
            return false
        }
    }
    
    async getPost(ID){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteCollectionId, ID.unique())
        } catch (error) {
            console.log("Appwrite service :: getpost :: error", error)
        }
    }

    async getPostss(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, queries)
        } catch (error) {
            console.log("Appwrite service :: getpostss :: error", error)
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log("Appwrite service :: uploadfile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite service :: deletefile :: error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId)
    }
}

const service = new Service();
export default service;
