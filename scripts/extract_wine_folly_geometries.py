# scripts/extract_wine_folly_geometries.py
import cv2
import numpy as np
import json
import re

bgr = cv2.imread(r'C:\Users\haine\.gemini\antigravity\brain\99bbc3f0-a413-4f2e-b897-06ab5151a588\.user_uploaded\media_1789251507225.jpg')
hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY)

# Control points for Main Map affine transform
pts_px = np.array([
    [398, 204], # Reims
    [387, 351], # Epernay
    [573, 401], # Chalons
    [634, 561], # Vitry
    [273, 564], # Sezanne
    [182, 352], # Chateau-Thierry
    [255, 174], # Fismes
    [128, 130]  # Soissons
], dtype=np.float64)

pts_geo = np.array([
    [4.0317, 49.2583],
    [3.9563, 49.0435],
    [4.3642, 48.9562],
    [4.5872, 48.7250],
    [3.7222, 48.7233],
    [3.4031, 49.0444],
    [3.6819, 49.3075],
    [3.3236, 49.3817]
], dtype=np.float64)

A = np.hstack([pts_px, np.ones((len(pts_px), 1))])
M_lng, _, _, _ = np.linalg.lstsq(A, pts_geo[:, 0], rcond=None)
M_lat, _, _, _ = np.linalg.lstsq(A, pts_geo[:, 1], rcond=None)

def px_to_geo(pts):
    pts = np.asarray(pts, dtype=np.float64).reshape(-1, 2)
    A_pts = np.hstack([pts, np.ones((len(pts), 1))])
    lng = A_pts @ M_lng
    lat = A_pts @ M_lat
    return np.column_stack([np.round(lng, 4), np.round(lat, 4)])

print("Affine transform computed.")
