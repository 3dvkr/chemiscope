/**
 * @packageDocumentation
 * @module map
 */

import assert from 'assert';
import { ColorScale } from './plotly/plotly-scatter';

type RGBColorMap = [number, [number, number, number]][];

function rgb_to_plotly(colormap: RGBColorMap): ColorScale {
    return colormap.map((c) => {
        return [c[0], `rgb(${c[1][0]}, ${c[1][1]}, ${c[1][2]})`] as [number, string];
    });
}

const INFERNO: RGBColorMap = [
    [0.0, [0, 0, 3]],
    [0.0159, [1, 1, 9]],
    [0.0317, [3, 2, 18]],
    [0.0476, [6, 4, 27]],
    [0.0635, [10, 7, 35]],
    [0.0794, [15, 9, 45]],
    [0.0952, [20, 11, 54]],
    [0.1111, [26, 11, 64]],
    [0.127, [32, 12, 74]],
    [0.1429, [39, 11, 82]],
    [0.1587, [46, 10, 90]],
    [0.1746, [53, 9, 96]],
    [0.1905, [60, 9, 101]],
    [0.2063, [67, 10, 104]],
    [0.2222, [74, 11, 106]],
    [0.2381, [80, 13, 108]],
    [0.254, [88, 16, 109]],
    [0.2698, [95, 18, 110]],
    [0.2857, [101, 21, 110]],
    [0.3016, [107, 23, 110]],
    [0.3175, [114, 25, 109]],
    [0.3333, [120, 28, 109]],
    [0.3492, [126, 30, 108]],
    [0.3651, [133, 32, 106]],
    [0.381, [139, 34, 105]],
    [0.3968, [145, 37, 103]],
    [0.4127, [152, 39, 101]],
    [0.4286, [158, 41, 99]],
    [0.4444, [164, 44, 96]],
    [0.4603, [171, 46, 93]],
    [0.4762, [177, 49, 90]],
    [0.4921, [183, 52, 86]],
    [0.5079, [190, 56, 82]],
    [0.5238, [196, 60, 78]],
    [0.5397, [201, 63, 74]],
    [0.5556, [207, 68, 70]],
    [0.5714, [212, 72, 65]],
    [0.5873, [217, 77, 61]],
    [0.6032, [221, 82, 56]],
    [0.619, [226, 87, 51]],
    [0.6349, [230, 92, 46]],
    [0.6508, [233, 98, 42]],
    [0.6667, [237, 104, 37]],
    [0.6825, [240, 111, 31]],
    [0.6984, [242, 117, 26]],
    [0.7143, [245, 124, 21]],
    [0.7302, [247, 131, 16]],
    [0.746, [248, 138, 11]],
    [0.7619, [250, 147, 6]],
    [0.7778, [251, 155, 6]],
    [0.7937, [251, 162, 8]],
    [0.8095, [251, 170, 14]],
    [0.8254, [251, 177, 22]],
    [0.8413, [251, 185, 30]],
    [0.8571, [250, 193, 40]],
    [0.873, [248, 201, 49]],
    [0.8889, [247, 209, 60]],
    [0.9048, [245, 217, 72]],
    [0.9206, [243, 224, 86]],
    [0.9365, [241, 232, 100]],
    [0.9524, [241, 238, 116]],
    [0.9683, [242, 244, 133]],
    [0.9841, [246, 250, 149]],
    [1.0, [252, 254, 164]],
];

