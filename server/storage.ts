import { blogPosts, type BlogPost, type InsertBlogPost } from "@shared/schema";

export interface IStorage {
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private blogPosts: Map<number, BlogPost>;
  currentId: number;

  constructor() {
    this.blogPosts = new Map();
    this.currentId = 1;

    // Add some test blog posts
    const testPosts: InsertBlogPost[] = [
      {
        title: "Understanding Cross-Site Scripting (XSS)",
        content: "Cross-Site Scripting (XSS) is one of the most common web application vulnerabilities...",
        summary: "Learn about XSS attacks and how to prevent them in your web applications",
        imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
        tags: ["Security", "Web", "XSS"],
        publishedAt: new Date()
      },
      {
        title: "SQL Injection Prevention Guide",
        content: "SQL Injection remains a critical security threat to web applications...",
        summary: "A comprehensive guide to preventing SQL injection attacks",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        tags: ["Security", "Database", "SQL Injection"],
        publishedAt: new Date()
      },
      {
        title: "Secure Code Review Best Practices",
        content: "Code reviews are a crucial part of maintaining secure applications...",
        summary: "Learn the essential practices for conducting effective security code reviews",
        imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
        tags: ["Security", "Code Review", "Best Practices"],
        publishedAt: new Date()
      }
    ];

    testPosts.forEach(post => this.createBlogPost(post));
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentId++;
    const post: BlogPost = { ...insertPost, id };
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();