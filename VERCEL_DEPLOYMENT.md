# Vercel Deployment Guide

Your Chapter One Portfolio is now configured for Vercel deployment! Follow these steps to deploy your application.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you haven't already
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, or Bitbucket)
3. **Environment Variables**: Set up all required environment variables (see ENV_SETUP.md)

## Deployment Steps

### 1. Connect Your Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel should automatically detect your project settings

### 2. Configure Build Settings

Vercel should automatically detect these settings from your `vercel.json`, but you can verify:

- **Framework Preset**: Other
- **Root Directory**: `./` (leave empty)
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `./dist` (automatically configured)
- **Install Command**: `npm install`

### 3. Set Environment Variables

1. In your Vercel project, go to Settings → Environment Variables
2. Add all variables listed in `ENV_SETUP.md`
3. Set them for Production, Preview, and Development environments as needed

### 4. Deploy

1. Click "Deploy" to start the deployment
2. Vercel will build and deploy your application
3. Once deployed, you'll get a production URL (e.g., `your-app.vercel.app`)

## Important Notes

### Database Configuration
- For production, use a cloud database like PlanetScale, Railway, or AWS RDS
- Update your `DATABASE_URL` environment variable accordingly
- Run database migrations if needed: `npm run db:push`

### Custom Domain (Optional)
- Go to Settings → Domains in your Vercel project
- Add your custom domain
- Follow Vercel's DNS configuration instructions

### Environment Variables
- Make sure all environment variables are set correctly
- Test your deployment thoroughly
- Check logs in Vercel dashboard if issues occur

## Troubleshooting

### Build Failures
- Check the build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify environment variables are set correctly

### Runtime Issues
- Check application logs in Vercel dashboard
- Verify database connectivity
- Ensure OAuth configuration is correct

### Performance
- Vercel functions have execution time limits (30 seconds configured)
- Consider optimizing database queries if needed
- Use appropriate caching strategies

## Local Testing

Before deploying, test your build locally:

```bash
# Install dependencies
npm install

# Build for production
npm run vercel-build

# Test the build (if needed)
NODE_ENV=production node dist/index.js
```

## Support

If you encounter issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Review build logs in Vercel dashboard
3. Ensure all environment variables are configured
4. Test locally before deploying

Your portfolio should now be live on Vercel! 🎉
