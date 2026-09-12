# scripts/apply_champagne_updates.py
import json

with open('src/data/wineRegionBoundaries.js', 'r', encoding='utf-8') as f:
    content = f.read()

from generate_full_champagne import (
    montagne_de_reims_coords,
    vallee_de_la_marne_coords,
    cote_des_blancs_coords,
    coteaux_sud_epernay_coords,
    cote_de_sezanne_coords,
    vitryat_coords,
    cote_des_bar_coords,
    champagne_outline_coords
)

features = [
  {
    "type": "Feature",
    "id": "montagne-de-reims",
    "properties": {
      "id": "montagne-de-reims",
      "parentSubregionId": "montagne-de-reims",
      "subregionId": "montagne-de-reims",
      "name": "Montagne de Reims",
      "shortName": "Montagne de Reims",
      "category": "Grand Cru Pinot Noir Amphitheaters & Chalk Slopes",
      "dominantGrape": "Pinot Noir",
      "color": "#E6732B",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.11, 49.16],
      "description": "Curved horseshoe of chalk amphitheaters wrapping around the central mountain forest plateau with Massif de Saint-Thierry and Monts de Berne satellite chalk hills, renowned for 9 Pinot Noir Grand Crus."
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": montagne_de_reims_coords
    }
  },
  {
    "type": "Feature",
    "id": "vallee-de-la-marne",
    "properties": {
      "id": "vallee-de-la-marne",
      "parentSubregionId": "vallee-de-la-marne",
      "subregionId": "vallee-de-la-marne",
      "name": "Vallée de la Marne",
      "shortName": "Vallée de la Marne",
      "category": "Meunier & Steep River Amphitheaters",
      "dominantGrape": "Meunier & Pinot Noir",
      "color": "#9B2C78",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [3.78, 49.09],
      "description": "Serpentine river corridor tracing the true curves of the Marne River from Charly-sur-Marne through Dormans to Grand Cru Aÿ and Tours-sur-Marne, the world epicenter of Meunier."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": vallee_de_la_marne_coords
    }
  },
  {
    "type": "Feature",
    "id": "cote-des-blancs",
    "properties": {
      "id": "cote-des-blancs",
      "parentSubregionId": "cote-des-blancs",
      "subregionId": "cote-des-blancs",
      "name": "Côte des Blancs",
      "shortName": "Côte des Blancs",
      "category": "Pure Chalk Cuesta & Blanc de Blancs",
      "dominantGrape": "Chardonnay",
      "color": "#199778",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.01, 48.95],
      "description": "The global benchmark for Blanc de Blancs Chardonnay. High-resolution eastern chalk cuesta from Chouilly through Cramant, Avize, Oger, and Le Mesnil-sur-Oger, extending south through Vertus into Val du Petit Morin."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": cote_des_blancs_coords
    }
  },
  {
    "type": "Feature",
    "id": "coteaux-sud-epernay",
    "properties": {
      "id": "coteaux-sud-epernay",
      "parentSubregionId": "coteaux-sud-epernay",
      "subregionId": "coteaux-sud-epernay",
      "name": "Coteaux Sud d’Épernay",
      "shortName": "Coteaux Sud d'Épernay",
      "category": "Flint & Clay-Marl Rolling Slopes",
      "dominantGrape": "Meunier & Chardonnay",
      "color": "#199778",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [3.92, 49.00],
      "description": "Rolling hills south of Épernay bridging Vallée de la Marne and Côte des Blancs, including Pierry Premier Cru, Moussy, Chavot-Courcourt, and Grauves."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": coteaux_sud_epernay_coords
    }
  },
  {
    "type": "Feature",
    "id": "cote-de-sezanne",
    "properties": {
      "id": "cote-de-sezanne",
      "parentSubregionId": "cote-de-sezanne",
      "subregionId": "cote-de-sezanne",
      "name": "Côte de Sézanne",
      "shortName": "Côte de Sézanne",
      "category": "Warm Sun-Drenched Chalk & Marl Slopes",
      "dominantGrape": "Chardonnay",
      "color": "#E8A816",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [3.71, 48.69],
      "description": "Slender north-south curving hillside strip with warm south-facing chalk slopes from Allemant and Broyes through Sézanne to Bethon and Villenauxe-la-Grande."
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": cote_de_sezanne_coords
    }
  },
  {
    "type": "Feature",
    "id": "vitryat",
    "properties": {
      "id": "vitryat",
      "parentSubregionId": "vitryat",
      "subregionId": "vitryat",
      "name": "Vitryat (Côtes de Vitry)",
      "shortName": "Vitryat",
      "category": "Eastern Turonian Chalk Enclave",
      "dominantGrape": "Chardonnay",
      "color": "#9BC53D",
      "accent": "#ffffff",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.62, 48.80],
      "description": "Distinct chalk island around Vitry-le-François featuring pure white Turonian chalk hillsides producing pristine, mineral Chardonnay."
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": vitryat_coords
    }
  },
  {
    "type": "Feature",
    "id": "cote-des-bar",
    "properties": {
      "id": "cote-des-bar",
      "parentSubregionId": "cote-des-bar",
      "subregionId": "cote-des-bar",
      "name": "Côte des Bar (Aube)",
      "shortName": "Côte des Bar",
      "category": "Kimmeridgian Marl & Artisanal Growers",
      "dominantGrape": "Pinot Noir",
      "color": "#673482",
      "accent": "#8B7BB0",
      "borderColor": "#ffffff",
      "fillOpacity": 0.7,
      "labelCenter": [4.45, 48.08],
      "description": "The southern frontier of Champagne in the Aube department. Detailed dual-valley system of Barséquanais along the Seine/Ource and Bar-sur-Aubois along the Aube River, plus the Montgueux chalk mound."
    },
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": cote_des_bar_coords
    }
  }
]

champagne_fc = {
  "type": "FeatureCollection",
  "features": features
}

outline_fc = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "champagne-outline",
      "properties": {
        "name": "Champagne AOC Delimited Region",
        "description": "The historic northern and southern viticultural basins of Champagne."
      },
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": champagne_outline_coords
      }
    }
  ]
}

def format_json_block(obj, indent_spaces=4):
    text = json.dumps(obj, indent=2, ensure_ascii=False)
    lines = text.split('\n')
    indented = '\n'.join((' ' * indent_spaces + line if line.strip() else '') for line in lines)
    return indented.strip()

formatted_champagne = format_json_block(champagne_fc, 4)
formatted_outline = format_json_block(outline_fc, 4)

split_token = "export const WINE_REGION_OUTLINES = {"
parts = content.split(split_token)
if len(parts) != 2:
    raise RuntimeError("Expected exactly 2 parts around " + split_token)

p1, p2 = parts[0], parts[1]

# In p1, locate champagne start and burgundy start
start_c1 = p1.find('  "champagne":')
start_b1 = p1.find('  "burgundy":')
if start_c1 == -1 or start_b1 == -1:
    raise RuntimeError("Could not find champagne/burgundy in p1")

new_p1 = p1[:start_c1] + f'  "champagne": {formatted_champagne},\n' + p1[start_b1:]

# In p2, locate champagne start and burgundy start
start_c2 = p2.find('  "champagne":')
start_b2 = p2.find('  "burgundy":')
if start_c2 == -1 or start_b2 == -1:
    raise RuntimeError("Could not find champagne/burgundy in p2")

new_p2 = p2[:start_c2] + f'  "champagne": {formatted_outline},\n' + p2[start_b2:]

new_content = new_p1 + split_token + new_p2

with open('src/data/wineRegionBoundaries.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated src/data/wineRegionBoundaries.js successfully and cleanly.")
