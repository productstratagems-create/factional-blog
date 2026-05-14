---
title: "Soft Kill: Non-Kinetic Counter-Drone Systems&nbsp;"
date: 2026-03-23
excerpt: "Electronic Warfare, Interceptor Drones, High-Power Microwaves, and the Invisible Layer of Counter-UAS Guns shoot drones down. Missiles blow them up. Lasers burn through them. These are the counter-drone effectors that…"
category: anskaffelse
author: "Redaksjonen"
lang: no
draft: false
heroImage: "/images/img_5453-1.jpg"
heroImageAlt: "Stor oppblåsbar aerostatovervåkningsballong"
---

*Electronic Warfare, Interceptor Drones, High-Power Microwaves, and the Invisible Layer of Counter-UAS*

Guns shoot drones down. Missiles blow them up. Lasers burn through them. These are the counter-drone effectors that dominate procurement budgets and defense ministry briefing slides, and for good reason—they produce wreckage, which is the only definitive proof that a threat has been eliminated. This site’s companion analysis on kinetic and directed-energy C-UAS systems covers that territory in detail.

But the most widely deployed counter-drone systems in operational use today do none of these things. They jam control links. They spoof GPS signals. They launch interceptor drones that capture targets in nets. They emit pulses of high-power microwave energy that fry electronics in mid-flight. They fuse data from dozens of sensors to produce a coherent picture of low-altitude airspace that, until recently, no military possessed. They are, in the taxonomy of defense planners, “non-kinetic” and “soft-kill” systems—a terminology that belies both their operational importance and the scale of investment now flowing into them.

This analysis examines the non-kinetic counter-drone systems that American and European industries are fielding in 2026. It covers electronic warfare and jamming, high-power electromagnetic effectors, drone-on-drone interceptors, and the C2/sensor fusion architectures that tie everything together. The comparison reveals an increasingly familiar transatlantic pattern: American technological ambition funded at scale, European modular pragmatism adopted at breadth, and a gap—in Norway’s case, a total absence—of coherent national capability at the lower end of the air defense spectrum.

Why Non-Kinetic Matters

The case for non-kinetic C-UAS is built on three pillars that kinetic solutions struggle to provide simultaneously: cost sustainability, collateral management, and effectiveness against autonomous threats.

Cost sustainability. A 30mm AHEAD round costs approximately €200–400 and produces a favorable exchange ratio against most drones. But cannon range is limited to roughly 3 kilometers, and even AHEAD ammunition is consumed—a Skyranger 30 can engage perhaps 30 targets before requiring resupply. Against a swarm of 100 or more drones, physical ammunition limits become binding. An RF jammer, by contrast, uses electricity. A high-power microwave emitter uses electricity. Their magazines are limited only by fuel for the generator. The marginal cost per engagement is measured in kilowatt-hours, not kilograms of tungsten.

Collateral management. Shooting a drone over a populated area, a military airfield, or a nuclear power plant creates falling debris—potentially including the drone’s payload. This is acceptable in a combat zone. It is legally and politically problematic in peacetime homeland security, which is where the vast majority of European C-UAS incidents have occurred to date. The drone overflights that shut down Brussels Airport in November 2025, the repeated incursions over German military installations throughout 2024–2025, and the more than 500 suspicious drone sightings registered in Germany in the first quarter of 2025 alone all demanded non-kinetic responses. Jamming a drone or capturing it in a net produces no debris field, no unexploded ordnance, and—critically—a recoverable asset available for forensic analysis.

Effectiveness against autonomous drones. This is the pillar where the categories blur. Traditional RF jamming works by disrupting the communication link between a drone and its operator, or by spoofing the GPS signal that the drone uses for navigation. Against a radio-controlled or GPS-guided drone, this is effective. Against a fiber-optic-guided drone—which has become the dominant FPV variant on the Ukrainian front—jamming is useless, because there is no radio frequency link to jam. Against a fully autonomous drone navigating by inertial measurement, visual odometry, or pre-programmed waypoints, jamming is equally irrelevant. This limitation has driven investment toward high-power electromagnetic effectors that attack the drone’s electronics directly, rather than its communications, and toward kinetic interceptor drones that physically capture or destroy the target regardless of its guidance mode.

