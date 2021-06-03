//
//  RCTAnalytics.m
//  BITG
//
//  Created by Alpredo Pan on 02/06/2021.
//  Copyright © 2021 BITG. All rights reserved.
//

#import "RCTAnalytics.h"
#import <Mixpanel/Mixpanel.h>
#import <Mixpanel/MPTweakInline.h>

@implementation RCTAnalytics
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(optIn:(BOOL) val) {
    // Making sure it runs on the main thread
    dispatch_async(dispatch_get_main_queue(), ^(){
      if(val){
        [[Mixpanel sharedInstance] optInTracking];
      } else {
        [[Mixpanel sharedInstance] optOutTracking];
      }
    });
}

RCT_EXPORT_METHOD(trackEvent:(NSDictionary *)event)
{
  [[Mixpanel sharedInstance] track: [self getCategory:event] properties:[self getInfo:event]];
}

RCT_EXPORT_METHOD(trackEventAnonymously:(NSDictionary *)event)
{
  NSString *const distinctId = [[Mixpanel sharedInstance] distinctId];
  [[Mixpanel sharedInstance] identify:@"0x0000000000000000"];
  [[Mixpanel sharedInstance] track: [self getCategory:event] properties:[self getInfo:event]];
  [[Mixpanel sharedInstance] identify:distinctId];
}


RCT_EXPORT_METHOD(peopleIdentify)
{
  [[Mixpanel sharedInstance] identify:[[Mixpanel sharedInstance] distinctId]];
}

RCT_REMAP_METHOD(getDistinctId,
                 getDistinctIdWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  resolve([[Mixpanel sharedInstance] distinctId]);
}


RCT_REMAP_METHOD(getRemoteVariables,
                 getRemoteVariableWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *val = MPTweakValue(@"remoteVariables", @"{}");

  if (val) {
    resolve(val);
  } else {
    resolve(@"{}");
  }
}

- (NSString *)getCategory:(NSDictionary *)event{
  return event[@"category"];
}

- (NSDictionary *)getInfo:(NSDictionary *)event{
  NSMutableDictionary *e = [event mutableCopy];
  [e removeObjectForKey:@"category"];
  return e;
}

@end