const MAGMA: RGBColorMap = [
    [0.0, [0, 0, 3]],
    [0.0159, [1, 1, 9]],
    [0.0317, [3, 3, 17]],
    [0.0476, [6, 5, 25]],
    [0.0635, [10, 7, 34]],
    [0.0794, [14, 10, 42]],
    [0.0952, [18, 13, 51]],
    [0.1111, [23, 15, 60]],
    [0.127, [28, 16, 70]],
    [0.1429, [34, 17, 80]],
    [0.1587, [40, 17, 89]],
    [0.1746, [47, 16, 98]],
    [0.1905, [53, 15, 106]],
    [0.2063, [60, 15, 113]],
    [0.2222, [67, 15, 117]],
    [0.2381, [74, 16, 121]],
    [0.254, [82, 18, 124]],
    [0.2698, [88, 21, 126]],
    [0.2857, [94, 23, 127]],
    [0.3016, [101, 26, 128]],
    [0.3175, [107, 28, 128]],
    [0.3333, [113, 31, 129]],
    [0.3492, [119, 33, 129]],
    [0.3651, [126, 36, 129]],
    [0.381, [132, 38, 129]],
    [0.3968, [138, 40, 129]],
    [0.4127, [145, 42, 128]],
    [0.4286, [151, 44, 127]],
    [0.4444, [158, 46, 126]],
    [0.4603, [164, 48, 125]],
    [0.4762, [171, 51, 124]],
    [0.4921, [177, 53, 122]],
    [0.5079, [185, 55, 120]],
    [0.5238, [192, 58, 117]],
    [0.5397, [198, 60, 115]],
    [0.5556, [205, 63, 112]],
    [0.5714, [211, 66, 109]],
    [0.5873, [217, 70, 106]],
    [0.6032, [222, 74, 103]],
    [0.619, [228, 78, 100]],
    [0.6349, [232, 84, 97]],
    [0.6508, [237, 89, 95]],
    [0.6667, [240, 96, 93]],
    [0.6825, [243, 103, 91]],
    [0.6984, [246, 110, 91]],
    [0.7143, [248, 117, 92]],
    [0.7302, [249, 125, 93]],
    [0.746, [251, 132, 96]],
    [0.7619, [252, 142, 99]],
    [0.7778, [253, 149, 103]],
    [0.7937, [253, 157, 107]],
    [0.8095, [253, 164, 112]],
    [0.8254, [254, 172, 117]],
    [0.8413, [254, 179, 123]],
    [0.8571, [254, 187, 128]],
    [0.873, [254, 194, 134]],
    [0.8889, [254, 201, 141]],
    [0.9048, [253, 209, 147]],
    [0.9206, [253, 216, 154]],
    [0.9365, [253, 223, 161]],
    [0.9524, [252, 230, 168]],
    [0.9683, [252, 238, 176]],
    [0.9841, [252, 245, 183]],
    [1.0, [251, 252, 191]],
];

const PLASMA: RGBColorMap = [
    [0.0, [12, 7, 134]],
    [0.0159, [24, 6, 139]],
    [0.0317, [33, 5, 143]],
    [0.0476, [41, 5, 147]],
    [0.0635, [49, 4, 150]],
    [0.0794, [56, 4, 153]],
    [0.0952, [63, 3, 156]],
    [0.1111, [69, 3, 158]],
    [0.127, [76, 2, 161]],
    [0.1429, [82, 1, 163]],
    [0.1587, [89, 1, 164]],
    [0.1746, [95, 0, 166]],
    [0.1905, [101, 0, 167]],
    [0.2063, [108, 0, 168]],
    [0.2222, [114, 0, 168]],
    [0.2381, [120, 1, 168]],
    [0.254, [127, 3, 167]],
    [0.2698, [133, 6, 166]],
    [0.2857, [139, 9, 164]],
    [0.3016, [144, 14, 163]],
    [0.3175, [150, 18, 160]],
    [0.3333, [155, 23, 158]],
    [0.3492, [160, 27, 155]],
    [0.3651, [165, 31, 151]],
    [0.381, [170, 36, 148]],
    [0.3968, [175, 40, 144]],
    [0.4127, [180, 45, 141]],
    [0.4286, [184, 50, 137]],
    [0.4444, [188, 54, 133]],
    [0.4603, [192, 59, 129]],
    [0.4762, [196, 63, 126]],
    [0.4921, [200, 68, 122]],
    [0.5079, [205, 73, 117]],
    [0.5238, [209, 78, 114]],
    [0.5397, [212, 82, 110]],
    [0.5556, [215, 87, 107]],
    [0.5714, [219, 91, 103]],
    [0.5873, [222, 96, 100]],
    [0.6032, [225, 101, 96]],
    [0.619, [228, 106, 93]],
    [0.6349, [231, 110, 90]],
    [0.6508, [234, 115, 86]],
    [0.6667, [236, 120, 83]],
    [0.6825, [239, 125, 79]],
    [0.6984, [241, 130, 76]],
    [0.7143, [243, 135, 72]],
    [0.7302, [245, 141, 69]],
    [0.746, [247, 146, 65]],
    [0.7619, [249, 153, 61]],
    [0.7778, [250, 159, 58]],
    [0.7937, [251, 164, 54]],
    [0.8095, [252, 170, 51]],
    [0.8254, [253, 176, 48]],
    [0.8413, [253, 182, 45]],
    [0.8571, [253, 188, 42]],
    [0.873, [253, 195, 40]],
    [0.8889, [252, 201, 38]],
    [0.9048, [251, 208, 36]],
    [0.9206, [250, 214, 36]],
    [0.9365, [248, 221, 36]],
    [0.9524, [246, 228, 37]],
    [0.9683, [244, 234, 38]],
    [0.9841, [242, 241, 38]],
    [1.0, [239, 248, 33]],
];

