// Comprehensive Wine Region Knowledge Base & Cartographic Data

export const WINE_REGIONS = {
  'champagne': {
    id: 'champagne',
    name: "Champagne",
    country: 'France',
    countryCode: 'FR',
    aliases: ['champagne', 'champagne grand cru', 'champagne premier cru', 'champenoise'],
    tagline: "The Pinnacle of Sparkling Wine & Chalk Terroir",
    summary: "Located roughly 90 miles northeast of Paris, Champagne is the world benchmark for sparkling wine. Its cool continental climate and deep chalk soils (craie) produce wines of extraordinary tension, fine effervescence, laser-like minerality, and legendary aging capability.",
    center: [49.0333, 4.0333],
    zoom: 10,
    bounds: [[48.70, 3.50], [49.40, 4.60]],
    heroGradient: 'linear-gradient(135deg, #1c2833 0%, #2c3e50 50%, #b8860b 100%)',
    accentColor: '#d4af37',
    
    // Terroir & Climate
    terroir: {
      climate: "Cool Continental (Köppen Cfb) with oceanic maritime influences. High average rainfall and frequent morning mists that preserve bright natural acidity.",
      soil: "Belemnite and Micraster marine chalk, limestone marl, and calcareous clay. These porous chalk beds act as thermal regulators and natural sponges, retaining moisture while providing flawless drainage.",
      elevation: "90m to 300m above sea level on undulating hillside slopes with optimal south and east sun exposures.",
      riverInfluence: "The Marne River divides the northern and southern zones, creating microclimates along its steep slopes that shelter vines from frost."
    },

    // Grapes
    grapes: [
      { name: 'Pinot Noir', percentage: 38, type: 'Red', role: "Provides structure, palate weight, rich red fruit aromatics, and mid-palate complexity." },
      { name: 'Chardonnay', percentage: 31, type: 'White', role: "Yields elegance, delicate floral and citrus aromas, saline minerality, and immense longevity." },
      { name: 'Meunier', percentage: 31, type: 'Red', role: "Adds roundness, lush orchard fruit forwardness, and early drinkability especially on clay-dominant valley soils." }
    ],

    // Structural Metrics (1-10)
    structure: {
      body: 5,
      acidity: 9.5,
      tannin: 2,
      sweetness: 2, // Brut style
      alcohol: 12.0,
      agingPotential: "5 - 30+ Years"
    },

    // Classification Hierarchy
    classification: {
      system: "Échelle des Crus (Grand Cru & Premier Cru)",
      description: 'Champagne classifies entire villages (communes) rather than individual vineyards. 17 communes hold Grand Cru 100% status, and 42 hold Premier Cru (90-99%) status.',
      tiers: [
        { name: 'Grand Cru (17 Villages)', detail: "Top tier communes including Ambonnay, Bouzy, Verzenay, Aÿ, Cramant, Avize, and Le Mesnil-sur-Oger." },
        { name: 'Premier Cru (42 Villages)', detail: "Prestigious villages including Mareuil-sur-Aÿ, Vertus, Cumières, and Hautvillers." },
        { name: 'Autre Cru / Village AOC', detail: "Quality village appellations across the Marne, Aube, and Aisne departments." }
      ],
      styles: [
        { name: 'Blanc de Blancs', desc: "100% Chardonnay; pristine, crisp, citrus and chalk-driven." },
        { name: 'Blanc de Noirs', desc: "100% Pinot Noir and/or Meunier; vinous, structured, berry notes." },
        { name: 'Rosé Champagne', desc: "Assemblage (blending red and white base wines) or saignée maceration." },
        { name: 'Vintage (Millésimé)', desc: "Produced exclusively from a single standout harvest, aged minimum 3 years on lees." }
      ]
    },

    // Tasting Notes / Flavor Profile
    flavorProfile: {
      primary: ['Green Apple', 'Lemon Zest', 'White Peach', 'Brioche', 'Chalk / Saline Minerality'],
      secondary: ['Toasted Almonds', 'Crushed Oyster Shell', 'Honeysuckle', 'Fresh Dough', 'Ginger'],
      palate: "Vibrant, crystalline mousse with electrifying acidity, refined texture, and an extended, saline finish."
    },

    // Curated Food Pairings for Diners
    foodPairings: [
      { category: 'Raw Bar & Seafood', dish: "Fresh Oysters (Kumamoto, Belon), Caviar, Hamachi Crudo, Pan-seared Scallops", note: "The wine\'s high acidity and saline chalk finish cut through the rich iodine and brininess of seafood." },
      { category: 'Rich & Crispy Bites', dish: "Truffle French Fries, Fried Chicken, Gougères, Tempura Langoustines", note: "The crisp effervescence cleanses the palate after every rich, buttery or crispy bite." },
      { category: 'Main Courses', dish: "Roast Duck Breast (Rosé), Butter-Poached Lobster, Roast Turbot with Beurre Blanc", note: "Fuller-bodied Blanc de Noirs and Vintage Champagnes stand up to poultry and creamy sauces." },
      { category: 'Artisanal Cheeses', dish: "Triple-cream Chaource, Brillat-Savarin, Aged Comté (24 month)", note: "Creamy bloomy-rind cheeses are effortlessly balanced by Champagne\'s effervescence." }
    ],

    // Sub-Regions & Key Communes for Interactive Map
    subRegions: [
      {
        id: 'montagne-de-reims',
        name: "Montagne de Reims",
        lat: 49.16,
        lng: 4.10,
        terroir: "North and south-facing chalk slopes dominated by powerful Pinot Noir.",
        focus: "Pinot Noir Grand Crus: Ambonnay, Bouzy, Verzenay, Mailly-Champagne.",
        description: "A forested plateau surrounded by premier vineyards. Known for muscular, deeply structured Champagnes." },
      {
        id: 'vallee-de-la-marne',
        name: "Vallée de la Marne",
        lat: 49.07,
        lng: 3.90,
        terroir: "Clay-limestone and sandy marl along the Marne riverbanks, ideal for frost-resistant Meunier.",
        focus: "Meunier & Pinot Noir: Aÿ (Grand Cru), Dizy, Mareuil-sur-Aÿ, Cumières.",
        description: "Stretches east to west along the river. Yields generous, fruit-expressive and rounded Champagnes." },
      {
        id: 'cote-des-blancs',
        name: "Côte des Blancs",
        lat: 48.97,
        lng: 4.02,
        terroir: "Pure outcropping of belemnite chalk facing east, the world holy grail for Chardonnay.",
        focus: "Chardonnay Grand Crus: Le Mesnil-sur-Oger, Avize, Cramant, Oger, Chouilly.",
        description: "Home to the finest Blanc de Blancs in the world. Legendary for mineral purity, steeliness, and citrus precision." },
      {
        id: 'cote-de-sezanne',
        name: "Côte de Sézanne",
        lat: 48.72,
        lng: 3.75,
        terroir: "Chalk and clay pockets south of Côte des Blancs with warmer microclimates.",
        focus: "Chardonnay: Sézanne, Bethon, Villenauxe-la-Grande.",
        description: "Produces riper, more tropical and accessible Chardonnay-driven styles." },
      {
        id: 'cote-des-bar',
        name: "Côte des Bar (Aube)",
        lat: 48.10,
        lng: 4.40,
        terroir: "Kimmeridgian limestone and clay, geologically linked to Chablis.",
        focus: "Artisanal Grower Pinot Noir: Les Riceys, Urville, Celles-sur-Ource.",
        description: "The southern frontier of Champagne, experiencing a grower-producer revolution focused on organic single-parcel cuvées." }
    ]
  },

  'burgundy': {
    id: 'burgundy',
    name: "Burgundy (Bourgogne)",
    country: 'France',
    countryCode: 'FR',
    aliases: ['burgundy', 'bourgogne', 'cote de nuits', 'cote de beaune', 'côte de nuits', 'côte de beaune', 'chablis', 'cote chalonnaise', 'maconnais', 'mâconnais', 'beaujolais'],
    tagline: "The World Benchmark for Pinot Noir & Chardonnay Terroir",
    summary: "Stretching from Chablis in the north down to the Mâconnais in the south, Burgundy is the spiritual home of terroir-driven winemaking. Here, microscopic variations in Jurassic limestone and clay soils produce the most sought-after Pinot Noir and Chardonnay on Earth.",
    center: [47.0500, 4.8333],
    zoom: 9,
    bounds: [[46.20, 3.70], [47.90, 5.20]],
    heroGradient: 'linear-gradient(135deg, #2b0914 0%, #4a1024 50%, #d4af37 100%)',
    accentColor: '#800020',

    terroir: {
      climate: "Semi-Continental with cold winters and warm, sunny summers. Susceptible to springtime frosts and localized summer hail storms.",
      soil: "Jurassic limestone (Bathonian and Bajocian) mixed with varying proportions of calcareous clay and marl. Iron-rich red soils favor Pinot Noir, while white limestone favors Chardonnay.",
      elevation: "200m to 400m along the east-southeast facing slopes of the limestone escarpment known as the Côte d'Or (Golden Slope).",
      riverInfluence: "The Saône River valley creates atmospheric warmth and breezes that gently ventilate the hillsides."
    },

    grapes: [
      { name: 'Pinot Noir', percentage: 51, type: 'Red', role: "Produces red Burgundies of haunting aromatics, silky tannins, earthy complexity, and profound transparency to soil." },
      { name: 'Chardonnay', percentage: 48, type: 'White', role: "Yields white Burgundies of unmatched balance between richness, hazelnut nuances, and electric limestone tension." },
      { name: 'Aligoté', percentage: 1, type: 'White', role: "Historic, high-acid white grape producing crisp, floral, and savory aperitif wines (notably in Bouzeron)." }
    ],

    structure: {
      body: 6.5,
      acidity: 8.5,
      tannin: 6.0,
      sweetness: 1,
      alcohol: 13.0,
      agingPotential: "5 - 40+ Years"
    },

    classification: {
      system: "AOC Appellation d'Origine Contrôlée (Climat-based Hierarchy)",
      description: 'Burgundy classifies specific parcels of vineyard land (Climats) rather than producers or châteaux.',
      tiers: [
        { name: 'Grand Cru (1-2% of production)', detail: "33 legendary single vineyards (e.g. Romanée-Conti, Chambertin, Musigny, Montrachet, Corton-Charlemagne, Clos de Vougeot)." },
        { name: 'Premier Cru (10% of production)', detail: "Over 640 designated premier climat parcels (e.g., Beaune Grèves, Gevrey-Chambertin Clos Saint-Jacques, Meursault Perrières)." },
        { name: 'Village Appellation (37% of production)', detail: "Named village communes like Vosne-Romanée, Puligny-Montrachet, Chambolle-Musigny, Volnay, Pommard, and Chablis." },
        { name: 'Regional AOC (50% of production)', detail: "Bourgogne Rouge, Bourgogne Blanc, Bourgogne Hautes-Côtes, and Crémant de Bourgogne." }
      ]
    },

    flavorProfile: {
      primary: ['Wild Raspberry', 'Red Cherry', 'Forest Floor (Sous-bois)', 'White Peach', 'Hazelnut / Crushed Chalk'],
      secondary: ['Black Truffle', 'Dried Rose Petals', 'Clove', 'Flint / Gunpowder', 'Warm Brioche'],
      palate: "Silken, weightless power with seamless acidity, supple tannins, and kaleidoscopic mineral length."
    },

    foodPairings: [
      { category: 'Poultry & Game Bird', dish: "Roast Duck Breast with Cherry Glaze, Roasted Guinea Fowl, Coq au Vin", note: "Red Burgundy\'s delicate red fruit and savory sous-bois elevate game birds without overpowering them." },
      { category: 'Beef & Earthy Stews', dish: "Boeuf Bourguignon, Dry-aged Ribeye with Morel Butter, Seared Venison Loin", note: "Tannins in Premier/Grand Cru Pinot soften beautifully against rich beef fat and wild mushrooms." },
      { category: 'Seafood & White Meat', dish: "Pan-Roasted Dover Sole, Butter-Basted Turbot, Veal Chop with Chanterelles", note: "Chardonnay from Meursault or Puligny-Montrachet matches the richness of butter sauces with striking minerality." },
      { category: 'Classic Cheeses', dish: "Époisses de Bourgogne, Soumaintrain, Delice de Bourgogne, Aged Comté", note: "The pungent, washed-rind Époisses is the ultimate historic partner for mature red Burgundy." }
    ],

    subRegions: [
      {
        id: 'chablis',
        name: "Chablis",
        lat: 47.81,
        lng: 3.80,
        terroir: "Kimmeridgian limestone packed with fossilized oyster shells (Exogyra virgula).",
        focus: "100% Unoaked or subtly oaked Chardonnay: Les Clos, Vaudésir, Montée de Tonnerre.",
        description: "Isolated northern outpost delivering steel-cut acidity, green apple, oyster-shell salinity, and flint." },
      {
        id: 'cote-de-nuits',
        name: "Côte de Nuits",
        lat: 47.18,
        lng: 4.95,
        terroir: "Steep limestone cliffs facing east, the world sanctuary for Pinot Noir Grand Crus.",
        focus: "Pinot Noir: Gevrey-Chambertin, Chambolle-Musigny, Vosne-Romanée, Nuits-Saint-Georges, Morey-Saint-Denis.",
        description: "Home to 24 of Burgundy\'s 25 red Grand Crus. Delivers aristocratically complex, structured red wines." },
      {
        id: 'cote-de-beaune',
        name: "Côte de Beaune",
        lat: 46.98,
        lng: 4.80,
        terroir: "Marl and white limestone benches producing the world\'s greatest white wines and ethereal reds.",
        focus: "Chardonnay & Pinot Noir: Meursault, Puligny-Montrachet, Chassagne-Montrachet, Volnay, Pommard, Corton.",
        description: "Celebrated for liquid-gold Grand Cru Chardonnays (Montrachet) and perfumed, velvety reds (Volnay)." },
      {
        id: 'cote-chalonnaise',
        name: "Côte Chalonnaise",
        lat: 46.75,
        lng: 4.70,
        terroir: "Rolling limestone hills south of the Côte d'Or.",
        focus: "Bouzeron (Aligoté), Rully, Mercurey, Givry, Montagny.",
        description: "Vibrant, high-value village wines offering immediate pleasure with authentic Burgundian character." },
      {
        id: 'maconnais',
        name: "Mâconnais",
        lat: 46.30,
        lng: 4.75,
        terroir: "Warmer Mediterranean-influenced limestone valleys under the dramatic Roche de Solutré.",
        focus: "Chardonnay: Pouilly-Fuissé (1er Cru), Saint-Véran, Viré-Clessé, Mâcon-Villages.",
        description: "Rich, sun-drenched Chardonnays bursting with stone fruit, acacia flowers, and creamy texture." }
    ]
  },

  'bordeaux': {
    id: 'bordeaux',
    name: "Bordeaux",
    country: 'France',
    countryCode: 'FR',
    aliases: ['bordeaux', 'medoc', 'médoc', 'haut-medoc', 'haut-médoc', 'pauillac', 'margaux', 'saint-julien', 'saint-estephe', 'saint-estèphe', 'graves', 'pessac-leognan', 'pessac-léognan', 'saint-emilion', 'saint-émilion', 'pomerol', 'sauternes'],
    tagline: "Aristocratic Left & Right Bank Châteaux",
    summary: "Surrounding the Gironde Estuary in southwest France, Bordeaux is the historical epicenter of fine wine commerce. Divided into the gravelly Left Bank (Cabernet Sauvignon dominant) and the clay-limestone Right Bank (Merlot & Cabernet Franc dominant), Bordeaux delivers power, structure, and centuries-long cellar life.",
    center: [44.8378, -0.5792],
    zoom: 9,
    bounds: [[44.20, -1.20], [45.50, 0.20]],
    heroGradient: 'linear-gradient(135deg, #190a12 0%, #380d22 50%, #d4af37 100%)',
    accentColor: '#4a0e17',

    terroir: {
      climate: "Temperate Maritime climate moderated by the Atlantic Ocean and the Gulf Stream current, shielded by the Landes pine forest.",
      soil: "Deep Quaternary gravel mounds (Left Bank) that retain heat and force vine roots deep; rich clay-limestone and iron-rich sand (Right Bank).",
      elevation: "Gently rolling hills from 5m to 100m above sea level.",
      riverInfluence: "The Garonne and Dordogne Rivers converge into the massive Gironde Estuary, buffering winter cold and nurturing botrytis in Sauternes."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 48, type: 'Red', role: "Provides authoritative tannins, cassis fruit, cedarwood nuances, and decades of aging potential." },
      { name: 'Merlot', percentage: 42, type: 'Red', role: "Imparts lush plum, velvety texture, rounded body, and early accessibility." },
      { name: 'Cabernet Franc', percentage: 7, type: 'Red', role: "Contributes fragrant violet florals, graphite, red berry brightness, and spicy lift." },
      { name: 'Petit Verdot', percentage: 3, type: 'Red', role: "Adds deep ink color, muscular tannin, and peppery backbone in small percentages." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.0,
      tannin: 8.5,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "10 - 50+ Years"
    },

    classification: {
      system: "Château-based Classifications (1855, Saint-Émilion, Graves, Crus Bourgeois)",
      description: 'Unlike Burgundy, Bordeaux classifies individual wine estates (Châteaux) rather than vineyard plots.',
      tiers: [
        { name: '1855 Classification (Left Bank Médoc & Sauternes)', detail: "Five Crus Classes headed by the First Growths (Lafite Rothschild, Latour, Margaux, Haut-Brion, Mouton Rothschild) and d'Yquem in Sauternes." },
        { name: 'Saint-Émilion Classification (Right Bank)', detail: "Ranked as Premier Grand Cru Classé (A & B) and Grand Cru Classé." },
        { name: 'Graves / Pessac-Léognan Classification', detail: "Classified for both Red and White wines since 1953/1959." },
        { name: 'Crus Bourgeois & Crus Artisans', detail: "High quality Médoc estates evaluated annually for exceptional value." }
      ]
    },

    flavorProfile: {
      primary: ['Blackcurrant (Cassis)', 'Dark Plum', 'Cedarwood', 'Graphite / Pencil Lead', 'Tobacco Leaf'],
      secondary: ['Cigar Box', 'Leather', 'Black Truffle', 'Dark Chocolate', 'Espresso'],
      palate: "Broad, commanding architecture with layered dark fruit, fine-grained aristocratic tannins, and aristocratic savory persistence."
    },

    foodPairings: [
      { category: 'Prime Red Meats', dish: "Prime Ribeye Steak with Bordelaise Sauce, Rack of Lamb with Rosemary, Chateaubriand", note: "Rich animal protein and fat bind seamlessly with Bordeaux\'s dense, youthful tannins." },
      { category: 'Game & Roasted Meats', dish: "Roast Duck with Blackberry Reduction, Venison Tenderloin, Braised Short Ribs", note: "Mature Bordeaux develops cedar, leather, and truffle notes that harmonize with wild game." },
      { category: 'Dessert Pairing (Sauternes)', dish: "Foie Gras Terrine, Roquefort Blue Cheese, Lemon Tart, Crème Brûlée", note: "Sauternes botrytized sweet wines create iconic contrasts with salty blue cheese and rich foie gras." }
    ],

    subRegions: [
      {
        id: 'left-bank-medoc',
        name: "Left Bank (Médoc & Haut-Médoc)",
        lat: 45.18,
        lng: -0.75,
        terroir: "Gravel outcrops along the western Gironde. The global cathedral of Cabernet Sauvignon.",
        focus: "Pauillac, Margaux, Saint-Julien, Saint-Estèphe, Haut-Médoc.",
        description: "Home to the legendary First Growths. Powerful, structured wines built for half a century in the cellar." },
      {
        id: 'right-bank-libournais',
        name: "Right Bank (Saint-Émilion & Pomerol)",
        lat: 44.89,
        lng: -0.19,
        terroir: "Limestone plateaus and blue clay pockets east of the Dordogne River.",
        focus: "Saint-Émilion Grand Cru, Pomerol, Lalande-de-Pomerol, Fronsac.",
        description: "Merlot and Cabernet Franc supremacy. Opulent, velvety, truffle-laced wines of sublime texture (Château Pétrus, Cheval Blanc)." },
      {
        id: 'graves-pessac',
        name: "Graves & Pessac-Léognan",
        lat: 44.75,
        lng: -0.60,
        terroir: "Ancient gravel beds just south of Bordeaux city, birthplace of claret.",
        focus: "Pessac-Léognan (Château Haut-Brion), Graves AOC.",
        description: "Produces smoky, mineral-drenched reds and world-class oaked Sauvignon Blanc/Sémillon whites." },
      {
        id: 'sauternais',
        name: "Sauternes & Barsac",
        lat: 44.53,
        lng: -0.34,
        terroir: "Cold Ciron spring waters meet warm Garonne, generating morning mist and noble rot (Botrytis cinerea).",
        focus: "Sémillon, Sauvignon Blanc: Château d'Yquem, Rieussec, Suduiraut, Climens.",
        description: "Golden nectar shimmering with apricot, honey, saffron, candied citrus, and buoyant acidity." }
    ]
  },

  'loire-valley': {
    id: 'loire-valley',
    name: "Loire Valley",
    country: 'France',
    countryCode: 'FR',
    aliases: ['loire', 'loire valley', 'sancerre', 'pouilly-fume', 'pouilly-fumé', 'chinon', 'bourgueil', 'saumur', 'saumur-champigny', 'vouvray', 'savennieres', 'savennières', 'muscadet'],
    tagline: "The Garden of France: Purity, Acidity & Diversity",
    summary: "Following France\'s longest river from central France to the Atlantic coast, the Loire Valley is a treasure trove of mineral-driven wines: flinty Sauvignon Blanc in Sancerre, honeyed Chenin Blanc in Vouvray, fragrant Cabernet Franc in Chinon, and saline Melon de Bourgogne in Muscadet.",
    center: [47.3500, 0.7000],
    zoom: 8,
    bounds: [[46.80, -1.80], [48.00, 3.20]],
    heroGradient: 'linear-gradient(135deg, #1b3b2b 0%, #2e5d44 50%, #d4af37 100%)',
    accentColor: '#2e5d44',

    terroir: {
      climate: "Oceanic Maritime in the west transitioning to Semi-Continental in the central and upper valley.",
      soil: "Tuffeau chalk (white porous limestone), Silex (flint), Kimmeridgian marl, and metamorphic schist.",
      elevation: "50m to 250m on slopes overlooking the Loire and its tributaries (Cher, Vienne, Indre).",
      riverInfluence: "The majestic Loire River acts as a thermal conductor, moderating temperature extremes."
    },

    grapes: [
      { name: 'Sauvignon Blanc', percentage: 30, type: 'White', role: "Pure, chiseled, gooseberry, citrus, and gunflint minerality in Sancerre and Pouilly-Fumé." },
      { name: 'Chenin Blanc', percentage: 28, type: 'White', role: "Incredible versatility from bone-dry to lusciously sweet and sparkling (Vouvray, Savennières)." },
      { name: 'Cabernet Franc', percentage: 25, type: 'Red', role: "Aromatic red wines of raspberry, violet, graphite, and bell pepper elegance (Chinon, Saumur-Champigny)." },
      { name: 'Melon de Bourgogne', percentage: 17, type: 'White', role: "Crisp, oyster-friendly, aged sur lie in Muscadet Sèvre-et-Maine." }
    ],

    structure: {
      body: 5.5,
      acidity: 9.0,
      tannin: 5.0,
      sweetness: 2,
      alcohol: 12.5,
      agingPotential: "3 - 25+ Years"
    },

    classification: {
      system: "AOC Appellation d'Origine Contrôlée with Premier & Grand Cru Cru Communaux",
      description: 'Regional and village AOCs celebrated for terroir fidelity.',
      tiers: [
        { name: 'Upper Loire (Centre-Loire)', detail: "Sancerre, Pouilly-Fumé, Menetou-Salon, Reuilly, Quincy." },
        { name: 'Touraine', detail: "Chinon, Bourgueil, Vouvray, Montlouis-sur-Loire, Cheverny." },
        { name: 'Anjou-Saumur', detail: "Saumur-Champigny, Savennières (Coulée de Serrant), Coteaux du Layon." },
        { name: 'Pays Nantais', detail: "Muscadet Sèvre-et-Maine with designated Crus Communaux (Clisson, Gorges)." }
      ]
    },

    flavorProfile: {
      primary: ['Crushed Flint / Silex', 'Lime Blossom', 'Green Pear', 'Red Currant', 'Chalky Mineral'],
      secondary: ['Chamomile', 'Beeswax', 'Graphite', 'Bell Pepper / Herbaceous', 'Honeyed Quince'],
      palate: "Racy, electric acidity with vibrant fruit purity, tension, and a long, saline, mineral-dusted finish."
    },

    foodPairings: [
      { category: 'Goat Cheeses', dish: "Crottin de Chavignol, Sainte-Maure de Touraine, Valençay with baguette", note: "The quintessential pairing: tangy goat cheese acidity matches Sancerre Sauvignon Blanc line-for-line." },
      { category: 'Shellfish & Seafood', dish: "Atlantic Oysters on the Half Shell, Pan-Seared Trout with Lemon Herbs, Moules Marinières", note: "Muscadet and dry Chenin Blanc provide crisp mineral cleansing for fresh shellfish." },
      { category: 'Poultry & Pork Charcuterie', dish: "Rillettes de Tours, Roast Pork Loin with Apples, Roasted Quail with Herbs", note: "Chinon and Saumur Cabernet Franc cut through rich rillettes and pork with bright red fruit and herbal freshness." }
    ],

    subRegions: [
      {
        id: 'upper-loire-sancerre',
        name: "Upper Loire (Sancerre & Pouilly-Fumé)",
        lat: 47.33,
        lng: 2.84,
        terroir: "Three soils: Terres Blanches (Kimmeridgian chalk), Caillottes (limestone pebbles), and Silex (flint).",
        focus: "Sauvignon Blanc & Pinot Noir: Sancerre, Pouilly-Fumé.",
        description: "Benchmark Sauvignon Blanc expressing laser precision, citrus oil, white flowers, and smoky flint." },
      {
        id: 'touraine-chinon',
        name: "Touraine & Chinon",
        lat: 47.16,
        lng: 0.24,
        terroir: "Tuffeau chalk cliffs and alluvial gravel terraces along the Vienne River.",
        focus: "Cabernet Franc (Chinon, Bourgueil) & Chenin Blanc (Vouvray).",
        description: "Silky, aromatic reds packed with raspberry and pencil lead alongside legendary dry-to-sweet Vouvray Chenin." },
      {
        id: 'anjou-saumur',
        name: "Anjou-Saumur & Savennières",
        lat: 47.38,
        lng: -0.65,
        terroir: "Schist and volcanic sandstone in Anjou; pure tuffeau limestone in Saumur.",
        focus: "Savennières (dry Chenin powerhouse), Saumur-Champigny (Cab Franc).",
        description: "Produces dry Chenin Blancs of immense longevity, electric acidity, and profound mineral depth." },
      {
        id: 'pays-nantais-muscadet',
        name: "Pays Nantais (Muscadet)",
        lat: 47.15,
        lng: -1.35,
        terroir: "Gneiss, granite, and gabbro metamorphic soils kissed by Atlantic ocean breezes.",
        focus: "Melon de Bourgogne: Muscadet Sèvre-et-Maine Sur Lie.",
        description: "Crisp, saline, yeasty and refreshing white wines handcrafted for seafood dining." }
    ]
  },

  'rhone': {
    id: 'rhone',
    name: "Rhône Valley",
    country: 'France',
    countryCode: 'FR',
    aliases: ['rhone', 'rhône', 'northern rhone', 'northern rhône', 'southern rhone', 'southern rhône', 'cote-rotie', 'côte-rôtie', 'hermitage', 'crozes-hermitage', 'cornas', 'saint-joseph', 'chateauneuf-du-pape', 'châteauneuf-du-pape', 'gigondas', 'vacqueyras', 'cotes du rhone'],
    tagline: "Granite Syrah Steep Slopes & Sun-Drenched Grenache Blends",
    summary: "Tracing the Rhône River south from Lyon to Avignon, the Rhône Valley is divided into two distinct worlds: the steep, granite terraces of the Northern Rhône, where Syrah reigns supreme, and the sun-soaked rolling hills of the Southern Rhône, famous for Grenache-led blends like Châteauneuf-du-Pape with its iconic galets roulés stones.",
    center: [44.7500, 4.8000],
    zoom: 9,
    bounds: [[44.00, 4.40], [45.60, 5.20]],
    heroGradient: 'linear-gradient(135deg, #1f0b18 0%, #3e1227 50%, #d4af37 100%)',
    accentColor: '#722f37',

    terroir: {
      climate: "Continental in the Northern Rhône with cold winters; Mediterranean in the Southern Rhône with warm, dry summers and intense sunshine.",
      soil: "Decomposed granite, schist, and clay in the north; large rounded quartz river stones (Galets Roulés), limestone, and sand in the south.",
      elevation: "100m to 450m on terraced hillside escarpments and plateau summits.",
      riverInfluence: "The Rhône River moderates temperatures, while the fierce Mistral wind dries vines, prevents disease, and concentrates berry flavors."
    },

    grapes: [
      { name: 'Syrah', percentage: 40, type: 'Red', role: "The sole red grape of the Northern Rhône: blackberry, cracked black pepper, smoked meat, olive tapenade, and violet." },
      { name: 'Grenache', percentage: 38, type: 'Red', role: "The king of the Southern Rhône: sweet kirsch, garrigue herbs, warmth, and plush mid-palate." },
      { name: 'Mourvèdre', percentage: 12, type: 'Red', role: "Adds gaminess, leather, dark color, and muscular aging tannins to southern blends." },
      { name: 'Viognier / Roussanne / Marsanne', percentage: 10, type: 'White', role: "Aromatic whites with apricot, honeysuckle, beeswax, and rich almond texture (Condrieu, Hermitage Blanc)." }
    ],

    structure: {
      body: 8.5,
      acidity: 6.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "AOC Cru System",
      description: 'Hierarchical pyramid from regional Côtes du Rhône up to the prestigious standalone Crus.',
      tiers: [
        { name: 'Northern Rhône Crus', detail: "Côte-Rôtie, Hermitage, Cornas, Saint-Joseph, Crozes-Hermitage, Condrieu, Château-Grillet, Saint-Péray." },
        { name: 'Southern Rhône Crus', detail: "Châteauneuf-du-Pape, Gigondas, Vacqueyras, Beaumes-de-Venise, Vinsobres, Rasteau, Tavel (legendary dry rosé)." },
        { name: 'Côtes du Rhône Villages', detail: "Designated villages (e.g., Cairanne, Plan de Dieu, Sablet) with higher quality standards." },
        { name: 'Côtes du Rhône AOC', detail: "The accessible regional base appellation across the entire valley." }
      ]
    },

    flavorProfile: {
      primary: ['Blackberry & Kirsch', 'Cracked Black Pepper', 'Garrigue (Wild Thyme/Rosemary)', 'Cured Meats', 'Violets'],
      secondary: ['Black Olive Tapenade', 'Smoked Bacon Fat', 'Leather', 'Licorice / Star Anise', 'Iron / Crushed Stone'],
      palate: "Heady, voluptuous, and spice-laden with muscular tannins, savory depth, and a warm, persistent herbal finish."
    },

    foodPairings: [
      { category: 'Grilled & Braised Lamb', dish: "Herb-Crusted Rack of Lamb, Braised Lamb Shank with Rosemary, Slow-roasted Pork Shoulder", note: "Syrah\'s black pepper and Grenache\'s garrigue herb aromas are born to be enjoyed with lamb." },
      { category: 'Game & Barbecue', dish: "Venison Stew, Wood-Fired Ribeye, Charred Sausages with Polenta, Duck Confit", note: "The smoky, savory undertones of Northern Rhône Syrah harmonize with grilled, charred meats." },
      { category: 'Provencal Dishes', dish: "Ratatouille with Goat Cheese, Beef Daube, Mushroom Risotto with Truffle Oil", note: "Herbes de Provence and Mediterranean vegetable stews share the soul of Southern Rhône wines." }
    ],

    subRegions: [
      {
        id: 'northern-rhone',
        name: "Northern Rhône (Septentrionale)",
        lat: 45.45,
        lng: 4.80,
        terroir: "Perilously steep granite terraces overlooking the river, worked by hand.",
        focus: "Syrah: Côte-Rôtie (The Roasted Slope), Hermitage, Cornas, Saint-Joseph; Viognier: Condrieu.",
        description: "Aristocratic, savory, smoked-meat and peppery Syrah wines of breathtaking precision and focus." },
      {
        id: 'southern-rhone-cdp',
        name: "Châteauneuf-du-Pape & Southern Rhône",
        lat: 44.05,
        lng: 4.83,
        terroir: "Plateaus covered with large smooth quartz stones (galets roulés) that radiate heat into the night.",
        focus: "Grenache-led blends (up to 13 permitted grape varieties): Châteauneuf-du-Pape, Gigondas, Vacqueyras.",
        description: "Sun-drenched, opulent, warming reds brimming with kirsch, wild lavender, and baking spices." }
    ]
  },

  'piedmont': {
    id: 'piedmont',
    name: "Piedmont (Piemonte)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['piedmont', 'piemonte', 'barolo', 'barbaresco', 'langhe', 'roero', 'alba', 'asti', 'valtellina', 'nebbiolo', 'barbera'],
    tagline: "The Land of Fog, Nebbiolo Kings & White Truffles",
    summary: "Nestled at the foot of the Italian Alps in northwestern Italy, Piedmont is Italy\'s culinary and fine-wine crown jewel. Famous for its autumn fog (nebbia) and limestone hillsides of the Langhe, Piedmont produces Barolo (\"The King of Wines and Wine of Kings\") and Barbaresco from the noble Nebbiolo grape.",
    center: [44.6500, 7.9500],
    zoom: 10,
    bounds: [[44.30, 7.50], [45.20, 8.80]],
    heroGradient: 'linear-gradient(135deg, #240a14 0%, #461328 50%, #d4af37 100%)',
    accentColor: '#5c102a',

    terroir: {
      climate: "Continental with Alpine protection from cold north winds; hot sunny summers, foggy autumns, and cold winters.",
      soil: "Tortonian blue marl (producing fragrant, softer Barolo in La Morra/Barolo) and Helvetian / Serravallian sandstone-limestone (producing muscular, long-lived Barolo in Serralunga/Monforte).",
      elevation: "200m to 550m on steep south and southwest hillside amphitheatres.",
      riverInfluence: "The Tanaro River separates the Langhe hills from the Roero sandy cliffs, shaping cool nighttime airflow."
    },

    grapes: [
      { name: 'Nebbiolo', percentage: 45, type: 'Red', role: "Pale garnet in color yet packing ferocious tannins, soaring acidity, and hypnotic aromas of tar, roses, cherry, and truffles." },
      { name: 'Barbera', percentage: 35, type: 'Red', role: "Vibrant, juicy, low in tannin with mouthwatering acidity and rich black cherry fruit (Barbera d'Alba & d'Asti)." },
      { name: 'Dolcetto', percentage: 12, type: 'Red', role: "Deep purple, dry, plummy, with pleasant bitter almond notes suited for everyday dining." },
      { name: 'Cortese & Arneis', percentage: 8, type: 'White', role: "Crisp, mineral white wines (Gavi and Roero Arneis) brimming with citrus and almond blossom." }
    ],

    structure: {
      body: 8.5,
      acidity: 9.0,
      tannin: 9.5,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "10 - 40+ Years"
    },

    classification: {
      system: "DOCG & DOC System with Menzione Geografica Aggiuntiva (MGA / Single Vineyards)",
      description: 'Piedmont boasts the highest number of DOCG appellations in Italy, with strict single-vineyard crus (MGAs).',
      tiers: [
        { name: 'Barolo DOCG (11 Communes)', detail: "Aged minimum 38 months (18 in wood); Riserva requires 62 months. Top crus: Cannubi, Brunate, Cerequio, Monprivato, Francia." },
        { name: 'Barbaresco DOCG (4 Communes)', detail: "Aged minimum 26 months (9 in wood); slightly warmer microclimate yields earlier elegance. Top crus: Asili, Rabajà, Martinenga." },
        { name: 'Barbera d\'Alba / d\'Asti Superiore DOCG', detail: "High-elevation, oak-aged Barbera of rich concentration." },
        { name: 'Langhe Nebbiolo DOC', detail: "Declassified crus and younger vines offering brilliant Barolo-like character with early approachability." }
      ]
    },

    flavorProfile: {
      primary: ['Sour Red Cherry', 'Dried Rose Petals', 'Tar / Asphalt', 'Orange Peel', 'Anise'],
      secondary: ['White Truffle', 'Leather', 'Sweet Tobacco', 'Forest Floor', 'Balsamic / Dried Herbs'],
      palate: "Aristocratic translucence with high-octane acidity, gripping fine-grained tannins, and an infinite savory, floral finish."
    },

    foodPairings: [
      { category: 'Truffles & Fresh Pasta', dish: "Tajarin Pasta with Butter and Shaved Alba White Truffles, Agnolotti del Plin", note: "Nebbiolo\'s natural earthy, mushroom, and truffle aromatics create an ethereal harmony with fresh truffles." },
      { category: 'Braised & Rich Meats', dish: "Brasato al Barolo (Beef braised in Barolo), Osso Buco with Polenta, Wild Boar Ragu", note: "Heavy collagen and meat fat are effortlessly sliced through by Barolo\'s formidable tannins and high acidity." },
      { category: 'Piedmontese Cheeses', dish: "Castelmagno DOP, Robiola di Roccaverano, Taleggio, Aged Parmigiano-Reggiano", note: "Crumbly, intense Castelmagno cheese paired with a glass of mature Nebbiolo is a legendary northern Italian tradition." }
    ],

    subRegions: [
      {
        id: 'barolo-langhe',
        name: "Barolo (The 11 Communes)",
        lat: 44.61,
        lng: 7.94,
        terroir: "Limestone marls and sandstone hills southwest of Alba.",
        focus: "Communes: La Morra, Barolo, Castiglione Falletto, Monforte d'Alba, Serralunga d'Alba.",
        description: "The King of Wines. Monforte and Serralunga produce powerhouse age-worthy monuments; La Morra offers silky rose elegance." },
      {
        id: 'barbaresco',
        name: "Barbaresco",
        lat: 44.72,
        lng: 8.08,
        terroir: "Calcareous blue-grey marls along the Tanaro River northeast of Alba.",
        focus: "Communes: Barbaresco, Neive, Treiso, San Rocco Seno d'Elvio.",
        description: "The Queen to Barolo\'s King. Warmer soils bring forward silky perfumes, refined tannins, and earlier charm." },
      {
        id: 'roero-alto-piemonte',
        name: "Roero & Alto Piemonte",
        lat: 45.60,
        lng: 8.25,
        terroir: "Sandy cliffs in Roero; volcanic porphyry and Alpine foothills in Gattinara/Ghemme.",
        focus: "Arneis, Nebbiolo (Spanna): Gattinara DOCG, Ghemme DOCG, Roero DOCG.",
        description: "Northern Alpine Nebbiolo displaying high-altitude mineral crunch, alpine herbs, and vibrant cranberry fruit." }
    ]
  },

  'tuscany': {
    id: 'tuscany',
    name: "Tuscany (Toscana)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['tuscany', 'toscana', 'chianti', 'chianti classico', 'montalcino', 'brunello di montalcino', 'rosso di montalcino', 'bolgheri', 'montepulciano', 'vino nobile', 'maremma', 'super tuscan', 'toscana igt'],
    tagline: "Sun-Drenched Cypress Hills, Sangiovese & Super Tuscans",
    summary: "From the medieval cypress-lined hills of Chianti Classico and Montalcino to the sun-bathed coastal plains of Bolgheri, Tuscany is Italy\'s most iconic wine landscape. Here, Sangiovese produces wines of bright cherry, leather, and herbal vitality, while coastal estates craft world-famous Bordeaux-style Super Tuscans (Sassicaia, Ornellaia).",
    center: [43.4000, 11.2000],
    zoom: 9,
    bounds: [[42.40, 10.00], [44.10, 12.10]],
    heroGradient: 'linear-gradient(135deg, #1c150b 0%, #44280f 50%, #d4af37 100%)',
    accentColor: '#8b0000',

    terroir: {
      climate: "Mediterranean on the coast transitioning to warm Continental inland with high diurnal temperature swings that preserve acidity.",
      soil: "Galestro (crumbly clay schist), Alberese (hard limestone), and marine clay-sand in the interior; alluvial gravel and clay in coastal Bolgheri.",
      elevation: "150m to 600m on rolling Tuscan hillsides.",
      riverInfluence: "The Arno and Ombrone River valleys create airflow channels between the Apennine Mountains and the Tyrrhenian Sea."
    },

    grapes: [
      { name: 'Sangiovese', percentage: 65, type: 'Red', role: "The soul of Tuscany: tart red cherry, leather, dried oregano, savory tea, high acidity, and firm tannins." },
      { name: 'Cabernet Sauvignon & Merlot', percentage: 22, type: 'Red', role: "Super Tuscan components delivering plush dark fruit, cassis, and chocolate richness on coastal soils." },
      { name: 'Cabernet Franc & Syrah', percentage: 8, type: 'Red', role: "Spicy, floral aromatics in modern coastal blends." },
      { name: 'Trebbiano & Vermentino', percentage: 5, type: 'White', role: "Crisp, citrusy coastal whites and traditional sweet Vin Santo dessert wine." }
    ],

    structure: {
      body: 8.0,
      acidity: 8.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.0,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "DOCG, DOC & Toscana IGT (Super Tuscan)",
      description: 'Strict traditional DOCGs alongside innovative IGT categories.',
      tiers: [
        { name: 'Brunello di Montalcino DOCG', detail: "100% Sangiovese Grosso aged minimum 5 years (2 in oak) before release; Riserva requires 6 years." },
        { name: 'Chianti Classico DOCG (Gran Selezione / Riserva)', detail: "The historic heartland between Florence and Siena with new UGA sub-zones (e.g. Panzano, Radda, Gaiole, Castellina)." },
        { name: 'Bolgheri DOC & Bolgheri Sassicaia DOCG', detail: "Tuscan coast home of Bordeaux blends (Sassicaia, Ornellaia, Masseto)." },
        { name: 'Vino Nobile di Montepulciano DOCG', detail: "Sangiovese (Prugnolo Gentile) aged in large Slavonian oak casks." }
      ]
    },

    flavorProfile: {
      primary: ['Tart Red Cherry', 'Blood Orange', 'Dried Oregano / Rosemary', 'Leather', 'Ripe Plum'],
      secondary: ['Balsamic Reduction', 'Sun-Dried Tomatoes', 'Cured Tobacco', 'Cacao', 'Crushed Clay / Terra Cotta'],
      palate: "Energetic, savory, and structured with mouth-watering acidity, rustic fine tannins, and a long herb-tinged finish."
    },

    foodPairings: [
      { category: 'Iconic Tuscan Steaks', dish: "Bistecca alla Fiorentina (Thick-cut Florentine T-Bone grilled over wood embers)", note: "Sangiovese\'s high acidity and firm tannins slice cleanly through the rich, rare beef." },
      { category: 'Pasta with Game Ragu', dish: "Pappardelle al Cinghiale (Broad pasta ribbons with wild boar sauce), Pici al Ragu", note: "Rich tomato, rosemary, and wild boar savory sauce harmonizes with Tuscan herbal spice." },
      { category: 'Aged Cheeses & Truffles', dish: "Pecorino Toscano Stagionato with honey, White Bean and Cavolo Nero Soup (Ribollita)", note: "Earthy sheep\'s milk Pecorino and classic Tuscan olive oils sing alongside Chianti Classico." }
    ],

    subRegions: [
      {
        id: 'chianti-classico',
        name: "Chianti Classico (Gallo Nero)",
        lat: 43.55,
        lng: 11.30,
        terroir: "Stony Galestro schist and Alberese limestone hills between Florence and Siena.",
        focus: "Sangiovese: Gran Selezione, Riserva; UGAs: Panzano, Radda, Gaiole, Castellina, Greve.",
        description: "Vibrant, perfumed, high-altitude Sangiovese with bright red cherry, floral violet, and chiseled limestone acidity." },
      {
        id: 'montalcino',
        name: "Montalcino (Brunello)",
        lat: 43.05,
        lng: 11.48,
        terroir: "Sun-drenched hill crowned by medieval fortress with varied microclimates and rocky soils.",
        focus: "100% Sangiovese Grosso: Brunello di Montalcino, Rosso di Montalcino.",
        description: "Power and longevity. Darker cherry, leather, dried tobacco, and balsamic depth built for decades in the cellar." },
      {
        id: 'bolgheri-coast',
        name: "Bolgheri & Tuscan Coast",
        lat: 43.23,
        lng: 10.60,
        terroir: "Maritime gravel beds and clay plains facing the Mediterranean breezes.",
        focus: "Super Tuscans: Cabernet Sauvignon, Merlot, Cabernet Franc (Sassicaia, Ornellaia, Guado al Tasso).",
        description: "Lush, Mediterranean sunshine meets Bordeaux aristocrats. Velvet tannins, cassis, cedar, and sage." }
    ]
  },

  'california': {
    id: 'california',
    name: "California (Napa & Sonoma)",
    country: 'USA',
    countryCode: 'US',
    aliases: ['california', 'napa valley', 'napa', 'sonoma', 'sonoma county', 'sonoma coast', 'russian river valley', 'santa cruz mountains', 'central coast', 'paso robles', 'oakville', 'rutherford', 'stags leap', 'howell mountain', 'mt. veeder', 'washington', 'columbia valley'],
    tagline: "Sun-Kissed Valleys, Coastal Fogs & Cult Cabernets",
    summary: "Blessed with brilliant Mediterranean sunshine and cooling marine fogs drawn from the Pacific Ocean, California produces some of the most opulent, opulent, and globally revered wines. Napa Valley stands as the world capital for plush, powerful Cabernet Sauvignon, while Sonoma Coast, Russian River, and the Santa Cruz Mountains craft ethereal Pinot Noir and Chardonnay.",
    center: [38.4500, -122.3500],
    zoom: 9,
    bounds: [[36.80, -123.50], [39.20, -121.80]],
    heroGradient: 'linear-gradient(135deg, #1b261b 0%, #2f4530 50%, #d4af37 100%)',
    accentColor: '#c29b38',

    terroir: {
      climate: "Mediterranean with dry, sunny summers. Cooled by morning marine layer fog drawn through the Golden Gate and Petaluma Gap, burning off by midday.",
      soil: "Vastly diverse: volcanic tufa and basalt on mountain slopes; alluvial gravel fans (Rutherford Bench, Oakville) and sedimentary loam on the valley floor; goldridge sandy loam in Sonoma.",
      elevation: "Sea level in Carneros to over 800m (2,600ft) on Howell Mountain and Mt. Veeder above the fog line.",
      riverInfluence: "The Napa and Russian Rivers carve valley paths and provide morning drainage channels."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 42, type: 'Red', role: "The crown jewel: crème de cassis, blackberry liqueur, mocha, sweet French oak spice, and plush, fine-grained tannins." },
      { name: 'Chardonnay', percentage: 25, type: 'White', role: "From creamy, buttery golden styles to crisp, ocean-cooled, mineral-driven coastal bottlings." },
      { name: 'Pinot Noir', percentage: 18, type: 'Red', role: "Rich, luscious black cherry, cola, sassafras, and violet aromatics in Sonoma Coast and Russian River Valley." },
      { name: 'Zinfandel / Syrah', percentage: 15, type: 'Red', role: "Heritage old-vine Zinfandel with brambly blackberry, pepper, and velvet warmth." }
    ],

    structure: {
      body: 9.0,
      acidity: 6.5,
      tannin: 8.0,
      sweetness: 2,
      alcohol: 14.8,
      agingPotential: "5 - 30+ Years"
    },

    classification: {
      system: "AVA (American Viticultural Area)",
      description: 'Federally designated geographical boundaries defined by distinct climate, soil, and elevation.',
      tiers: [
        { name: 'Napa Valley AVAs (16 Sub-AVAs)', detail: "Valley Floor: Oakville, Rutherford, Stags Leap District, Yountville, Calistoga. Mountain: Howell Mountain, Mt. Veeder, Spring Mountain, Diamond Mountain, Atlas Peak." },
        { name: 'Sonoma County AVAs', detail: "Sonoma Coast, Russian River Valley, Alexander Valley, Dry Creek Valley, Moon Mountain, Fort Ross-Seaview." },
        { name: 'Santa Cruz Mountains AVA', detail: "High-elevation mountain ridge producing legendary balanced, mineral Cabernets (Ridge Monte Bello) and Chardonnays." },
        { name: 'Central Coast & Paso Robles', detail: "Paso Robles (Cabernet & Rhône varieties), Santa Barbara (Sta. Rita Hills Pinot Noir)." }
      ]
    },

    flavorProfile: {
      primary: ['Crème de Cassis', 'Ripe Blackberry', 'Dark Chocolate / Mocha', 'Vanilla Bean / French Oak', 'Black Cherry'],
      secondary: ['Rutherford Dust (Clay/Cocoa)', 'Espresso', 'Cedar / Cigar Box', 'Eucalyptus / Mint', 'Graphite'],
      palate: "Luxuriously full-bodied with seamless, velvety tannins, lavish black fruit concentration, and a lingering cocoa-spice finish."
    },

    foodPairings: [
      { category: 'Prime Steaks & Wagyu', dish: "Charbroiled Prime Porterhouse Steak, A5 Miyazaki Wagyu with Truffle Jus, Grilled Ribeye", note: "Napa Cabernet\'s immense fruit weight and polished tannins match the intensity of marbled prime beef." },
      { category: 'Braised Dishes & Short Ribs', dish: "Slow-Braised Cabernet Short Ribs with Polenta, Rack of Lamb with Blackberry Glaze", note: "Rich reduction sauces and tender meats complement the wine\'s dark berry and mocha notes." },
      { category: 'Salmon & Duck (Sonoma Pinot)', dish: "Pan-Seared King Salmon with Morel Mushrooms, Crispy Duck Breast with Cherry Demi-Glace", note: "Russian River and Sonoma Coast Pinot Noir pairs flawlessly with fatty salmon and duck." }
    ],

    subRegions: [
      {
        id: 'napa-valley-floor',
        name: "Napa Valley (Valley Floor AVAs)",
        lat: 38.43,
        lng: -122.38,
        terroir: "Alluvial gravel fans along the valley floor between the Mayacamas and Vaca ranges.",
        focus: "Cabernet Sauvignon: Oakville (Screaming Eagle, Harlan, Opus One), Rutherford, Stags Leap District.",
        description: "The golden epicenter of American wine. Opulent, decadent, cassis-drenched Cabernets of legendary stature." },
      {
        id: 'napa-mountain-avas',
        name: "Napa Valley Mountain AVAs",
        lat: 38.56,
        lng: -122.45,
        terroir: "Steep volcanic mountain slopes elevated high above the valley fog line.",
        focus: "Cabernet Sauvignon: Howell Mountain, Mt. Veeder, Spring Mountain, Diamond Mountain.",
        description: "Intense sun exposure and sparse mountain soils create brooding, inky, iron-inflected Cabernets of immense aging power." },
      {
        id: 'sonoma-coast-rrv',
        name: "Sonoma Coast & Russian River Valley",
        lat: 38.48,
        lng: -122.85,
        terroir: "Cool ocean winds and Goldridge sandy loam kissed by dense Pacific morning fogs.",
        focus: "Pinot Noir & Chardonnay: Russian River Valley, Sonoma Coast, Fort Ross-Seaview.",
        description: "Ethereal, ocean-cooled Pinot Noir bursting with wild berries and vibrant, mineral-laced Chardonnay." },
      {
        id: 'santa-cruz-mountains',
        name: "Santa Cruz Mountains",
        lat: 37.15,
        lng: -122.05,
        terroir: "Rugged forested coastal ridge (up to 800m elevation) above Silicon Valley.",
        focus: "Cabernet Sauvignon & Chardonnay: Ridge Monte Bello, Mount Eden.",
        description: "Historic, cool-climate mountain terroir yielding structured, European-style Cabernets that age for half a century." }
    ]
  },

  'oregon': {
    id: 'oregon',
    name: "Oregon (Willamette Valley)",
    country: 'USA',
    countryCode: 'US',
    aliases: ['oregon', 'willamette valley', 'willamette', 'dundee hills', 'ribbon ridge', 'yamhill-carlton', 'eola-amity hills', 'chehalem mountains', 'mcminnville', 'van duzer corridor'],
    tagline: "Pacific Northwest Pinot Noir Precision & Volcanic Soils",
    summary: "Located on the same 45th parallel north as Burgundy, Oregon\'s Willamette Valley is world-renowned for its cool-climate Pinot Noir and Chardonnay. Nestled between the Cascade Mountains and Coast Range, volcanic Jory soils and marine sedimentary beds produce wines of electric acidity, wild cranberry, and damp forest floor aromatics.",
    center: [45.2000, -123.1000],
    zoom: 10,
    bounds: [[44.50, -123.60], [45.60, -122.60]],
    heroGradient: 'linear-gradient(135deg, #13241b 0%, #223e30 50%, #d4af37 100%)',
    accentColor: '#30644b',

    terroir: {
      climate: "Cool Maritime / Mediterranean with wet, mild winters and warm, dry, luminous summers with long daylight hours.",
      soil: "Volcanic basalt (red Jory clay in Dundee Hills), ancient marine sedimentary sandstone (Willakenzie in Ribbon Ridge/Yamhill-Carlton), and windblown loess (Laurelwood).",
      elevation: "60m to 350m on gentle rolling hillsides.",
      riverInfluence: "The Willamette River flows northward, while the Van Duzer Corridor funnels cool Pacific ocean winds nightly."
    },

    grapes: [
      { name: 'Pinot Noir', percentage: 70, type: 'Red', role: "Vibrant red cherry, raspberry, pomegranate, earthy forest floor, truffle, and fine, mineral-etched tannins." },
      { name: 'Chardonnay', percentage: 20, type: 'White', role: "Chiseled, saline, citrus-driven, and hazelnut-scented whites rivaling the finest white Burgundies." },
      { name: 'Pinot Gris', percentage: 10, type: 'White', role: "Crisp, orchard-fruit forward, refreshing white wine." }
    ],

    structure: {
      body: 6.0,
      acidity: 8.5,
      tannin: 6.0,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "5 - 25+ Years"
    },

    classification: {
      system: "Willamette Valley Nested AVAs",
      description: 'Recognized for precise geological sub-appellations.',
      tiers: [
        { name: 'Dundee Hills AVA', detail: "Famous iron-rich red volcanic Jory soils producing silky, perfumed red cherry and spice Pinot Noir." },
        { name: 'Ribbon Ridge & Yamhill-Carlton AVAs', detail: "Ancient marine sediment soils yielding darker, black fruit, structured, and savory/minerally Pinots." },
        { name: 'Eola-Amity Hills AVA', detail: "Direct path of the cool Van Duzer oceanic winds delivering piercing acidity, dark fruit, and thick skins." },
        { name: 'Chehalem Mountains & Laurelwood District', detail: "Highest elevation range with diverse loess and volcanic soils." }
      ]
    },

    flavorProfile: {
      primary: ['Wild Cranberry', 'Red Rainier Cherry', 'Pomegranate', 'Blood Orange', 'Crushed Wet Stone'],
      secondary: ['Damp Forest Floor (Pacific Conifer)', 'Chanterelle Mushrooms', 'Black Tea Leaf', 'Cardamom', 'Clove'],
      palate: "Silken, bright, and energetic with singing red fruit, crunchy acidity, and an authentic earthy, forest-floor finish."
    },

    foodPairings: [
      { category: 'Wild Pacific Salmon', dish: "Cedar-Planked Wild Chinook Salmon, Pan-Crisped Steelhead Trout with Pinot Butter", note: "The quintessential Pacific Northwest pairing: salmon\'s rich omega-3 oils marry Oregon Pinot Noir\'s bright acidity." },
      { category: 'Wild Mushrooms & Duck', dish: "Seared Duck Breast with Marionberry Demi, Morel and Chanterelle Risotto, Roasted Pork Chop", note: "Earth-driven Oregon Pinot highlights wild chanterelle mushrooms and tender duck meat." },
      { category: 'Cheeses', dish: "Rogue River Blue (Oregon), Cowgirl Creamery Mt Tam, Aged Gruyère", note: "Artisanal Pacific Northwest cheeses shine alongside both Oregon Pinot Noir and Chardonnay." }
    ],

    subRegions: [
      {
        id: 'dundee-hills',
        name: "Dundee Hills AVA",
        lat: 45.28,
        lng: -123.01,
        terroir: "Red volcanic Jory clay loam, the birthplace of Oregon fine wine.",
        focus: "Pinot Noir: Domaine Drouhin, Eyrie Vineyards, Beaux Frères.",
        description: "Silky, elegant, floral Pinot Noir filled with bright red cherries and warm baking spices." },
      {
        id: 'ribbon-ridge-yamhill',
        name: "Ribbon Ridge & Yamhill-Carlton",
        lat: 45.33,
        lng: -123.13,
        terroir: "Ancient ocean floor marine sedimentary sandstone (Willakenzie soils).",
        focus: "Pinot Noir & Chardonnay: Beaux Frères, Shea Vineyard, Ken Wright.",
        description: "Darker, broody, brambly black fruits, iron minerality, and fine-grained muscular tannins." },
      {
        id: 'eola-amity-hills',
        name: "Eola-Amity Hills AVA",
        lat: 45.05,
        lng: -123.10,
        terroir: "Volcanic basalt and marine sediment cooled by daily Pacific Ocean gales.",
        focus: "Pinot Noir & Chardonnay: Cristom, Walter Scott, Lingua Franca.",
        description: "Electric acidity, intense structure, citrus oil, and saline tension." }
    ]
  },

  'germany-mosel': {
    id: 'germany-mosel',
    name: "Mosel (Mosel-Saar-Ruwer)",
    country: 'Germany',
    countryCode: 'DE',
    aliases: ['mosel', 'mosel saar ruwer', 'mosel-saar-ruwer', 'saar', 'ruwer', 'bernkastel', 'piesport', 'wehlen', 'urzig', 'ürzig', 'nahe', 'pfalz', 'rheingau', 'württemberg', 'alsace'],
    tagline: "Perilous Blue Slate Slopes & Liquid Crystal Riesling",
    summary: "Carving a dizzying, winding path through southwestern Germany, the Mosel River valley features some of the steepest vineyard slopes in the world (up to 70-degree gradients). Here, blue, red, and grey Devonian slate soils produce Riesling of featherweight lightness, electric acidity, and profound mineral complexity.",
    center: [49.9500, 7.0500],
    zoom: 10,
    bounds: [[49.60, 6.40], [50.40, 7.60]],
    heroGradient: 'linear-gradient(135deg, #102636 0%, #1e3f57 50%, #d4af37 100%)',
    accentColor: '#3a759e',

    terroir: {
      climate: "Cool Northern Continental moderated by the deep Mosel, Saar, and Ruwer river valleys, capturing and reflecting sunlight.",
      soil: "Blue, Red, and Grey Devonian Slate. The slate absorbs daytime heat and radiates it back to vines overnight.",
      elevation: "100m to 350m on vertigo-inducing amphitheatre slopes worked entirely by hand on single stakes.",
      riverInfluence: "The winding river acts as a giant heat-storing mirror protecting against frost."
    },

    grapes: [
      { name: 'Riesling', percentage: 90, type: 'White', role: "The supreme grape: green apple, lime blossom, white peach, slate minerality, petrol, and laser-like acidity." },
      { name: 'Pinot Noir (Spätburgunder)', percentage: 7, type: 'Red', role: "Delicate, cool-climate red wines of aromatic red cherry and spice." },
      { name: 'Elbling & Müller-Thurgau', percentage: 3, type: 'White', role: "Historic, high-acid local varieties." }
    ],

    structure: {
      body: 3.5,
      acidity: 10.0,
      tannin: 1.0,
      sweetness: 4,
      alcohol: 8.5,
      agingPotential: "5 - 50+ Years"
    },

    classification: {
      system: "Prädikatswein (Ripeness Levels) & VDP Grosse Lage",
      description: 'Combines traditional grape sugar ripeness with elite single-vineyard terroir rankings.',
      tiers: [
        { name: 'VDP.Grosse Lage (Grand Cru)', detail: "Top vineyard sites producing dry Grosses Gewächs (GG) and sublime noble sweet wines (e.g. Wehlener Sonnenuhr, Ürziger Würzgarten, Scharzhofberger)." },
        { name: 'Kabinett', detail: "Light, delicate, low alcohol (7-10%), crystalline acidity, off-dry or dry (Trocken)." },
        { name: 'Spätlese & Auslese', detail: "Late harvest and selected bunches offering richer peach, honey, and slate complexity." },
        { name: 'Beerenauslese (BA) & Trockenbeerenauslese (TBA)', detail: "Botrytized noble dessert wines of immortal longevity." }
      ]
    },

    flavorProfile: {
      primary: ['Green Apple', 'Key Lime', 'White Peach', 'Jasmine / Elderflower', 'Crushed Slate / Gunflint'],
      secondary: ['Honeycomb', 'Candied Ginger', 'Petrol / Kerosene (Mature)', 'Pink Grapefruit', 'Beeswax'],
      palate: "Weightless, dancing acidity with a miraculous tension between natural sweetness and diamond-cut slate minerality."
    },

    foodPairings: [
      { category: 'Spicy & Asian Cuisines', dish: "Thai Green Curry with Prawns, Sichuan Spicy Dumplings, Vietnamese Pork Belly Pho", note: "Riesling\'s residual sweetness and high acidity are the world\'s best pairing for spicy chili heat." },
      { category: 'Pork & Charcuterie', dish: "Crisp Roast Pork Knuckle, Smoked Sausages with Sauerkraut, Prosciutto and Melon", note: "High natural acidity effortlessly cuts through rich pork fat and salt." },
      { category: 'Spiced Cheeses & Desserts', dish: "Washed-Rind Munster Cheese with Caraway, Apple Tarte Tatin, Foie Gras", note: "Spätlese and Auslese Riesling provide rich fruit and bright acid lift for soft cheeses." }
    ],

    subRegions: [
      {
        id: 'middle-mosel-bernkastel',
        name: "Middle Mosel (Mittelmosel)",
        lat: 49.91,
        lng: 7.07,
        terroir: "Deep blue Devonian slate on famous south-facing river bends.",
        focus: "Wehlener Sonnenuhr, Ürziger Würzgarten, Bernkasteler Doctor, Piesporter Goldtröpfchen.",
        description: "The historic heart of Mosel: opulent white peach, exotic spice, and pure slate electricity." },
      {
        id: 'saar-ruwer',
        name: "Saar & Ruwer Valleys",
        lat: 49.63,
        lng: 6.55,
        terroir: "Cooler tributary valleys with grey slate soils.",
        focus: "Scharzhofberger (Egon Müller), Karthauserhofberg.",
        description: "Laser-focused, steely, crystalline Riesling of unbelievable precision, green apple, and lime minerality." }
    ]
  },

  'spain-rioja': {
    id: 'spain-rioja',
    name: "Spain (Rioja & Catalunya)",
    country: 'Spain',
    countryCode: 'ES',
    aliases: ['spain', 'rioja', 'catalunya', 'catalonia', 'priorat', 'galicia', 'rias baixas', 'rías baixas', 'ribera del duero', 'penedes', 'penedès'],
    tagline: "Old-Vine Tempranillo, Llicorella Schist & Atlantic Albariño",
    summary: "From the historic oak-aged Tempranillo cellars of Rioja and Ribera del Duero to the terraced black llicorella slate of Priorat and the breezy granite coast of Rías Baixas in Galicia, Spain offers an incredible spectrum of soulful, food-friendly wines steeped in centuries of heritage.",
    center: [42.4500, -2.5000],
    zoom: 9,
    bounds: [[41.00, -8.80], [43.50, 3.00]],
    heroGradient: 'linear-gradient(135deg, #2b1111 0%, #4a1919 50%, #d4af37 100%)',
    accentColor: '#962d2d',

    terroir: {
      climate: "Continental with Atlantic cooling in Rioja Alta and Galicia; Mediterranean heat in Catalunya/Priorat.",
      soil: "Clay-limestone (arcillo-calcáreo) and ferrous clay in Rioja; black quartzite slate (Llicorella) in Priorat; decomposed granite in Galicia.",
      elevation: "300m to 800m on plateau terraces along the Ebro River.",
      riverInfluence: "The Ebro River provides life-giving hydration across northern Spain."
    },

    grapes: [
      { name: 'Tempranillo', percentage: 60, type: 'Red', role: "The king of Spanish reds: red cherry, leather, dill, vanilla, tobacco leaf, and fine savory tannins." },
      { name: 'Garnacha & Cariñena', percentage: 22, type: 'Red', role: "Old-vine power, wild herbs, black slate minerality, and liquorice in Priorat." },
      { name: 'Albariño & Godello', percentage: 12, type: 'White', role: "Vibrant, saline, peach-and-citrus whites in Galicia (Rías Baixas)." },
      { name: 'Graciano & Mazuelo', percentage: 6, type: 'Red', role: "Aromatic lift and deep color in Rioja Gran Reserva blends." }
    ],

    structure: {
      body: 8.0,
      acidity: 7.5,
      tannin: 7.5,
      sweetness: 1,
      alcohol: 14.0,
      agingPotential: "5 - 35+ Years"
    },

    classification: {
      system: "DOCa / DO Oak Aging Classifications (Crianza, Reserva, Gran Reserva)",
      description: 'Famous for mandatory cellar aging in oak casks and bottle prior to market release.',
      tiers: [
        { name: 'Gran Reserva', detail: "Aged minimum 5 years (at least 2 in oak casks and 2 in bottle) for sublime leather, tobacco, and dried fruit complexity." },
        { name: 'Reserva', detail: "Aged minimum 3 years (at least 1 in oak casks and 6 months in bottle)." },
        { name: 'Crianza', detail: "Aged minimum 2 years (at least 1 in oak)." },
        { name: 'Priorat DOCa (Vi de Vila / Gran Vinya Classificada)', detail: "Terroir-driven village and single vineyard classifications on steep llicorella slate." }
      ]
    },

    flavorProfile: {
      primary: ['Ripe Red Cherry', 'Black Plum', 'Leather / Saddle Leather', 'Vanilla & Coconut (American Oak)', 'Tobacco Leaf'],
      secondary: ['Dried Figs', 'Cacao', 'Dill / Cedar', 'Crushed Slate Minerality', 'Balsamic / Roasted Herbs'],
      palate: "Harmonious, savory, and supple with polished tannins, dried fruit complexity, and a long, warm, leather-and-spice finish."
    },

    foodPairings: [
      { category: 'Spanish Jamón & Tapas', dish: "Jamón Ibérico de Bellota, Manchego Cheese, Patatas Bravas, Croquetas de Jamón", note: "The rich nutty fat of acorn-fed Jamón Ibérico pairs seamlessly with oak-aged Rioja Reserva." },
      { category: 'Roast Lamb & Suckling Pig', dish: "Cordero Asado (Slow-roasted milk-fed lamb), Cochinillo Asado, Grilled Chorizo", note: "Tempranillo\'s savory acidity and leather notes balance roasted lamb and crispy suckling pig." },
      { category: 'Seafood (Albariño)', dish: "Grilled Octopus with Paprika (Pulpo a la Gallega), Garlic Shrimp (Gambas al Ajillo), Paella", note: "Rías Baixas Albariño\'s bracing saline minerality and citrus cut through garlic and seafood oils." }
    ],

    subRegions: [
      {
        id: 'rioja-alta-alavesa',
        name: "Rioja (Alta & Alavesa)",
        lat: 42.48,
        lng: -2.75,
        terroir: "Clay-limestone slopes on the foothills of the Sierra de Cantabria.",
        focus: "Tempranillo: Haro, San Vicente de la Sonsierra, Laguardia.",
        description: "The premier classic sub-zones of Rioja. Elegance, red fruit purity, fine acidity, and iconic American/French oak aging." },
      {
        id: 'priorat-catalunya',
        name: "Priorat & Catalunya (Llicorella Slate)",
        lat: 41.18,
        lng: 0.80,
        terroir: "Black and brown slate (Llicorella) on steep mountain terraces.",
        focus: "Garnacha & Cariñena (Old Vines): Gratallops, Porrera, Escaladei.",
        description: "Monumental, concentrated, inky reds packed with crushed slate, black fruits, and wild Mediterranean herbs." },
      {
        id: 'galicia-rias-baixas',
        name: "Galicia (Rías Baixas)",
        lat: 42.45,
        lng: -8.70,
        terroir: "Granitic soils pergolas overlooking the cool Atlantic estuaries (Rías).",
        focus: "Albariño: Val do Salnés, O Rosal, Condado do Tea.",
        description: "Vibrant, saline, crisp white wines glistening with peach, grapefruit, sea spray, and oyster-shell minerality." }
    ]
  },

  'chile-maipo': {
    id: 'chile-maipo',
    name: "Chile (Maipo Valley)",
    country: 'Chile',
    countryCode: 'CL',
    aliases: ['chile', 'maipo valley', 'maipo', 'puente alto', 'pirque', 'alto maipo'],
    tagline: "Andean Mountain Breezes & Aristocratic Cabernet Sauvignon",
    summary: "Resting immediately south of Santiago between the towering Andes Mountains and the Coastal Range, the Maipo Valley is the historic heart of Chilean fine wine. In particular, the gravelly terraces of Alto Maipo (Puente Alto, Pirque) craft world-class Cabernet Sauvignon and Bordeaux blends (Almaviva, Don Melchor, Seña) marked by eucalyptus, mint, cassis, and silky tannins.",
    center: [-33.7000, -70.7000],
    zoom: 10,
    bounds: [[-34.10, -71.20], [-33.30, -70.20]],
    heroGradient: 'linear-gradient(135deg, #1b1626 0%, #2f2240 50%, #d4af37 100%)',
    accentColor: '#523a78',

    terroir: {
      climate: "Mediterranean with warm, dry, luminous summers and cool nighttime breezes descending from the snow-capped Andes.",
      soil: "Porous alluvial gravel, clay, and sand terraces along the Maipo River with extraordinary natural drainage.",
      elevation: "400m to 850m in Alto Maipo against the Andean foothills.",
      riverInfluence: "The Maipo River channels glacier meltwater and cooling thermal currents."
    },

    grapes: [
      { name: 'Cabernet Sauvignon', percentage: 65, type: 'Red', role: "The benchmark: pure cassis, black plum, eucalyptus, mint, tobacco, and polished tannins." },
      { name: 'Carménère', percentage: 20, type: 'Red', role: "Chile\'s signature variety: lush blueberry, cocoa, roasted red pepper, and silky spice." },
      { name: 'Cabernet Franc & Syrah', percentage: 15, type: 'Red', role: "Adds floral violet lift, graphite, and savory structure to top blends." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.0,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.5,
      agingPotential: "8 - 30+ Years"
    },

    classification: {
      system: "DO Denominación de Origen with Viticultural Distinctions",
      description: 'Classified into Andes (Andean slopes), Entre Cordilleras (Central valley), and Costa (Coastal breezes).',
      tiers: [
        { name: 'Alto Maipo (Puente Alto & Pirque)', detail: "The premier terroir for icon wines including Almaviva, Don Melchor, and Chadwicks." },
        { name: 'Central Maipo', detail: "Warmer alluvial plains yielding generous, approachable Carménère and Cabernet." },
        { name: 'Maipo Bajo (Isla de Maipo)', detail: "Coastal-influenced sector with fresher, aromatic profiles." }
      ]
    },

    flavorProfile: {
      primary: ['Cassis (Blackcurrant)', 'Blackberry Jam', 'Eucalyptus / Fresh Mint', 'Dark Cocoa', 'Cedarwood'],
      secondary: ['Graphite / Pencil Shavings', 'Tobacco Leaf', 'Espresso Bean', 'Roasted Bell Pepper', 'Baking Spices'],
      palate: "Generous, full-bodied with refined, polished tannins, intense black fruit, a distinct herbal-minty lift, and a long, savory finish."
    },

    foodPairings: [
      { category: 'Grilled Steaks & Asado', dish: "Chilean Asado (Grilled Skirt Steak / Entraña with Chimichurri), Wood-Fired Ribeye", note: "The herbal freshness and mint notes of Maipo Cabernet pair brilliantly with fresh chimichurri and grilled beef." },
      { category: 'Lamb & Savory Pies', dish: "Pastel de Choclo (Chilean Corn & Beef Casserole), Braised Lamb Shank with Herbs", note: "Sweet-savory beef casseroles and slow-cooked lamb harmonize with Carménère and Cabernet blends." },
      { category: 'Aged Cheeses', dish: "Aged Manchego, Gouda, Roquefort Blue Cheese", note: "Dense, nutty cheeses are elevated by Maipo\'s concentrated cassis fruit." }
    ],

    subRegions: [
      {
        id: 'alto-maipo-puente-alto',
        name: "Alto Maipo (Puente Alto & Pirque)",
        lat: -33.60,
        lng: -70.58,
        terroir: "Alluvial gravel terraces at the foot of the Andes Mountains.",
        focus: "Cabernet Sauvignon & Bordeaux Blends: Almaviva, Don Melchor, Viña Almaviva.",
        description: "The Grand Cru terroir of South America. Iconic elegance, cassis, mint, and aristocratic structure." }
    ]
  },

  'australia': {
    id: 'australia',
    name: "Australia (Margaret River & Barossa)",
    country: 'Australia',
    countryCode: 'AU',
    aliases: ['australia', 'western australia', 'margaret river', 'new south wales', 'hunter valley', 'barossa', 'barossa valley', 'mclaren vale', 'yarra valley', 'adelaide hills'],
    tagline: "Old-Vine Shiraz, Maritime Cabernet & Ethereal Semillon",
    summary: "Australia spans a vast continent of extraordinary winemaking diversity: from the ancient ungrafted centenarian Shiraz vines of the Barossa Valley and the maritime, Bordeaux-like elegance of Margaret River in Western Australia, to the razor-sharp, age-defying Hunter Valley Semillon in New South Wales.",
    center: [-33.9500, 115.0500],
    zoom: 9,
    bounds: [[-35.00, 114.50], [-31.00, 152.00]],
    heroGradient: 'linear-gradient(135deg, #1b1c2b 0%, #2f304d 50%, #d4af37 100%)',
    accentColor: '#3a4b7c',

    terroir: {
      climate: "Mediterranean in Margaret River and McLaren Vale; warm Continental in Barossa; humid subtropical in Hunter Valley.",
      soil: "Ironstone gravel (Gravelly loam) over clay in Margaret River; red-brown earth and terra rossa in South Australia; alluvial sand in Hunter.",
      elevation: "50m to 500m.",
      riverInfluence: "Surrounded by the Indian and Southern Oceans, delivering consistent cooling maritime breezes (the Fremantle Doctor)."
    },

    grapes: [
      { name: 'Shiraz (Syrah)', percentage: 40, type: 'Red', role: "Rich blackberry, dark plum, cracked black pepper, mocha, and eucalyptus in Barossa and McLaren Vale." },
      { name: 'Cabernet Sauvignon', percentage: 30, type: 'Red', role: "Maritime precision, cassis, dried bay leaf, and fine structural tannins in Margaret River." },
      { name: 'Chardonnay', percentage: 18, type: 'White', role: "World-class Gingin clone Chardonnays in Margaret River brimming with grapefruit, lime, and flint." },
      { name: 'Semillon', percentage: 12, type: 'White', role: "Laser-sharp, low-alcohol (10-11%) white that ages into toasted brioche, beeswax, and lemon curd in Hunter Valley." }
    ],

    structure: {
      body: 8.5,
      acidity: 7.5,
      tannin: 8.0,
      sweetness: 1,
      alcohol: 14.2,
      agingPotential: "5 - 30+ Years"
    },

    classification: {
      system: "Geographical Indications (GI) & Langton\'s Classification of Australian Wine",
      description: 'Strict geographical boundaries with prestige market rankings (Exceptional, Outstanding, Excellent).',
      tiers: [
        { name: 'Margaret River GI (Western Australia)', detail: "Bordeaux-like climate producing benchmark Cabernet Sauvignon and complex Chardonnays (Leeuwin Estate, Cullen, Moss Wood)." },
        { name: 'Hunter Valley GI (New South Wales)', detail: "Australia\'s oldest wine region famous for iconic age-worthy Hunter Semillon (Tyrrell\'s Vat 1) and medium-bodied savory Shiraz." },
        { name: 'Barossa Valley GI (South Australia)', detail: "Home to some of the world\'s oldest living pre-phylloxera Shiraz vines dating back to 1843." }
      ]
    },

    flavorProfile: {
      primary: ['Blackberry & Plum Jam', 'Crème de Cassis', 'Grapefruit & Lime Zest', 'Eucalyptus / Mint', 'Toasted Hazelnut'],
      secondary: ['Black Pepper', 'Dark Chocolate / Espresso', 'Bay Leaf', 'Graphite', 'Beeswax (Hunter Semillon)'],
      palate: "Opulent fruit depth balanced by coastal freshness, fine-grained tannins, and an explosive, savory finish."
    },

    foodPairings: [
      { category: 'Grilled Beef & Lamb', dish: "Grilled Wagyu Sirloin with Pepper Sauce, Barbecued Lamb Chops with Rosemary", note: "Bold Australian Shiraz and Cabernet match the intensity of char and rich meat." },
      { category: 'Rich Seafood & Lobster', dish: "Butter-Poached Australian Marron / Lobster, Pan-Seared Barramundi, Kingfish Sashimi", note: "Margaret River Chardonnay and Hunter Semillon provide citrus tension and rich textural harmony." },
      { category: 'Cheeses', dish: "Aged Cheddar, Smoked Gouda, Blue Stilton", note: "Strong mature cheeses hold up brilliantly against ripe Australian reds." }
    ],

    subRegions: [
      {
        id: 'margaret-river-wa',
        name: "Margaret River (Western Australia)",
        lat: -33.95,
        lng: 115.07,
        terroir: "Ancient granitic and ironstone gravel ridge between the Indian and Southern Oceans.",
        focus: "Cabernet Sauvignon & Chardonnay: Cullen, Leeuwin Estate, Moss Wood, Vasse Felix.",
        description: "A Mediterranean paradise crafting maritime Cabernet Sauvignon and world-beating Chardonnays." },
      {
        id: 'hunter-valley-nsw',
        name: "Hunter Valley (New South Wales)",
        lat: -32.80,
        lng: 151.30,
        terroir: "Alluvial loam and red volcanic clay north of Sydney.",
        focus: "Semillon & Shiraz: Tyrrell\'s, Mount Pleasant, Brokenwood.",
        description: "Legendary, low-alcohol Semillon that transforms over 20 years into honeyed, toasty perfection." }
    ]
  },

  'italy-other': {
    id: 'italy-other',
    name: "Italy (Veneto, Lombardia & Sicily)",
    country: 'Italy',
    countryCode: 'IT',
    aliases: ['lombardia', 'valtellina', 'veneto', 'valpolicella', 'amarone', 'sicily', 'sicilia', 'etna', 'campania', 'fiano'],
    tagline: "Alpine Terraces, Dried Grape Amarone & Volcanic Mount Etna",
    summary: "Beyond Piedmont and Tuscany, Italy is a treasure trove of unique regional terroirs: the sheer granite Alpine terraces of Valtellina (mountain Nebbiolo/Chiavennasca), the appassimento dried-grape majesty of Amarone della Valpolicella in the Veneto, and the high-altitude volcanic ash slopes of Mount Etna in Sicily.",
    center: [45.4000, 11.0000],
    zoom: 8,
    bounds: [[37.00, 9.50], [46.50, 15.50]],
    heroGradient: 'linear-gradient(135deg, #24131b 0%, #472134 50%, #d4af37 100%)',
    accentColor: '#701c45',

    terroir: {
      climate: "Alpine Continental in Valtellina; Sub-alpine Mediterranean near Lake Garda in Veneto; Warm Mediterranean with high-altitude volcanic cooling on Mount Etna in Sicily.",
      soil: "Granite and sandy loam in Valtellina; limestone and basalt in Valpolicella; black volcanic basalt, pumice, and ash on Etna.",
      elevation: "200m to over 1,000m on mountain and volcano slopes.",
      riverInfluence: "Lake Garda, the Adige River, and the Adda River buffer temperature extremes."
    },

    grapes: [
      { name: 'Nebbiolo (Chiavennasca)', percentage: 30, type: 'Red', role: "Alpine Nebbiolo in Valtellina: mountain herbs, alpine cranberry, dry rose petals, and chiseled granite tension." },
      { name: 'Corvina & Rondinella', percentage: 35, type: 'Red', role: "The heart of Valpolicella and Amarone: dried cherry, fig, cocoa, and raisin richness from the appassimento process." },
      { name: 'Nerello Mascalese', percentage: 20, type: 'Red', role: "The \"Pinot Noir of the Mediterranean\" on Mount Etna: wild strawberry, volcanic ash, iron, and orange peel." },
      { name: 'Garganega & Fiano', percentage: 15, type: 'White', role: "Mineral, almond, and floral whites in Soave (Veneto) and Fiano di Avellino (Campania)." }
    ],

    structure: {
      body: 8.5,
      acidity: 8.0,
      tannin: 8.0,
      sweetness: 2,
      alcohol: 14.5,
      agingPotential: "8 - 35+ Years"
    },

    classification: {
      system: "DOCG & DOC System with Contrade (Single Vineyard Volcanic Plots)",
      description: 'Prestigious traditional Italian denominations.',
      tiers: [
        { name: 'Amarone della Valpolicella DOCG', detail: "Produced by drying harvested grapes for 3-4 months (Appassimento) before fermentation, yielding rich, unctuous 15-16% ABV wines." },
        { name: 'Valtellina Superiore DOCG (Lombardy)', detail: "Alpine Nebbiolo sub-zones: Grumello, Inferno, Sassella, Valgella, Maroggia, plus Sforzato (Sfursat) dried-grape style." },
        { name: 'Etna DOC (Sicily)', detail: "High-elevation volcanic crus (Contrade) on the slopes of active Mount Etna." },
        { name: 'Fiano di Avellino DOCG (Campania)', detail: "Volcanic, smoky, hazelnut-scented white wine with remarkable aging potential." }
      ]
    },

    flavorProfile: {
      primary: ['Dried Black Cherry', 'Mountain Cranberry', 'Dark Chocolate / Cocoa', 'Volcanic Ash / Iron', 'Orange Peel'],
      secondary: ['Dried Fig & Raisin', 'Alpine Herbs (Pine/Thyme)', 'Leather', 'Smoked Salt', 'Balsamic'],
      palate: "Deep, multi-dimensional, and savory with vibrant mountain acidity, layered dried fruits, and a lingering volcanic mineral finish."
    },

    foodPairings: [
      { category: 'Rich Stews & Braises', dish: "Braised Beef Short Ribs in Amarone, Osso Buco with Saffron Risotto alla Milanese", note: "Amarone\'s rich dried-fruit concentration and high alcohol match decadent beef and marrow." },
      { category: 'Alpine & Cured Meats', dish: "Bresaola della Valtellina with Arugula & Shaved Bitto Cheese, Pizzoccheri Pasta", note: "Valtellina Nebbiolo pairs naturally with bresaola, buckwheat pizzoccheri, and Alpine cheeses." },
      { category: 'Mediterranean Seafood & Grilled Meats', dish: "Swordfish with Capers and Olives, Grilled Lamb Chops with Oregano", note: "Etna Rosso\'s volcanic salinity and red berry crunch elevate Mediterranean seafood and lamb." }
    ],

    subRegions: [
      {
        id: 'lombardia-valtellina',
        name: "Valtellina (Lombardia Alpine Nebbiolo)",
        lat: 46.17,
        lng: 9.87,
        terroir: "Perilous south-facing granite terraces overlooking the Adda River in the Alps.",
        focus: "Nebbiolo (Chiavennasca): AR.PE.PE., Grumello, Inferno, Sassella, Sfursat.",
        description: "Alpine Nebbiolo of astonishing purity, dried flowers, alpine herbs, and granite minerality." },
      {
        id: 'veneto-valpolicella',
        name: "Valpolicella & Amarone (Veneto)",
        lat: 45.52,
        lng: 10.92,
        terroir: "Limestone valleys stretching north toward the Lessini Mountains.",
        focus: "Amarone della Valpolicella Classico, Valpolicella Superiore, Ripasso: Quintarelli, Dal Forno.",
        description: "The ancient art of Appassimento. Opulent, dark chocolate, dried fig, and velvet power." },
      {
        id: 'sicily-etna',
        name: "Sicily & Mount Etna (Etna DOC)",
        lat: 37.75,
        lng: 15.00,
        terroir: "High-altitude volcanic ash, black pumice, and ancient lava flows up to 1,000m elevation.",
        focus: "Nerello Mascalese (Etna Rosso) & Carricante (Etna Bianco): Contrade crus.",
        description: "Volcanic Mediterranean elegance with wild strawberries, smoky iron, and vibrant acidity." }
    ]
  },

  'japan-chubu': {
    id: 'japan-chubu',
    name: "Japan (Chūbu / Yamanashi & Nagano)",
    country: 'Japan',
    countryCode: 'JP',
    aliases: ['japan', 'chubu', 'chūbu', 'yamanashi', 'nagano', 'koshu', 'katsunuma'],
    tagline: "Mount Fuji Foothills, Delicate Koshu & Alpine Precision",
    summary: "Surrounded by the majestic Japanese Alps and Mount Fuji in central Japan (Chūbu region), Yamanashi and Nagano are the historical cradle of Japanese viticulture. Yamanashi is world-famous for Koshu, an ancient pale pink-skinned grape producing ethereal, delicate white wines of yuzu citrus, white peach, and subtle salinity that pair impeccably with Japanese gastronomy.",
    center: [35.6667, 138.5667],
    zoom: 10,
    bounds: [[35.20, 137.80], [36.70, 139.20]],
    heroGradient: 'linear-gradient(135deg, #182329 0%, #2b3a42 50%, #d4af37 100%)',
    accentColor: '#3d6175',

    terroir: {
      climate: "Temperate Alpine basin protected by surrounding mountain ranges, reducing annual rainfall compared to coastal Japan.",
      soil: "Volcanic ash loam (Kanto loam) and well-draining alluvial sand-gravel along mountain riverbeds.",
      elevation: "300m to 700m on sloping basin foothills.",
      riverInfluence: "Fuefuki and Kamanashi Rivers provide crisp alpine air drainage."
    },

    grapes: [
      { name: 'Koshu', percentage: 70, type: 'White', role: "Japan\'s indigenous icon: delicate yuzu citrus, white peach, jasmine floral, mild bitterness, and pristine salinity." },
      { name: 'Muscat Bailey A', percentage: 20, type: 'Red', role: "Light-bodied red wine with candied cherry, strawberry, and soft, silky tannins." },
      { name: 'Chardonnay & Merlot', percentage: 10, type: 'White', role: "Refined, cool-climate international varieties in high-altitude Nagano." }
    ],

    structure: {
      body: 4.0,
      acidity: 8.0,
      tannin: 2.0,
      sweetness: 1,
      alcohol: 11.5,
      agingPotential: "2 - 10 Years"
    },

    classification: {
      system: "GI Geographical Indication (GI Yamanashi & GI Nagano)",
      description: 'Strict standards ensuring 100% Japanese-grown grapes and authentic regional vinification.',
      tiers: [
        { name: 'GI Yamanashi (Katsunuma Basin)', detail: "The historic heartland of Koshu winemaking at the base of Mount Fuji." },
        { name: 'GI Nagano (Shinshu)', detail: "Higher altitude Alpine valleys specializing in Chardonnay, Merlot, and Pinot Noir." }
      ]
    },

    flavorProfile: {
      primary: ['Yuzu & Sudachi Citrus', 'White Peach', 'Jasmine Flower', 'Green Apple', 'Wet River Stone'],
      secondary: ['Subtle White Pepper', 'Rice Koji / Umami notes', 'Ginger', 'Grapefruit Pith', 'Fresh Linen'],
      palate: "Whisper-light, delicate, and pure with refreshing citrus acidity, soft textural salinity, and an umami-friendly, clean finish."
    },

    foodPairings: [
      { category: 'Sashimi & Sushi', dish: "Tuna Sashimi, Sea Bream (Tai), Uni (Sea Urchin), Nigiri Sushi", note: "Koshu\'s subtle profile and low iron content never clash with delicate raw fish, preserving pure ocean flavors." },
      { category: 'Tempura & Yakitori', dish: "Crispy Vegetable & Prawn Tempura, Salted Yakitori (Yakitori Shio), Chawanmushi", note: "Bright citrus acidity cuts through light frying tempura batter with effortless elegance." },
      { category: 'Subtle Seafood Dishes', dish: "Steamed Black Cod with Ginger, Crab with Yuzu Ponzu, Dashi Broth Dishes", note: "The gentle umami structure of Koshu resonates harmoniously with dashi and ponzu." }
    ],

    subRegions: [
      {
        id: 'yamanashi-katsunuma',
        name: "Katsunuma & Yamanashi Basin",
        lat: 35.66,
        lng: 138.73,
        terroir: "Volcanic alluvial foothills beneath Mount Fuji with overhead pergola trellising.",
        focus: "Koshu: Grace Wine, Katsunuma Jozo, Chateau Mercian.",
        description: "The spiritual birthplace of Japanese wine, crafting laser-pure, mineral-kissed Koshu." }
    ]
  }
};

