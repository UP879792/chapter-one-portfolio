# Environment Variables Setup

Your application requires the following environment variables to be configured in Vercel:

## Required Variables

### Application Configuration
- `VITE_APP_ID`: Your application ID from the OAuth provider
- `VITE_OAUTH_PORTAL_URL`: The OAuth portal URL for login redirects (Required)

### Database
- `DATABASE_URL`: MySQL database connection string
  - Format: `mysql://username:password@host:port/database`
  - For Vercel, you can use a cloud database like PlanetScale or Railway

### Authentication
- `JWT_SECRET`: A secure random string for JWT token signing
- `OAUTH_SERVER_URL`: The OAuth server URL for authentication
- `OWNER_OPEN_ID`: The OpenID of the application owner/admin

### Notification Service (Optional)
- `BUILT_IN_FORGE_API_URL`: API URL for the notification service
- `BUILT_IN_FORGE_API_KEY`: API key for the notification service

### Optional Display & Analytics Variables
- `VITE_APP_TITLE`: Custom application title (defaults to "App")
- `VITE_APP_LOGO`: Custom logo URL (defaults to placeholder)
- `VITE_ANALYTICS_ENDPOINT`: Analytics service endpoint
- `VITE_ANALYTICS_WEBSITE_ID`: Website ID for analytics tracking

## Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with its corresponding value
4. Make sure to set them for Production, Preview, and Development environments as needed

## Example Values

```bash
VITE_APP_ID=your_app_id_here
VITE_OAUTH_PORTAL_URL=https://your-oauth-portal.com
DATABASE_URL=mysql://user:pass@host:3306/dbname
JWT_SECRET=your_secure_random_jwt_secret_here
OAUTH_SERVER_URL=https://your-oauth-provider.com
OWNER_OPEN_ID=admin_openid_value
BUILT_IN_FORGE_API_URL=https://api.forge.example.com
BUILT_IN_FORGE_API_KEY=your_api_key_here
VITE_APP_TITLE=ChapterOne Portfolio
VITE_APP_LOGO=https://your-domain.com/logo.png
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your_website_id
```

## Security Notes

- Never commit actual environment variable values to version control
- Use strong, unique secrets for JWT_SECRET
- Ensure your database credentials have appropriate permissions
- Rotate secrets periodically for security
