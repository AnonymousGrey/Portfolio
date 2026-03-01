import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { TerminalHeader } from './glitch-text';
import { TerminalCard } from './terminal-card';

interface GithubRepo {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
}

export function AllProjectsSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/AnonymousGrey/repos?sort=updated&per_page=100');
        const data = await response.json();
        
        const formattedRepos: GithubRepo[] = data
          .filter((repo: any) => !repo.fork)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description',
            url: repo.html_url,
            language: repo.language || 'Unknown',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }));
        
        setRepos(formattedRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="all-projects" className="min-h-screen py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <TerminalHeader text="~/projects --all" />

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-green-400 font-mono"
          >
            <div className="inline-block">
              <div className="text-lg mb-4">$ fetching repositories...</div>
              <div className="flex gap-1 justify-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of Projects */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="block group"
              >
                <TerminalCard
                  title={`[repo] ${repo.name}`}
                  className="h-full hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300"
                >
                  <div className="space-y-3">
                    <p className="text-green-400/80 text-sm line-clamp-2">
                      $ {repo.description}
                    </p>

                    <div className="space-y-2 text-xs text-green-400/60 font-mono">
                      <div>
                        <span className="text-cyan-400">lang:</span> {repo.language}
                      </div>
                      <div className="flex gap-4">
                        <span>
                          <span className="text-cyan-400">⭐</span> {repo.stars}
                        </span>
                        <span>
                          <span className="text-cyan-400">🍴</span> {repo.forks}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-green-400 group-hover:text-cyan-400 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">open repo</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </TerminalCard>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* No Repos Found */}
        {!loading && repos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-red-400 font-mono"
          >
            <div className="text-lg">$ error: unable to fetch repositories</div>
          </motion.div>
        )}

        {/* Stats Footer */}
        {!loading && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center text-green-400/60 font-mono text-sm"
          >
            <div className="border-t border-green-400/30 pt-8">
              <span>root@portfolio:~$</span> {repos.length}{' '}
              <span className="text-cyan-400">repositories found</span>
              <div className="mt-2 text-xs text-green-400/40">
                visit github.com/AnonymousGrey for more
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
