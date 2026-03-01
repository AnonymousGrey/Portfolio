import { motion } from 'motion/react';
import { Award, Shield, Network, Laptop, Lock, Github } from 'lucide-react';
import { TerminalHeader } from './glitch-text';

const certifications = [
  {
    icon: Shield,
    title: 'ISC² Cybersecurity Certification',
    issuer: 'ISC²',
    file: 'isc2_cert.pem',
    imageUrl: null,
  },
  {
    icon: Lock,
    title: 'CAPT – Certified Associate Penetration Tester',
    issuer: 'The SecOps Group',
    file: 'capt_cert.pem',
    imageUrl: '/CAPT HackViser Certification.jpg',
  },
  {
    icon: Network,
    title: 'Cisco Cyber Security Essentials',
    issuer: 'Cisco Networking Academy',
    file: 'cisco_cert.pem',
    imageUrl: null,
  },
  {
    icon: Laptop,
    title: 'Google IT Support Specialization',
    issuer: 'Google',
    file: 'google_it.pem',
    imageUrl: '/GoogleITSupportCertificate_Badge20260208-31-1rvqxa.jpg',
  },
  {
    icon: Award,
    title: 'Tata Group Cybersecurity Analyst',
    issuer: 'Tata Group',
    file: 'tata_cyber.pem',
    imageUrl: '/TATA GROUP ANALYST JOB.pdf',
  }
];

export function CertificationsSection() {
  const goToAllCerts = () => {
    window.location.hash = '#all-certs';
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="absolute top-0 left-0 right-0 neon-separator" />

      <div className="max-w-6xl mx-auto">
        <TerminalHeader command="ls ~/certs/*.pem" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-black/80 border border-green-400/20 rounded-lg p-5 hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                {/* Certificate file header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded bg-green-400/10 border border-green-400/30 p-2 group-hover:bg-green-400/20 transition-all duration-300">
                    <cert.icon className="w-full h-full text-green-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-gray-600 font-mono truncate">{cert.file}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-gray-200 mb-1.5 group-hover:text-green-400 transition-colors duration-300 font-mono leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs text-gray-500 font-mono">
                  <span className="text-green-400/60">issued_by:</span> {cert.issuer}
                </p>

                {/* Verification line */}
                <div className="mt-3 pt-2 border-t border-green-400/10">
                  <p className="text-[10px] text-green-400/40 font-mono">
                    ✓ SHA256 verified · cert valid
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={goToAllCerts}
            className="group px-8 py-4 bg-cyan-400/10 border-2 border-cyan-400 text-cyan-400 font-bold font-mono rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            [VIEW] all certs --details
          </button>
        </motion.div>
      </div>
    </section>
  );
}
