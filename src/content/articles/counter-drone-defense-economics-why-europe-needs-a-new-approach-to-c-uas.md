---
title: "Counter-Drone Defense Economics: Why Europe Needs a New Approach to C-UAS"
date: 2026-01-03
excerpt: "The proliferation of cheap drones has broken the traditional air defense cost model. Europe’s response so far has been fragmented and inadequate. This analysis examines the C-UAS challenge, surveys available solutions,…"
category: missilforsvar
author: "Redaksjonen"
lang: no
draft: false
---

*The proliferation of cheap drones has broken the traditional air defense cost model. Europe’s response so far has been fragmented and inadequate. This analysis examines the C-UAS challenge, surveys available solutions, and asks what a coherent European—and Norwegian—approach might look like.*

## The $3 Million Problem

In March 2024, a Patriot battery in Ukraine engaged a Russian Shahed-136 drone. The intercept was successful. The math was not.

The Shahed costs Iran approximately $20,000-50,000 to produce. The PAC-2 GEM-T missile that destroyed it costs $1-2 million. Even using the most conservative estimates, the defender spent 20-100 times more than the attacker.

This is not an edge case. It is the new normal.

Ukraine fires an estimated 10,000+ air defense missiles annually. If even 20% of engagements involve this kind of cost asymmetry, the economic sustainability of traditional air defense becomes questionable within years, not decades.

The Houthis demonstrated the same principle against the US Navy in the Red Sea throughout 2024. USS Carney and other destroyers expended SM-2 missiles ($2.1 million each) and Evolved Sea Sparrow Missiles ($1.65 million) against drone swarms costing a fraction of the defensive response. The USS Dwight D. Eisenhower carrier strike group reportedly fired over 500 munitions in a six-month deployment—a significant portion of which were expensive missiles engaging cheap threats.

This cost inversion represents a fundamental challenge to how NATO nations have structured air defense for decades. The traditional model assumed expensive platforms (aircraft, cruise missiles) as primary threats, justifying expensive interceptors. Drones have collapsed that assumption.

## Defining the C-UAS Challenge

Counter-Unmanned Aerial Systems (C-UAS) encompasses technologies designed to detect, track, identify, and neutralize drone threats. The challenge is not singular—it spans a threat spectrum that demands different solutions at different price points.

### The Drone Threat Taxonomy

NATO categorizes UAS by size and capability:

GroupWeightExampleTypical CostThreat Profile**Group 1**<9 kgDJI Mavic, FPV drones$500-5,000Reconnaissance, grenade delivery**Group 2**9-25 kgCommercial/military small UAS$5,000-50,000ISR, small munitions**Group 3**25-600 kgShahed-136, Bayraktar TB2$20,000-5MStrike, persistent ISR**Group 4**>600 kgMQ-9 Reaper class$10M+Strategic ISR, precision strike

Traditional air defense systems (Patriot, SAMP/T, NASAMS) were designed primarily for Group 4 threats and aircraft. They can engage Group 3 drones but at economically unsustainable cost ratios. For Groups 1-2, they are largely ineffective—these targets are too small, too slow, and too cheap to justify engagement.

The C-UAS problem is therefore not about capability but about economics: how do you defend against threats that cost 1/100th to 1/1000th of your interceptors?

### Why Traditional Air Defense Struggles

FactorTraditional GBADC-UAS Requirement**Target RCS**>1 m² (aircraft)0.001-0.1 m² (small drones)**Target speed**200-3,000 km/h50-200 km/h**Target altitude**100-30,000 m0-500 m (often)**Engagement cost**$500K-5M acceptableMust be <$100K, ideally <$10K**Magazine depth**4-16 missiles per launcherPotentially hundreds of engagements per day**Detection range**Optimized for high/fastStruggles with low/slow/small

NASAMS and IRIS-T SLM can engage larger drones effectively, but using a $400,000-1.5 million missile against a $20,000 Shahed still represents a 20:1 cost disadvantage. Against a $500 FPV drone, the ratio becomes absurd.

## The C-UAS Solution Landscape

The market has responded to the drone threat with a proliferation of counter-drone technologies. These fall into several categories, each with distinct cost profiles and effectiveness characteristics.

