import { projectGroups } from "./projects";
import {
  projectBodyStyle,
  projectCardStyle,
  projectDescriptionStyle,
  projectGridStyle,
  projectThumbStyle,
  projectTitleStyle,
  projectToolStyle,
  projectToolsStyle,
  projectsGroupStyle,
} from "../utils/styles/styles";

export const Projects = ({ titles, language }) =>
  projectGroups.map((group) => (
    <section key={group.id} style={projectsGroupStyle}>
      <h2>{titles[group.id]}</h2>

      <div style={projectGridStyle}>
        {group.items.map((item) => (
          <a
            key={item.link}
            className="link"
            style={projectCardStyle}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.image && (
              <img src={item.image} alt="" style={projectThumbStyle} />
            )}

            <span style={projectBodyStyle}>
              <span style={projectTitleStyle}>{item.title}</span>
              <span style={projectDescriptionStyle}>
                {item.description[language]}
              </span>
              <span style={projectToolsStyle}>
                {item.tools.map((tool) => (
                  <span key={tool} style={projectToolStyle}>
                    {tool}
                  </span>
                ))}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  ));
