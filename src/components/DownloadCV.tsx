import react from 'react';
import { motion } from 'framer-motion';

const DownloadCV = () => {
    const handleDownload = async () => {
        try {
            const response = await fetch('/images/Nhek_Chanpanha_CV.pdf')
            if (!response.ok) {
                throw new Error('Failed to download CV')
            }
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'Nhek_Chanpanha_CV.pdf'
            document.body.appendChild(a)
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url) // Clean up
        } catch (error) {
            console.error('Error downloading CV:', error)
            alert('Failed to download CV. Please try again.')
        }
    }

    return (
        <motion.button 
            onClick={handleDownload} 
            className="flex items-center px-6 py-3 background-gradient text-white rounded-md shadow-md"
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(14, 165, 164, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            Download CV
        </motion.button>
    );
};

export default DownloadCV;
