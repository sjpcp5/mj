const config = {
  bucket_name:
    process.env.REACT_APP_BUCKET_SLUG || "e6f0a060-d1fa-11ea-b05f-7d2595453c9a",
  bucket_slug:
    process.env.REACT_APP_BUCKET_SLUG || "e6f0a060-d1fa-11ea-b05f-7d2595453c9a",
  bucket_id:
    process.env.REACT_APP_BUCKET_BUCKET_ID || "5f2213055218100007fd882f",
  read_key:
    process.env.REACT_APP_BUCKET_READ_KEY ||
    "8590pZx583pEF24UpWQnUHhP8Q4pEPpsfX1idnqlajJlQbbs07",
  write_key:
    process.env.REACT_APP_BUCKET_WRITE_KEY ||
    "hxJEhK3QaolFIeC79ROO8ioR6CUJ78bH62NE4AeuGV3Z0jecZM",
  url: "https://api.cosmicjs.com/v1/",
};
export default config;
