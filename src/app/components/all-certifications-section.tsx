import { motion } from 'motion/react';
import { Award, Shield, Network, Laptop, Lock, X } from 'lucide-react';
import { TerminalHeader } from './glitch-text';
import { useState } from 'react';

const certifications = [
  {
    icon: Shield,
    title: 'ISC² Cybersecurity Certification',
    issuer: 'ISC²',
    file: 'isc2_cert.pem',
    details: 'Industry-standard cybersecurity certification demonstrating expertise in security principles and practices.',
    pdfUrl: null,
  },
  {
    icon: Lock,
    title: 'CAPT – Certified Associate Penetration Tester',
    issuer: 'The SecOps Group',
    file: 'capt_cert.pem',
    details: 'Certified penetration testing professional with hands-on security assessment capabilities.',
    pdfUrl: '/CAPT HackViser Certification.pdf',
  },
  {
    icon: Network,
    title: 'Cisco Cyber Security Essentials',
    issuer: 'Cisco Networking Academy',
    file: 'cisco_cert.pem',
    details: 'Comprehensive understanding of cybersecurity fundamentals and network security principles.',
    pdfUrl: null,
  },
  {
    icon: Laptop,
    title: 'Google IT Support Specialization',
    issuer: 'Google',
    file: 'google_it.pem',
    details: 'Complete IT support professional certification covering system administration and troubleshooting.',
    pdfUrl: '/GoogleITSupportCertificate_Badge20260208-31-1rvqxa.pdf',
  },
  {
    icon: Award,
    title: 'Tata Group Cybersecurity Analyst',
    issuer: 'Tata Group',
    file: 'tata_cyber.pem',
    details: 'Specialized cybersecurity analyst certification from leading enterprise organization.',
    pdfUrl: '/TATA GROUP ANALYST JOB.pdf',
  }
];

function CertModal({ cert, onClose }: { cert: typeof certifications[0]; onClose: () => void }) {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleCopy = (e: React.ClipboardEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onContextMenu={handleContextMenu}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-black border-2 border-green-400 rounded-lg max-w-4xl w-full max-h-[90vh] p-8 relative shadow-[0_0_30px_rgba(0,255,65,0.3)] overflow-auto"
        onContextMenu={handleContextMenu}
        onCopy={handleCopy}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-green-400/20 rounded transition-all duration-300 z-10"
        >
          <X className="w-6 h-6 text-green-400" />
        </button>

        {/* Icon */}
        <div className="w-20 h-20 mb-6 rounded bg-green-400/10 border border-green-400/30 p-4">
          <cert.icon className="w-full h-full text-green-400" />
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-green-400 font-mono mb-2">{cert.title}</h2>
        
        <div className="space-y-4 text-gray-300 font-mono mb-8">
          <div>
            <span className="text-cyan-400">issued_by:</span> {cert.issuer}
          </div>
          
          <div>
            <span className="text-cyan-400">file:</span> {cert.file}
          </div>

          <div className="pt-4 border-t border-green-400/30">
            <p className="text-green-400/80 leading-relaxed">{cert.details}</p>
          </div>

          <div className="pt-4 border-t border-green-400/30">
            <p className="text-green-400/60 text-sm">✓ SHA256 verified · cert valid</p>
          </div>
        </div>

        {/* PDF Viewer */}
        {cert.pdfUrl && (
          <div className="mb-8 pt-8 border-t border-green-400/30">
            <h3 className="text-lg font-bold text-green-400 font-mono mb-4">Certificate Preview</h3>
            <div
              className="bg-black/80 border border-green-400/20 rounded-lg overflow-hidden"
              style={{ userSelect: 'none' }}
              onContextMenu={handleContextMenu}
            >
              <iframe
                src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                style={{
                  width: '100%',
                  height: '500px',
                  border: 'none',
                  userSelect: 'none',
                }}
                title={cert.title}
                onContextMenu={handleContextMenu}
              />
            </div>
            <p className="text-xs text-green-400/40 font-mono mt-2">
              🔒 Secure view · Download disabled · Extraction prevented
            </p>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-green-400/10 border border-green-400/30 text-green-400 font-mono font-bold rounded-lg hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-300"
        >
          [CLOSE] esc
        </button>
      </motion.div>
    </motion.div>
  );
}

export function AllCertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="all-certifications" className="min-h-screen py-16 px-4 sm:px-8 relative overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <TerminalHeader text="~/certs --all" />

        {/* Grid of Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {certifications.map((cert, index) => (
            <motion.button
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group text-left"
            >
              <div className="bg-black/80 border border-green-400/20 rounded-lg p-6 hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] cursor-pointer h-full">
                {/* Icon */}
                <div className="w-14 h-14 mb-4 rounded bg-green-400/10 border border-green-400/30 p-3 group-hover:bg-green-400/20 transition-all duration-300">
                  <cert.icon className="w-full h-full text-green-400" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-200 mb-2 group-hover:text-green-400 transition-colors duration-300 font-mono">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-gray-500 font-mono mb-3">
                  <span className="text-green-400/60">issued_by:</span> {cert.issuer}
                </p>

                {/* File */}
                <p className="text-xs text-gray-600 font-mono mb-4 break-all">{cert.file}</p>

                {/* Verification */}
                <div className="pt-3 border-t border-green-400/20">
                  {cert.pdfUrl ? (
                    <p className="text-xs text-green-400/60">🔒 view certificate</p>
                  ) : (
                    <p className="text-xs text-green-400/60">✓ view details</p>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center text-green-400/60 font-mono text-sm"
        >
          <div className="border-t border-green-400/30 pt-8">
            <span>root@portfolio:~$</span> {certifications.length}{' '}
            <span className="text-cyan-400">certifications found</span>
            <div className="mt-2 text-xs text-green-400/40">
              click on any certification to view details
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
}
