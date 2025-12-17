import{j as e}from"./iframe-B7RREkGu.js";import{L as T,u as A,t as p,a as r,b as M,c as _,T as W,d as B,e as b,f as F,g as N,h as S}from"./typedList-CKQn-QMq.js";import{H as a}from"./Heading-CSSZTkJF.js";import{T as o}from"./Text-DoQtsqjx.js";import{S as z}from"./SettingsProvider-B27O2Xwm.js";import{A as j}from"./Avatar-K7cWWaUJ.js";import{C as P,M as v}from"./MenuItem-Db_n-iRw.js";import{c as E,b as O}from"./IconChevronDown-D-2czTjO.js";import{I as K}from"./IconDomain-Bv1ldn9i.js";import{A as Z}from"./AlertBadge-D2TRaexz.js";import{S as u}from"./Section-D2KxvX5n.js";import{B as L}from"./Button-TsdLobX9.js";import{A as J}from"./ActionGroup-WdHpAfwq.js";import{C as Q}from"./Content-BjjUnL1J.js";import{F as D}from"./Flex-CwbhKQpN.js";import{S as I}from"./SkeletonText-BnyxSTXk.js";import{S as f}from"./Skeleton-MXz9odqv.js";import{f as U}from"./flowComponent-Ck0proso.js";import{c as w}from"./clsx-B-dksMZM.js";const X=[["path",{d:"M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4",key:"svg-0"}],["path",{d:"M11.5 3a16.989 16.989 0 0 0 -1.826 4",key:"svg-1"}],["path",{d:"M12.5 3a16.989 16.989 0 0 1 1.828 4",key:"svg-2"}],["path",{d:"M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4",key:"svg-3"}],["path",{d:"M11.5 21a16.989 16.989 0 0 1 -1.826 -4",key:"svg-4"}],["path",{d:"M12.5 21a16.989 16.989 0 0 0 1.828 -4",key:"svg-5"}],["path",{d:"M2 10l1 4l1.5 -4l1.5 4l1 -4",key:"svg-6"}],["path",{d:"M17 10l1 4l1.5 -4l1.5 4l1 -4",key:"svg-7"}],["path",{d:"M9.5 10l1 4l1.5 -4l1.5 4l1 -4",key:"svg-8"}]],Y=E("outline","world-www","WorldWww",X),R=n=>e.jsx(O,{...n,children:e.jsx(Y,{})});R.__docgenInfo={description:"",methods:[],displayName:"IconSubdomain"};const $="flow--list--list-summary",q="flow--list--list-summary--top",ee="flow--list--list-summary--bottom",x={listSummary:$,top:q,bottom:ee},g=U("ListSummary",n=>{const{children:t,position:i="top",ref:s}=n;return i==="bottom"?e.jsx("footer",{ref:s,className:w(x.listSummary,x.bottom),...n,children:t}):e.jsx("header",{ref:s,className:w(x.listSummary,x.top),...n,children:t})});g.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"ListSummary"};const C=()=>new Promise(n=>window.setTimeout(n,750)),ne=async()=>(await C(),ie),te=async n=>{await C();const t=n.filter?.types,i=n.search,s=H.filter(y=>{const k=!t||t.length===0||t.includes(y.type),V=i===void 0||y.domain.toLowerCase().includes(i.toLowerCase());return k&&V}),G=s.length;return{data:n.pagination?s.slice(n.pagination.skip,n.pagination.skip+n.pagination.limit):s,totalCount:G}},H=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],ie=H.map(n=>n.type).filter((n,t,i)=>i.indexOf(n)===t),ae=async n=>{const t=await te({pagination:n?.pagination?{limit:n.pagination.limit,skip:n.pagination.offset}:void 0,filter:n?.filtering?.type?{types:n.filtering.type.values}:void 0,search:n?.searchString});return{data:t.data,itemTotalCount:t.totalCount}},oe={title:"Structure/List",component:T,render:()=>{const n=p(),t=A(ne,[]);return e.jsx(z,{type:"localStorage",storageKey:"listStory",children:e.jsxs(u,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",onAction:i=>console.log(i.hostname),settingStorageKey:"domains",defaultViewMode:"tiles",children:[e.jsxs(J,{children:[e.jsx(L,{color:"secondary",variant:"soft",slot:"secondary",children:"Herunterladen"}),e.jsx(L,{color:"accent",children:"Anlegen"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:ae}),e.jsx(n.Filter,{values:t,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"A-Z",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsxs(n.Table,{children:[e.jsxs(n.TableHeader,{children:[e.jsx(n.TableColumn,{children:"Name"}),e.jsx(n.TableColumn,{children:"Type"}),e.jsx(n.TableColumn,{children:"TLD"}),e.jsx(n.TableColumn,{children:"Hostname"})]}),e.jsx(n.TableBody,{children:e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:i=>i.domain}),e.jsx(n.TableCell,{children:i=>i.type}),e.jsx(n.TableCell,{children:i=>i.tld}),e.jsx(n.TableCell,{children:i=>i.hostname})]})})]}),e.jsx(n.Item,{showTiles:!0,textValue:i=>i.hostname,children:i=>e.jsxs(r,{children:[e.jsx(j,{color:i.type==="Domain"?"blue":"teal",children:i.type==="Domain"?e.jsx(K,{}):e.jsx(R,{})}),e.jsxs(a,{children:[i.hostname,!i.verified&&e.jsx(Z,{status:"warning",children:"Not verified"})]}),e.jsx(o,{children:i.type}),e.jsxs(P,{children:[e.jsx(v,{children:"Show details"}),e.jsx(v,{children:"Delete"})]})]})})]})]})})}},d={},l={render:()=>{const n=p();return e.jsxs(u,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(g,{children:e.jsx(D,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:t=>e.jsxs(r,{children:[e.jsx(a,{children:t.id}),e.jsxs(o,{children:[t.date," - ",t.amount]})]})})]})]})}},c={render:()=>{const n=p();return e.jsxs(u,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(g,{position:"bottom",children:e.jsx(D,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:t=>e.jsxs(r,{children:[e.jsx(a,{children:t.id}),e.jsxs(o,{children:[t.date," - ",t.amount]})]})})]})]})}},m={render:()=>{const n=p();return e.jsxs(u,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"},{id:"RD100000",date:"1.9.2024",amount:"25,00 €"},{id:"RD100001",date:"12.9.2024",amount:"12,00 €"},{id:"RD100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{defaultExpanded:t=>t.id==="RG100001",children:t=>e.jsxs(r,{children:[e.jsx(a,{children:t.id}),e.jsx(Q,{slot:"bottom",children:e.jsxs(o,{children:[t.date," - ",t.amount]})})]})}),e.jsx(n.Search,{})]})]})}},se=new Promise(()=>{}),h={render:()=>e.jsxs(u,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(T,{"aria-label":"Invoices",children:[e.jsx(M,{children:()=>{throw se}}),e.jsx(_,{loadingView:e.jsxs(r,{children:[e.jsx(j,{children:e.jsx(f,{height:"600px",width:"600px"})}),e.jsx(a,{children:e.jsx(I,{width:"10em"})})]}),showTiles:!0,children:()=>e.jsx(r,{})}),e.jsxs(W,{children:[e.jsxs(B,{children:[e.jsx(b,{children:"ID"}),e.jsx(b,{children:"Name"})]}),e.jsx(F,{children:e.jsxs(N,{children:[e.jsx(S,{loadingView:e.jsx(f,{width:"5em",height:"3em"}),children:()=>e.jsx(j,{})}),e.jsx(S,{loadingView:e.jsx(I,{width:"10em"}),children:()=>e.jsx(o,{children:"Static text"})})]})})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const re=["Default","WithSummary","WithSummaryBottom","WithAccordion","LoadingView"],De=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingView:h,WithAccordion:m,WithSummary:l,WithSummaryBottom:c,__namedExportsOrder:re,default:oe},Symbol.toStringTag,{value:"Module"}));export{De as D,R as I,H as d,oe as m};
