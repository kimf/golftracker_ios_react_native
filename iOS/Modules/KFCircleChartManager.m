#import "KFCircleChartManager.h"
#import "KFCircleChart.h"
#import <PNChart/PNColor.h>

@implementation KFCircleChartManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(currentValue, NSNumber)

- (UIView *)view
{
  KFCircleChart *circleChart;
  
  circleChart = [[KFCircleChart alloc] initWithFrame:CGRectMake(0,0,30.0,30.0)
                                                              total:[NSNumber numberWithInt:100]
                                                            current:[NSNumber numberWithInt:37]
                                                          clockwise:YES
                                                             shadow:YES
                                                        shadowColor:PNRed
                                               displayCountingLabel:NO
                                                  overrideLineWidth:@5.0f];

  [circleChart setStrokeColor:PNFreshGreen];
  [circleChart strokeChart];
  return circleChart;
}


@end