const VIRIDIS: RGBColorMap = [
    [0.0, [68, 1, 84]],
    [0.0159, [69, 6, 90]],
    [0.0317, [70, 12, 95]],
    [0.0476, [71, 18, 101]],
    [0.0635, [71, 24, 106]],
    [0.0794, [72, 29, 111]],
    [0.0952, [72, 34, 115]],
    [0.1111, [71, 39, 119]],
    [0.127, [71, 44, 123]],
    [0.1429, [70, 49, 126]],
    [0.1587, [69, 54, 129]],
    [0.1746, [67, 59, 131]],
    [0.1905, [66, 64, 133]],
    [0.2063, [64, 68, 135]],
    [0.2222, [62, 73, 137]],
    [0.2381, [60, 77, 138]],
    [0.254, [58, 83, 139]],
    [0.2698, [56, 87, 140]],
    [0.2857, [54, 91, 140]],
    [0.3016, [52, 95, 141]],
    [0.3175, [50, 99, 141]],
    [0.3333, [48, 103, 141]],
    [0.3492, [46, 107, 142]],
    [0.3651, [45, 111, 142]],
    [0.381, [43, 115, 142]],
    [0.3968, [42, 119, 142]],
    [0.4127, [40, 122, 142]],
    [0.4286, [39, 126, 142]],
    [0.4444, [37, 130, 142]],
    [0.4603, [36, 134, 141]],
    [0.4762, [34, 137, 141]],
    [0.4921, [33, 141, 140]],
    [0.5079, [31, 146, 140]],
    [0.5238, [31, 150, 139]],
    [0.5397, [30, 153, 138]],
    [0.5556, [30, 157, 136]],
    [0.5714, [31, 161, 135]],
    [0.5873, [32, 165, 133]],
    [0.6032, [35, 168, 131]],
    [0.619, [38, 172, 129]],
    [0.6349, [42, 176, 126]],
    [0.6508, [47, 179, 123]],
    [0.6667, [53, 183, 120]],
    [0.6825, [59, 186, 117]],
    [0.6984, [66, 190, 113]],
    [0.7143, [73, 193, 109]],
    [0.7302, [81, 196, 104]],
    [0.746, [89, 199, 100]],
    [0.7619, [100, 203, 93]],
    [0.7778, [109, 206, 88]],
    [0.7937, [119, 208, 82]],
    [0.8095, [129, 211, 76]],
    [0.8254, [139, 213, 70]],
    [0.8413, [149, 215, 63]],
    [0.8571, [159, 217, 56]],
    [0.873, [170, 219, 50]],
    [0.8889, [181, 221, 43]],
    [0.9048, [191, 223, 36]],
    [0.9206, [202, 224, 30]],
    [0.9365, [212, 225, 26]],
    [0.9524, [223, 227, 24]],
    [0.9683, [233, 228, 25]],
    [0.9841, [243, 229, 30]],
    [1.0, [253, 231, 36]],
];

