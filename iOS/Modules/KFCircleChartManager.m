#import "KFCircleChartManager.h"

#import "RCTBridge.h"
#import "KFCircleChart.h"
#import "RCTUIManager.h"

@implementation KFCircleChartManager

RCT_EXPORT_MODULE()


- (UIView *)view
{
  return [[KFCircleChart alloc] initWithFrame:CGRectMake(0, 0, 50.0, 50.0)];
}

@end
