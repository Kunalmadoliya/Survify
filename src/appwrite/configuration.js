import conf from "../../conf/conf";
import { client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // 🔹 Providers can create a service (occupation)
  async createOccupation({ title, content, status, slug, featuredImage, price }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOccupationCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          price,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updateOccupation({ title, slug, content, price, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOccupationCollectionId,
        slug,
        {
          title,
          content,
          price,
          featuredImage,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteOccupation({ slug }) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOccupationCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  // 🔹 clients/Users can fetch occupations (services)
  async getOccupation(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOccupationCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getOccupations(query = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteOccupationCollectionId,
        query
      );
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();
export default service;
