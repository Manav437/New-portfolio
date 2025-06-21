import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">resume</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={"https://drive.google.com/file/d/1PuQBKmPNS8uwYqeY5d3UmHzUy2a6iSmY/view?usp=sharing"}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">Manav resume</p>
                <p className="h-6 text-xs text-muted-foreground">
                  2025-06-20
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
