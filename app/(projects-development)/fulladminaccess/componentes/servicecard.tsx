import React from 'react'

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({title, description}: ServiceCardProps) {
  return (
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className=" text-sm">{description}</p>
    </div>
  )
}
