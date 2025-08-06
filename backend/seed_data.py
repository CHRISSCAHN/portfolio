import asyncio
from database import (
    profile_collection, skills_collection, projects_collection, 
    achievements_collection, about_collection
)
from datetime import datetime

# Mock data converted to database format
async def seed_portfolio_data():
    """Seed the database with initial portfolio data"""
    
    try:
        # Clear existing data
        await profile_collection.delete_many({})
        await skills_collection.delete_many({})
        await projects_collection.delete_many({})
        await achievements_collection.delete_many({})
        await about_collection.delete_many({})
        
        # Seed Profile Data
        profile_data = {
            "_id": "profile_main",
            "name": "Alex Johnson",
            "title": "Full Stack Developer & Project Manager",
            "subtitle": "Building scalable web applications and innovative HR Information Systems",
            "description": "Passionate about delivering end-to-end solutions from backend architecture to frontend experiences, with expertise in leading cross-functional teams to create efficient, high-quality software systems.",
            "location": "San Francisco, CA",
            "email": "alex.johnson@email.com",
            "phone": "+1 (555) 123-4567",
            "linkedin": "https://linkedin.com/in/alexjohnson",
            "github": "https://github.com/alexjohnson",
            "website": "https://alexjohnson.dev",
            "availability": "Available for new projects",
            "response_time": "Within 24 hours",
            "experience": "5+ Years Experience",
            "projects_completed": "25+ Projects Delivered",
            "research_papers": "2 International Research Studies",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        await profile_collection.insert_one(profile_data)
        
        # Seed Skills Data
        skills_data = [
            {
                "_id": "backend_skills",
                "category": "Backend Development",
                "skills": [
                    {"name": "Laravel", "level": 95},
                    {"name": "PHP", "level": 90},
                    {"name": "Node.js", "level": 85},
                    {"name": "Python", "level": 80},
                    {"name": "RESTful APIs", "level": 92}
                ],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "frontend_skills",
                "category": "Frontend Development",
                "skills": [
                    {"name": "Vue.js", "level": 88},
                    {"name": "React.js", "level": 85},
                    {"name": "Bootstrap", "level": 90},
                    {"name": "Tailwind CSS", "level": 85},
                    {"name": "JavaScript", "level": 92}
                ],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "database_skills",
                "category": "Database & Tools",
                "skills": [
                    {"name": "MySQL", "level": 88},
                    {"name": "PostgreSQL", "level": 82},
                    {"name": "Git/GitHub", "level": 90},
                    {"name": "Docker", "level": 75},
                    {"name": "AWS", "level": 78}
                ],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "pm_skills",
                "category": "Project Management",
                "skills": [
                    {"name": "Agile/Scrum", "level": 92},
                    {"name": "Team Leadership", "level": 88},
                    {"name": "Requirements Analysis", "level": 90},
                    {"name": "Risk Management", "level": 85},
                    {"name": "Stakeholder Communication", "level": 90}
                ],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
        ]
        await skills_collection.insert_many(skills_data)
        
        # Seed Projects Data
        projects_data = [
            {
                "_id": "project_1",
                "title": "Enterprise HR Information System",
                "description": "Comprehensive HRIS platform managing employee lifecycle, payroll, performance tracking, and analytics for 500+ employees.",
                "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
                "technologies": ["Laravel", "Vue.js", "MySQL", "Bootstrap", "Redis"],
                "features": ["Employee Management", "Payroll Processing", "Performance Analytics", "Role-based Access"],
                "demo_url": "#",
                "github_url": "#",
                "status": "Completed",
                "timeline": "6 months",
                "featured": True,
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "project_2",
                "title": "Real-time Project Management Dashboard",
                "description": "Interactive dashboard for tracking multiple projects with real-time updates, resource allocation, and team collaboration features.",
                "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                "technologies": ["React.js", "Node.js", "Socket.io", "PostgreSQL", "Chart.js"],
                "features": ["Real-time Updates", "Resource Tracking", "Team Chat", "Advanced Analytics"],
                "demo_url": "#",
                "github_url": "#",
                "status": "Completed",
                "timeline": "4 months",
                "featured": True,
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "project_3",
                "title": "E-commerce Platform with Admin Panel",
                "description": "Full-featured e-commerce solution with inventory management, payment processing, and comprehensive admin dashboard.",
                "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
                "technologies": ["Laravel", "Vue.js", "Stripe API", "MySQL", "Tailwind CSS"],
                "features": ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"],
                "demo_url": "#",
                "github_url": "#",
                "status": "In Progress",
                "timeline": "5 months",
                "featured": True,
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "project_4",
                "title": "Learning Management System",
                "description": "Educational platform with course management, student progress tracking, and interactive learning modules.",
                "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
                "technologies": ["Laravel", "React.js", "MySQL", "AWS S3", "Bootstrap"],
                "features": ["Course Management", "Progress Tracking", "Interactive Quizzes", "Video Streaming"],
                "demo_url": "#",
                "github_url": "#",
                "status": "Completed",
                "timeline": "7 months",
                "featured": True,
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
        ]
        await projects_collection.insert_many(projects_data)
        
        # Seed Achievements Data
        achievements_data = [
            {
                "_id": "achievement_1",
                "title": "International Research Publication",
                "description": "Presented research on 'Optimizing Database Performance in HR Systems' at the International Conference on Software Engineering",
                "date": "2023",
                "type": "Research",
                "icon": "trophy",
                "impact": "Cited by 25+ researchers worldwide",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "achievement_2",
                "title": "Best Innovation Award",
                "description": "Recognized for developing an AI-powered employee performance prediction system that improved HR decision-making by 40%",
                "date": "2023",
                "type": "Award",
                "icon": "award",
                "impact": "Implemented across 3 organizations",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "achievement_3",
                "title": "International Conference Speaker",
                "description": "Keynote speaker on 'Scalable Architecture Patterns in Modern Web Applications' at TechCon Asia 2022",
                "date": "2022",
                "type": "Speaking",
                "icon": "mic",
                "impact": "Audience of 500+ developers",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "achievement_4",
                "title": "Team Excellence Recognition",
                "description": "Led a cross-functional team of 12 developers to deliver a complex ERP system 2 months ahead of schedule",
                "date": "2022",
                "type": "Leadership",
                "icon": "users",
                "impact": "Saved client $200K in operational costs",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "achievement_5",
                "title": "Open Source Contributor",
                "description": "Active contributor to Laravel community with 500+ GitHub stars across personal repositories",
                "date": "Ongoing",
                "type": "Open Source",
                "icon": "github",
                "impact": "Used by 100+ developers globally",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "_id": "achievement_6",
                "title": "Certified Scrum Master",
                "description": "Advanced certification in Agile project management and team leadership methodologies",
                "date": "2021",
                "type": "Certification",
                "icon": "certificate",
                "impact": "Improved team velocity by 35%",
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
        ]
        await achievements_collection.insert_many(achievements_data)
        
        # Seed About Data
        about_data = {
            "_id": "about_main",
            "title": "About Me",
            "description": "I am a Full Stack Developer and Project Manager with extensive experience in building scalable web applications and HR Information Systems. My journey spans from backend development with Laravel and PHP to frontend design with Vue.js and Bootstrap, while leading cross-functional teams to deliver innovative solutions.",
            "highlights": [
                "End-to-end project leadership from conception to deployment",
                "Cross-functional collaboration with design, QA, and stakeholder teams", 
                "Research-driven approach with 2 internationally presented studies",
                "Commitment to delivering high-quality, efficient systems"
            ],
            "stats": [
                {"label": "Years Experience", "value": "5+"},
                {"label": "Projects Completed", "value": "25+"},
                {"label": "Team Members Led", "value": "15+"},
                {"label": "Research Publications", "value": "2"}
            ],
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        await about_collection.insert_one(about_data)
        
        print("✅ Database seeded successfully with portfolio data")
        return True
        
    except Exception as e:
        print(f"❌ Error seeding database: {e}")
        return False

# Run the seed function
if __name__ == "__main__":
    asyncio.run(seed_portfolio_data())