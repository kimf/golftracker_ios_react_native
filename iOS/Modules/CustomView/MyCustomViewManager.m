#import "MyCustomViewManager.h"
#import "MyCustomView.h"
#import <UIKit/UIKit.h>

@implementation MyCustomViewManager

RCT_EXPORT_MODULE();

RCT_EXPORT_VIEW_PROPERTY(isRed, NSInteger)

- (UIView *)view
{
    MyCustomView * theView;
    theView = [[MyCustomView alloc] initWithFrame:CGRectMake(0,0,10,10)];
    return theView;
}

@end
