import { Link } from "@tanstack/react-router";

export function PostMistakes() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10 mt-16 space-y-16">
      {/* Intro */}
      <p className="text-lg leading-relaxed text-pretty">
        You built a website. Good. You&apos;re ahead of 40% of small business owners in Cyprus.
      </p>
      <p className="text-lg leading-relaxed text-pretty">
        But here&apos;s the problem: your website probably isn&apos;t working as hard as it should be.
      </p>
      <p className="text-lg leading-relaxed text-pretty">
        In fact, it might be actively hurting your business.
      </p>
      <p className="text-lg leading-relaxed text-pretty">
        I see this all the time. Business owners spend money on a website, but it doesn&apos;t bring customers. So they think websites don&apos;t work.
      </p>
      <p className="text-lg leading-relaxed text-pretty">
        They do. But only if you avoid these 5 mistakes.
      </p>

      {/* Mistake 1 */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">Mistake 1: Using Free Website Builders</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          You use Wix. Or Squarespace. Or WordPress.com.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          &quot;It&apos;s free. Why pay for something I can build myself?&quot;
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Because free website builders don&apos;t rank on Google.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Here&apos;s why:
        </p>
        <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
          <li className="flex gap-3"><span className="text-accent">·</span><span>Free builders use shared servers. Google sees thousands of websites on the same server. It&apos;s harder to trust any single one.</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Free builders also have clunky code. Google&apos;s crawlers have trouble reading them. So your site gets buried in search results.</span></li>
        </ul>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          You get 0 organic traffic.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Result: You spend 20 hours building a website that brings 0 customers.
        </p>
        <div className="border border-border p-6 rounded-sm bg-secondary/30">
          <h3 className="font-display text-xl">The fix</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">
            Use a real website builder (like DetailWeb builds) that&apos;s optimized for Google from day one. It costs 800-1,500 euros. One new customer pays for it.
          </p>
        </div>
      </div>

      {/* Mistake 2 */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">Mistake 2: Not Optimizing for Mobile</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          70% of people search on their phones.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          70%.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          If your website looks bad on mobile, you lose 70% of potential customers.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Here&apos;s what usually happens:
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Someone searches &quot;barber shop near me&quot; on their phone. Your website appears. They click it.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          The page takes 5 seconds to load. Text is huge. They can&apos;t find your phone number. They go back and click your competitor&apos;s site instead.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          You lost a customer because of mobile optimization.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Most cheap websites aren&apos;t mobile-optimized. They look good on desktop, terrible on phone.
        </p>
        <div className="border border-border p-6 rounded-sm bg-secondary/30">
          <h3 className="font-display text-xl">The fix</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">
            Every website should load fast on mobile and be easy to navigate on a small screen. Test yours on your phone right now. If it looks bad, fix it.
          </p>
        </div>
      </div>

      {/* Mistake 3 */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">Mistake 3: No Clear Way to Book or Contact You</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Your website exists to do one thing: get customers.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          But a lot of websites make it hard to actually become a customer.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          The phone number is buried at the bottom. There&apos;s no booking system. Contact form is on page 4 somewhere.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Customers get frustrated. They leave. They book with someone else.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Example: Maria runs a nail salon. She built a website on Wix. It looks nice. But there&apos;s no online booking.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Customer visits at 8 PM. Wants to book an appointment. Can&apos;t find a way. Calls competitor instead (who has online booking).
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Maria lost a customer because her website doesn&apos;t make it easy to buy.
        </p>
        <div className="border border-border p-6 rounded-sm bg-secondary/30">
          <h3 className="font-display text-xl">The fix</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">
            Put your phone number and booking button on every page. Make it obvious. One click should get them to book or call.
          </p>
        </div>
      </div>

      {/* Mistake 4 */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">Mistake 4: Outdated Design and Photos</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Your website is 3 years old.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          The photos look cheap. The design looks dated. The testimonials are from 2021.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Customers think your business is old or dead.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Professional-looking websites build trust. Dated websites kill trust.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          You could have the best barber shop in Paphos. But if your website looks like it was built in 2015, people assume you&apos;re not serious.
        </p>
        <div className="border border-border p-6 rounded-sm bg-secondary/30">
          <h3 className="font-display text-xl">The fix</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">
            Update photos every 6 months. Use current testimonials. Keep design modern. This costs 100-200 euros per month. It&apos;s worth it.
          </p>
        </div>
      </div>

      {/* Mistake 5 */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">Mistake 5: Never Updating Content (No Blog, No New Info)</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          You built a website. You posted it. Then you did nothing.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          No new content. No blog. No updates. Same photos from 2020.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Google sees this as: &quot;This business is dead. Stop ranking it.&quot;
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Your rankings drop. Your organic traffic drops. Fewer customers find you.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Plus, customers want to see fresh content. They want to know you&apos;re still open, still working, still taking customers.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          A website that hasn&apos;t been updated in 2 years looks abandoned.
        </p>
        <div className="border border-border p-6 rounded-sm bg-secondary/30">
          <h3 className="font-display text-xl">The fix</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed text-pretty">
            Update your website at least once a month. Add new photos. Write a blog post about your service. Post customer testimonials. Show Google and customers you&apos;re active.
          </p>
        </div>
      </div>

      {/* What a Good Website Actually Looks Like */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">What a Good Website Actually Looks Like</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          A website that brings customers has:
        </p>
        <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
          <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Mobile-optimized design</strong> — looks great on phone</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Fast loading speed</strong> — pages load in under 3 seconds</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Obvious booking or contact button</strong> — phone number visible on every page</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Professional photos and testimonials</strong> — current, not old</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Regular updates</strong> — new content, fresh photos, active presence</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span><strong className="text-foreground">Optimized for Google</strong> — so people can find you in search results</span></li>
        </ul>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Most cheap websites have 0-2 of these.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          That&apos;s why they don&apos;t work.
        </p>
      </div>

      {/* The Cost of These Mistakes */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">The Cost of These Mistakes</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          You built a website that brings 0 customers.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Meanwhile, your competitor has a website that brings 5+ customers per month.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          That&apos;s 400-500 euros in lost revenue every month.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Over a year: 5,000-6,000 euros.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          How much did you spend on your free website? 20 hours of your time.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          If you made 50 euros per hour, that&apos;s 1,000 euros wasted on a website that doesn&apos;t work.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          A proper website costs just €500. Then €200/month gets it ranking on Google and brings customers for years.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Bad math on the free website, right?
        </p>
      </div>

      {/* The Good News */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">The Good News</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Most of these mistakes are fixable.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          If you have a website right now that&apos;s broken, outdated, or not bringing customers, you can fix it.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          It&apos;s not too late.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          The question is: Do you fix it yourself? Or do you get help?
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Most business owners don&apos;t have time to rebuild their website. They have a business to run.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          That&apos;s where DetailWeb comes in.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          We fix broken websites. We rebuild outdated ones. We build new ones from scratch that actually rank on Google and bring customers.
        </p>
        <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
          <li className="flex gap-3"><span className="text-accent">·</span><span>Professional design (looks good, builds trust)</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Google optimization (so people can find you)</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Mobile-optimized (works great on phones)</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Easy to update (you can add new content yourself, or we do it)</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Ongoing maintenance (we keep it working, fresh, and ranking)</span></li>
        </ul>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl">Next Steps</h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          If your website isn&apos;t bringing customers, there&apos;s a reason.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          It&apos;s usually one of these 5 mistakes.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          The good news? All 5 are fixable.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Want to know which mistakes your website is making?
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          We offer a free website audit. We look at your site and tell you exactly what&apos;s broken, why it&apos;s not ranking, and how much revenue you&apos;re losing.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          No obligation. Just honest feedback.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Then you can decide: Fix it yourself, or let us handle it.
        </p>
      </div>

      {/* CTA Box */}
      <div className="border border-border p-8 md:p-10 rounded-sm bg-secondary/30">
        <h3 className="font-display text-2xl md:text-3xl">Is Your Website Bringing Customers?</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Get a free website audit. We&apos;ll show you:
        </p>
        <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
          <li className="flex gap-3"><span className="text-accent">·</span><span>Why your website isn&apos;t ranking on Google</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>How many customers you&apos;re losing every month</span></li>
          <li className="flex gap-3"><span className="text-accent">·</span><span>Exactly what to fix (and how much it costs)</span></li>
        </ul>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          No sales pitch. Just facts.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <p className="label">FAQ</p>
        <h2 className="mt-6 font-display text-3xl md:text-4xl">Common questions.</h2>
        <div className="mt-12 border-t border-border">
          {[
            {
              q: "What if my website is hosted elsewhere (not DetailWeb)?",
              a: "No problem. We can help fix any website, no matter who built it.",
            },
            {
              q: "How long does it take to fix a website?",
              a: "Depends on what's broken. Usually 2-4 weeks.",
            },
            {
              q: "Can I still use my current domain name?",
              a: "Yes. We move everything over. Same domain, new website.",
            },
            {
              q: "What if I want to update it myself after?",
              a: "We can set it up so you control it. Or we handle updates monthly.",
            },
            {
              q: "How much does a website audit cost?",
              a: "Free. We want to show you what's possible.",
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
  );
}
