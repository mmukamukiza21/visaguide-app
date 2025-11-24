cat << 'EOF' > README.md
# 🌍 Global Visa Guide Application

## Overview
The Global Visa Guide Application is a web-based tool designed to provide users with visa requirements for different countries. It is intended as a practical tool for travelers, students, or business professionals who want to quickly check visa requirements before planning a trip.

The application fetches real-time visa information via an external API and includes **demo data for 30 countries** to ensure functionality even when API data is unavailable. This project is part of a web development assignment demonstrating local implementation, deployment on multiple servers, and load balancing.

---

## Purpose
- Simplifies the process of checking visa requirements.
- Demonstrates practical use of APIs in web applications.
- Enhances understanding of server deployment and load balancing.
- Serves as an educational tool for web development and Node.js practices.

---

## Key Features
- **Country Search:** Users can enter a country name to see visa requirements.
- **Demo Data:** Shows fabricated visa requirements for 30 countries for demonstration purposes.
- **Error Handling:** Displays a friendly message if a country is not in the database:  
- **Responsive Design:** Works on desktops, tablets, and mobile devices.
- **Interactive UI:** Clean interface with easy-to-read results.
- **Scalable:** Can handle multiple requests through load balancing across web servers.

---

## Demo Countries & Visa Requirements

| Country       | Visa Requirement                                                                 |
|---------------|---------------------------------------------------------------------------------|
| USA           | Tourist visa required. Apply online.                                           |
| Canada        | eTA required for air travel.                                                   |
| UK            | Visa on arrival for some nationalities; otherwise apply online.                |
| Australia     | eVisitor or ETA visa required.                                                 |
| Germany       | Schengen visa required.                                                        |
| France        | Schengen visa required.                                                        |
| Japan         | Visa exempt for 90 days for some countries.                                    |
| China         | Tourist visa required.                                                         |
| India         | eVisa available for 60-day tourist visits.                                     |
| Brazil        | Tourist visa not required for some countries; check online.                    |
| Russia        | Visa required; must apply at embassy.                                          |
| South Africa  | Visa required for stays over 90 days.                                          |
| Egypt         | Tourist visa available on arrival or online.                                   |
| UAE           | Visa on arrival for many countries; check eligibility.                         |
| Turkey        | eVisa required for most travelers.                                             |
| Mexico        | Tourist card (FMM) required on arrival.                                        |
| Argentina     | Visa not required for 90-day visits for some countries.                        |
| Thailand      | Visa exemption for some countries; otherwise eVisa required.                   |
| Vietnam       | eVisa available for 30-day visits.                                             |
| Singapore     | Visa not required for most nationalities.                                      |
| Malaysia      | Visa not required for most nationalities.                                      |
| Indonesia     | Visa not required for up to 30 days for many travelers.                        |
| South Korea   | Visa exemption for 90 days for some countries.                                 |
| New Zealand   | NZeTA required for most travelers.                                             |
| Italy         | Schengen visa required.                                                        |
| Spain         | Schengen visa required.                                                        |
| Greece        | Schengen visa required.                                                        |
| Portugal      | Schengen visa required.                                                        |
| Netherlands   | Schengen visa required.                                                        |
| Switzerland   | Schengen visa required.                                                        |

> This is **fabricated demo data** and is used to demonstrate the application functionality.

---

## Installation & Setup

1. **Clone the repository**
```bash
git clone <YOUR_GITHUB_REPO_URL>
cd visaguide-app
