"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const unwantedAccounts = [
  "3elango@gmail.com",
  "elango@hedonova.io",
  "sagar.sukhanandi@gmail.com",
  "vishakha.gondaliya27@gmail.com",
];
export default function TransactionChart() {
  const [loading, setLoading] = useState(true);
  const [investments, setInvestments] = useState([]);
  const [withdrawals, setWithdrawals] = useState([]);
  const [rbs, setRbs] = useState([]);
  const [dates, setDates] = useState([]);
  const [options, setOptions] = useState({
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
      categories: [],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  });
  const [series, setSeries] = useState([]);
  const [sortedInv, setSortedInv] = useState([]);
  const [sortedWds, setSortedWds] = useState([]);
  const [sumOfInvestments, setSumOfInvestments] = useState(0);
  const [sumOfWithdrawals, setSumOfWithdrawals] = useState(0);
  useEffect(() => {
    setLoading(true);
    fetch("https://api-live.hedonova.io/admin-api/v2/transaction-list", {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJjNTdkZWFiOWEyNDJkYTM5ZjFhNmYzIiwiaWF0IjoxNjU3MTEwNjQwLCJleHAiOjE2NTcxMTc4NDB9.jBdyQRIaeJrSX_QTN4U36P1B9bP9cAHytUxlahBeiGQ",
        "content-type": "application/json",
      },
      referrer: "https://admin.hedonova.io/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"adminId":"62c57deab9a242da39f1a6f3","referenceId":""}',
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        const completeList = [];
        const transactionList = data.data
          .map((el) => ({
            type: el.type,
            status: el.status,
            createdAt: el.createdAt,
            splitedDate: el.createdAt.split("T")[0],
            email: el.user.email,
            amount: el.amount,
          }))
          .filter((el) => !unwantedAccounts.includes(el.email));
        console.log(transactionList);
        const transactionObject = {};

        transactionList.forEach((el) => {
          if (el.splitedDate in transactionObject) {
            if (el.type == 0) {
              transactionObject[el.splitedDate].investment =
                transactionObject[el.splitedDate].investment + el.amount;
            }
            if (el.type == 1) {
              transactionObject[el.splitedDate].withdrawal =
                transactionObject[el.splitedDate].withdrawal + el.amount;
            }
            if (el.type == 2) {
              transactionObject[el.splitedDate].referralBonus =
                transactionObject[el.splitedDate].referralBonus + el.amount;
            }
          } else {
            transactionObject[`${el.splitedDate}`] = {
              investment: 0,
              withdrawal: 0,
              referralBonus: 0,
            };
            if (el.type === 0) {
              transactionObject[`${el.splitedDate}`] = {
                investment: el.amount,
                withdrawal: 0,
                referralBonus: 0,
              };
            }
            if (el.type === 1) {
              transactionObject[`${el.splitedDate}`] = {
                investment: 0,
                withdrawal: el.amount,
                referralBonus: 0,
              };
            }
            if (el.type === 2) {
              transactionObject[`${el.splitedDate}`] = {
                investment: 0,
                withdrawal: 0,
                referralBonus: el.amount,
              };
            }
          }
        });

        for (const property in transactionObject) {
          let inv, wd, rbonus;
          inv = parseFloat(transactionObject[property].investment.toFixed(2));
          wd = parseFloat(transactionObject[property].withdrawal.toFixed(2));
          rbonus = parseFloat(
            transactionObject[property].referralBonus.toFixed(2)
          );
          dates.push(property);
          investments.push(inv);
          withdrawals.push(wd);
          rbs.push(rbonus);

          completeList.push({
            date: property,
            inv,
            wd,
            rbonus,
          });
        }

        const sortedInvestment = completeList
          .sort((a, b) => b.inv - a.inv)
          .filter((el, i) => i <= 9);
        const sortedWDs = completeList
          .sort((a, b) => b.wd - a.wd)
          .filter((el, i) => i <= 9);

        setDates(dates);
        setInvestments(investments);
        setWithdrawals(withdrawals);
        setRbs(rbs);

        setOptions({
          ...options,
          xaxis: {
            type: "datetime",
            categories: dates,
          },
        });
        setSeries([
          {
            name: "Investments",
            data: investments,
            color: "green",
          },
          {
            name: "Withdrawals",
            data: withdrawals,
            color: "red",
          },
          {
            name: "Referral bonuses",
            data: rbs,
          },
        ]);
        setSortedInv(sortedInvestment);
        setSortedWds(sortedWDs);
        const sumOfInv = investments.reduce(function (x, y) {
          return x + y;
        }, 0);
        const sumOfWDs = withdrawals.reduce(function (x, y) {
          return x + y;
        }, 0);
        setSumOfInvestments(sumOfInv);
        setSumOfWithdrawals(sumOfWDs);
        setLoading(false);
      });
  }, []);
  return (
    <div id="chart">
      {loading ? (
        "loading...."
      ) : (
        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            width={"90%"}
            height={800}
          />
          <br />
          <br />
          <br />
          <br />
          <StatGroup>
            <Stat>
              <StatLabel>Total Investments till date</StatLabel>
              <StatNumber>
                $ {sumOfInvestments.toLocaleString("en-US")}
              </StatNumber>
            </Stat>

            <Stat>
              <StatLabel>Total withdrawals till date</StatLabel>
              <StatNumber>
                $ {sumOfWithdrawals.toLocaleString("en-US")}
              </StatNumber>
            </Stat>
          </StatGroup>
          <br />
          <br />
          <br />
          <br />
          <br />
          <TableContainer>
            <Text fontSize="3xl">Top 10 investments</Text>
            <br />
            <br />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date (YY/MM/DD)</Th>
                  <Th>Investments (USD)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedInv.map((el) => (
                  <Tr key={`${el.date}inv`}>
                    <Td>{el.date}</Td>
                    <Td>$ {el.inv.toLocaleString("en-US")}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <TableContainer>
            <Text fontSize="3xl">Top 10 withdrawals</Text>
            <br />
            <br />
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date (YY/MM/DD)</Th>
                  <Th>Withdrawals (USD)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedWds.map((el) => (
                  <Tr key={`${el.date}inv`}>
                    <Td>{el.date}</Td>
                    <Td>$ {el.wd.toLocaleString("en-US")}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