### Detection and Tracking Systems

Before you can defeat a drone, you must find it. Detection technologies include:

**Radar Systems**

- Traditional air defense radars often lack sensitivity for small UAS

- Specialized C-UAS radars (like Raytheon’s KuRFS) optimize for low-RCS targets

- Cost: $5-50 million depending on capability

- Limitation: Struggle with ground clutter in complex terrain

**RF Detection**

- Passive systems that detect drone-to-controller communications

- Can identify drone type and locate both drone and operator

- Cost: $100K-2M per system

- Limitation: Ineffective against autonomous drones with no RF emissions

**Electro-Optical/Infrared**

- Cameras and thermal sensors for visual detection and tracking

- Effective for final engagement cueing

- Cost: $50K-500K per system

- Limitation: Weather-dependent, limited range

**Acoustic Sensors**

- Detect drone motor/propeller signatures

- Low cost, passive operation

- Cost: $10K-100K per sensor

- Limitation: Very short range, environmental noise interference

Effective C-UAS requires **sensor fusion**—combining multiple detection methods to overcome individual limitations. This integration challenge is often more difficult than the individual sensor technologies.

### Soft-Kill Effectors (Non-Kinetic)

Non-kinetic solutions disable drones without physical destruction, offering potentially unlimited “magazine depth.”

**RF Jamming**
Systems that overwhelm drone control links, forcing the drone to land, return home, or lose control.

SystemManufacturerTypeRangeCostDroneGun TacticalDroneShieldHandheld1-2 km$30-50KAUDSChess DynamicsFixed/mobile5+ km$1-2MDedroneDefenderDedroneFixed1-2 km$200-500K

**Limitations:**

- Ineffective against autonomous/pre-programmed drones

- Can jam friendly communications

- Legal restrictions in many jurisdictions

- Drones increasingly use jam-resistant protocols

**GPS Spoofing**
Systems that feed false navigation data to drones, redirecting them away from protected areas or forcing landing.

**Limitations:**

- Can affect other GPS-dependent systems

- Sophisticated drones use inertial navigation backup

- Legal and safety concerns near airports

**High-Power Microwave (HPM)**
Directed energy systems that fry drone electronics.

SystemDeveloperStatusRangeNotesLeonidasEpirus (US)Fielded1+ kmCounter-swarm capableRAVENRaytheonDevelopmentTBDCounter-electronicsMjölnirAFRL (US)DevelopmentTBDHigh-power prototype

HPM systems offer the theoretical advantage of engaging swarms simultaneously and very low cost-per-shot. However, they remain largely developmental and face challenges with range and precision targeting.

### Hard-Kill Effectors (Kinetic)

When soft-kill fails or isn’t appropriate, kinetic solutions physically destroy the target.

**Gun-Based Systems**
Cannons with specialized ammunition for drone engagement.

SystemCountryCaliberRangeCost per SystemCost per EngagementSkynexGermany35mm4 km€30-50M~$1,000Phalanx (C-RAM)USA20mm2 km$15M~$100Skyranger 30Germany30mm3 km€15-25M~$500Oerlikon RevolverSwitzerland35mm4 km€20-30M~$1,000

Gun systems offer excellent cost-per-engagement economics but limited range. They’re ideal for point defense but cannot provide wide-area coverage.

**Specialized C-UAS Interceptors**
Purpose-built missiles and drones designed to kill drones cost-effectively.

SystemCountryTypeRangeUnit CostCost per KillCoyote Block 2USAJet-powered interceptor10-15 km$100K$100KMADIS/StingerUSAIR missile8 km$120K$120KRoadrunner-MUSA (Anduril)Reusable interceptorTBD$200-300KLower if recoveredAnvilUSA (Anduril)Kamikaze interceptorShort$10-20K$10-20KSkyWall 300UKNet launcher300m$50-100K$100-500

**Directed Energy (Laser) Systems**
The theoretical endgame for C-UAS economics: near-zero marginal cost per engagement.

