import{j as e}from"./iframe-BipmDVic.js";import{o as I,u as f,S as D,L as s,p as w,q as z,r as W,d as E,i as M,h as S,g as _,f as K,e as L}from"./List-ym-xYvB9.js";import{H as a}from"./Heading-BRGw-waJ.js";import{T as o}from"./Text-D0LSWbFT.js";import{A as x}from"./Avatar-cuKuP-sl.js";import{C as Z,M as b}from"./MenuItem-Kv9-_7Wo.js";import"./ContextMenuTrigger-CsGUrRwl.js";import"./ContextMenuSection-CO4DhhVm.js";import{a as H,a8 as N}from"./IconWarning-CGnZi41_.js";import{A as O}from"./AlertBadge-8kgxcnU1.js";import{S as r}from"./Section-BSyGStrt.js";import"./browser-CR-oUB3P.js";import{t as p}from"./typedList-CLmeb6Eb.js";import{B as j}from"./Button-BuQAY4x2.js";import{A as R}from"./ActionGroup-CHTlX6Wu.js";import{C as J}from"./Content-C3tDFab4.js";import{F as A}from"./Flex-p3WdXJyS.js";import{S as T}from"./SkeletonText-Dd_uOvAV.js";import{S as v}from"./Skeleton-tvHk1oLy.js";const C=()=>new Promise(n=>window.setTimeout(n,750)),G=async()=>(await C(),U),Q=async n=>{await C();const i=n.filter?.types,t=n.search,y=V.filter(g=>{const P=!i||i.length===0||i.includes(g.type),k=t===void 0||g.domain.toLowerCase().includes(t.toLowerCase());return P&&k}),B=y.length;return{data:n.pagination?y.slice(n.pagination.skip,n.pagination.skip+n.pagination.limit):y,totalCount:B}},V=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],U=V.map(n=>n.type).filter((n,i,t)=>t.indexOf(n)===i),F=async n=>{const i=await Q({pagination:n?.pagination?{limit:n.pagination.limit,skip:n.pagination.offset}:void 0,filter:n?.filtering?.type?{types:n.filtering.type.values}:void 0,search:n?.searchString});return{data:i.data,itemTotalCount:i.totalCount}},X={title:"Structure/List",component:I,render:()=>{const n=p(),i=f(G,[]);return e.jsx(D,{type:"localStorage",storageKey:"listStory",children:e.jsxs(r,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",onAction:t=>console.log(t.hostname),settingStorageKey:"domains",defaultViewMode:"tiles",children:[e.jsxs(R,{children:[e.jsx(j,{color:"secondary",variant:"soft",slot:"secondary",children:"Herunterladen"}),e.jsx(j,{color:"accent",children:"Anlegen"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:F}),e.jsx(n.Filter,{values:i,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"A-Z",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsxs(n.Table,{children:[e.jsxs(n.TableHeader,{children:[e.jsx(n.TableColumn,{children:"Name"}),e.jsx(n.TableColumn,{children:"Type"}),e.jsx(n.TableColumn,{children:"TLD"}),e.jsx(n.TableColumn,{children:"Hostname"})]}),e.jsx(n.TableBody,{children:e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:t=>t.domain}),e.jsx(n.TableCell,{children:t=>t.type}),e.jsx(n.TableCell,{children:t=>t.tld}),e.jsx(n.TableCell,{children:t=>t.hostname})]})})]}),e.jsx(n.Item,{showTiles:!0,textValue:t=>t.hostname,children:t=>e.jsxs(s,{children:[e.jsx(x,{color:t.type==="Domain"?"blue":"teal",children:t.type==="Domain"?e.jsx(H,{}):e.jsx(N,{})}),e.jsxs(a,{children:[t.hostname,!t.verified&&e.jsx(O,{status:"warning",children:"Not verified"})]}),e.jsx(o,{children:t.type}),e.jsxs(Z,{children:[e.jsx(b,{children:"Show details"}),e.jsx(b,{children:"Delete"})]})]})})]})]})})}},d={},l={render:()=>{const n=p();return e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(w,{children:e.jsx(A,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:i=>e.jsxs(s,{children:[e.jsx(a,{children:i.id}),e.jsxs(o,{children:[i.date," - ",i.amount]})]})})]})]})}},c={render:()=>{const n=p();return e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(w,{position:"bottom",children:e.jsx(A,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Gesamt: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:i=>e.jsxs(s,{children:[e.jsx(a,{children:i.id}),e.jsxs(o,{children:[i.date," - ",i.amount]})]})})]})]})}},m={render:()=>{const n=p();return e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"},{id:"RD100000",date:"1.9.2024",amount:"25,00 €"},{id:"RD100001",date:"12.9.2024",amount:"12,00 €"},{id:"RD100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{defaultExpanded:i=>i.id==="RG100001",children:i=>e.jsxs(s,{children:[e.jsx(a,{children:i.id}),e.jsx(J,{slot:"bottom",children:e.jsxs(o,{children:[i.date," - ",i.amount]})})]})}),e.jsx(n.Search,{})]})]})}},Y=new Promise(()=>{}),u={render:()=>e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(I,{"aria-label":"Invoices",children:[e.jsx(z,{children:()=>{throw Y}}),e.jsx(W,{loadingView:e.jsxs(s,{children:[e.jsx(x,{children:e.jsx(v,{height:"600px",width:"600px"})}),e.jsx(a,{children:e.jsx(T,{width:"10em"})})]}),showTiles:!0,children:()=>e.jsx(s,{})}),e.jsxs(E,{children:[e.jsxs(M,{children:[e.jsx(S,{children:"ID"}),e.jsx(S,{children:"Name"})]}),e.jsx(_,{children:e.jsxs(K,{children:[e.jsx(L,{loadingView:e.jsx(v,{width:"5em",height:"3em"}),children:()=>e.jsx(x,{})}),e.jsx(L,{loadingView:e.jsx(T,{width:"10em"}),children:()=>e.jsx(o,{children:"Static text"})})]})})]})]})]})},h={render:()=>{const n=p(),i=f(G,[]);return e.jsx(D,{type:"localStorage",storageKey:"listStory",children:e.jsxs(r,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",settingStorageKey:"domains",children:[e.jsxs(R,{children:[e.jsx(j,{color:"secondary",variant:"soft",slot:"secondary",children:"Herunterladen"}),e.jsx(j,{color:"accent",children:"Anlegen"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:F}),e.jsx(n.Filter,{values:i,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]}),e.jsx(n.Filter,{property:"tld",mode:"one",name:"TLD",priority:"secondary"}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"A-Z",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"domain",name:"Z-A",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsx(n.Item,{showTiles:!0,textValue:t=>t.hostname,children:t=>e.jsxs(s,{children:[e.jsx(x,{children:e.jsx(H,{})}),e.jsx(a,{children:t.hostname}),e.jsx(o,{children:t.type})]})})]})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const DomainList = typedList<Domain>();
    const availableTypes = usePromise(getTypes, []);
    return <SettingsProvider type="localStorage" storageKey="listStory">
        <Section>
          <Heading>Domains</Heading>
          <DomainList.List batchSize={5} aria-label="Domains" settingStorageKey="domains">
            <ActionGroup>
              <Button color="secondary" variant="soft" slot="secondary">
                Herunterladen
              </Button>
              <Button color="accent">Anlegen</Button>
            </ActionGroup>
            <DomainList.LoaderAsync manualPagination manualSorting={false}>
              {loadDomains}
            </DomainList.LoaderAsync>
            <DomainList.Filter values={availableTypes} property="type" mode="all" name="Typ" defaultSelected={["Domain"]} />
            <DomainList.Filter property="tld" mode="one" name="TLD" priority="secondary" />

            <DomainList.Search autoFocus />
            <DomainList.Sorting property="domain" name="A-Z" defaultEnabled />
            <DomainList.Sorting property="domain" name="Z-A" direction="desc" />
            <DomainList.Sorting property="type" name="Typ" />
            <DomainList.Sorting property="tld" name="TLD" />

            <DomainList.Item showTiles textValue={domain => domain.hostname}>
              {domain => <ListItemView>
                  <Avatar>
                    <IconDomain />
                  </Avatar>
                  <Heading>{domain.hostname}</Heading>
                  <Text>{domain.type}</Text>
                </ListItemView>}
            </DomainList.Item>
          </DomainList.List>
        </Section>
      </SettingsProvider>;
  }
}`,...h.parameters?.docs?.source}}};const $=["Default","WithSummary","WithSummaryBottom","WithAccordion","LoadingView","WithSecondaryFilters"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingView:u,WithAccordion:m,WithSecondaryFilters:h,WithSummary:l,WithSummaryBottom:c,__namedExportsOrder:$,default:X},Symbol.toStringTag,{value:"Module"}));export{ge as D,V as d,X as m};
