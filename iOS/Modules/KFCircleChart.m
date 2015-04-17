#import "KFCircleChart.h"

@implementation KFCircleChart

- (void)setCurrentValue:(NSNumber*)currentValue
{
    [self updateChartByCurrent:currentValue];
    [self setNeedsDisplay];
}

@end
