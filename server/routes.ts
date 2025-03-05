import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all blog posts
  app.get("/api/blog-posts", async (_req, res) => {
    const posts = await storage.getAllBlogPosts();
    res.json(posts);
  });

  // Get single blog post by ID
  app.get("/api/blog-posts/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const post = await storage.getBlogPostById(id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.json(post);
  });

  const httpServer = createServer(app);
  return httpServer;
}