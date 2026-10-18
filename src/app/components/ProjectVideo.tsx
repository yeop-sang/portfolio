import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectVideo({ project, language }: { project: Project; language: "ko" | "en" }) {
  const [opened, setOpened] = useState(false);
  const video = project.video;
  if (!video) return null;
  const ko = language === "ko";
  return (
    <figure className="studio-case-cover studio-case-video">
      {opened ? <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?start=${video.start}&rel=0&autoplay=1`}
        title={`${project.title} — ${ko ? "발표 영상" : "Presentation"}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      /> : <button type="button" className="studio-video-poster" onClick={() => setOpened(true)} aria-label={ko ? `${project.title} 발표 영상 열기` : `Open ${project.title} presentation`}>
        {project.heroImage && <img src={project.heroImage.src} alt="" width="1280" height="720" />}
        <span><Play size={24} aria-hidden="true" />{ko ? "발표 영상 보기" : "Watch presentation"}</span>
      </button>}
      <figcaption><span>{ko ? "발표 영상 · BINARI 발표 구간부터 재생" : "Presentation · Starts at the BINARI segment"}</span><a href={`https://www.youtube.com/watch?v=${video.youtubeId}&t=${video.start}s`} target="_blank" rel="noopener noreferrer">{ko ? "YouTube에서 보기" : "Watch on YouTube"}<ArrowUpRight size={16} aria-hidden="true" /></a></figcaption>
    </figure>
  );
}