The fiber-optic-guided drone has rendered a generation of RF jammers operationally irrelevant. The defense industry is only beginning to reckon with what that means.

The American Non-Kinetic Ecosystem

The United States has built the largest and most diverse portfolio of non-kinetic counter-drone systems in the world, driven by substantial Pentagon funding, combat deployments in the Middle East, and—increasingly—domestic security requirements that have moved C-UAS from a purely military problem to a homeland defense priority.

Epirus Leonidas: High-Power Microwave

The Leonidas system, built by Los Angeles-based Epirus, is the most consequential non-kinetic C-UAS development of the past five years. It uses solid-state gallium nitride (GaN) semiconductor arrays—the same technology powering the latest generation of AESA radars—to emit concentrated pulses of high-power microwave (HPM) energy. Unlike traditional HPM systems that relied on bulky magnetron vacuum tubes, Leonidas is software-defined, modular, and compact enough to mount on a vehicle or trailer.

The system’s defining capability is what Epirus calls “one-to-many”: a single pulse can disable multiple drones simultaneously by overloading their electronic systems, causing them to crash. This is fundamentally different from any kinetic effector, which engages one target at a time, and from RF jamming, which only works against drones with exploitable radio links. Leonidas attacks the drone’s electronics directly. Fiber-optic guidance, autonomous navigation, encrypted links—none of these defenses matter when the circuit boards are being fried by microwave energy.

The US Army awarded Epirus a $66.1 million contract in January 2023 for four Indirect Fire Protection Capability–High Power Microwave (IFPC-HPM) prototypes. All four were delivered by May 2024. At least two were deployed to US Central Command by early 2025. In July 2025, a follow-on $43.5 million contract was awarded for two Generation II systems featuring doubled range (approximately 2 kilometers), 30 percent more power, and built-in battery operation for up to 30 minutes without external power. The Gen II systems were expected to complete assembly by September 2025, with testing at Naval Air Weapons Station China Lake scheduled for October.

In a Department of Defense demonstration, Leonidas achieved a reported 100 percent success rate against 61 drones, including swarm configurations. Epirus has also integrated Leonidas onto General Dynamics’ TRX unmanned ground vehicle to create the Leonidas Autonomous Robotic (Leonidas AR)—a mobile, unmanned microwave weapon—and developed a pod variant light enough to mount on friendly drones for airborne electronic attack. The US Air Force is reportedly considering leasing IFPC-HPM systems for base defense beginning in 2026.

Export restrictions were lifted in 2025, and several allied nations have expressed interest, including Australia under the AUKUS Pillar II framework. No European procurement has been announced.

Raytheon Coyote Block 3NK: The Recoverable Non-Kinetic Interceptor

On 11 February 2026, Raytheon announced that its Coyote Block 3 Non-Kinetic (3NK) variant had defeated multiple drone swarms during a US Army demonstration, then been recovered for reuse. Video released by the company shows the Coyote flying past target drones at close range; the targets tumble immediately from the sky without any visible contact, explosion, or debris. The defeat mechanism has not been publicly disclosed by Raytheon, but the effect is consistent with a localized electronic attack payload.

The Coyote 3NK represents a conceptual leap in counter-drone thinking. Rather than a one-shot expendable interceptor, it is a loitering, recoverable effector that can be positioned on likely drone ingress routes, cued by radar, tasked to disable multiple targets in sequence, and then recalled to a recovery net for turnaround and redeployment. Raytheon claims a 50 percent reduction in recovery-to-return-to-flight timelines, which—if replicated under field conditions—translates directly into higher sustained defensive tempo during repeated attack waves.

The Coyote family sits inside the Army’s Low, Slow, Small Unmanned Aircraft Integrated Defeat System (LIDS), which pairs KuRFS radar, command and control, and multiple effector types into a layered architecture. The 3NK variant was included in the largest counter-drone contract in Raytheon’s history, awarded in September 2025 under the LIDS program. Production increases across the Coyote family are anticipated through 2026.

