---
subtitle: 'A personal experiment with Azure, Azure Foundry, and Databricks for AI-assisted oil-well investigations.'
accentColor: 'blue'
techStack:
  - 'Azure'
  - 'Azure Foundry'
  - 'Databricks'
  - 'Next.js'
  - 'TypeScript'
  - 'C# / .NET'
  - 'Azure SQL'
---

# FieldBrief

## Why I built it

I built FieldBrief as a personal experiment with Azure, Azure Foundry, and Databricks. I wanted to connect cloud hosting, data preparation, and an AI assistant in one working application.

Oil-well investigations gave the experiment a concrete workflow: find a change in production, review the records, ask questions, and save a brief describing what to check next.

## What the demo does

FieldBrief brings well records, maps, production history, and an AI assistant into one workspace. A user can explore wells, compare readings, follow the sources behind an answer, and save an investigation brief.

The demo uses **public Texas well records and synthetic production data**. The names and locations come from public records; the daily production readings are generated for the experiment.

## What I built with

- **Next.js, React, and TypeScript** for the interface, maps, charts, and chat.
- **C# / ASP.NET Core** for the API, access checks, production calculations, and investigation workflows.
- **Azure SQL** for well records, conversations, and saved briefs.
- **Databricks** for preparing and validating data before importing it into the application.
- **Azure Foundry** for an AI assistant with bounded lookup tools and checked source references.
- **Azure hosting and Microsoft Entra** for deployment and sign-in.

## Practical AI experience

The application calculates production changes in code. The assistant helps explain the records and suggest what to investigate. Each conversation stays attached to its starting dataset, and the server checks the source references returned with an answer.

This gave me hands-on experience connecting an AI service to application data, building the surrounding interface and API, and handling the boundaries between model output and application logic.

## Explore FieldBrief

[Read the illustrated case study](https://fieldbrief-web-by3rahuzbivnu.azurewebsites.net/case-study) for the data flow, implementation decisions, and testing approach.

[Open the demo site](https://fieldbrief-web-by3rahuzbivnu.azurewebsites.net/). The case study is public; the investigation workspace uses Microsoft sign-in.