SystemDeveloperPowerStatusExpected Cost per ShotIron BeamRafael (Israel)100 kWNear operational~$2HELWSRaytheon (US)50 kWLimited fielding~$1DragonfireUK consortium50 kWTestingTBDRheinmetall HELGermany20-100 kWDevelopment~$1HELMA-PEU100 kWDevelopmentTBD

Lasers promise to solve the cost asymmetry problem entirely. A $50 million laser system that can engage 1,000 drones at $2 each ($2,000 total) versus a missile system where 1,000 engagements cost $100 million represents a fundamental shift in defensive economics.

However, current laser systems face limitations:

- **Weather dependence**: Rain, fog, dust degrade effectiveness

- **Dwell time**: Must hold on target for seconds to achieve kill

- **Power requirements**: High-power systems need substantial electrical generation

- **Range limitations**: Effective range currently 1-7 km for most systems

- **Maturity**: Most systems remain developmental or in limited fielding

## Operational C-UAS: What’s Actually Deployed

Theory and marketing differ from operational reality. Which systems are actually defeating drones in combat?

### United States

The US Army has fielded multiple C-UAS systems in response to drone threats in the Middle East:

**M-LIDS (Mobile-Low, Slow, Small UAS Integrated Defeat System)**

- Coyote Block 2 interceptors + KuRFS radar

- Mounted on M-ATV vehicles

- Actively engaging drones in Syria, Iraq, Jordan

**FS-LIDS (Fixed Site-LIDS)**

- Same components in fixed installation configuration

- Protecting bases and installations

**M-SHORAD**

- Stryker vehicles with Stinger missiles + 30mm cannon

- Combines traditional SHORAD with C-UAS capability

The Army plans to procure **6,700 Coyote interceptors** from 2025-2029, indicating the scale of perceived need.

### Israel

Israel operates the world’s most combat-tested C-UAS architecture:

**Iron Dome**

- Originally designed for rockets/artillery, adapted for larger drones

- Tamir interceptor at $40-50K offers better economics than traditional SAMs

- Has engaged thousands of targets since 2011

**Iron Beam**

- Laser system specifically for C-UAS and short-range rockets

- Expected operational 2025

- Intended to complement Iron Dome for cheapest threats

**Drone Dome**

- Integrated detection and jamming system

- Deployed around critical infrastructure

### Ukraine

The most intensive C-UAS laboratory in history:

**Layered Defense**
Ukraine employs everything from Patriot (for high-value targets) through NASAMS and IRIS-T (medium threats) to mobile gun teams and electronic warfare (cheap drones). The key lesson: **no single system suffices**.

**Improvised Solutions**

- Pickup trucks with machine guns

- Modified AA guns from storage

- Civilian volunteers with shotguns

- Extensive EW networks

**Cost Pressure**
Ukraine has repeatedly emphasized the unsustainability of using $1M+ missiles against $50K drones, driving demand for cheaper solutions and gun-based systems.

## Europe’s Fragmented Response

Despite the obvious threat, European C-UAS procurement remains fragmented and underinvested relative to the challenge.

### Germany

Germany has made the most substantial C-UAS commitments:

**Skynex**

- 35mm gun-based system with AHEAD programmable ammunition

- Ordered for Bundeswehr

- Also selected by several export customers

**IRIS-T SLS**

- Short-range variant of IRIS-T for SHORAD/C-UAS

- Lower cost than SLM but still missile-based

**Rheinmetall HEL**

- Laser development with multiple prototypes demonstrated

- Targeting operational capability by 2027

**Nächstbereichschutz**

- Near-area protection program for laser C-UAS

- €20-40 million range per system expected

### United Kingdom

**Dragonfire**

- 50 kW laser demonstrator

- Successfully tested 2024

- Potential operational capability by 2027

**Sky Sabre / CAMM**

- Can engage larger drones but cost-prohibitive for swarms

**Counter-UAS Capability (CUAS)**

- Evaluation program examining multiple solutions

- No major procurement announcements yet

### France

**Parade**

- Multi-sensor C-UAS system

- Combines radar, EO, RF detection with jamming effectors

- Deployed for major events (Olympics 2024)

**No Laser Program**
France has notably not announced a military laser C-UAS program, relying instead on traditional effectors and jamming.

### Nordic Countries

**Finland**