const CIVIDIS: RGBColorMap = [
    [0.0, [0, 34, 77]],
    [0.0159, [0, 37, 84]],
    [0.0317, [0, 40, 91]],
    [0.0476, [0, 42, 98]],
    [0.0635, [0, 45, 105]],
    [0.0794, [0, 48, 112]],
    [0.0952, [4, 50, 112]],
    [0.1111, [17, 53, 111]],
    [0.127, [26, 56, 111]],
    [0.1429, [33, 59, 110]],
    [0.1587, [39, 61, 109]],
    [0.1746, [44, 64, 109]],
    [0.1905, [49, 67, 108]],
    [0.2063, [54, 70, 108]],
    [0.2222, [58, 72, 107]],
    [0.2381, [63, 75, 107]],
    [0.254, [68, 79, 107]],
    [0.2698, [72, 81, 107]],
    [0.2857, [76, 84, 108]],
    [0.3016, [79, 87, 108]],
    [0.3175, [83, 90, 108]],
    [0.3333, [87, 93, 109]],
    [0.3492, [90, 95, 109]],
    [0.3651, [94, 98, 110]],
    [0.381, [97, 101, 111]],
    [0.3968, [101, 104, 112]],
    [0.4127, [104, 107, 113]],
    [0.4286, [108, 109, 114]],
    [0.4444, [111, 112, 115]],
    [0.4603, [115, 115, 116]],
    [0.4762, [118, 118, 118]],
    [0.4921, [121, 121, 119]],
    [0.5079, [126, 125, 120]],
    [0.5238, [130, 128, 120]],
    [0.5397, [133, 131, 120]],
    [0.5556, [137, 134, 120]],
    [0.5714, [141, 137, 120]],
    [0.5873, [145, 140, 119]],
    [0.6032, [149, 143, 119]],
    [0.619, [153, 146, 118]],
    [0.6349, [157, 149, 117]],
    [0.6508, [161, 152, 116]],
    [0.6667, [165, 155, 115]],
    [0.6825, [169, 158, 114]],
    [0.6984, [173, 162, 113]],
    [0.7143, [177, 165, 112]],
    [0.7302, [181, 168, 110]],
    [0.746, [185, 171, 109]],
    [0.7619, [190, 176, 106]],
    [0.7778, [195, 179, 104]],
    [0.7937, [199, 182, 102]],
    [0.8095, [203, 186, 100]],
    [0.8254, [207, 189, 97]],
    [0.8413, [212, 193, 94]],
    [0.8571, [216, 196, 91]],
    [0.873, [220, 200, 88]],
    [0.8889, [225, 204, 84]],
    [0.9048, [229, 207, 80]],
    [0.9206, [234, 211, 76]],
    [0.9365, [238, 215, 71]],
    [0.9524, [243, 218, 66]],
    [0.9683, [248, 222, 59]],
    [0.9841, [253, 226, 52]],
    [1.0, [253, 231, 55]],
];

const HSV: RGBColorMap = [
    [0.0, [165, 38, 38]],
    [0.0159, [172, 57, 45]],
    [0.0317, [179, 76, 52]],
    [0.0476, [187, 94, 59]],
    [0.0635, [194, 113, 66]],
    [0.0794, [201, 132, 73]],
    [0.0952, [208, 151, 80]],
    [0.1111, [215, 170, 87]],
    [0.127, [222, 189, 94]],
    [0.1429, [229, 208, 102]],
    [0.1587, [236, 227, 109]],
    [0.1746, [237, 239, 113]],
    [0.1905, [223, 237, 110]],
    [0.2063, [208, 234, 106]],
    [0.2222, [193, 230, 103]],
    [0.2381, [177, 227, 99]],
    [0.254, [158, 222, 95]],
    [0.2698, [143, 219, 91]],
    [0.2857, [127, 215, 88]],
    [0.3016, [112, 212, 84]],
    [0.3175, [97, 208, 81]],
    [0.3333, [81, 205, 77]],
    [0.3492, [77, 204, 85]],
    [0.3651, [78, 205, 98]],
    [0.381, [79, 207, 111]],
    [0.3968, [80, 208, 124]],
    [0.4127, [82, 209, 137]],
    [0.4286, [83, 210, 150]],
    [0.4444, [84, 211, 163]],
    [0.4603, [85, 213, 176]],
    [0.4762, [86, 214, 189]],
    [0.4921, [87, 215, 202]],
    [0.5079, [88, 214, 215]],
    [0.5238, [81, 195, 208]],
    [0.5397, [74, 176, 201]],
    [0.5556, [67, 157, 194]],
    [0.5714, [60, 138, 187]],
    [0.5873, [52, 120, 180]],
    [0.6032, [45, 101, 173]],
    [0.619, [38, 82, 166]],
    [0.6349, [31, 63, 159]],
    [0.6508, [24, 44, 152]],
    [0.6667, [17, 25, 145]],
    [0.6825, [17, 14, 141]],
    [0.6984, [33, 17, 144]],
    [0.7143, [48, 20, 148]],
    [0.7302, [63, 24, 152]],
    [0.746, [79, 28, 155]],
    [0.7619, [98, 32, 160]],
    [0.7778, [113, 36, 163]],
    [0.7937, [129, 39, 167]],
    [0.8095, [144, 43, 170]],
    [0.8254, [159, 46, 174]],
    [0.8413, [173, 49, 176]],
    [0.8571, [177, 50, 168]],
    [0.873, [176, 48, 155]],
    [0.8889, [175, 47, 142]],
    [0.9048, [174, 46, 129]],
    [0.9206, [172, 45, 116]],
    [0.9365, [171, 44, 103]],
    [0.9524, [170, 42, 90]],
    [0.9683, [169, 41, 77]],
    [0.9841, [168, 40, 64]],
    [1.0, [166, 39, 51]],
];

const TWILIGHT: RGBColorMap = [
    [0.0, [225, 216, 226]],
    [0.0159, [221, 217, 224]],
    [0.0317, [214, 214, 220]],
    [0.0476, [205, 210, 216]],
    [0.0635, [194, 205, 211]],
    [0.0794, [182, 199, 207]],
    [0.0952, [170, 193, 203]],
    [0.1111, [158, 187, 200]],
    [0.127, [147, 180, 198]],
    [0.1429, [137, 172, 196]],
    [0.1587, [128, 165, 195]],
    [0.1746, [119, 156, 193]],
    [0.1905, [112, 149, 192]],
    [0.2063, [107, 141, 191]],
    [0.2222, [102, 132, 189]],
    [0.2381, [99, 124, 187]],
    [0.254, [97, 115, 185]],
    [0.2698, [96, 106, 183]],
    [0.2857, [95, 97, 180]],
    [0.3016, [94, 87, 176]],
    [0.3175, [94, 78, 171]],
    [0.3333, [93, 67, 164]],
    [0.3492, [92, 57, 157]],
    [0.3651, [90, 48, 149]],
    [0.381, [88, 39, 139]],
    [0.3968, [84, 31, 127]],
    [0.4127, [79, 25, 114]],
    [0.4286, [73, 21, 100]],
    [0.4444, [66, 18, 87]],
    [0.4603, [59, 17, 75]],
    [0.4762, [54, 16, 65]],
    [0.4921, [50, 17, 58]],
    [0.5079, [49, 18, 55]],
    [0.5238, [55, 17, 56]],
    [0.5397, [62, 17, 60]],
    [0.5556, [70, 18, 64]],
    [0.5714, [80, 20, 68]],
    [0.5873, [90, 22, 72]],
    [0.6032, [101, 25, 75]],
    [0.619, [111, 28, 78]],
    [0.6349, [122, 32, 79]],
    [0.6508, [131, 37, 80]],
    [0.6667, [141, 44, 80]],
    [0.6825, [150, 50, 79]],
    [0.6984, [157, 58, 79]],
    [0.7143, [164, 66, 79]],
    [0.7302, [170, 75, 80]],
    [0.746, [176, 84, 81]],
    [0.7619, [181, 93, 83]],
    [0.7778, [186, 102, 87]],
    [0.7937, [190, 112, 91]],
    [0.8095, [193, 121, 96]],
    [0.8254, [196, 131, 104]],
    [0.8413, [199, 142, 113]],
    [0.8571, [201, 152, 123]],
    [0.873, [203, 162, 135]],
    [0.8889, [206, 171, 148]],
    [0.9048, [209, 180, 161]],
    [0.9206, [212, 189, 175]],
    [0.9365, [216, 197, 188]],
    [0.9524, [219, 205, 201]],
    [0.9683, [222, 211, 212]],
    [0.9841, [224, 215, 220]],
    [1.0, [225, 216, 225]],
];

const TWILIGHT_SHIFTED: RGBColorMap = [
    [0.0, [47, 19, 55]],
    [0.0159, [51, 17, 61]],
    [0.0317, [56, 16, 70]],
    [0.0476, [62, 17, 81]],
    [0.0635, [69, 19, 93]],
    [0.0794, [76, 22, 107]],
    [0.0952, [82, 27, 120]],
    [0.1111, [86, 34, 133]],
    [0.127, [89, 43, 144]],
    [0.1429, [91, 52, 153]],
    [0.1587, [93, 62, 161]],
    [0.1746, [93, 73, 168]],
    [0.1905, [94, 83, 173]],
    [0.2063, [94, 92, 178]],
    [0.2222, [95, 101, 181]],
    [0.2381, [96, 110, 184]],
    [0.254, [98, 119, 186]],
    [0.2698, [101, 128, 188]],
    [0.2857, [104, 136, 190]],
    [0.3016, [109, 145, 191]],
    [0.3175, [115, 153, 193]],
    [0.3333, [124, 161, 194]],
    [0.3492, [132, 169, 195]],
    [0.3651, [142, 176, 197]],
    [0.381, [152, 183, 199]],
    [0.3968, [164, 190, 202]],
    [0.4127, [176, 196, 205]],
    [0.4286, [188, 202, 209]],
    [0.4444, [199, 208, 214]],
    [0.4603, [210, 213, 218]],
    [0.4762, [217, 216, 222]],
    [0.4921, [223, 217, 225]],
    [0.5079, [225, 216, 223]],
    [0.5238, [223, 213, 216]],
    [0.5397, [221, 208, 207]],
    [0.5556, [217, 201, 195]],
    [0.5714, [214, 193, 181]],
    [0.5873, [210, 185, 168]],
    [0.6032, [207, 176, 154]],
    [0.619, [204, 167, 141]],
    [0.6349, [202, 157, 129]],
    [0.6508, [200, 147, 118]],
    [0.6667, [197, 136, 108]],
    [0.6825, [195, 126, 100]],
    [0.6984, [192, 116, 93]],
    [0.7143, [188, 107, 89]],
    [0.7302, [184, 97, 85]],
    [0.746, [179, 88, 82]],
    [0.7619, [173, 79, 80]],
    [0.7778, [167, 70, 79]],
    [0.7937, [161, 62, 79]],
    [0.8095, [154, 54, 79]],
    [0.8254, [146, 47, 79]],
    [0.8413, [136, 40, 80]],
    [0.8571, [127, 34, 80]],
    [0.873, [117, 30, 79]],
    [0.8889, [106, 26, 77]],
    [0.9048, [95, 23, 74]],
    [0.9206, [85, 21, 70]],
    [0.9365, [75, 19, 66]],
    [0.9524, [66, 17, 61]],
    [0.9683, [58, 17, 58]],
    [0.9841, [52, 17, 55]],
    [1.0, [47, 20, 54]],
];

const SEISMIC: RGBColorMap = [
    [0.0, [0, 0, 77]],
    [0.0159, [0, 0, 88]],
    [0.0317, [0, 0, 99]],
    [0.0476, [0, 0, 111]],
    [0.0635, [0, 0, 122]],
    [0.0794, [0, 0, 133]],
    [0.0952, [0, 0, 144]],
    [0.1111, [0, 0, 156]],
    [0.127, [0, 0, 167]],
    [0.1429, [0, 0, 178]],
    [0.1587, [0, 0, 189]],
    [0.1746, [0, 0, 200]],
    [0.1905, [0, 0, 212]],
    [0.2063, [0, 0, 223]],
    [0.2222, [0, 0, 234]],
    [0.2381, [0, 0, 245]],
    [0.254, [5, 5, 256]],
    [0.2698, [21, 21, 256]],
    [0.2857, [37, 37, 256]],
    [0.3016, [53, 53, 256]],
    [0.3175, [69, 69, 256]],
    [0.3333, [85, 85, 256]],
    [0.3492, [101, 101, 256]],
    [0.3651, [117, 117, 256]],
    [0.381, [134, 134, 256]],
    [0.3968, [150, 150, 256]],
    [0.4127, [166, 166, 256]],
    [0.4286, [182, 182, 256]],
    [0.4444, [198, 198, 256]],
    [0.4603, [214, 214, 256]],
    [0.4762, [230, 230, 256]],
    [0.4921, [246, 246, 256]],
    [0.5079, [256, 246, 246]],
    [0.5238, [256, 230, 230]],
    [0.5397, [256, 214, 214]],
    [0.5556, [256, 198, 198]],
    [0.5714, [256, 182, 182]],
    [0.5873, [256, 166, 166]],
    [0.6032, [256, 150, 150]],
    [0.619, [256, 134, 134]],
    [0.6349, [256, 117, 117]],
    [0.6508, [256, 101, 101]],
    [0.6667, [256, 85, 85]],
    [0.6825, [256, 69, 69]],
    [0.6984, [256, 53, 53]],
    [0.7143, [256, 37, 37]],
    [0.7302, [256, 21, 21]],
    [0.746, [256, 5, 5]],
    [0.7619, [248, 0, 0]],
    [0.7778, [240, 0, 0]],
    [0.7937, [232, 0, 0]],
    [0.8095, [224, 0, 0]],
    [0.8254, [216, 0, 0]],
    [0.8413, [208, 0, 0]],
    [0.8571, [200, 0, 0]],
    [0.873, [192, 0, 0]],
    [0.8889, [184, 0, 0]],
    [0.9048, [176, 0, 0]],
    [0.9206, [168, 0, 0]],
    [0.9365, [160, 0, 0]],
    [0.9524, [152, 0, 0]],
    [0.9683, [144, 0, 0]],
    [0.9841, [136, 0, 0]],
    [1.0, [128, 0, 0]],
];

const BRG: RGBColorMap = [
    [0.0, [0, 0, 256]],
    [0.0159, [8, 0, 248]],
    [0.0317, [16, 0, 240]],
    [0.0476, [24, 0, 232]],
    [0.0635, [32, 0, 224]],
    [0.0794, [40, 0, 216]],
    [0.0952, [48, 0, 208]],
    [0.1111, [56, 0, 200]],
    [0.127, [64, 0, 192]],
    [0.1429, [72, 0, 184]],
    [0.1587, [80, 0, 176]],
    [0.1746, [88, 0, 168]],
    [0.1905, [96, 0, 160]],
    [0.2063, [104, 0, 152]],
    [0.2222, [112, 0, 144]],
    [0.2381, [120, 0, 136]],
    [0.254, [131, 0, 125]],
    [0.2698, [139, 0, 117]],
    [0.2857, [147, 0, 109]],
    [0.3016, [155, 0, 101]],
    [0.3175, [163, 0, 93]],
    [0.3333, [171, 0, 85]],
    [0.3492, [179, 0, 77]],
    [0.3651, [187, 0, 69]],
    [0.381, [195, 0, 61]],
    [0.3968, [203, 0, 53]],
    [0.4127, [211, 0, 45]],
    [0.4286, [219, 0, 37]],
    [0.4444, [227, 0, 29]],
    [0.4603, [235, 0, 21]],
    [0.4762, [243, 0, 13]],
    [0.4921, [251, 0, 5]],
    [0.5079, [251, 5, 0]],
    [0.5238, [243, 13, 0]],
    [0.5397, [235, 21, 0]],
    [0.5556, [227, 29, 0]],
    [0.5714, [219, 37, 0]],
    [0.5873, [211, 45, 0]],
    [0.6032, [203, 53, 0]],
    [0.619, [195, 61, 0]],
    [0.6349, [187, 69, 0]],
    [0.6508, [179, 77, 0]],
    [0.6667, [171, 85, 0]],
    [0.6825, [163, 93, 0]],
    [0.6984, [155, 101, 0]],
    [0.7143, [147, 109, 0]],
    [0.7302, [139, 117, 0]],
    [0.746, [131, 125, 0]],
    [0.7619, [120, 136, 0]],
    [0.7778, [112, 144, 0]],
    [0.7937, [104, 152, 0]],
    [0.8095, [96, 160, 0]],
    [0.8254, [88, 168, 0]],
    [0.8413, [80, 176, 0]],
    [0.8571, [72, 184, 0]],
    [0.873, [64, 192, 0]],
    [0.8889, [56, 200, 0]],
    [0.9048, [48, 208, 0]],
    [0.9206, [40, 216, 0]],
    [0.9365, [32, 224, 0]],
    [0.9524, [24, 232, 0]],
    [0.9683, [16, 240, 0]],
    [0.9841, [8, 248, 0]],
    [1.0, [0, 256, 0]],
];

interface ColorMaps {
    [key: string]: RGBColorMap;
}

/* eslint-disable sort-keys */
/** @hidden */
export const COLOR_MAPS: ColorMaps = {
    inferno: INFERNO,
    magma: MAGMA,
    plasma: PLASMA,
    viridis: VIRIDIS,
    cividis: CIVIDIS,
    seismic: SEISMIC,
    brg: BRG,
    'twilight (periodic)': TWILIGHT,
    'twilight dark (periodic)': TWILIGHT_SHIFTED,
    'hsv (periodic)': HSV,
};

export function getColorMap(colormap: string): ColorScale {
    const cmap = COLOR_MAPS[colormap];
    assert(cmap !== undefined);

    return rgb_to_plotly(cmap);
}
