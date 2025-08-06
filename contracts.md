# Portfolio Backend API Contracts

## Overview
This document outlines the API contracts for converting the mock portfolio data into a dynamic backend system.

## Database Models

### 1. Portfolio Profile
```javascript
{
  _id: ObjectId,
  name: String,
  title: String,
  subtitle: String,
  description: String,
  location: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  website: String,
  availability: String,
  responseTime: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Skills
```javascript
{
  _id: ObjectId,
  category: String,
  skills: [{
    name: String,
    level: Number (0-100)
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Projects
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  technologies: [String],
  features: [String],
  demoUrl: String,
  githubUrl: String,
  status: String,
  timeline: String,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Achievements
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  date: String,
  type: String,
  icon: String,
  impact: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 5. Contact Messages
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // 'unread', 'read', 'replied'
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Profile Management
- `GET /api/profile` - Get portfolio profile
- `PUT /api/profile` - Update profile (admin only)

### Skills Management
- `GET /api/skills` - Get all skills by category
- `POST /api/skills` - Create skill category (admin only)
- `PUT /api/skills/:id` - Update skill category (admin only)
- `DELETE /api/skills/:id` - Delete skill category (admin only)

### Projects Management
- `GET /api/projects` - Get all projects (with optional featured filter)
- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)

### Achievements Management
- `GET /api/achievements` - Get all achievements
- `GET /api/achievements/:id` - Get specific achievement
- `POST /api/achievements` - Create achievement (admin only)
- `PUT /api/achievements/:id` - Update achievement (admin only)
- `DELETE /api/achievements/:id` - Delete achievement (admin only)

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Get all messages (admin only)
- `PUT /api/contact/messages/:id` - Update message status (admin only)

## Data Migration from Mock

### Current Mock Data Location: `/app/frontend/src/mock.js`

### Migration Strategy:
1. Create database seed script using existing mock data
2. Transform mock data structure to match database models
3. Insert initial data into MongoDB collections
4. Update frontend to use API endpoints instead of mock data

### Frontend Integration Changes:
1. Replace mock data imports with API calls
2. Add loading states for data fetching
3. Add error handling for API failures
4. Implement data caching where appropriate

## GitHub Deployment Considerations

### Static Site Generation:
- Build process will generate static files for GitHub Pages
- API calls will work with deployed backend URL
- Environment variables for production/development URLs

### Backend Deployment Options:
1. **Heroku** (Free tier available)
2. **Vercel** (Serverless functions)
3. **Railway** (MongoDB + Backend hosting)
4. **Render** (Free tier with MongoDB)

### Environment Configuration:
```javascript
// Production
REACT_APP_BACKEND_URL=https://your-backend-url.com

// Development  
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Build Process:
- Frontend builds to static files
- Backend deployed separately
- CORS configured for GitHub Pages domain
- Database hosted on MongoDB Atlas (free tier)

## Implementation Priority:
1. Create database models and seed data
2. Implement GET endpoints for all portfolio data
3. Implement POST endpoint for contact form
4. Update frontend to use API calls
5. Add environment configuration
6. Test full integration
7. Prepare deployment scripts

## Contact Form Integration:
- Form submission sends email notification
- Data stored in database for admin review
- Success/error feedback to user
- Form validation on both frontend and backend