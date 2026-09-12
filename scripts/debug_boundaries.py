with open('src/data/wineRegionBoundaries.js', 'r', encoding='utf-8') as f:
    c = f.read()
split_token = 'export const WINE_REGION_OUTLINES = {'
p1, p2 = c.split(split_token)

print('p1 start:', repr(p1[:150]))
idx_b1 = p1.find('"burgundy"')
print('p1 burgundy at:', idx_b1)
print(repr(p1[idx_b1-50:idx_b1+20]))

print('p2 start:', repr(p2[:150]))
idx_b2 = p2.find('"burgundy"')
print('p2 burgundy at:', idx_b2)
print(repr(p2[idx_b2-50:idx_b2+20]))