No European equivalent to the Coyote 3NK concept exists in production or advanced development.

Fortem DroneHunter: Net-Based Capture

Utah-based Fortem Technologies occupies a distinct niche: physical drone capture using net-equipped autonomous interceptor drones. The DroneHunter F700, now in its fifth generation (DroneHunter 5.0, with first deliveries in January 2026), is an AI-driven hexacopter that detects, tracks, and intercepts hostile drones using onboard radar and dual cameras, then deploys tethered nets to entangle and safely transport the target to a designated drop-off point. For larger drones, the system fires a DrogueChute—a net attached to a parachute—that forces a slow, predictable descent.

The DroneHunter’s value proposition is zero collateral damage and forensic recovery. The captured drone arrives intact, available for intelligence exploitation. This makes the system particularly valuable in homeland security contexts—protecting stadiums, airports, and government buildings—where debris from kinetic engagement is unacceptable. The Pentagon’s Joint Interagency Task Force 401 (JIATF 401) selected DroneHunter for its first operational purchase under the Replicator-2 initiative in January 2026, with two systems delivered by April. The US Army awarded Fortem an $18 million three-year contract for C-UAS solutions at Army sites worldwide. The Department of Homeland Security placed a multimillion-dollar order for FIFA World Cup 2026 venue protection—the largest sporting event in history, with 48 teams competing across 16 cities.

Fortem has completed what it describes as the first autonomous 5-versus-5 drone swarm intercept, with five DroneHunters simultaneously engaging five threats under a single SkyDome command system. Operational deployments include Ukraine, the Middle East, and East Asia. Q3 2025 orders from European and Middle Eastern allies roughly doubled quarter-over-quarter and year-over-year.

Fortem is currently the only company authorized to deploy a drone-on-drone kinetic interceptor in US airspace—a regulatory moat that has no European parallel.

L3Harris CORVUS and VAMPIRE

L3Harris has built a portfolio spanning both soft-kill and adapted kinetic effectors. CORVUS-RAVEN is a passive RF detection and jamming system using AI and machine learning for signal detection, real-time situational awareness, and defeat jamming. Drone Guardian provides scalable layered defense integrating multiple sensor types for threat assessment and disruption, including launched effects platforms (Red Wolf and Green Wolf) that enable forces to neutralize hostile drones at the source—shifting from a defensive to an offensive stance.

VAMPIRE, originally fielded in under eight months to meet urgent Ukrainian requirements, is a compact ISR and counter-unmanned system deployable on virtually any vehicle or vessel. Since 2023, it has destroyed hundreds of hostile drones in combat operations in Europe. L3Harris has expanded the system with advanced EO/IR targeting sensors, precision weapons, electronic jammers, and AI-enabled drone detection. VAMPIRE’s combat record in Ukraine makes it one of the most operationally validated C-UAS platforms in the Western inventory—though it blurs the kinetic/non-kinetic boundary, integrating both jamming and precision strike capabilities on a single platform.

The European Non-Kinetic Ecosystem

Europe’s non-kinetic C-UAS landscape is dominated by German companies and by a philosophy of modular, sensor-agnostic integration rather than single-system dominance. Where the American approach has produced several purpose-built, high-profile platforms (Leonidas, Coyote 3NK, DroneHunter), Europe has concentrated on building open-architecture command-and-control systems that can plug in sensors and effectors from multiple vendors—an approach well-suited to the continent’s multi-national procurement environment but one that has not yet produced a system with the raw counter-swarm capability of Leonidas or the operational validation of DroneHunter.

GUARDION: The German Tri-Company Solution

GUARDION is a collaboration between three German defense companies: Diehl Defence, ESG Elektroniksystem- und Logistik-GmbH (now part of Hensoldt), and Rohde & Schwarz. The system combines Rohde & Schwarz’s RF detection and jamming capabilities, Diehl’s SkyWolf high-power electromagnetic (HPEM) effector, and ESG’s ELYSION C4I command-and-control software into an integrated detect-classify-defeat chain.

