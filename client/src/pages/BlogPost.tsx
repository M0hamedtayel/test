import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${id}`]
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-accent rounded w-3/4 mb-4" />
          <div className="h-4 bg-accent rounded w-1/4 mb-8" />
          <div className="aspect-video bg-accent rounded mb-8" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-accent rounded w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <time>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</time>
            <div className="flex gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full rounded-lg mb-8"
          />
          <div className="prose prose-invert max-w-none">
            {post.content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
