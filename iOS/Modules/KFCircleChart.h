#import <UIKit/UIKit.h>
#import <PNChart/PNColor.h>

typedef NS_ENUM (NSUInteger, PNChartFormatType) {
    PNChartFormatTypePercent,
    PNChartFormatTypeDollar,
    PNChartFormatTypeNone
};

#define DEGREES_TO_RADIANS(angle) ((angle) / 180.0 * M_PI)

@interface KFCircleChart : UIView

//- (id)init;
- (id)initWithFrame:(CGRect)frame;

@property (nonatomic) UIColor *strokeColor;
@property (nonatomic) UIColor *strokeColorGradientStart;
@property (nonatomic) NSNumber *total;
@property (nonatomic) NSNumber *current;
@property (nonatomic) NSNumber *lineWidth;
@property (nonatomic) NSTimeInterval duration;
@property (nonatomic) PNChartFormatType chartType;


@property (nonatomic) CAShapeLayer *circle;
@property (nonatomic) CAShapeLayer *gradientMask;
@property (nonatomic) CAShapeLayer *circleBackground;

@end
