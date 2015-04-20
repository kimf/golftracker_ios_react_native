#import "KFCircleChartManager.h"
#import "KFCircleChart.h"
#import <PNChart/PNColor.h>

@implementation KFCircleChartManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(currentValue, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(totalValue, NSInteger)

- (UIView *)view
{
  KFCircleChart *circleChart;
  circleChart = [[KFCircleChart alloc] init];
  return circleChart;
}


@end