The SkyWolf effector is GUARDION’s distinctive element. Combining HPEM disruption with RF jamming, SkyWolf can interfere with drone electronics to force mission abort without producing debris—and critically, it can engage autonomous drones that have no jammable radio link, because the HPEM component attacks the drone’s electronics directly rather than its communications. Diehl describes SkyWolf as effective against both individual drones and swarms of autonomous UAS, though specific engagement data and operational range figures have not been publicly disclosed.

GUARDION has been deployed operationally for German armed forces, police, and international military clients. Its track record includes protection of major national and international events. The system represents Europe’s closest equivalent to the American Leonidas in concept—electromagnetic disruption of drone electronics—though it packages the capability within a broader multi-vendor architecture rather than as a standalone platform.

Hensoldt Elysion: The Integration Layer

If there is a single European product that defines the continent’s approach to C-UAS, it is not an effector but a piece of software. Hensoldt’s Elysion Mission Core is a manufacturer-agnostic command-and-control platform designed to fuse data from any combination of sensors—radar, RF direction-finding, electro-optical/infrared cameras, acoustic sensors, ADS-B receivers—and route threat tracks to any combination of effectors—RF jammers, GNSS spoofers, HPEM devices, net launchers, interceptor drones, or hard-kill weapons. A single operator can manage the entire detect-classify-defeat cycle.

Elysion is deployed as the ASUL (Automatisiertes Sensorsystem Unbemannte Luftfahrzeuge) counter-UAS system for the German Bundeswehr, integrating Hensoldt’s Spexer 2000 3D radar, NightOwl electro-optical cameras, Rohde & Schwarz direction finders, and HP Wüst effectors. It has been deployed operationally for force protection abroad and at major domestic events. The system is available in shelterized, mobile, and tablet-based configurations.

Elysion’s strategic significance lies less in what it does than in what it enables. By providing a standardized integration layer with open interfaces, it allows European nations to assemble C-UAS architectures from best-of-breed components without being locked into a single vendor’s ecosystem. A country can use a Hensoldt radar with a Rohde & Schwarz jammer and a third-party interceptor drone, all managed through Elysion. This modularity reflects a European procurement philosophy that values interoperability and vendor independence—and that contrasts sharply with the American model of integrated, single-vendor solutions like LIDS or SkyDome.

Hensoldt is now developing MDOcore, a multi-domain operations software suite designed to network multiple Elysion installations and other defense systems into a scalable protective mesh. The ambition is a “drone wall” architecture spanning national borders—a concept that the EU Commission’s February 2026 Action Plan on Drones and Counter-Drones has endorsed at the political level.

Origin Robotics and European Interceptor Drones

In November 2025, Belgium’s defense ministry announced a procurement deal for kamikaze-style interceptor drones from Latvia’s Origin Robotics as part of a €50 million anti-drone package, with an additional €500 million earmarked for radar, jamming, and broader C-UAS capabilities. Belgium’s drone crisis—repeated incursions over Brussels Airport and military installations—catalyzed what had been years of inaction into concrete procurement.

The European interceptor drone market is fragmented compared to the American landscape, where Fortem’s DroneHunter has established dominance through regulatory authorization and operational track record. Several European companies are developing drone-on-drone intercept capabilities—the Dutch firm Delft Dynamics with its DroneCatcher net-based system, Merops (selected for NATO deployment) with its AI-enabled autonomous interceptor, and various national start-ups emerging from accelerator programs. None has achieved the scale, regulatory clearance, or operational validation of DroneHunter. NATO’s C-UAS Innovation Range in Latvia, which launched its first testing campaign in March 2026, is explicitly designed to evaluate and validate such systems—but the results are prospective, not proven.

Rohde & Schwarz: The RF Backbone

Munich-based Rohde & Schwarz is the dominant European supplier of RF-based drone detection and electronic countermeasures. The company’s direction-finding receivers and wideband jammers form the sensor and effector backbone of GUARDION, ASUL, and numerous national C-UAS architectures across NATO. Their technology detects the control links and video feeds between drones and operators, geolocates both the drone and the pilot, and can jam the link to force the drone into a fail-safe mode—typically a landing or return-to-home.

