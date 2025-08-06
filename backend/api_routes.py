from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from models import *
from database import (
    profile_collection, skills_collection, projects_collection,
    achievements_collection, contact_collection, about_collection
)
from typing import List, Optional
import logging

# Create API router
api_router = APIRouter(prefix="/api", tags=["portfolio"])

logger = logging.getLogger(__name__)

# Profile Routes
@api_router.get("/profile", response_model=PortfolioProfile)
async def get_profile():
    """Get portfolio profile information"""
    try:
        profile = await profile_collection.find_one({"_id": "profile_main"})
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        return PortfolioProfile(**profile)
    except Exception as e:
        logger.error(f"Error fetching profile: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/profile", response_model=PortfolioProfile)
async def update_profile(profile_data: PortfolioProfileCreate):
    """Update portfolio profile (admin only - simplified for demo)"""
    try:
        updated_profile = profile_data.dict()
        updated_profile["updated_at"] = datetime.utcnow()
        
        await profile_collection.update_one(
            {"_id": "profile_main"},
            {"$set": updated_profile}
        )
        
        updated_doc = await profile_collection.find_one({"_id": "profile_main"})
        return PortfolioProfile(**updated_doc)
    except Exception as e:
        logger.error(f"Error updating profile: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# About Routes
@api_router.get("/about", response_model=AboutSection)
async def get_about():
    """Get about section information"""
    try:
        about = await about_collection.find_one({"_id": "about_main"})
        if not about:
            raise HTTPException(status_code=404, detail="About section not found")
        return AboutSection(**about)
    except Exception as e:
        logger.error(f"Error fetching about section: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Skills Routes
@api_router.get("/skills", response_model=List[SkillCategory])
async def get_skills():
    """Get all skills organized by category"""
    try:
        skills_cursor = skills_collection.find({})
        skills = await skills_cursor.to_list(length=None)
        return [SkillCategory(**skill) for skill in skills]
    except Exception as e:
        logger.error(f"Error fetching skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/skills", response_model=SkillCategory)
async def create_skill_category(skill_data: SkillCategoryCreate):
    """Create a new skill category (admin only - simplified for demo)"""
    try:
        new_skill = SkillCategory(**skill_data.dict())
        skill_dict = new_skill.dict(by_alias=True)
        
        await skills_collection.insert_one(skill_dict)
        return new_skill
    except Exception as e:
        logger.error(f"Error creating skill category: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Projects Routes
@api_router.get("/projects", response_model=List[Project])
async def get_projects(featured: Optional[bool] = None):
    """Get all projects with optional featured filter"""
    try:
        query = {}
        if featured is not None:
            query["featured"] = featured
            
        projects_cursor = projects_collection.find(query).sort("created_at", -1)
        projects = await projects_cursor.to_list(length=None)
        return [Project(**project) for project in projects]
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a specific project by ID"""
    try:
        project = await projects_collection.find_one({"_id": project_id})
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        return Project(**project)
    except Exception as e:
        logger.error(f"Error fetching project {project_id}: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/projects", response_model=Project)
async def create_project(project_data: ProjectCreate):
    """Create a new project (admin only - simplified for demo)"""
    try:
        new_project = Project(**project_data.dict())
        project_dict = new_project.dict(by_alias=True)
        
        await projects_collection.insert_one(project_dict)
        return new_project
    except Exception as e:
        logger.error(f"Error creating project: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Achievements Routes
@api_router.get("/achievements", response_model=List[Achievement])
async def get_achievements():
    """Get all achievements"""
    try:
        achievements_cursor = achievements_collection.find({}).sort("date", -1)
        achievements = await achievements_cursor.to_list(length=None)
        return [Achievement(**achievement) for achievement in achievements]
    except Exception as e:
        logger.error(f"Error fetching achievements: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/achievements/{achievement_id}", response_model=Achievement)
async def get_achievement(achievement_id: str):
    """Get a specific achievement by ID"""
    try:
        achievement = await achievements_collection.find_one({"_id": achievement_id})
        if not achievement:
            raise HTTPException(status_code=404, detail="Achievement not found")
        return Achievement(**achievement)
    except Exception as e:
        logger.error(f"Error fetching achievement {achievement_id}: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.post("/achievements", response_model=Achievement)
async def create_achievement(achievement_data: AchievementCreate):
    """Create a new achievement (admin only - simplified for demo)"""
    try:
        new_achievement = Achievement(**achievement_data.dict())
        achievement_dict = new_achievement.dict(by_alias=True)
        
        await achievements_collection.insert_one(achievement_dict)
        return new_achievement
    except Exception as e:
        logger.error(f"Error creating achievement: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Contact Routes
@api_router.post("/contact", response_model=dict)
async def submit_contact_form(contact_data: ContactMessageCreate):
    """Submit contact form message"""
    try:
        new_message = ContactMessage(**contact_data.dict())
        message_dict = new_message.dict(by_alias=True)
        
        await contact_collection.insert_one(message_dict)
        
        # In a real application, you might send an email notification here
        logger.info(f"New contact message from {contact_data.email}")
        
        return {
            "success": True,
            "message": "Thank you for your message! I'll get back to you soon.",
            "id": new_message.id
        }
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact/messages", response_model=List[ContactMessage])
async def get_contact_messages(status: Optional[str] = None):
    """Get contact messages (admin only - simplified for demo)"""
    try:
        query = {}
        if status:
            query["status"] = status
            
        messages_cursor = contact_collection.find(query).sort("created_at", -1)
        messages = await messages_cursor.to_list(length=None)
        return [ContactMessage(**message) for message in messages]
    except Exception as e:
        logger.error(f"Error fetching contact messages: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.put("/contact/messages/{message_id}")
async def update_message_status(message_id: str, status_update: ContactMessageUpdate):
    """Update message status (admin only - simplified for demo)"""
    try:
        result = await contact_collection.update_one(
            {"_id": message_id},
            {
                "$set": {
                    "status": status_update.status,
                    "updated_at": datetime.utcnow()
                }
            }
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Message not found")
            
        return {"success": True, "message": "Message status updated"}
    except Exception as e:
        logger.error(f"Error updating message status: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Health check endpoint
@api_router.get("/health")
async def health_check():
    """API health check"""
    return {"status": "healthy", "message": "Portfolio API is running"}