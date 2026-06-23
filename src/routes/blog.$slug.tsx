import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PostMistakes } from "@/components/blog/PostMistakes";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    const title = post ? `${post.title} - DetailWeb Blog` : "Blog Post - DetailWeb";
    const description = post?.excerpt ?? "Read the latest from DetailWeb on websites, SEO, and digital growth.";
    const url = `https://detailweb.org/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                datePublished: post.datePublished,
                author: { "@type": "Organization", name: "DetailWeb" },
                publisher: {
                  "@type": "Organization",
                  name: "DetailWeb",
                  logo: { "@type": "ImageObject", url: "https://detailweb.org/" },
                },
                description: post.excerpt,
                url,
              }),
            },
          ]
        : [],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw notFound();
  }

  return (
    <SiteShell>
      <article>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 lg:px-10 pt-16 md:pt-24">
          <p className="label">Blog · {post.date}</p>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] text-balance">
            {post.title}
          </h1>
        </section>

        {slug === "why-your-paphos-business-needs-a-website-in-2026" && (
          <div className="mx-auto max-w-3xl px-6 lg:px-10 mt-16 space-y-16">
          <p className="text-lg leading-relaxed text-pretty">
            Your barber shop is busy. Your nail salon is always full. Your car detailing business has regulars who book months in advance.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            So why would you need a website?
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Because it&apos;s 2026, and the customers you could have are looking for you online right now and can&apos;t find you.
          </p>

          {/* Section: The Problem */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">The Problem: You&apos;re Invisible</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Let&apos;s say someone moves to Paphos. They need a barber shop. What do they do?
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              They don&apos;t walk down the street knocking on doors. They Google &quot;barber shop near me&quot; or &quot;best barbers in Paphos.&quot;
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              If you don&apos;t have a website, you don&apos;t exist to them.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Even worse, your competitor who does have a website gets the booking. And the money. And the customer reviews. And the second booking.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              This happens every single day.
            </p>
          </div>

          {/* Section: It's Not Just About Being Online */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">It&apos;s Not Just About Being &quot;Online&quot;</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Some business owners say, &quot;I have a Facebook page. That&apos;s enough.&quot;
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              It&apos;s not.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Here&apos;s why:
            </p>

            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-display text-xl mb-4">Facebook</h3>
                <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <li className="flex gap-3"><span className="text-accent">·</span><span>You don&apos;t own it. Facebook can change the algorithm tomorrow and your posts disappear.</span></li>
                  <li className="flex gap-3"><span className="text-accent">·</span><span>People don&apos;t search Facebook to find barber shops. They search Google.</span></li>
                  <li className="flex gap-3"><span className="text-accent">·</span><span>Limited information (only what fits in a Facebook bio).</span></li>
                </ul>
              </div>
              <div className="border border-border p-6 rounded-sm">
                <h3 className="font-display text-xl mb-4">Your own website</h3>
                <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <li className="flex gap-3"><span className="text-accent">·</span><span>You own it. Complete control.</span></li>
                  <li className="flex gap-3"><span className="text-accent">·</span><span>Shows up in Google searches when people look for your service.</span></li>
                  <li className="flex gap-3"><span className="text-accent">·</span><span>More professional. Makes you look established.</span></li>
                  <li className="flex gap-3"><span className="text-accent">·</span><span>More space to show who you are, your work, and why people should choose you.</span></li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              A website is the difference between being findable and being invisible.
            </p>
          </div>

          {/* Section: Real Example */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">Real Example: What Happens Without a Website</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Ahmed runs a car detailing shop in Paphos. High-quality work. Regular customers love him.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              But he has no website.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Sarah just moved to Paphos. Her car is dirty. She searches &quot;car detailing Paphos&quot; on Google.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Ahmed doesn&apos;t appear. A competitor does. Sarah books with them.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Ahmed loses 80-100 euros on that one job.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              This happens 3-4 times a week. That&apos;s 300-400 euros in lost revenue every week.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Over a year? 15,000-20,000 euros in business he could have had.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A website costs just €500 to build. Then €200/month to get found on Google. One month of lost bookings would pay for it.
            </p>
          </div>

          {/* Section: What Your Website Actually Does */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">What Your Website Actually Does</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A good website for a small service business does 3 things:
            </p>

            <div className="mt-8 border-t border-border">
              {[
                {
                  n: "1",
                  title: "Gets found on Google",
                  body: "When someone searches 'barber shop near me,' 'best nails in Paphos,' or 'car detailing Cyprus,' your website appears. You get customers without spending money on ads.",
                },
                {
                  n: "2",
                  title: "Shows you're real",
                  body: "A website makes you look professional. It says 'I'm serious about my business.' Customers trust you more. They book more confidently.",
                },
                {
                  n: "3",
                  title: "Lets customers book 24/7",
                  body: "Someone wants to book at 11 PM on a Sunday. They don't call. They book online. You wake up Monday morning with 3 new appointments already confirmed.",
                },
              ].map((item) => (
                <div key={item.n} className="border-b border-border py-8 grid gap-4 md:grid-cols-12 items-start">
                  <span className="label md:col-span-1">{item.n}</span>
                  <div className="md:col-span-11">
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: What a Website Costs */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">What a Website Costs (Spoiler: Less Than You Think)</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Most business owners think websites cost 5,000-10,000 euros.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              They don&apos;t.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A professional website for a small service business costs 800-1,500 euros.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Maintenance? 100-200 euros a month to keep it updated, add new services, post testimonials.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Over 2 years, that&apos;s 1,600-3,300 euros total.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Compare that to what you&apos;d spend on:
            </p>

            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Google ads:</strong> 300-500 euros per month (and you&apos;re paying every time someone clicks)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Facebook ads:</strong> 200-400 euros per month (same problem)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Walking flyers:</strong> 50 euros per 500 flyers, and most people throw them away</span></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              A website is a one-time investment that keeps working for years.
            </p>
          </div>

          {/* Section: The Problem With Most Websites */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">The Problem With Most Websites</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              You might think, &quot;Okay, I&apos;ll just use Wix or Squarespace.&quot;
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Or your cousin&apos;s friend who &quot;knows websites&quot; will build one cheap.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Here&apos;s what usually happens:
            </p>

            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span>The website looks generic (doesn&apos;t reflect your business)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>It&apos;s slow on mobile (customers get frustrated and leave)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>It doesn&apos;t show up on Google (nobody finds it)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>It&apos;s not easy to update (you&apos;re stuck calling your cousin)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Nobody booking through it (because it&apos;s not optimized)</span></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              A bad website is worse than no website. It costs you money, time, and credibility.
            </p>
          </div>

          {/* Section: What Makes a Website Actually Work */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">What Makes a Website Actually Work</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A website that brings customers needs:
            </p>

            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span>Clean, professional design that makes people trust you</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Mobile-friendly (60% of people search on phones)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Easy to find on Google (real SEO, not guessing)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Easy booking (customers can book in 30 seconds)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Customer reviews (social proof that you&apos;re good)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Regular updates (fresh photos, testimonials)</span></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              Most cheap websites have 0 of these.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              That&apos;s why they don&apos;t work.
            </p>
          </div>

          {/* Section: How to Know If You Need a Website */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">How to Know If You Need a Website</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Ask yourself:
            </p>

            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span>Do people ever ask, &quot;Do you have a website?&quot; You need one.</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Do you compete with other businesses in Paphos? You need one (they probably have one).</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Do you want more customers without spending money on ads? You need one.</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Do customers ever ask your hours but you&apos;re not answering? You need one (so they see hours online 24/7).</span></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              If any of these are true, you need a website.
            </p>
          </div>

          {/* Section: The Real Cost of Not Having a Website */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">The Real Cost of Not Having a Website</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Let&apos;s do the math:
            </p>

            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span>Average service business in Paphos: 15-20 bookings per week</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Average revenue per booking: 80-150 euros</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Customers lost per week because they can&apos;t find you: 3-5</span></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              That&apos;s 240-750 euros in lost revenue every week.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Over a year: 12,000-39,000 euros.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A website costs 10% of that. And you get it back in a month.
            </p>
          </div>

          {/* Section: Next Steps */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl">Next Steps</h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              If you&apos;re a small business owner in Paphos without a website, you&apos;re leaving money on the table every single day.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              The good news? It&apos;s fixable in 2 weeks.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              The better news? You don&apos;t have to figure it out alone.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              At DetailWeb, we build websites specifically for small service businesses. We handle:
            </p>

            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span>Design that represents your business</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Google optimization (so you actually get found)</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Easy booking integration</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Mobile optimization</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Ongoing updates and maintenance</span></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              Not sure if you need one? Let&apos;s talk for free.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              We&apos;ll spend 15 minutes understanding your business and show you exactly how many customers you&apos;re losing right now.
            </p>
          </div>

          {/* CTA Box */}
          <div className="border border-border p-8 md:p-10 rounded-sm bg-secondary/30">
            <h3 className="font-display text-2xl md:text-3xl">Ready to get found on Google?</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Get a free 15-minute consultation. We&apos;ll show you:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-accent">·</span><span>How many customers are searching for your business but can&apos;t find you</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>Exactly how a website would change your business</span></li>
              <li className="flex gap-3"><span className="text-accent">·</span><span>What it costs (spoiler: way less than you think)</span></li>
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <p className="label">FAQ</p>
            <h2 className="mt-6 font-display text-3xl md:text-4xl">Common questions.</h2>
            <div className="mt-12 border-t border-border">
              {[
                {
                  q: "How much does a website cost?",
                  a: "A professional website for a small service business costs 800-1,500 euros. Monthly maintenance is 100-200 euros. Compare that to what you'd spend on ads or lose from customers who can't find you.",
                },
                {
                  q: "How long does it take to build a website?",
                  a: "2-3 weeks from start to launch. We handle everything.",
                },
                {
                  q: "Will a website actually get me customers?",
                  a: "Yes, if it's done right. A badly built website won't. We build websites specifically designed to rank on Google and convert visitors into customers.",
                },
                {
                  q: "Do I need a website if I have a Facebook page?",
                  a: "Facebook is useful, but Google is where people search for businesses. A website shows up in Google. Facebook doesn't.",
                },
                {
                  q: "Can I update my website myself?",
                  a: "Yes, we can set it up so you can easily add photos, testimonials, and updates. Or we handle it for 100-200 euros per month.",
                },
              ].map((f) => (
                <details key={f.q} className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                    <span className="font-display text-xl md:text-2xl">{f.q}</span>
                    <span className="text-accent text-2xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl text-pretty">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        )}
        {slug === "5-mistakes-small-business-owners-make-with-websites" && <PostMistakes />}
      </article>

      <div className="h-16" />
      <CtaBanner />
    </SiteShell>
  );
}
