import{j as e}from"./iframe-CtEjVB66.js";import{o as L,u as D,p as H,L as l,q as V,r as A,T as k,e as R,d as u,c as F,b as P,a as j,s as B}from"./List-DDC3ctR_.js";import{H as a}from"./Heading-c1W7e3IT.js";import{T as m}from"./Text-QCKh6xRo.js";import{A as h}from"./Avatar-CJ_n7NT3.js";import{C as G,M as b}from"./MenuItem-wH73rdaM.js";import"./ContextMenuTrigger-Dvm-yCzh.js";import"./ContextMenuSection-COxyh1Te.js";import{a as M,a7 as _}from"./IconWarning-1CkAUSYF.js";import{A as z}from"./AlertBadge-Z_jin2-k.js";import{S}from"./Section-B3QlijVL.js";import"./browser-CLHYf5YF.js";import{t as p}from"./typedList-DyhpKaL0.js";import{B as g}from"./Button-BbnjmOHy.js";import{A as N}from"./ActionGroup-DvmIDtHK.js";import{C as E}from"./Content-BV9uIs25.js";import{F as O}from"./Flex-CBSP5RJa.js";import{S as y}from"./SkeletonText-aee-ureJ.js";import{S as T}from"./Skeleton-2ICOjE4b.js";import{d as W}from"./dummyText-CX_I_Wpl.js";const f=()=>new Promise(t=>window.setTimeout(t,750)),K=async()=>(await f(),Q),J=async t=>{await f();const i=t.filter?.types,n=t.search,c=w.filter(x=>{const v=!i||i.length===0||i.includes(x.type),C=n===void 0||x.domain.toLowerCase().includes(n.toLowerCase());return v&&C}),I=c.length;return{data:t.pagination?c.slice(t.pagination.skip,t.pagination.skip+t.pagination.limit):c,totalCount:I}},w=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],Q=w.map(t=>t.type).filter((t,i,n)=>n.indexOf(t)===i),U=async t=>{const i=await J({pagination:t?.pagination?{limit:t.pagination.limit,skip:t.pagination.offset}:void 0,filter:t?.filtering?.type?{types:t.filtering.type.values}:void 0,search:t?.searchString});return{data:i.data,itemTotalCount:i.totalCount}},X={title:"Structure/List",component:L,parameters:{controls:{disable:!0}},render:()=>{const t=p(),i=D(K,[]);return e.jsx(H,{type:"localStorage",storageKey:"listStory",children:e.jsxs(S,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(t.List,{batchSize:5,"aria-label":"Domains",onAction:n=>console.log(n.hostname),settingStorageKey:"domains",defaultViewMode:"tiles",children:[e.jsxs(N,{children:[e.jsx(g,{color:"secondary",variant:"soft",slot:"secondary",children:"Download"}),e.jsx(g,{color:"accent",children:"Add"})]}),e.jsx(t.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:U}),e.jsx(t.Filter,{values:i,property:"type",mode:"all",name:"Type",defaultSelected:["Domain"]}),e.jsx(t.Filter,{property:"tld",mode:"one",name:"TLD",priority:"secondary"}),e.jsx(t.Search,{autoFocus:!0}),e.jsx(t.Sorting,{property:"domain",name:"Alphabetical",defaultEnabled:!0,directionName:"ascending"}),e.jsx(t.Sorting,{property:"domain",name:"Alphabetical",direction:"desc",directionName:"descending"}),e.jsx(t.Sorting,{property:"type",name:"Type"}),e.jsx(t.Sorting,{property:"tld",name:"TLD"}),e.jsxs(t.Table,{children:[e.jsxs(t.TableHeader,{children:[e.jsx(t.TableColumn,{children:"Name"}),e.jsx(t.TableColumn,{children:"Type"}),e.jsx(t.TableColumn,{children:"TLD"}),e.jsx(t.TableColumn,{children:"Hostname"})]}),e.jsx(t.TableBody,{children:e.jsxs(t.TableRow,{children:[e.jsx(t.TableCell,{children:n=>n.domain}),e.jsx(t.TableCell,{children:n=>n.type}),e.jsx(t.TableCell,{children:n=>n.tld}),e.jsx(t.TableCell,{children:n=>n.hostname})]})})]}),e.jsx(t.Item,{showTiles:!0,textValue:n=>n.hostname,children:n=>e.jsxs(l,{children:[e.jsx(h,{color:n.type==="Domain"?"blue":"teal",children:n.type==="Domain"?e.jsx(M,{}):e.jsx(_,{})}),e.jsxs(a,{children:[n.hostname,!n.verified&&e.jsx(z,{status:"warning",children:"Not verified"})]}),e.jsx(m,{children:n.type}),e.jsxs(G,{children:[e.jsx(b,{children:"Show details"}),e.jsx(b,{children:"Delete"})]})]})})]})]})})}},o={},s={render:()=>{const t=p();return e.jsxs(S,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(t.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(B,{position:"bottom",children:e.jsx(O,{justify:"end",children:e.jsx(m,{children:e.jsx("strong",{children:"Total: 41,00 €"})})})}),e.jsx(t.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(t.Item,{children:i=>e.jsxs(l,{children:[e.jsx(a,{level:3,children:i.id}),e.jsxs(m,{children:[i.date," - ",i.amount]})]})})]})]})}},r={render:()=>{const t=p();return e.jsxs(t.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(t.StaticData,{data:[{id:"Item 1"},{id:"Item 2"},{id:"Item 3"}]}),e.jsx(t.Item,{defaultExpanded:i=>i.id==="Item 1",children:i=>e.jsxs(l,{children:[e.jsx(a,{children:i.id}),e.jsx(E,{slot:"bottom",children:e.jsx(m,{children:W.long})})]})})]})}},Y=new Promise(()=>{}),d={render:()=>e.jsxs(L,{"aria-label":"Invoices",children:[e.jsx(V,{children:()=>{throw Y}}),e.jsx(A,{loadingView:e.jsxs(l,{children:[e.jsx(h,{children:e.jsx(T,{height:"600px",width:"600px"})}),e.jsx(a,{children:e.jsx(y,{width:"10em"})})]}),showTiles:!0,children:()=>e.jsx(l,{})}),e.jsxs(k,{children:[e.jsxs(R,{children:[e.jsx(u,{children:"ID"}),e.jsx(u,{children:"Name"})]}),e.jsx(F,{children:e.jsxs(P,{children:[e.jsx(j,{loadingView:e.jsx(T,{width:"5em",height:"3em"}),children:()=>e.jsx(h,{})}),e.jsx(j,{loadingView:e.jsx(y,{width:"10em"}),children:()=>e.jsx(m,{children:"Static text"})})]})})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
                <strong>Total: 41,00 €</strong>
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
                <Heading level={3}>{invoice.id}</Heading>
                <Text>
                  {invoice.date} - {invoice.amount}
                </Text>
              </ListItemView>}
          </InvoiceList.Item>
        </InvoiceList.List>
      </Section>;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const List = typedList<{
      id: string;
    }>();
    return <List.List batchSize={5} aria-label="Invoices" accordion>
        <List.StaticData data={[{
        id: "Item 1"
      }, {
        id: "Item 2"
      }, {
        id: "Item 3"
      }]} />
        <List.Item defaultExpanded={invoice => invoice.id === "Item 1"}>
          {invoice => <ListItemView>
              <Heading>{invoice.id}</Heading>
              <Content slot="bottom">
                <Text>{dummyText.long}</Text>
              </Content>
            </ListItemView>}
        </List.Item>
      </List.List>;
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <List aria-label="Invoices">
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
      </List>;
  }
}`,...d.parameters?.docs?.source}}};const Z=["Default","WithSummary","WithAccordion","LoadingView"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:o,LoadingView:d,WithAccordion:r,WithSummary:s,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{ge as D,w as d,X as m};