- Evaluating C-UAS as part of broader air defense modernization

- No major procurement announced

**Sweden**

- SAAB developing C-UAS solutions

- No major domestic procurement announced

**Denmark**

- Recent major air defense investment focused on NASAMS/Patriot-class

- C-UAS not publicly prioritized

**Norway**

- No announced C-UAS program

- NASAMS modernization ongoing

- Patriot consideration focused on BMD, not C-UAS

### The European Gap

Compared to US and Israeli investments, European C-UAS remains:

DimensionUS/IsraelEurope**Deployed systems**Multiple, combat-testedLimited, mostly developmental**Laser programs**Operational/near-operational2027+ timelines**Procurement scale**Thousands of interceptorsDozens to hundreds**Doctrinal integration**MatureEmerging**Industrial base**EstablishedFragmented

## The Norwegian Question

Norway faces a specific C-UAS calculus shaped by geography, threat environment, and existing capabilities.

### Current State

Norway’s ground-based air defense centers on NASAMS, with Patriot under consideration for long-range/BMD capability. Neither system is optimized for C-UAS:

SystemC-UAS CapabilityLimitation**NASAMS**Can engage Group 3+ dronesAMRAAM too expensive for Group 1-2**Patriot (if acquired)**Can engage Group 3-4 dronesMassive cost asymmetry

Norway has **no dedicated C-UAS capability** in current force structure or announced procurement plans.

### Threat Assessment

Norway’s drone threat environment differs from Ukraine or the Middle East:

**Lower Immediate Threat**

- No active conflict

- Limited hostile drone activity currently

- Primary threat is Russian reconnaissance/harassment

**Specific Vulnerabilities**

- Critical infrastructure (oil/gas platforms, power grid) exposed

- Military bases, particularly in the north

- Naval vessels in littoral operations

- Border monitoring challenges

**Potential Escalation**

- Any conflict involving NATO’s northern flank would involve extensive drone use

- Russia has demonstrated mass drone employment doctrine

- Norwegian geography (coastline, mountains) creates C-UAS challenges

### What Would Norway Need?

A coherent Norwegian C-UAS architecture might include:

**Tier 1: Point Defense**

- Gun-based systems (Skynex-class) for bases and critical infrastructure

- Laser systems as they mature (post-2027)

- Estimated need: 10-20 systems

- Estimated cost: NOK 3-6 billion

**Tier 2: Mobile Protection**

- Vehicle-mounted C-UAS for maneuver forces

- Similar to US M-SHORAD concept

- Could integrate with existing CV90 fleet

- Estimated need: 30-50 systems

- Estimated cost: NOK 2-4 billion

**Tier 3: Wide-Area Detection**

- Specialized C-UAS radar network

- Integration with NASAMS sensors

- RF detection for drone localization

- Estimated cost: NOK 1-2 billion

**Total Estimated Investment: NOK 6-12 billion**

This represents a significant investment—roughly equivalent to 1-2 NASAMS batteries—for a capability that Norway currently lacks entirely.

### Integration with Layered Defense

C-UAS cannot be considered in isolation. It must integrate with Norway’s broader air defense architecture:

Threat Spectrum          Norwegian Response
─────────────────────────────────────────────
Ballistic missiles  →    Patriot (under consideration)
Aircraft/cruise     →    Patriot + NASAMS
Large drones        →    NASAMS (with limitations)
Medium drones       →    [GAP]
Small drones        →    [GAP]
FPV/micro drones    →    [GAP]

The gaps at the lower end of the spectrum represent the C-UAS requirement. Filling these gaps requires either:

- **Dedicated C-UAS procurement** (as outlined above)

- **Upgraded NASAMS** with cheaper effectors (if developed)

- **Allied C-UAS support** (relying on US/allied systems in crisis)

- **Accepting risk** at the low end of the threat spectrum

Option 4 has been the de facto Norwegian approach. Recent events suggest this may be increasingly untenable.

## ESSI and European C-UAS Coordination

The European Sky Shield Initiative (ESSI) provides a potential framework for coordinated C-UAS procurement, though current focus remains on traditional air defense systems (Arrow-3, Patriot, IRIS-T).

### ESSI Potential for C-UAS

