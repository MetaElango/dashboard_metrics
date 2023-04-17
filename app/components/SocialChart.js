"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Text } from "@chakra-ui/react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const result = {
  paging: {
    start: 0,
    count: 10,
    links: [],
  },
  elements: [
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1649894400000,
        end: 1649980800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1649980800000,
        end: 1650067200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650067200000,
        end: 1650153600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650153600000,
        end: 1650240000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650240000000,
        end: 1650326400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650326400000,
        end: 1650412800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650412800000,
        end: 1650499200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650499200000,
        end: 1650585600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650585600000,
        end: 1650672000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650672000000,
        end: 1650758400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650758400000,
        end: 1650844800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650844800000,
        end: 1650931200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1650931200000,
        end: 1651017600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651017600000,
        end: 1651104000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651104000000,
        end: 1651190400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651190400000,
        end: 1651276800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651276800000,
        end: 1651363200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651363200000,
        end: 1651449600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651449600000,
        end: 1651536000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651536000000,
        end: 1651622400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651622400000,
        end: 1651708800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651708800000,
        end: 1651795200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651795200000,
        end: 1651881600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651881600000,
        end: 1651968000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1651968000000,
        end: 1652054400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652054400000,
        end: 1652140800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652140800000,
        end: 1652227200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652227200000,
        end: 1652313600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652313600000,
        end: 1652400000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652400000000,
        end: 1652486400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652486400000,
        end: 1652572800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652572800000,
        end: 1652659200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652659200000,
        end: 1652745600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652745600000,
        end: 1652832000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652832000000,
        end: 1652918400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1652918400000,
        end: 1653004800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653004800000,
        end: 1653091200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653091200000,
        end: 1653177600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653177600000,
        end: 1653264000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 13,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653264000000,
        end: 1653350400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 14,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653350400000,
        end: 1653436800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 11,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653436800000,
        end: 1653523200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653523200000,
        end: 1653609600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653609600000,
        end: 1653696000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653696000000,
        end: 1653782400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653782400000,
        end: 1653868800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653868800000,
        end: 1653955200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1653955200000,
        end: 1654041600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 16,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654041600000,
        end: 1654128000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 12,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654128000000,
        end: 1654214400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 12,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654214400000,
        end: 1654300800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654300800000,
        end: 1654387200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654387200000,
        end: 1654473600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654473600000,
        end: 1654560000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654560000000,
        end: 1654646400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654646400000,
        end: 1654732800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654732800000,
        end: 1654819200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654819200000,
        end: 1654905600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654905600000,
        end: 1654992000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1654992000000,
        end: 1655078400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655078400000,
        end: 1655164800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655164800000,
        end: 1655251200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655251200000,
        end: 1655337600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655337600000,
        end: 1655424000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655424000000,
        end: 1655510400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655510400000,
        end: 1655596800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655596800000,
        end: 1655683200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655683200000,
        end: 1655769600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655769600000,
        end: 1655856000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655856000000,
        end: 1655942400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1655942400000,
        end: 1656028800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656028800000,
        end: 1656115200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656115200000,
        end: 1656201600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656201600000,
        end: 1656288000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656288000000,
        end: 1656374400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656374400000,
        end: 1656460800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656460800000,
        end: 1656547200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656547200000,
        end: 1656633600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656633600000,
        end: 1656720000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656720000000,
        end: 1656806400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656806400000,
        end: 1656892800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656892800000,
        end: 1656979200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1656979200000,
        end: 1657065600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657065600000,
        end: 1657152000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657152000000,
        end: 1657238400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657238400000,
        end: 1657324800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657324800000,
        end: 1657411200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657411200000,
        end: 1657497600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657497600000,
        end: 1657584000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657584000000,
        end: 1657670400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657670400000,
        end: 1657756800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657756800000,
        end: 1657843200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657843200000,
        end: 1657929600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1657929600000,
        end: 1658016000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658016000000,
        end: 1658102400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658102400000,
        end: 1658188800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658188800000,
        end: 1658275200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 21,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658275200000,
        end: 1658361600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658361600000,
        end: 1658448000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658448000000,
        end: 1658534400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658534400000,
        end: 1658620800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658620800000,
        end: 1658707200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658707200000,
        end: 1658793600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658793600000,
        end: 1658880000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658880000000,
        end: 1658966400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 21,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1658966400000,
        end: 1659052800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659052800000,
        end: 1659139200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659139200000,
        end: 1659225600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659225600000,
        end: 1659312000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659312000000,
        end: 1659398400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659398400000,
        end: 1659484800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659484800000,
        end: 1659571200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659571200000,
        end: 1659657600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659657600000,
        end: 1659744000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659744000000,
        end: 1659830400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659830400000,
        end: 1659916800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1659916800000,
        end: 1660003200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660003200000,
        end: 1660089600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660089600000,
        end: 1660176000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660176000000,
        end: 1660262400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660262400000,
        end: 1660348800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660348800000,
        end: 1660435200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660435200000,
        end: 1660521600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660521600000,
        end: 1660608000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660608000000,
        end: 1660694400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660694400000,
        end: 1660780800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660780800000,
        end: 1660867200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660867200000,
        end: 1660953600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1660953600000,
        end: 1661040000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661040000000,
        end: 1661126400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661126400000,
        end: 1661212800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661212800000,
        end: 1661299200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 16,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661299200000,
        end: 1661385600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661385600000,
        end: 1661472000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661472000000,
        end: 1661558400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661558400000,
        end: 1661644800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661644800000,
        end: 1661731200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661731200000,
        end: 1661817600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661817600000,
        end: 1661904000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661904000000,
        end: 1661990400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1661990400000,
        end: 1662076800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662076800000,
        end: 1662163200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662163200000,
        end: 1662249600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662249600000,
        end: 1662336000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662336000000,
        end: 1662422400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 11,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662422400000,
        end: 1662508800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662508800000,
        end: 1662595200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662595200000,
        end: 1662681600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662681600000,
        end: 1662768000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 101,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662768000000,
        end: 1662854400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1690,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662854400000,
        end: 1662940800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1320,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1662940800000,
        end: 1663027200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 18,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663027200000,
        end: 1663113600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1064,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663113600000,
        end: 1663200000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1020,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663200000000,
        end: 1663286400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663286400000,
        end: 1663372800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663372800000,
        end: 1663459200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663459200000,
        end: 1663545600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663545600000,
        end: 1663632000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1430,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663632000000,
        end: 1663718400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1492,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663718400000,
        end: 1663804800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 90,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663804800000,
        end: 1663891200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663891200000,
        end: 1663977600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1663977600000,
        end: 1664064000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664064000000,
        end: 1664150400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664150400000,
        end: 1664236800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664236800000,
        end: 1664323200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664323200000,
        end: 1664409600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664409600000,
        end: 1664496000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 11,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664496000000,
        end: 1664582400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664582400000,
        end: 1664668800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664668800000,
        end: 1664755200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 51,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664755200000,
        end: 1664841600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 68,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664841600000,
        end: 1664928000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 37,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1664928000000,
        end: 1665014400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 38,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665014400000,
        end: 1665100800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 22,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665100800000,
        end: 1665187200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 15,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665187200000,
        end: 1665273600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665273600000,
        end: 1665360000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665360000000,
        end: 1665446400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665446400000,
        end: 1665532800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665532800000,
        end: 1665619200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665619200000,
        end: 1665705600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665705600000,
        end: 1665792000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665792000000,
        end: 1665878400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665878400000,
        end: 1665964800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1665964800000,
        end: 1666051200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666051200000,
        end: 1666137600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666137600000,
        end: 1666224000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666224000000,
        end: 1666310400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666310400000,
        end: 1666396800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666396800000,
        end: 1666483200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666483200000,
        end: 1666569600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666569600000,
        end: 1666656000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666656000000,
        end: 1666742400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666742400000,
        end: 1666828800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666828800000,
        end: 1666915200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 11,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1666915200000,
        end: 1667001600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667001600000,
        end: 1667088000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667088000000,
        end: 1667174400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667174400000,
        end: 1667260800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667260800000,
        end: 1667347200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667347200000,
        end: 1667433600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667433600000,
        end: 1667520000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 21,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667520000000,
        end: 1667606400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667606400000,
        end: 1667692800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667692800000,
        end: 1667779200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667779200000,
        end: 1667865600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667865600000,
        end: 1667952000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1667952000000,
        end: 1668038400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668038400000,
        end: 1668124800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668124800000,
        end: 1668211200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668211200000,
        end: 1668297600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668297600000,
        end: 1668384000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668384000000,
        end: 1668470400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668470400000,
        end: 1668556800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668556800000,
        end: 1668643200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668643200000,
        end: 1668729600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668729600000,
        end: 1668816000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668816000000,
        end: 1668902400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 19,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668902400000,
        end: 1668988800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1668988800000,
        end: 1669075200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669075200000,
        end: 1669161600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669161600000,
        end: 1669248000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669248000000,
        end: 1669334400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669334400000,
        end: 1669420800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669420800000,
        end: 1669507200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669507200000,
        end: 1669593600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 16,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669593600000,
        end: 1669680000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669680000000,
        end: 1669766400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669766400000,
        end: 1669852800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669852800000,
        end: 1669939200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1669939200000,
        end: 1670025600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670025600000,
        end: 1670112000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670112000000,
        end: 1670198400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670198400000,
        end: 1670284800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670284800000,
        end: 1670371200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670371200000,
        end: 1670457600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670457600000,
        end: 1670544000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670544000000,
        end: 1670630400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670630400000,
        end: 1670716800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670716800000,
        end: 1670803200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670803200000,
        end: 1670889600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670889600000,
        end: 1670976000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1670976000000,
        end: 1671062400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671062400000,
        end: 1671148800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671148800000,
        end: 1671235200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671235200000,
        end: 1671321600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671321600000,
        end: 1671408000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671408000000,
        end: 1671494400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671494400000,
        end: 1671580800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671580800000,
        end: 1671667200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671667200000,
        end: 1671753600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671753600000,
        end: 1671840000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671840000000,
        end: 1671926400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1671926400000,
        end: 1672012800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672012800000,
        end: 1672099200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672099200000,
        end: 1672185600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672185600000,
        end: 1672272000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 14,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672272000000,
        end: 1672358400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672358400000,
        end: 1672444800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 17,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672444800000,
        end: 1672531200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 56,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672531200000,
        end: 1672617600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 20,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672617600000,
        end: 1672704000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 13,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672704000000,
        end: 1672790400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 24,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672790400000,
        end: 1672876800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 13,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672876800000,
        end: 1672963200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 11,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1672963200000,
        end: 1673049600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673049600000,
        end: 1673136000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673136000000,
        end: 1673222400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 12,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673222400000,
        end: 1673308800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673308800000,
        end: 1673395200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673395200000,
        end: 1673481600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673481600000,
        end: 1673568000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 12,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673568000000,
        end: 1673654400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 12,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673654400000,
        end: 1673740800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673740800000,
        end: 1673827200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 15,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673827200000,
        end: 1673913600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 35,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1673913600000,
        end: 1674000000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 24,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674000000000,
        end: 1674086400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 7,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674086400000,
        end: 1674172800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674172800000,
        end: 1674259200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 20,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674259200000,
        end: 1674345600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674345600000,
        end: 1674432000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 22,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674432000000,
        end: 1674518400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 60,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674518400000,
        end: 1674604800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 26,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674604800000,
        end: 1674691200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 13,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674691200000,
        end: 1674777600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674777600000,
        end: 1674864000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674864000000,
        end: 1674950400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1674950400000,
        end: 1675036800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 17,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675036800000,
        end: 1675123200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 14,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675123200000,
        end: 1675209600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675209600000,
        end: 1675296000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675296000000,
        end: 1675382400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675382400000,
        end: 1675468800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675468800000,
        end: 1675555200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675555200000,
        end: 1675641600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 18,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675641600000,
        end: 1675728000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675728000000,
        end: 1675814400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675814400000,
        end: 1675900800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 9,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675900800000,
        end: 1675987200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1675987200000,
        end: 1676073600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676073600000,
        end: 1676160000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676160000000,
        end: 1676246400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676246400000,
        end: 1676332800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676332800000,
        end: 1676419200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676419200000,
        end: 1676505600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676505600000,
        end: 1676592000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676592000000,
        end: 1676678400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676678400000,
        end: 1676764800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676764800000,
        end: 1676851200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676851200000,
        end: 1676937600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1676937600000,
        end: 1677024000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677024000000,
        end: 1677110400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677110400000,
        end: 1677196800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677196800000,
        end: 1677283200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677283200000,
        end: 1677369600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677369600000,
        end: 1677456000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677456000000,
        end: 1677542400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677542400000,
        end: 1677628800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677628800000,
        end: 1677715200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677715200000,
        end: 1677801600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677801600000,
        end: 1677888000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677888000000,
        end: 1677974400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1677974400000,
        end: 1678060800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678060800000,
        end: 1678147200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678147200000,
        end: 1678233600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678233600000,
        end: 1678320000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 4,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678320000000,
        end: 1678406400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678406400000,
        end: 1678492800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678492800000,
        end: 1678579200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678579200000,
        end: 1678665600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678665600000,
        end: 1678752000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678752000000,
        end: 1678838400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678838400000,
        end: 1678924800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1678924800000,
        end: 1679011200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679011200000,
        end: 1679097600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679097600000,
        end: 1679184000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679184000000,
        end: 1679270400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679270400000,
        end: 1679356800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679356800000,
        end: 1679443200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 11,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679443200000,
        end: 1679529600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 6,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679529600000,
        end: 1679616000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: -1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679616000000,
        end: 1679702400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679702400000,
        end: 1679788800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679788800000,
        end: 1679875200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679875200000,
        end: 1679961600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 25,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1679961600000,
        end: 1680048000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 12,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680048000000,
        end: 1680134400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680134400000,
        end: 1680220800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 10,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680220800000,
        end: 1680307200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680307200000,
        end: 1680393600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680393600000,
        end: 1680480000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 3,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680480000000,
        end: 1680566400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680566400000,
        end: 1680652800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680652800000,
        end: 1680739200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 8,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680739200000,
        end: 1680825600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680825600000,
        end: 1680912000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680912000000,
        end: 1680998400000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1680998400000,
        end: 1681084800000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 0,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1681084800000,
        end: 1681171200000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 5,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1681171200000,
        end: 1681257600000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 1,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1681257600000,
        end: 1681344000000,
      },
    },
    {
      followerGains: {
        organicFollowerGain: 2,
        paidFollowerGain: 0,
      },
      organizationalEntity: "urn:li:organization:72591500",
      timeRange: {
        start: 1681344000000,
        end: 1681430400000,
      },
    },
  ],
};

const series = [
  {
    name: "Organic",
    data: result.elements.map((el) => el.followerGains.organicFollowerGain),
    color: "green",
  },
  {
    name: "Paid",
    data: result.elements.map((el) => el.followerGains.paidFollowerGain),
    color: "red",
  },
];

const options = {
  chart: {
    height: 350,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: result.elements.map((el) => el.timeRange.start),
  },
  tooltip: {
    x: {
      format: "dd/MM/yy",
    },
  },
};

export default function SocialChart() {
  return (
    <div>
      <Text fontSize="3xl">LinkedIn analytics</Text>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        width={"90%"}
        height={800}
      />
    </div>
  );
}
