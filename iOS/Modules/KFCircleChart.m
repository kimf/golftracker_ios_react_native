#import "KFCircleChart.h"

//#import "RCTUtils.h"
#import "UIView+React.h"

@interface KFCircleChart ()
@end

@implementation KFCircleChart

- (id)init {
  NSLog(@"initing");
  return [super initWithFrame:CGRectMake(0,0,30,30)];
}

- (void)setCurrentValue:(NSInteger)currentValue {
  NSLog(@"New currentValue %ld", (long)currentValue);
  _current = [NSNumber numberWithFloat:currentValue];
  [self redraw];
}

- (void)setTotalValue:(NSInteger)totalValue {
  NSLog(@"New total %ld", (long)totalValue);
  _total = [NSNumber numberWithFloat:totalValue];
  [self redraw];
}


- (id)redraw {

  if((_total != nil) && (_current != nil) && (self)) {
    NSLog(@"--- REDRAWING ----");

    _strokeColor = PNFreshGreen;
    _duration = 0.5;
    _lineWidth = @8.0f;

    CGFloat startAngle = 270.0f;
    CGFloat endAngle = 270.01f;

    UIBezierPath *circlePath = [UIBezierPath bezierPathWithArcCenter:CGPointMake(self.frame.size.width/2.0f, self.frame.size.height/2.0f)
                                                              radius:(self.frame.size.height * 0.5) - ([_lineWidth floatValue]/2.0f)
                                                          startAngle:DEGREES_TO_RADIANS(startAngle)
                                                            endAngle:DEGREES_TO_RADIANS(endAngle)
                                                           clockwise:NO];

    _circle               = [CAShapeLayer layer];
    _circle.path          = circlePath.CGPath;
    _circle.lineCap       = kCALineCapButt;
    _circle.fillColor     = [UIColor clearColor].CGColor;
    _circle.lineWidth     = [_lineWidth floatValue];
    _circle.zPosition     = 1;

    _circleBackground             = [CAShapeLayer layer];
    _circleBackground.path        = circlePath.CGPath;
    _circleBackground.lineCap     = kCALineCapButt;
    _circleBackground.fillColor   = [UIColor clearColor].CGColor;
    _circleBackground.lineWidth   = [_lineWidth floatValue];
    _circleBackground.strokeColor = PNRed.CGColor;
    _circleBackground.strokeEnd   = 1.0;
    _circleBackground.zPosition   = -1;

    [self.layer addSublayer:_circle];
    [self.layer addSublayer:_circleBackground];

    _circle.lineWidth   = [_lineWidth floatValue];
    _circleBackground.lineWidth = [_lineWidth floatValue];
    _circleBackground.strokeEnd = 1.0;
    _circle.strokeColor = _strokeColor.CGColor;

    // Add Animation
    CABasicAnimation *pathAnimation = [CABasicAnimation animationWithKeyPath:@"strokeEnd"];
    pathAnimation.duration = self.duration;
    pathAnimation.timingFunction = [CAMediaTimingFunction functionWithName:kCAMediaTimingFunctionEaseInEaseOut];
    pathAnimation.fromValue = @0.0f;
    pathAnimation.toValue = @([_current floatValue] / [_total floatValue]);
    [_circle addAnimation:pathAnimation forKey:@"strokeEndAnimation"];
    _circle.strokeEnd   = [_current floatValue] / [_total floatValue];
  }

  return self;
}


@end
