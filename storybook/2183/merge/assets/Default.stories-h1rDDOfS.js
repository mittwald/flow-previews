import{j as e}from"./iframe-b3Ga2wpf.js";import{a7 as I,ag as G,ah as V,a2 as s,e as A,f as g,ai as T,F as f,aj as k,ak as B,V as F,a1 as z,a0 as b,_ as P,Z as _,W as L}from"./TimeField-CtNImo6o.js";import{H as a}from"./Heading-BGN7eCNA.js";import{T as o}from"./Text-DIbSGP69.js";import{A as p}from"./Avatar-DRdoqq5g.js";import"./FileCardList-Cu-7JGuA.js";import{S as h}from"./Section-DpTqM0_J.js";import{a as W,a6 as M}from"./IconWarning-C84U4k_5.js";import{A as E}from"./AlertBadge-Dc59NCSn.js";import"./browser-C0SY9BaM.js";import{t as u}from"./typedList-BHnfTeyB.js";import{B as S}from"./Button-B9AKUFf2.js";import{A as N}from"./ActionGroup-C8Oe2XUd.js";import{C as O}from"./Content-CZqLB91a.js";import{S as y}from"./SkeletonText-6MyMR-o8.js";import{S as v}from"./Skeleton-DwbvfRV4.js";const w=()=>new Promise(n=>window.setTimeout(n,750)),Z=async()=>(await w(),J),K=async n=>{await w();const t=n.filter?.types,i=n.search,x=D.filter(j=>{const C=!t||t.length===0||t.includes(j.type),H=i===void 0||j.domain.toLowerCase().includes(i.toLowerCase());return C&&H}),R=x.length;return{data:n.pagination?x.slice(n.pagination.skip,n.pagination.skip+n.pagination.limit):x,totalCount:R}},D=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],J=D.map(n=>n.type).filter((n,t,i)=>i.indexOf(n)===t),Q=async n=>{const t=await K({pagination:n?.pagination?{limit:n.pagination.limit,skip:n.pagination.offset}:void 0,filter:n?.filtering?.type?{types:n.filtering.type.values}:void 0,search:n?.searchString});return{data:t.data,itemTotalCount:t.totalCount}},U={title:"Structure/List",component:I,render:()=>{const n=u(),t=G(Z,[]);return e.jsx(V,{type:"localStorage",storageKey:"listStory",children:e.jsxs(h,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",onAction:i=>console.log(i.hostname),settingStorageKey:"domains",defaultViewMode:"tiles",children:[e.jsxs(N,{children:[e.jsx(S,{color:"secondary",variant:"soft",slot:"secondary",children:"Herunterladen"}),e.jsx(S,{color:"accent",children:"Anlegen"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:Q}),e.jsx(n.Filter,{values:t,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"A-Z",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsxs(n.Table,{children:[e.jsxs(n.TableHeader,{children:[e.jsx(n.TableColumn,{children:"Name"}),e.jsx(n.TableColumn,{children:"Type"}),e.jsx(n.TableColumn,{children:"TLD"}),e.jsx(n.TableColumn,{children:"Hostname"})]}),e.jsx(n.TableBody,{children:e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:i=>i.domain}),e.jsx(n.TableCell,{children:i=>i.type}),e.jsx(n.TableCell,{children:i=>i.tld}),e.jsx(n.TableCell,{children:i=>i.hostname})]})})]}),e.jsx(n.Item,{showTiles:!0,textValue:i=>i.hostname,children:i=>e.jsxs(s,{children:[e.jsx(p,{color:i.type==="Domain"?"blue":"teal",children:i.type==="Domain"?e.jsx(W,{}):e.jsx(M,{})}),e.jsxs(a,{children:[i.hostname,!i.verified&&e.jsx(E,{status:"warning",children:"Not verified"})]}),e.jsx(o,{children:i.type}),e.jsxs(A,{children:[e.jsx(g,{children:"Show details"}),e.jsx(g,{children:"Delete"})]})]})})]})]})})}},r={},d={render:()=>{const n=u();return e.jsxs(h,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(T,{children:e.jsx(f,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:t=>e.jsxs(s,{children:[e.jsx(a,{children:t.id}),e.jsxs(o,{children:[t.date," - ",t.amount]})]})})]})]})}},c={render:()=>{const n=u();return e.jsxs(h,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(T,{position:"bottom",children:e.jsx(f,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:t=>e.jsxs(s,{children:[e.jsx(a,{children:t.id}),e.jsxs(o,{children:[t.date," - ",t.amount]})]})})]})]})}},l={render:()=>{const n=u();return e.jsxs(h,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"},{id:"RD100000",date:"1.9.2024",amount:"25,00 €"},{id:"RD100001",date:"12.9.2024",amount:"12,00 €"},{id:"RD100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{defaultExpanded:t=>t.id==="RG100001",children:t=>e.jsxs(s,{children:[e.jsx(a,{children:t.id}),e.jsx(O,{slot:"bottom",children:e.jsxs(o,{children:[t.date," - ",t.amount]})})]})}),e.jsx(n.Search,{})]})]})}},X=new Promise(()=>{}),m={render:()=>e.jsxs(h,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(I,{"aria-label":"Invoices",children:[e.jsx(k,{children:()=>{throw X}}),e.jsx(B,{loadingView:e.jsxs(s,{children:[e.jsx(p,{children:e.jsx(v,{height:"600px",width:"600px"})}),e.jsx(a,{children:e.jsx(y,{width:"10em"})})]}),showTiles:!0,children:()=>e.jsx(s,{})}),e.jsxs(F,{children:[e.jsxs(z,{children:[e.jsx(b,{children:"ID"}),e.jsx(b,{children:"Name"})]}),e.jsx(P,{children:e.jsxs(_,{children:[e.jsx(L,{loadingView:e.jsx(v,{width:"5em",height:"3em"}),children:()=>e.jsx(p,{})}),e.jsx(L,{loadingView:e.jsx(y,{width:"10em"}),children:()=>e.jsx(o,{children:"Static text"})})]})})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const InvoiceList = typedList<{
      id: string;
      date: string;
      amount: string;
    }>();
    return <Section>
        <Heading>Invoices</Heading>
        <InvoiceList.List batchSize={5} aria-label="Invoices">
          <ListSummary>
            <Flex justify="end">
              <Text>
                <strong>Gesamt: 41,00 €</strong>
              </Text>
            </Flex>
          </ListSummary>
          <InvoiceList.StaticData data={[{
          id: "RG100000",
          date: "1.9.2024",
          amount: "25,00 €"
        }, {
          id: "RG100001",
          date: "12.9.2024",
          amount: "12,00 €"
        }, {
          id: "RG100002",
          date: "3.10.2024",
          amount: "4,00 €"
        }]} />
          <InvoiceList.Item>
            {invoice => <ListItemView>
                <Heading>{invoice.id}</Heading>
                <Text>
                  {invoice.date} - {invoice.amount}
                </Text>
              </ListItemView>}
          </InvoiceList.Item>
        </InvoiceList.List>
      </Section>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const InvoiceList = typedList<{
      id: string;
      date: string;
      amount: string;
    }>();
    return <Section>
        <Heading>Invoices</Heading>
        <InvoiceList.List batchSize={5} aria-label="Invoices">
          <ListSummary position="bottom">
            <Flex justify="end">
              <Text>
                <strong>Gesamt: 41,00 €</strong>
              </Text>
            </Flex>
          </ListSummary>
          <InvoiceList.StaticData data={[{
          id: "RG100000",
          date: "1.9.2024",
          amount: "25,00 €"
        }, {
          id: "RG100001",
          date: "12.9.2024",
          amount: "12,00 €"
        }, {
          id: "RG100002",
          date: "3.10.2024",
          amount: "4,00 €"
        }]} />
          <InvoiceList.Item>
            {invoice => <ListItemView>
                <Heading>{invoice.id}</Heading>
                <Text>
                  {invoice.date} - {invoice.amount}
                </Text>
              </ListItemView>}
          </InvoiceList.Item>
        </InvoiceList.List>
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const InvoiceList = typedList<{
      id: string;
      date: string;
      amount: string;
    }>();
    return <Section>
        <Heading>Invoices</Heading>
        <InvoiceList.List batchSize={5} aria-label="Invoices" accordion>
          <InvoiceList.StaticData data={[{
          id: "RG100000",
          date: "1.9.2024",
          amount: "25,00 €"
        }, {
          id: "RG100001",
          date: "12.9.2024",
          amount: "12,00 €"
        }, {
          id: "RG100002",
          date: "3.10.2024",
          amount: "4,00 €"
        }, {
          id: "RD100000",
          date: "1.9.2024",
          amount: "25,00 €"
        }, {
          id: "RD100001",
          date: "12.9.2024",
          amount: "12,00 €"
        }, {
          id: "RD100002",
          date: "3.10.2024",
          amount: "4,00 €"
        }]} />
          <InvoiceList.Item defaultExpanded={invoice => invoice.id === "RG100001"}>
            {invoice => <ListItemView>
                <Heading>{invoice.id}</Heading>
                <Content slot="bottom">
                  <Text>
                    {invoice.date} - {invoice.amount}
                  </Text>
                </Content>
              </ListItemView>}
          </InvoiceList.Item>
          <InvoiceList.Search />
        </InvoiceList.List>
      </Section>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Section>
        <Heading>Invoices</Heading>
        <List aria-label="Invoices">
          <ListLoaderHooks>
            {() => {
            throw endlessPromise;
          }}
          </ListLoaderHooks>
          <ListItem loadingView={<ListItemView>
                <Avatar>
                  <Skeleton height="600px" width="600px" />
                </Avatar>
                <Heading>
                  <SkeletonText width="10em" />
                </Heading>
              </ListItemView>} showTiles>
            {() => <ListItemView />}
          </ListItem>
          <Table>
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>Name</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell loadingView={<Skeleton width="5em" height="3em" />}>
                  {() => <Avatar />}
                </TableCell>
                <TableCell loadingView={<SkeletonText width="10em" />}>
                  {() => <Text>Static text</Text>}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </List>
      </Section>;
  }
}`,...m.parameters?.docs?.source}}};const Y=["Default","WithSummary","WithSummaryBottom","WithAccordion","LoadingView"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:r,LoadingView:m,WithAccordion:l,WithSummary:d,WithSummaryBottom:c,__namedExportsOrder:Y,default:U},Symbol.toStringTag,{value:"Module"}));export{xe as D,D as d,U as m};
