// // src/components/PageWrapper.jsx
// import { motion } from "framer-motion";

// export default function PageWrapper({ children, className = "" }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 40 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -40 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }
