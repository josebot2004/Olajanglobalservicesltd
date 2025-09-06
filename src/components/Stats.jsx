import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Custom counter hook
function useCounter(target, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);

  return count;
}

export default function Stats() {
  const projects = useCounter(240);
  const clients = useCounter(180);
  const years = useCounter(10);

  const item =
    "rounded-2xl bg-white p-8 border border-gray-200 text-center shadow-md transition-transform hover:scale-105 hover:shadow-xl";
  const number =
    "text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent";
  const label = "mt-2 text-sm md:text-base text-neutral.DEFAULT font-medium";

  const stats = [
    { value: projects + "+", label: "Projects Completed" },
    { value: clients + "+", label: "Happy Clients" },
    { value: years, label: "Years of Experience" },
  ];

  return (
    <section className="container-max py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={item}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={number}>{stat.value}</div>
            <div className={label}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