// Helper: Normalize region query to find the best matching region data
export function findWineRegion(regionQuery, countryQuery = '') {
  if (!regionQuery) return null;
  const cleanReg = String(regionQuery).toLowerCase().trim();
  const cleanCountry = String(countryQuery || '').toLowerCase().trim();

  // 1. Direct match by ID
  if (WINE_REGIONS[cleanReg]) {
    return WINE_REGIONS[cleanReg];
  }

  // 2. Match by aliases
  for (const regKey of Object.keys(WINE_REGIONS)) {
    const r = WINE_REGIONS[regKey];
    if (r.name.toLowerCase() === cleanReg || r.id === cleanReg) return r;
    if (r.aliases && r.aliases.some(alias => cleanReg.includes(alias) || alias.includes(cleanReg))) {
      return r;
    }
  }

  // 3. Country / Region combinations
  if (cleanCountry === 'france') {
    if (cleanReg.includes('champagne')) return WINE_REGIONS['champagne'];
    if (cleanReg.includes('burgundy') || cleanReg.includes('bourgogne') || cleanReg.includes('chablis') || cleanReg.includes('beaune') || cleanReg.includes('nuits') || cleanReg.includes('macon') || cleanReg.includes('mâcon') || cleanReg.includes('beaujolais')) return WINE_REGIONS['burgundy'];
    if (cleanReg.includes('bordeaux') || cleanReg.includes('medoc') || cleanReg.includes('pauillac') || cleanReg.includes('margaux') || cleanReg.includes('saint-emilion') || cleanReg.includes('pomerol') || cleanReg.includes('sauternes')) return WINE_REGIONS['bordeaux'];
    if (cleanReg.includes('loire') || cleanReg.includes('sancerre') || cleanReg.includes('chinon') || cleanReg.includes('vouvray') || cleanReg.includes('saumur')) return WINE_REGIONS['loire-valley'];
    if (cleanReg.includes('rhone') || cleanReg.includes('rhône') || cleanReg.includes('cornas') || cleanReg.includes('hermitage') || cleanReg.includes('cote-rotie') || cleanReg.includes('chateauneuf') || cleanReg.includes('gigondas')) return WINE_REGIONS['rhone'];
  }

  if (cleanCountry === 'italy' || cleanCountry === 'italia') {
    if (cleanReg.includes('piedmont') || cleanReg.includes('piemonte') || cleanReg.includes('barolo') || cleanReg.includes('barbaresco') || cleanReg.includes('langhe')) return WINE_REGIONS['piedmont'];
    if (cleanReg.includes('tuscany') || cleanReg.includes('toscana') || cleanReg.includes('chianti') || cleanReg.includes('montalcino') || cleanReg.includes('bolgheri')) return WINE_REGIONS['tuscany'];
    if (cleanReg.includes('lombardia') || cleanReg.includes('valtellina') || cleanReg.includes('veneto') || cleanReg.includes('valpolicella') || cleanReg.includes('sicily') || cleanReg.includes('etna') || cleanReg.includes('campania')) return WINE_REGIONS['italy-other'];
  }

  if (cleanCountry === 'usa' || cleanCountry === 'united states') {
    if (cleanReg.includes('california') || cleanReg.includes('napa') || cleanReg.includes('sonoma') || cleanReg.includes('santa cruz') || cleanReg.includes('paso robles') || cleanReg.includes('washington') || cleanReg.includes('columbia valley')) return WINE_REGIONS['california'];
    if (cleanReg.includes('oregon') || cleanReg.includes('willamette')) return WINE_REGIONS['oregon'];
  }

  if (cleanCountry === 'germany') {
    return WINE_REGIONS['germany-mosel'];
  }

  if (cleanCountry === 'spain') {
    return WINE_REGIONS['spain-rioja'];
  }

  if (cleanCountry === 'chile') {
    return WINE_REGIONS['chile-maipo'];
  }

  if (cleanCountry === 'australia') {
    return WINE_REGIONS['australia'];
  }

  if (cleanCountry === 'japan') {
    return WINE_REGIONS['japan-chubu'];
  }

  // 4. Default fallback
  return {
    id: cleanReg.replace(/\s+/g, '-'),
    name: regionQuery,
    country: countryQuery || 'World Wine Region',
    countryCode: 'INT',
    tagline: 'Renowned Wine Terroir of ' + (countryQuery || 'Fine Wine'),
    summary: "A distinguished wine-producing area in ' + (countryQuery || 'the world') + ' celebrated for its unique microclimates, historic vineyards, and terroir-expressive grape varieties.",
    center: [46.0000, 2.0000],
    zoom: 7,
    bounds: [[40.00, -5.00], [50.00, 10.00]],
    heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #d4af37 100%)',
    accentColor: '#d4af37',
    terroir: {
      climate: "Moderate temperate climate with well-defined seasonal cycles, sunny ripening periods, and cooling breezes.",
      soil: "Rich mineral-bearing sedimentary and alluvial soils providing optimal drainage and vine nourishment.",
      elevation: "Hillside slopes and river valley benches with excellent sun orientation.",
      riverInfluence: "Local river systems and valley breezes regulate diurnal temperatures and extend the hang time for optimal grape maturity."
    },
    grapes: [
      { name: 'Signature Varietals', percentage: 100, type: 'Selection', role: "Varieties expressing the distinct microclimates and soil qualities of this region." }
    ],
    structure: {
      body: 7.0,
      acidity: 7.5,
      tannin: 7.0,
      sweetness: 1,
      alcohol: 13.5,
      agingPotential: "3 - 15+ Years"
    },
    classification: {
      system: "Regional Appellation Quality System",
      description: 'Wines crafted according to strict regional yield, grape variety, and aging guidelines.',
      tiers: [
        { name: 'Estate & Single Vineyard', detail: "Bottlings originating from specific historical vineyards." },
        { name: 'Regional Denomination', detail: "Wines capturing the macro-terroir and quintessential style of the region." }
      ]
    },
    flavorProfile: {
      primary: ['Ripe Orchard & Berry Fruit', 'Fresh Floral Notes', 'Earthy Undertones', 'Subtle Oak Spice'],
      secondary: ['Crushed Stone Minerality', 'Fine Tannins', 'Savory Herbs'],
      palate: "Harmonious, food-friendly balance between fruit vibrancy, refreshing acidity, and structural elegance."
    },
    foodPairings: [
      { category: 'Chef Recommendations', dish: "Grilled Meats, Fresh Seafood, Artisanal Cheese Board, Seasonal Pasta", note: "Versatile regional profile that harmonizes with a wide spectrum of culinary dining selections." }
    ],
    subRegions: []
  };
}
