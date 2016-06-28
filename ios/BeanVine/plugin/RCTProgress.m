//
//  RCTProgress.m
//  ReactStudy
//
//  Created by Rongbin on 16/6/21.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTProgress.h"

@implementation RCTProgress

RCT_EXPORT_MODULE();

RCT_EXPORT_VIEW_PROPERTY(proString, NSString)

- (UIView *)view
{
  PICircularProgressView *progress = [[PICircularProgressView alloc] init];
//  NSLog(@"------native Component--%f",_electricQuantity);
  progress.progress = 1;          // 进度条长度值
  progress.thicknessRatio = .168;   // 进度条宽
  progress.roundedHead = NO;       // 进度条头尾圆角
  progress.showShadow = YES;       // 进度条背景
  progress.progressFillColor = [UIColor colorWithRed:(221)/255.0 green:(236)/255.0 blue:(200)/255.0 alpha:(1)];    // 进度条颜色
  progress.progressBgColor = [UIColor colorWithRed:(99)/255.0 green:(168)/255.0 blue:(53)/255.0 alpha:(1)];// 进度条背景为
  progress.showText = YES;         // 文字
  [progress setTextColor:[UIColor colorWithRed:(102)/255.0 green:(176)/255.0 blue:(50)/255.0 alpha:(1)]];
  return progress;
}


@end
