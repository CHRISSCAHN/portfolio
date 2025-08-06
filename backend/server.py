from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import logging
import os
import asyncio

# Import our modules
from database import init_database
from api_routes import api_router
from seed_data import seed_portfolio_data

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI(
    title="Portfolio API",
    description="Backend API for Alex Johnson's Portfolio",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],  # In production, replace with specific domains
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    """Initialize database and seed data on startup"""
    logger.info("Starting Portfolio API...")
    
    # Initialize database
    db_initialized = await init_database()
    if not db_initialized:
        logger.error("Failed to initialize database")
        return
    
    # Check if we need to seed data (if profile doesn't exist)
    from database import profile_collection
    existing_profile = await profile_collection.find_one({"_id": "profile_main"})
    
    if not existing_profile:
        logger.info("No existing data found, seeding database...")
        seed_success = await seed_portfolio_data()
        if seed_success:
            logger.info("Database seeded successfully")
        else:
            logger.error("Failed to seed database")
    else:
        logger.info("Database already contains data, skipping seed")
    
    logger.info("Portfolio API started successfully")

@app.on_event("shutdown")
async def shutdown_event():
    """Cleanup on shutdown"""
    logger.info("Shutting down Portfolio API...")
    from database import client
    client.close()
    logger.info("Portfolio API shut down complete")

# Root endpoint
@app.get("/")
async def root():
    return {
        "message": "Portfolio API is running",
        "version": "1.0.0",
        "docs": "/docs"
    }

# Additional health check
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "portfolio-api",
        "version": "1.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)