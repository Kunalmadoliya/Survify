const conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

  appwriteProfileCollectionId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_PROFILES
  ),
  appwriteOccupationCollectionId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_OCCUPATIONS
  ),
  appwriteBookingCollectionId: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_BOOKINGS
  ),

  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