OpportunityStatusJoint procurement of C-UAS systemsNot currently addressedShared sensor networksUnder discussionCommon C2 architectureIn developmentCoordinated laser developmentLimited

ESSI could theoretically enable:

- **Economies of scale** for C-UAS interceptor procurement

- **Interoperability** between national systems

- **Shared development** of European laser systems

- **Coordinated radar coverage** for drone detection

However, ESSI’s current priority is filling the more traditional air defense gaps (BMD, long-range). C-UAS may remain a national responsibility for the near term.

### NATO C-UAS Initiatives

NATO has recognized the C-UAS challenge through various initiatives:

**Counter-UAS Architecture Study**

- Examining alliance-wide requirements

- No major procurement recommendations yet

**US Forward Presence**

- US Army C-UAS systems in Europe (Germany, Poland)

- Could provide model for European procurement

**Technology Sharing**

- US Coyote approved for allied sales

- Potential for European procurement of proven US systems

## Recommendations

### For European Planners

- **Accept C-UAS as a distinct tier of air defense**, not an afterthought to traditional GBAD procurement

- **Accelerate laser development timelines**—the economics only close with directed energy

- **Procure gun-based interim solutions** while lasers mature; the threat exists now

- **Establish common C-UAS standards** through ESSI or NATO to enable interoperability

- **Invest in sensor networks** first; detection is the foundation of any C-UAS architecture

### For Norwegian Planners

- **Include C-UAS in the next defense planning cycle** as a distinct capability requirement

- **Evaluate gun-based systems** (Skynex, Skyranger) for critical infrastructure protection

- **Monitor German laser development** for potential future procurement

- **Ensure NASAMS modernization** includes improved small-target detection

- **Consider C-UAS integration** with any Patriot procurement

- **Assess industrial opportunities**—Kongsberg could develop C-UAS solutions leveraging NASAMS expertise

### Cost-Benefit Reality

The cost of inaction is not zero. Consider:

ScenarioCost of DefenseCost of No DefenseDrone harassment of oil platformNOK 100M (C-UAS system)Production disruption, potential casualtiesDrone ISR of military exerciseNOK 50M (mobile C-UAS)Intelligence compromiseMass drone attack on baseNOK 500M (layered C-UAS)Base destruction, aircraft losses in billions

The asymmetry that makes drones attractive to attackers is the same asymmetry that makes C-UAS investment attractive to defenders—if procured at the right cost point.

## Conclusion: The Economics Will Force the Issue

The drone revolution in warfare is not a future scenario. It is happening now, in Ukraine, in the Middle East, and in gray-zone activities worldwide. The economics are inexorable: defenders must find ways to engage $500-50,000 threats without expending $500,000-5,000,000 interceptors.

Europe’s current approach—traditional air defense systems with some jamming capability—will become economically unsustainable against determined drone employment. The nations that invest now in gun systems, laser development, and specialized interceptors will be better positioned when the threat intensifies.

Norway faces a choice: continue treating C-UAS as someone else’s problem, or recognize it as an essential component of a complete air defense architecture. The gap in Norwegian capability is real. The question is whether it will be addressed proactively or in crisis.

The drone doesn’t care about your procurement timeline. It just needs to be cheaper than your missile.

*This analysis consolidates and updates previous coverage of counter-drone systems on this site. For detailed examination of specific systems, see our [Counter-Drone Systems Comparison](/2025/07/10/counter-drone-systems-comparison-c-uas-technology-assessment/) and [Drone Defense Economics](/2025/06/26/the-drone-defense-economics-crisis-when-3m-missiles-target-38k-drones/) articles.*

**Related articles:**

- [The Complete Air Defense Systems Comparison Matrix](/air-defense-systems-comparison-matrix/)

- [Air Defense Systems Cost Database](/air-defense-systems-cost-database/)

- [IRIS-T SL vs. NASAMS: Air Defense Systems Comparison](/2025/04/15/iris-t-sl-vs-nasams-air-defense-systems-comparison/)

- [Norway’s Air Defense Evolution](/2025/07/30/norways-air-defense-evolution-bolstering-nasams-while-pursuing-ballistic-missile-defense/)
