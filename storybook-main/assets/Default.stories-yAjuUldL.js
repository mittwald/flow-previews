import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{n as B,m as M,L as m,o as C}from"./List-BsIBwIC0.js";import"./index-CgfFrydU.js";import{H as a}from"./Heading-bJ8ZWrvE.js";import{T as o}from"./Text-9PUJLXl5.js";import{A as P}from"./Avatar-DCXoeVRE.js";import{C as W,M as j}from"./ContextMenuContent-D7sBcB_v.js";import"./ContextMenuSection-CNNj2Vix.js";import{a as E,K as O}from"./IconWarning-70jApbHx.js";import{A as k}from"./AlertBadge-YesYMvOP.js";import{S as l}from"./Section-Coqp9vad.js";import"./browser-B1A6F7LW.js";import{t as u}from"./typedList-Dk3s39Py.js";import{B as y}from"./Button-CT6jKELJ.js";import{A as N}from"./ActionGroup-BOpkwUJI.js";import{C as Z}from"./Content-DmwChOEr.js";import{F as H}from"./Flex-GWFKGCBE.js";function K(n,i,t={}){return B(n,i,t).use(t)}const A=()=>new Promise(n=>window.setTimeout(n,750)),J=async()=>(await A(),U),Q=async n=>{var x;await A();const i=(x=n.filter)==null?void 0:x.types,t=n.search,h=F.filter(p=>{const V=!i||i.length===0||i.includes(p.type),_=t===void 0||p.domain.toLowerCase().includes(t.toLowerCase());return V&&_}),z=h.length;return{data:n.pagination?h.slice(n.pagination.skip,n.pagination.skip+n.pagination.limit):h,totalCount:z}},F=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],U=F.map(n=>n.type).filter((n,i,t)=>t.indexOf(n)===i),X=async n=>{var t;const i=await Q({pagination:n!=null&&n.pagination?{limit:n.pagination.limit,skip:n.pagination.offset}:void 0,filter:(t=n==null?void 0:n.filtering)!=null&&t.type?{types:n.filtering.type.values}:void 0,search:n==null?void 0:n.searchString});return{data:i.data,itemTotalCount:i.totalCount}},Y={title:"Structure/List",component:M,render:()=>{const n=u(),i=K(J,[]);return e.jsxs(l,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",onAction:t=>console.log(t.hostname),children:[e.jsxs(N,{children:[e.jsx(y,{color:"secondary",variant:"soft",slot:"secondary",children:"Herunterladen"}),e.jsx(y,{color:"accent",children:"Anlegen"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:X}),e.jsx(n.Filter,{values:i,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),e.jsx(n.Search,{autoFocus:!0,autoSubmit:!0}),e.jsx(n.Sorting,{property:"domain",name:"A-Z"}),e.jsx(n.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsxs(n.Table,{children:[e.jsxs(n.TableHeader,{children:[e.jsx(n.TableColumn,{children:"Name"}),e.jsx(n.TableColumn,{children:"Type"}),e.jsx(n.TableColumn,{children:"TLD"}),e.jsx(n.TableColumn,{children:"Hostname"})]}),e.jsx(n.TableBody,{children:e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:t=>t.domain}),e.jsx(n.TableCell,{children:t=>t.type}),e.jsx(n.TableCell,{children:t=>t.tld}),e.jsx(n.TableCell,{children:t=>t.hostname})]})})]}),e.jsx(n.Item,{showTiles:!0,textValue:t=>t.hostname,children:t=>e.jsxs(m,{children:[e.jsx(P,{color:t.type==="Domain"?"blue":"teal",children:t.type==="Domain"?e.jsx(E,{}):e.jsx(O,{})}),e.jsxs(a,{children:[t.hostname,!t.verified&&e.jsx(k,{status:"warning",children:"Not verified"})]}),e.jsx(o,{children:t.type}),e.jsxs(W,{children:[e.jsx(j,{children:"Show details"}),e.jsx(j,{children:"Delete"})]})]})})]})]})}},s={},r={render:()=>{const n=u();return e.jsxs(l,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(C,{children:e.jsx(H,{justify:"end",children:e.jsx(o,{children:e.jsx("b",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:i=>e.jsxs(m,{children:[e.jsx(a,{children:i.id}),e.jsxs(o,{children:[i.date," - ",i.amount]})]})})]})]})}},d={render:()=>{const n=u();return e.jsxs(l,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(C,{position:"bottom",children:e.jsx(H,{justify:"end",children:e.jsx(o,{children:e.jsx("b",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:i=>e.jsxs(m,{children:[e.jsx(a,{children:i.id}),e.jsxs(o,{children:[i.date," - ",i.amount]})]})})]})]})}},c={render:()=>{const n=u();return e.jsxs(l,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{hidePagination:!0,batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{defaultExpanded:i=>i.id==="RG100001",children:i=>e.jsxs(m,{children:[e.jsx(a,{children:i.id}),e.jsx(Z,{slot:"bottom",children:e.jsxs(o,{children:[i.date," - ",i.amount]})})]})})]})]})}};var v,g,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var L,S,I;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var f,T,D;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var w,G,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const InvoiceList = typedList<{
      id: string;
      date: string;
      amount: string;
    }>();
    return <Section>
        <Heading>Invoices</Heading>
        <InvoiceList.List hidePagination batchSize={5} aria-label="Invoices" accordion>
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
        </InvoiceList.List>
      </Section>;
  }
}`,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const $=["Default","WithSummary","WithSummaryBottom","WithAccordion"],je=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithAccordion:c,WithSummary:r,WithSummaryBottom:d,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{je as D,F as d,Y as m,K as u};
