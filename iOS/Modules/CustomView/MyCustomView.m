#import "MyCustomView.h"

@implementation MyCustomView

- (void)setIsRed:(NSInteger)isRed
{
  NSLog(@"currentValue is %ld", (long)isRed);
}

// - (void)drawRect:(CGRect)rect
// {
//     [squareColor setFill];
//     CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
// }

@end
