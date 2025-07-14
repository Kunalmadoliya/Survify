import conf from "../../conf/conf";

import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //All Providers can do this
  async createPost({title, content, status, slug, featuredImage, price}) {
    try {
      await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfileCollectionId,
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

  async updatePost({title, slug, content, price, featuredImage}) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfileCollectionId,
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

  async deletePost({slug}) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfileCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  //all client/user/guest can do this
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfileCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  async getPosts(query = [Query.equal("status", "active")]) {
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
