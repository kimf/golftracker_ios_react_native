#import "KFCircleChartManager.h"
#import "KFCircleChart.h"
#import <PNChart/PNColor.h>

@implementation KFCircleChartManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[KFCircleChart alloc] init];
}

#pragma mark - View properties

RCT_EXPORT_VIEW_PROPERTY(currentValue, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(totalValue, NSInteger)


@end
