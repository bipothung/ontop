import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/Project";
import ProjectCarousel from "../components/ProjectCarousel";
import MasonryGallery from "../components/Gallery";

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return notFound();

  return (
    <section className="w-full bg-[#f7f3f1] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
        {/* Back to Projects */}
        <Link
          href="/projects"
          className="text-sm text-gray-600 hover:underline mb-6 inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Title + Description */}
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-6">
          {project.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-gray-600 mb-10">
          <p>
            <span className="font-semibold">Location:</span> {project.location}
          </p>
          <p>
            <span className="font-semibold">Year:</span> {project.year}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {project.category}
          </p>
        </div>

        {/* Carousel Component */}
        <ProjectCarousel
          mainImage={project.image}
          gallery={project.gallery}
          title={project.title}
        />

        {/* About + Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* About */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">About the Project</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Client:</span>{" "}
                {project.details.client}
              </li>
              <li>
                <span className="font-semibold">Lead Architect:</span>{" "}
                {project.details.leadArchitect}
              </li>
              <li>
                <span className="font-semibold">Size:</span>{" "}
                {project.details.size}
              </li>
              <li>
                <span className="font-semibold">Completion:</span>{" "}
                {project.details.completion}
              </li>
              <li>
                <span className="font-semibold">Services:</span>
                <ul className="list-disc list-inside ml-2">
                  {project.details.services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Gallery Section */}
        <h2 className="text-center text-xl md:text-2xl font-normal mb-8 mt-20">GALLERY</h2>
     <MasonryGallery images={project.gallery} />

      </div>
    </section>
  );
}
