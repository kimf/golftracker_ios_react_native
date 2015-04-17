#import "KFCircleChart.h"

@implementation KFCircleChart

- (void)setCurrentValue:(NSInteger)currentValue
{

  //[anObject valueForKey: @"propertyName"];
  [self updateChartByCurrent:[NSNumber numberWithInteger: currentValue]];
}

@end