The limitation, as noted above, is fundamental: RF-based approaches are effective only against drones that emit or receive radio signals. The proliferation of fiber-optic-guided FPV drones in Ukraine has demonstrated that determined adversaries can eliminate the RF signature entirely. Rohde & Schwarz continues to develop its capabilities against increasingly sophisticated communication protocols—frequency-hopping spread spectrum, encrypted links, burst transmissions—but the basic physics of the problem favors the attacker. If there is no signal, there is nothing to jam.

![](https://norskluftvern.wordpress.com/wp-content/uploads/2026/03/img_9422.jpg?w=748)
*Table 1: Non-kinetic C-UAS systems comparison. “vs. Autonomous” indicates effectiveness against drones with no exploitable RF link. “Platform” indicates Elysion is an integration layer, not an effector.*

The comparison reveals three structural differences between the American and European approaches.

Scale of counter-swarm capability. The United States has two systems—Leonidas and Coyote 3NK—specifically designed and demonstrated against drone swarms. Leonidas can theoretically disable dozens of drones simultaneously with a single microwave pulse. Coyote 3NK can engage multiple targets in sequence and be recovered for reuse. Europe’s GUARDION SkyWolf HPEM provides a similar electromagnetic disruption capability in concept, but has not been demonstrated at the same scale or with the same public documentation. No European system has matched the Leonidas DoD demonstration of 61 consecutive engagements with 100 percent effectiveness.

Effectiveness against fiber-optic and autonomous drones. The proliferation of drones that have no jammable RF link has created a binary divide in non-kinetic C-UAS: systems that attack the drone’s communications (RF jamming) are becoming less relevant, while systems that attack the drone’s electronics (HPM/HPEM) or physically intercept it (net capture, non-kinetic flyby) retain full effectiveness regardless of the drone’s guidance mode. The American portfolio is weighted toward the latter category. Europe’s deployed systems—particularly the RF backbone provided by Rohde & Schwarz—are more exposed to the fiber-optic obsolescence problem, though GUARDION’s SkyWolf HPEM component partially addresses this.

Integration philosophy. Europe’s strength is in the integration layer. Elysion’s open-architecture approach—enabling any sensor and any effector to plug into a common C2 framework—is better suited to the multi-national European procurement environment than the American model of vertically integrated solutions. An ESSI member nation can assemble a C-UAS architecture from components produced in Germany, France, Latvia, and the Netherlands, managed through a standardized software layer. This modularity is genuinely valuable. But it also means that Europe is integrating components rather than fielding decisive capabilities—assembling puzzle pieces rather than deploying solutions that change the tactical equation.

Assessment

The non-kinetic counter-drone domain in 2026 is where upper-tier air defense was in 2022: the threat is obvious, the technology exists, the procurement is accelerating—but unevenly, and with the uncomfortable recognition that existing investments may be aimed at yesterday’s version of the problem.

RF jamming, the most mature and widely deployed non-kinetic C-UAS effector, is being outrun by fiber-optic and autonomous drone guidance. High-power electromagnetic systems—Leonidas, SkyWolf, and their successors—address this gap but are still in prototype or early-fielding stages. Interceptor drones offer a physics-agnostic solution (if you can physically catch a drone, its guidance mode is irrelevant) but face scalability challenges against mass employment. The C2 and sensor fusion layer—the ability to see, classify, and track everything below 5,000 meters—is arguably the most important investment of all, because no effector works without a coherent picture of what it is shooting at.

The United States leads in high-power microwave technology, recoverable non-kinetic interceptors, and net-based capture systems. Europe leads in modular C2 integration, multi-vendor sensor fusion, and the regulatory frameworks needed for peacetime C-UAS operations. Neither has solved the problem. The nation that builds a layered architecture—RF detection and jamming for conventional drones, HPEM or HPM for autonomous threats, interceptor drones for physical capture when forensics matter, all networked through a common C2 layer—will possess the most complete non-kinetic C-UAS capability in NATO.
