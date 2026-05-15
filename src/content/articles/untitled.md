---
title: "Untitled"
date: 2017-01-01
excerpt: "<?php // Function to register the shortcode for Norges Luftvernløft Infographic function norgesluftverninfographicshortcode() { obstart(); // Start output buffering ? <div class=\"wp-luftvern-infographic\" <-- Font loading…"
category: analyse
author: "Norsk luftvern"
lang: no
draft: true
---

<?php
// Function to register the shortcode for Norges Luftvernløft Infographic
function norges_luftvern_infographic_shortcode() {
    ob_start(); // Start output buffering
    ?>
    <div class="wp-luftvern-infographic">
        <!-- Font loading for consistency across WordPress -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
        
        <!-- Tailwind CSS CDN - Must be loaded for styles -->
        [https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)
        
        <!-- Chart.js CDN - Must be loaded for charts -->
        [https://cdn.jsdelivr.net/npm/chart.js](https://cdn.jsdelivr.net/npm/chart.js)

        <!-- Custom styles for the infographic and chart containers -->
        <style>
            .wp-luftvern-infographic body { /* Targeting body within our div for potential conflict reduction */
                font-family: 'Inter', sans-serif;
                background-color: #f0f4f8; /* This might be overridden by WP theme */
            }
            .wp-luftvern-infographic .chart-container {
                position: relative;
                width: 100%;
                height: 320px;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            @media (min-width: 768px) {
                .wp-luftvern-infographic .chart-container {
                    height: 400px;
                }
            }
            .wp-luftvern-infographic .text-shadow {
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
            }
            /* Color Palette: Brilliant Blues */
            .wp-luftvern-infographic .brand-blue-darkest { color: #00449E; }
            .wp-luftvern-infographic .brand-blue-dark { color: #005CB9; }
            .wp-luftvern-infographic .brand-blue-medium { color: #1976D2; }
            .wp-luftvern-infographic .brand-blue-light { color: #42A5F5; }
            .wp-luftvern-infographic .brand-blue-lightest { color: #90CAF9; }

            .wp-luftvern-infographic .bg-brand-blue-darkest { background-color: #00449E; }
            .wp-luftvern-infographic .bg-brand-blue-dark { background-color: #005CB9; }
            .wp-luftvern-infographic .bg-brand-blue-medium { background-color: #1976D2; }
            .wp-luftvern-infographic .bg-brand-blue-light { background-color: #42A5F5; }
            .wp-luftvern-infographic .bg-brand-blue-lightest { background-color: #90CAF9; }
            
            .wp-luftvern-infographic .border-brand-blue-dark { border-color: #005CB9; }
        </style>

        <main class="container mx-auto p-4 md:p-8">
            <header class="text-center mb-12 py-12 bg-white rounded-lg shadow-xl">
                <h1 class="text-4xl md:text-6xl font-black brand-blue-darkest uppercase tracking-wider text-shadow">Norges Luftvernløft</h1>
                <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">En analyse av Norges historiske satsing på luftvern i en ny sikkerhetspolitisk virkelighet, basert på anbefalingene fra NOU 2023:14.</p>
            </header>

            <section id="investeringer" class="mb-12">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-3xl font-bold brand-blue-dark mb-4 text-center">En Historisk Finansiell Satsing</h2>
                    <p class="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                        Som et direkte svar på et endret trusselbilde, har Norge igangsatt en omfattende finansiell opprustning av luftvernet. Denne satsingen er den største på flere tiår og legger grunnlaget for en betydelig økning i kapasitet og utholdenhet.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div class="text-center p-8 bg-brand-blue-darkest rounded-lg shadow-lg">
                            <p class="text-2xl font-semibold text-white uppercase">Total Investeringspakke</p>
                            <p class="text-7xl font-black text-brand-blue-lightest my-2 text-shadow">12,5</p>
                            <p class="text-2xl font-semibold text-white uppercase">Milliarder NOK</p>
                            <p class="text-sm text-gray-300 mt-4">(foreslått sent 2023)</p>
                        </div>
                        <div class="chart-container">
                            <canvas id="investmentChart"></canvas>
                        </div>
                    </div>
                    <div class="mt-6 text-sm text-gray-600 text-center">
                        <p>Hovedinvesteringspakken på 12,5 mrd. NOK dekker nye missiler, utskytningsenheter og ildledningssentraler for NASAMS. Diagrammet til høyre illustrerer denne og andre sentrale investeringer som til sammen former Norges nye luftvern.</p>
                    </div>
                </div>
            </section>

            <section id="kapasitetsokning" class="mb-12">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-3xl font-bold brand-blue-dark mb-4 text-center">Dobling av Kjernekapasiteten: NASAMS</h2>
                    <p class="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                        Ryggraden i Norges luftvern, NASAMS, gjennomgår en fundamental styrking. Langtidsplanen for forsvaret (LTP) fastslår en dobling av antall batterier, noe som vil gi økt beskyttelse, større fleksibilitet og bedre utholdenhet for både Hæren og Luftforsvaret.
                    </p>
                    <div class="chart-container mx-auto">
                        <canvas id="nasamsGrowthChart"></canvas>
                    </div>
                    <div class="mt-6 text-sm text-gray-600 text-center">
                        <p>Denne grafen viser den planlagte økningen fra dagens 4 NASAMS-batterier til totalt 8 innen 2036. Denne kvantitative økningen er et direkte svar på kommisjonens anbefaling om å bygge mer volum i forsvarsstrukturen.</p>
                    </div>
                </div>
            </section>

            <section id="lagdelt-forsvar" class="mb-12">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-3xl font-bold brand-blue-dark mb-4 text-center">Et Moderne, Lagdelt Forsvar</h2>
                    <p class="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                        Fremtidens norske luftvern er ikke basert på ett enkelt system, men en integrert, lagdelt arkitektur designet for å møte et bredt spekter av trusler – fra små droner til ballistiske missiler. Hvert lag har en spesifik rolle og rekkevidde.
                    </p>
                    <div class="relative mt-8 p-4 space-y-4">
                        <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>
                        
                        <div class="relative flex items-center">
                            <div class="w-1/2 pr-8 text-right">
                                <h3 class="font-bold text-xl brand-blue-darkest">Langtrekkende Luftvern</h3>
                                <p class="text-gray-600 text-sm">Beskyttelse mot ballistiske missiler for strategiske områder.</p>
                            </div>
                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-blue-darkest border-4 border-white shadow-md"></div>
                            <div class="w-1/2 pl-8">
                                <p class="font-mono text-sm bg-gray-100 p-2 rounded">Planlagt: ~2029</p>
                            </div>
                        </div>

                        <div class="relative flex items-center">
                            <div class="w-1/2 pr-8 text-right">
                                <p class="font-mono text-sm bg-gray-100 p-2 rounded">I dag / Oppgraderes</p>
                            </div>
                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-blue-dark border-4 border-white shadow-md"></div>
                            <div class="w-1/2 pl-8">
                                <h3 class="font-bold text-xl brand-blue-dark">NASAMS</h3>
                                <p class="text-gray-600 text-sm">Medium-rekkevidde system for Hær og Luftforsvar.</p>
                            </div>
                        </div>

                        <div class="relative flex items-center">
                        <div class="w-1/2 pr-8 text-right">
                                <h3 class="font-bold text-xl brand-blue-medium">SHORAD (IRIS-T)</h3>
                                <p class="text-gray-600 text-sm">Kort-rekkevidde for beskyttelse av manøveravdelinger.</p>
                            </div>
                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-blue-medium border-4 border-white shadow-md"></div>
                            <div class="w-1/2 pl-8">
                                <p class="font-mono text-sm bg-gray-100 p-2 rounded">Under innfasing</p>
                            </div>
                        </div>

                        <div class="relative flex items-center">
                            <div class="w-1/2 pr-8 text-right">
                                <p class="font-mono text-sm bg-gray-100 p-2 rounded">Innfaset 2023</p>
                            </div>
                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-blue-light border-4 border-white shadow-md"></div>
                            <div class="w-1/2 pl-8">
                            <h3 class="font-bold text-xl brand-blue-light">Piorun (VSHORAD)</h3>
                                <p class="text-gray-600 text-sm">Håndholdt system mot droner og helikoptre.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 text-sm text-gray-600 text-center">
                        <p>Denne tidslinjen illustrerer hvordan de ulike lagene i Norges luftvern enten er på plass, under innfasing eller planlagt for fremtiden. Dette skaper et helhetlig system som øker kompleksiteten for en angriper.</p>
                    </div>
                </div>
            </section>
            
            <section id="tidslinje" class="mb-12">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-3xl font-bold brand-blue-dark mb-4 text-center">Tidslinje for Modernisering</h2>
                    <p class="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                        Selv om beslutningene tas raskt, er forsvarsanskaffelser komplekse prosesser med lange ledetider. Tidslinjen viser sentrale milepæler for når de nye og oppgraderte kapasitetene forventes å være operative.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="border-t-4 border-brand-blue-light p-4 rounded-lg bg-gray-50 text-center">
                            <p class="text-2xl font-bold brand-blue-dark">2023</p>
                            <p class="mt-2 text-gray-700">Leveranser av bærbart Piorun-luftvern påbegynt.</p>
                        </div>
                        <div class="border-t-4 border-brand-blue-medium p-4 rounded-lg bg-gray-50 text-center">
                            <p class="text-2xl font-bold brand-blue-dark">2025</p>
                            <p class="mt-2 text-gray-700">Leveranse av 4 nye NASAMS-batterier og oppgraderte sensorer.</p>
                        </div>
                        <div class="border-t-4 border-brand-blue-dark p-4 rounded-lg bg-gray-50 text-center">
                            <p class="text-2xl font-bold brand-blue-dark">2026-2028</p>
                            <p class="mt-2 text-gray-700">Leveranse av nye NASAMS utskytningsenheter (2026) og missiler (2028).</p>
                        </div>
                        <div class="border-t-4 border-brand-blue-darkest p-4 rounded-lg bg-gray-50 text-center">
                            <p class="text-2xl font-bold brand-blue-dark">~2029</p>
                            <p class="mt-2 text-gray-700">Innfasing av langtrekkende ballistisk missilforsvar planlagt.</p>
                        </div>
                    </div>
                    <div class="mt-6 text-sm text-gray-600 text-center">
                        <p>Denne oversikten viser en pragmatisk tilnærming hvor eksisterende systemer oppgraderes og utvides på kort sikt, mens mer avanserte, langtrekkende kapasiteter fases inn over tid for å bygge en robust og fremtidsrettet forsvarsevne.</p>
                    </div>
                </div>
            </section>

            <section id="strategi" class="mb-12">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-3xl font-bold brand-blue-dark mb-4 text-center">Strategiske Prioriteringer og Utfordringer</h2>
                    <p class="text-center text-gray-700 max-w-3xl mx-auto mb-8">
                        Styrkingen av luftvernet er en nøkkelkomponent i Norges overordnede forsvarsstrategi. Målet er å øke avskrekkingsevnen, styrke rollen i NATO og sikre nasjonal handlefrihet. Samtidig eksisterer det betydelige utfordringer som må håndteres.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h3 class="font-bold text-xl brand-blue-darkest mb-4">Prioriteringer</h3>
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <div class="text-2xl mr-4 brand-blue-dark">🛡️</div>
                                    <div>
                                        <h4 class="font-semibold">Avskrekking og Forsvar</h4>
                                        <p class="text-gray-600 text-sm">Øke kostnaden for en potensiell angriper og beskytte norsk territorium.</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="text-2xl mr-4 brand-blue-dark">🌐</div>
                                    <div>
                                        <h4 class="font-semibold">NATO-integrasjon</h4>
                                        <p class="text-gray-600 text-sm">Sikre mottak av allierte forsterkninger og styrke forsvaret av nordflanken.</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="text-2xl mr-4 brand-blue-dark">🏢</div>
                                    <div>
                                        <h4 class="font-semibold">Totalforsvaret</h4>
                                        <p class="text-gray-600 text-sm">Beskytte kritisk sivil infrastruktur og befolkningssentra i tillegg til militære baser.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl text-red-700 mb-4">Utfordringer</h3>
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <div class="text-2xl mr-4 text-red-600">👤</div>
                                    <div>
                                        <h4 class="font-semibold">Kompetanse og Personell</h4>
                                        <p class="text-gray-600 text-sm">Behov for å rekruttere og beholde fagpersonell i konkurranse med sivil sektor.</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="text-2xl mr-4 text-red-600">🏭</div>
                                    <div>
                                        <h4 class="font-semibold">Industriell Kapasitet</h4>
                                        <p class="text-gray-600 text-sm">Lange leveringstider og høy internasjonal etterspørsel skaper flaskehalser.</p>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <div class="text-2xl mr-4 text-red-600">🎯</div>
                                    <div>
                                        <h4 class="font-semibold">Teknologisk Utvikling</h4>
                                        <p class="text-gray-600 text-sm">Kontinuerlig behov for å tilpasse seg nye trusler som svermer av droner og hypersoniske missiler.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="text-center mt-12 py-6">
                <p class="text-sm text-gray-500">Infografikk basert på analyse av NOU 2023:14 og tilgjengelig offentlig informasjon per juni 2025.</p>
            </footer>
        </main>

        <!-- JavaScript for Chart.js - Wrapped in DOMContentLoaded -->
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const brilliantBlues = ['#00449E', '#005CB9', '#1976D2', '#42A5F5', '#90CAF9'];

                function wrapLabels(label, maxWidth) {
                    if (typeof label !== 'string' || label.length <= maxWidth) {
                        return label;
                    }
                    const words = label.split(' ');
                    const lines = [];
                    let currentLine = '';
                    for (const word of words) {
                        if ((currentLine + ' ' + word).trim().length > maxWidth && currentLine.length > 0) {
                            lines.push(currentLine);
                            currentLine = word;
                        } else {
                            currentLine = (currentLine + ' ' + word).trim();
                        }
                    }
                    if (currentLine.length > 0) {
                        lines.push(currentLine);
                    }
                    return lines;
                }

                const tooltipTitleCallback = (tooltipItems) => {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                      return label.join(' ');
                    } else {
                      return label;
                    }
                };

                const nasamsGrowthCtx = document.getElementById('nasamsGrowthChart');
                if (nasamsGrowthCtx) { // Check if element exists before creating chart
                    new Chart(nasamsGrowthCtx.getContext('2d'), {
                        type: 'bar',
                        data: {
                            labels: ['Eksisterende Kapasitet (2024)', 'Planlagt Kapasitet (2036)'],
                            datasets: [{
                                label: 'Antall NASAMS Batterier',
                                data: [4, 8],
                                backgroundColor: [brilliantBlues[3], brilliantBlues[1]],
                                borderColor: [brilliantBlues[2], brilliantBlues[0]],
                                borderWidth: 2,
                                borderRadius: 5,
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        stepSize: 1,
                                        color: '#4b5563'
                                    },
                                    grid: {
                                        color: '#e5e7eb'
                                    }
                                },
                                x: {
                                   ticks: {
                                        color: '#4b5563'
                                    },
                                    grid: {
                                        display: false
                                    }
                                }
                            },
                            plugins: {
                                legend: {
                                    display: false
                                },
                                tooltip: {
                                    callbacks: {
                                       title: tooltipTitleCallback
                                    }
                                }
                            }
                        }
                    });
                }
                
                const investmentCtx = document.getElementById('investmentChart');
                if (investmentCtx) { // Check if element exists before creating chart
                    new Chart(investmentCtx.getContext('2d'), {
                        type: 'doughnut',
                        data: {
                            labels: [
                                wrapLabels('AD Pakke (Nye missiler & enheter)', 16), 
                                wrapLabels('4 Nye NASAMS Batterier', 16), 
                                wrapLabels('Piorun Bærbart Luftvern', 16),
                                wrapLabels('Sensor Oppgraderinger (EO)', 16)
                                ],
                            datasets: [{
                                label: 'Investering (Mrd. NOK)',
                                data: [12.5, 2.7, 0.35, 0.19],
                                backgroundColor: [brilliantBlues[0], brilliantBlues[2], brilliantBlues[3], brilliantBlues[4]],
                                borderColor: '#ffffff',
                                borderWidth: 3,
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: 'right',
                                    labels: {
                                        color: '#4b5563',
                                        boxWidth: 20,
                                        padding: 20
                                    }
                                },
                                 tooltip: {
                                    callbacks: {
                                       title: tooltipTitleCallback
                                    }
                                }
                            }
                        }
                    });
                }
            });
        </script>
    </div>
    <?php
    return ob_get_clean(); // Return the buffered content
}
add_shortcode('norges_luftvern_infografikk', 'norges_luftvern_infographic_shortcode');
?>
