export const About = () => {
  return (
    <div className="min-h-screen p-8 md:p-12 bg-pebble/20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="font-title text-h1 md:text-title text-wetsoil mb-8">
          Hey, I'm Jordyn!
        </h1>

        {/* Main narrative */}
        <div className="space-y-6 font-body text-body text-wetsoil">
          <p>
            I'm a self-proclaimed jack of all trades, perpetually curious and always chasing the next thing to learn or experience. 
            Whether it's exploring a new city, savoring an unfamiliar dish, or picking up a completely random skill just because it 
            sounds interesting—I'm all in.
          </p>

          <p>
            As a software engineer who's always asked "who is this for?" and "how will they use this?", I discovered my true calling 
            lies in <span className="font-header text-strawberry">UX Engineering</span>—the sweet spot where code meets human-centered 
            design. I believe context matters: it's not enough to build something that works; we must understand who's using it, how, 
            where, and the impact it creates. That philosophy drives everything I do, both professionally and personally.
          </p>

          <p>
            When I'm not designing or coding, you'll find me staying active—throwing punches in a boxing ring, practicing Muay Thai kicks, 
            gliding through the park on roller skates, or hiking trails with my husband and our very playful (and very energetic) dog who 
            keeps us both on our toes.
          </p>

          <p>
            Lately, I've been diving into <span className="font-header text-sky">animation</span> and experimenting with more visual forms 
            of creative expression. There's something magical about bringing static designs to life with movement, and I'm having a blast 
            learning the ropes (even when my keyframes don't quite cooperate).
          </p>

          <p>
            At the end of the day, I'm someone who loves making things—whether that's a delightful user interface, a perfectly timed 
            animation, or just a really good meal. If it involves learning something new, solving a puzzle, or creating an experience 
            that makes someone's day a little better, count me in.
          </p>
        </div>

        {/* Fun facts section */}
        <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
          <h2 className="font-header text-h2 text-wetsoil mb-6">
            Quick Facts About Me
          </h2>
          <ul className="space-y-3 font-body text-body text-wetsoil">
            <li className="flex items-start gap-3">
              <span className="text-strawberry text-xl">🥊</span>
              <span><strong>Fighting fit:</strong> Boxing and Muay Thai keep me sharp—both mentally and physically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky text-xl">🛼</span>
              <span><strong>On a roll:</strong> Roller skating is my favorite way to explore the city</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-inchworm text-xl">🥾</span>
              <span><strong>Trail blazer:</strong> Hiking adventures with my husband and our pup are weekend essentials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-strawberry text-xl">🎨</span>
              <span><strong>Creative explorer:</strong> Currently learning animation and visual storytelling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky text-xl">🌍</span>
              <span><strong>Wanderlust:</strong> Always planning the next trip and making a list of foods to try</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-inchworm text-xl">🐕</span>
              <span><strong>Dog mom:</strong> My playful pup is both my workout buddy and nap supervisor</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};