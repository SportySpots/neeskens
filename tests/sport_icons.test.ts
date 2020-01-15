import { Sports } from '../const/sports'
import fs from 'fs';
import path from 'path'

// project path
const rootPath = (global as any).rootDir;

const sportIconsPath = path.join(rootPath, 'public', 'static', 'sport_icons');

describe('sport icons', () => {
    it('as many icons as sports', () => {
        expect(fs.readdirSync(sportIconsPath).length).toEqual(Sports.length);
    });
    describe('exists for each sport', () => {
        Sports.forEach(sport => {
            const expectedFileName = path.join(sportIconsPath, sport.category.toLowerCase() + '.svg')
            it(`${sport.category} has an icon ${expectedFileName}`, () => {
                expect(fs.existsSync(expectedFileName)).toBeTruthy();
            })
        })
    })
})