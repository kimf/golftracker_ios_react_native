// CalendarManager.m
#import "KFCircleChart.h"
#import "UIView+React.h"

#import <PNChart/PNCircleChart.h>


@implementation KFCircleChart

- (id)initWithFrame:(CGRect)frame {

    self = [super initWithFrame:frame
                         total:[NSNumber numberWithInt:100]
                       current:[NSNumber numberWithInt:56]
                     clockwise:NO
                        shadow:NO
                   shadowColor:[UIColor clearColor]
          displayCountingLabel:YES
             overrideLineWidth:@8.0f];
    self.contentMode = UIViewContentModeRedraw;
    [self setStrokeColor:PNGreen];
    [self strokeChart];
    return self;
}

@end
