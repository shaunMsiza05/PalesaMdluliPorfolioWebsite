const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card-elegant p-8 hover-lift">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a <span className="text-primary font-semibold">highly motivated and competitive individual</span> with proven excellence in my work and personal life. I continue to exceed all personal goals I set for myself.
              </p>
            </div>
            
            <div className="card-elegant p-8 hover-lift">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in <span className="text-primary font-semibold">measuring performance by results</span> and I am positive that I have the personality that makes for both a successful employee and team player.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Strengths */}
            <div className="card-elegant p-8 hover-lift">
              <h3 className="text-2xl font-semibold text-primary mb-4">Key Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Exceptional communication and presentation skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Proven track record in radio broadcasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Strong customer service orientation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Leadership and team collaboration</span>
                </li>
              </ul>
            </div>

            {/* Personal Philosophy */}
            <div className="card-elegant p-8 hover-lift bg-gradient-accent text-accent-foreground">
              <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
              <p className="text-lg italic">
                "Excellence is not a destination, but a journey of continuous improvement and dedication to delivering exceptional results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;