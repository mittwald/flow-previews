import{j as e}from"./iframe-Gppgd95h.js";import{_ as f,a7 as T,a8 as D,Q as m,C as R,d as p,a9 as y}from"./Modal-D3Hcgjxi.js";import{H as a}from"./Heading-C1wKNzIE.js";import{T as o}from"./Text-ByRCXQub.js";import{A as w}from"./Avatar-cdLZcXRx.js";import"./FileCardList-akCe4Bod.js";import{S as l}from"./Section-CNS9p5rv.js";import{a as G,a7 as C}from"./IconWarning-CXl4-aHF.js";import{A as H}from"./AlertBadge-DaxC3GtD.js";import"./browser-BvSJi_ez.js";import{t as u}from"./typedList-_5jrt0_8.js";import{B as j}from"./Button-CQheULfL.js";import{A}from"./ActionGroup-DDS_PemV.js";import{C as F}from"./Content-CZbbtpB-.js";import{F as v}from"./LayoutCard-Dg7UiP0V.js";const g=()=>new Promise(n=>window.setTimeout(n,750)),V=async()=>(await g(),_),z=async n=>{await g();const t=n.filter?.types,i=n.search,h=S.filter(x=>{const b=!t||t.length===0||t.includes(x.type),I=i===void 0||x.domain.toLowerCase().includes(i.toLowerCase());return b&&I}),L=h.length;return{data:n.pagination?h.slice(n.pagination.skip,n.pagination.skip+n.pagination.limit):h,totalCount:L}},S=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],_=S.map(n=>n.type).filter((n,t,i)=>i.indexOf(n)===t),B=async n=>{const t=await z({pagination:n?.pagination?{limit:n.pagination.limit,skip:n.pagination.offset}:void 0,filter:n?.filtering?.type?{types:n.filtering.type.values}:void 0,search:n?.searchString});return{data:t.data,itemTotalCount:t.totalCount}},M={title:"Structure/List",component:f,render:()=>{const n=u(),t=T(V,[]);return e.jsx(D,{type:"localStorage",storageKey:"listStory",children:e.jsxs(l,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",onAction:i=>console.log(i.hostname),settingStorageKey:"domains",defaultViewMode:"tiles",children:[e.jsxs(A,{children:[e.jsx(j,{color:"secondary",variant:"soft",slot:"secondary",children:"Herunterladen"}),e.jsx(j,{color:"accent",children:"Anlegen"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:B}),e.jsx(n.Filter,{values:t,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"A-Z",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsxs(n.Table,{children:[e.jsxs(n.TableHeader,{children:[e.jsx(n.TableColumn,{children:"Name"}),e.jsx(n.TableColumn,{children:"Type"}),e.jsx(n.TableColumn,{children:"TLD"}),e.jsx(n.TableColumn,{children:"Hostname"})]}),e.jsx(n.TableBody,{children:e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:i=>i.domain}),e.jsx(n.TableCell,{children:i=>i.type}),e.jsx(n.TableCell,{children:i=>i.tld}),e.jsx(n.TableCell,{children:i=>i.hostname})]})})]}),e.jsx(n.Item,{showTiles:!0,textValue:i=>i.hostname,children:i=>e.jsxs(m,{children:[e.jsx(w,{color:i.type==="Domain"?"blue":"teal",children:i.type==="Domain"?e.jsx(G,{}):e.jsx(C,{})}),e.jsxs(a,{children:[i.hostname,!i.verified&&e.jsx(H,{status:"warning",children:"Not verified"})]}),e.jsx(o,{children:i.type}),e.jsxs(R,{children:[e.jsx(p,{children:"Show details"}),e.jsx(p,{children:"Delete"})]})]})})]})]})})}},s={},r={render:()=>{const n=u();return e.jsxs(l,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(y,{children:e.jsx(v,{justify:"end",children:e.jsx(o,{children:e.jsx("b",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:t=>e.jsxs(m,{children:[e.jsx(a,{children:t.id}),e.jsxs(o,{children:[t.date," - ",t.amount]})]})})]})]})}},d={render:()=>{const n=u();return e.jsxs(l,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(y,{position:"bottom",children:e.jsx(v,{justify:"end",children:e.jsx(o,{children:e.jsx("b",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:t=>e.jsxs(m,{children:[e.jsx(a,{children:t.id}),e.jsxs(o,{children:[t.date," - ",t.amount]})]})})]})]})}},c={render:()=>{const n=u();return e.jsxs(l,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"},{id:"RD100000",date:"1.9.2024",amount:"25,00 €"},{id:"RD100001",date:"12.9.2024",amount:"12,00 €"},{id:"RD100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{defaultExpanded:t=>t.id==="RG100001",children:t=>e.jsxs(m,{children:[e.jsx(a,{children:t.id}),e.jsx(F,{slot:"bottom",children:e.jsxs(o,{children:[t.date," - ",t.amount]})})]})}),e.jsx(n.Search,{})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
                <b>Gesamt: 41,00 €</b>
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
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
                <b>Gesamt: 41,00 €</b>
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
}`,...c.parameters?.docs?.source}}};const W=["Default","WithSummary","WithSummaryBottom","WithAccordion"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithAccordion:c,WithSummary:r,WithSummaryBottom:d,__namedExportsOrder:W,default:M},Symbol.toStringTag,{value:"Module"}));export{ne as D,S as d,M as m};
