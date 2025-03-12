import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{g as G,a as H,t as m,L as l,b as _}from"./typedList-D9RBt3Wr.js";import"./index-CtQTiInQ.js";import{H as a}from"./Heading-4mjxFvKq.js";import{T as d}from"./Text-78TaYxdh.js";import{A as z}from"./Avatar-DtbgLxlt.js";import{C as E,M as x}from"./ContextMenuContent-BlBi-Iru.js";import"./ContextMenuSection-BTAtADGm.js";import"./IconApp-CyjwVzxS.js";import{r as M,I as V,E as k}from"./IconWarning-DF9UG10K.js";import{A as B}from"./AlertBadge-BRYXn8gj.js";import{S as u}from"./Section-Cmc6AEnh.js";import"./browser-BJKb5O22.js";import{B as j}from"./Button-BqcoygzQ.js";import{A as O}from"./ActionGroup-wLVEsxoJ.js";import{C as P}from"./Content-C-7ZrqQa.js";function W(e,i,t={}){return G(e,i,t).use(t)}const D=()=>new Promise(e=>window.setTimeout(e,750)),F=async()=>(await D(),Z),N=async e=>{var h;await D();const i=(h=e.filter)==null?void 0:h.types,t=e.search,c=w.filter(p=>{const R=!i||i.length===0||i.includes(p.type),A=t===void 0||p.domain.toLowerCase().includes(t.toLowerCase());return R&&A}),C=c.length;return{data:e.pagination?c.slice(e.pagination.skip,e.pagination.skip+e.pagination.limit):c,totalCount:C}},w=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],Z=w.map(e=>e.type).filter((e,i,t)=>t.indexOf(e)===i),J=async e=>{var t;const i=await N({pagination:e!=null&&e.pagination?{limit:e.pagination.limit,skip:e.pagination.offset}:void 0,filter:(t=e==null?void 0:e.filtering)!=null&&t.type?{types:e.filtering.type.values}:void 0,search:e==null?void 0:e.searchString});return{data:i.data,itemTotalCount:i.totalCount}},K={title:"Structure/List",component:H,render:()=>{const e=m(),i=W(F,[]);return n.jsxs(u,{children:[n.jsx(a,{children:"Domains"}),n.jsxs(e.List,{batchSize:5,"aria-label":"Domains",onAction:t=>console.log(t.hostname),children:[n.jsxs(O,{children:[n.jsx(j,{color:"secondary",variant:"soft",slot:"secondary",children:n.jsx(M,{})}),n.jsx(j,{color:"accent",children:"Anlegen"})]}),n.jsx(e.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:J}),n.jsx(e.Filter,{values:i,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),n.jsx(e.Search,{autoFocus:!0,autoSubmit:!0}),n.jsx(e.Sorting,{property:"domain",name:"A-Z"}),n.jsx(e.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),n.jsx(e.Sorting,{property:"type",name:"Typ",defaultEnabled:!0}),n.jsx(e.Sorting,{property:"tld",name:"TLD"}),n.jsxs(e.Table,{children:[n.jsxs(e.TableHeader,{children:[n.jsx(e.TableColumn,{children:"Name"}),n.jsx(e.TableColumn,{children:"Type"}),n.jsx(e.TableColumn,{children:"TLD"}),n.jsx(e.TableColumn,{children:"Hostname"})]}),n.jsx(e.TableBody,{children:n.jsxs(e.TableRow,{children:[n.jsx(e.TableCell,{children:t=>t.domain}),n.jsx(e.TableCell,{children:t=>t.type}),n.jsx(e.TableCell,{children:t=>t.tld}),n.jsx(e.TableCell,{children:t=>t.hostname})]})})]}),n.jsx(e.Item,{showTiles:!0,textValue:t=>t.hostname,children:t=>n.jsxs(l,{children:[n.jsx(z,{color:t.type==="Domain"?"blue":"teal",children:t.type==="Domain"?n.jsx(V,{}):n.jsx(k,{})}),n.jsxs(a,{children:[t.hostname,!t.verified&&n.jsx(B,{status:"warning",children:"Not verified"})]}),n.jsx(d,{children:t.type}),n.jsxs(E,{children:[n.jsx(x,{children:"Show details"}),n.jsx(x,{children:"Delete"})]})]})})]})]})}},o={},s={render:()=>{const e=m();return n.jsxs(u,{children:[n.jsx(a,{children:"Invoices"}),n.jsxs(e.List,{batchSize:5,"aria-label":"Invoices",children:[n.jsx(_,{children:n.jsx(d,{style:{display:"block",textAlign:"right"},children:n.jsx("b",{children:"total: 42,00 €"})})}),n.jsx(e.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),n.jsx(e.Item,{children:i=>n.jsxs(l,{children:[n.jsx(a,{children:i.id}),n.jsxs(d,{children:[i.date," - ",i.amount]})]})})]})]})}},r={render:()=>{const e=m();return n.jsxs(u,{children:[n.jsx(a,{children:"Invoices"}),n.jsxs(e.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[n.jsx(e.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),n.jsx(e.Item,{defaultExpanded:i=>i.id==="RG100001",children:i=>n.jsxs(l,{children:[n.jsx(a,{children:i.id}),n.jsx(P,{slot:"bottom",children:n.jsxs(d,{children:[i.date," - ",i.amount]})})]})})]})]})}};var y,g,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
            <Text style={{
            display: "block",
            textAlign: "right"
          }}>
              <b>total: 42,00 €</b>
            </Text>
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
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var L,I,T;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const Q=["Default","WithSummary","WithAccordion"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithAccordion:r,WithSummary:s,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{le as D,w as d,K as m,W as u};
