import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  const posts = [
    {
      title: "5 Signs Your Business Needs a Custom Web Application",
      excerpt: "Discover the key indicators that it's time to move beyond off-the-shelf solutions.",
      date: "2024-10-15",
    },
    {
      title: "How to Choose the Right Web Development Partner",
      excerpt: "A comprehensive guide to evaluating agencies and making the right choice for your project.",
      date: "2024-10-01",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Blog & Insights</h1>
            <p className="text-lg text-muted-foreground">
              Expert insights, industry trends, and practical advice for building better web applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto grid gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
