import PastelsColormap from './colormap.pastels';
import GRBWColormap from './colormap.GRBW';

function shadersColormap(baseFragment, value, tLower, tMul, color) {
    let colormap = 'pastels';
    switch (colormap) {
        case 'pastels':
            return PastelsColormap.api(baseFragment, value, tLower, tMul, color);
        
        case 'GRBW':
            return GRBWColormap.api(baseFragment, value, tLower, tMul, color);
        
        default:
            return PastelsColormap.api(baseFragment, value, tLower, tMul, color);
    }
}

export default shadersColormap;