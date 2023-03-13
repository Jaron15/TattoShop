import { useState } from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    artist: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };
  const formVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2, duration: 1, 
      }
    }
  };

  const inputVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  };
  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .7,
      }
    }
  };

  return (
    <Layout>
    <div className="container w-full px-4 bg-zinc-900 h-full pb-12">
      <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto flex flex-col justify-center"
      variants={formVariants}
      initial="hidden"
      animate="visible"
>
        <motion.div variants={inputVariants} className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div variants={inputVariants} className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div variants={inputVariants} className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div variants={inputVariants} className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="artist">
            Artist
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          >
            <option value="">Select an artist</option>
            <option value="artist1">Artist 1</option>
            <option value="artist2">Artist 2</option>
            <option value="artist3">Artist 3</option>
          </select>
        </motion.div>
        <motion.div variants={inputVariants} className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="details">
            Details
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="details"
            name="details"
            rows="5"
            placeholder="Please provide a detailed description of your request. (Design, Theme, Location)"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.button variants={buttonVariants} type="submit" className="bg-slate-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded border-2 border-black focus:outline-none focus:shadow-outline">
Submit
</motion.button>
</motion.form>
</div>
</Layout>
);
}
