import{j as e}from"./iframe-BfVXcSwu.js";import{o as I,u as D,p as f,L as s,q as z,r as N,T as W,e as E,d as L,c as M,b as _,a as S,s as w}from"./List-Bf4CeFdv.js";import{H as a}from"./Heading-gqF52g1x.js";import{T as o}from"./Text-DuT5OHtj.js";import{A as x}from"./Avatar-CG1tod06.js";import{C as K,M as b}from"./MenuItem-jRZJeTCK.js";import"./ContextMenuTrigger-CliJsYln.js";import"./ContextMenuSection-CkxzJqxG.js";import{a as R,aa as O}from"./IconWarning-DP3Jd3bc.js";import{A as J}from"./AlertBadge-DHjNiHTZ.js";import{S as r}from"./Section-D8BWSJOo.js";import"./browser-6PMbihrp.js";import{t as p}from"./typedList-BZ5uCKHX.js";import{B as j}from"./Button-BWaSf0b-.js";import{A as H}from"./ActionGroup-BhAYVJgP.js";import{C as Q}from"./Content-DYblwsjo.js";import{F as A}from"./Flex-BlX92A2C.js";import{S as T}from"./SkeletonText-DeODwJkk.js";import{S as v}from"./Skeleton-D416WT7q.js";const C=()=>new Promise(n=>window.setTimeout(n,750)),V=async()=>(await C(),X),U=async n=>{await C();const i=n.filter?.types,t=n.search,y=G.filter(g=>{const P=!i||i.length===0||i.includes(g.type),k=t===void 0||g.domain.toLowerCase().includes(t.toLowerCase());return P&&k}),B=y.length;return{data:n.pagination?y.slice(n.pagination.skip,n.pagination.skip+n.pagination.limit):y,totalCount:B}},G=[{id:"abc-1",hostname:"my-domain.de",domain:"my-domain.de",type:"Domain",verified:!0,tld:"de"},{id:"abc-2",hostname:"www.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!1,tld:"de"},{id:"abc-3",hostname:"www.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-4",hostname:"shop.one-more-domain.com",domain:"one-more-domain.com",type:"Subdomain",verified:!0,tld:"com"},{id:"abc-5",hostname:"blog.my-domain.de",domain:"my-domain.de",type:"Subdomain",verified:!0,tld:"de"},{id:"abc-6",hostname:"another-domain.de",domain:"another-domain.de",type:"Domain",verified:!1,tld:"de"},{id:"abc-7",hostname:"one-more-domain.com",domain:"one-more-domain.com",type:"Domain",verified:!0,tld:"com"}],X=G.map(n=>n.type).filter((n,i,t)=>t.indexOf(n)===i),F=async n=>{const i=await U({pagination:n?.pagination?{limit:n.pagination.limit,skip:n.pagination.offset}:void 0,filter:n?.filtering?.type?{types:n.filtering.type.values}:void 0,search:n?.searchString});return{data:i.data,itemTotalCount:i.totalCount}},Y={title:"Structure/List",component:I,render:()=>{const n=p(),i=D(V,[]);return e.jsx(f,{type:"localStorage",storageKey:"listStory",children:e.jsxs(r,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",onAction:t=>console.log(t.hostname),settingStorageKey:"domains",defaultViewMode:"tiles",children:[e.jsxs(H,{children:[e.jsx(j,{color:"secondary",variant:"soft",slot:"secondary",children:"Download"}),e.jsx(j,{color:"accent",children:"Add"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:F}),e.jsx(n.Filter,{values:i,property:"type",mode:"all",name:"Type",defaultSelected:["Domain"]}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"Alphabetical",defaultEnabled:!0,directionName:"ascending"}),e.jsx(n.Sorting,{property:"domain",name:"Alphabetical",direction:"desc",directionName:"descending"}),e.jsx(n.Sorting,{property:"type",name:"Type"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsxs(n.Table,{children:[e.jsxs(n.TableHeader,{children:[e.jsx(n.TableColumn,{children:"Name"}),e.jsx(n.TableColumn,{children:"Type"}),e.jsx(n.TableColumn,{children:"TLD"}),e.jsx(n.TableColumn,{children:"Hostname"})]}),e.jsx(n.TableBody,{children:e.jsxs(n.TableRow,{children:[e.jsx(n.TableCell,{children:t=>t.domain}),e.jsx(n.TableCell,{children:t=>t.type}),e.jsx(n.TableCell,{children:t=>t.tld}),e.jsx(n.TableCell,{children:t=>t.hostname})]})})]}),e.jsx(n.Item,{showTiles:!0,textValue:t=>t.hostname,children:t=>e.jsxs(s,{children:[e.jsx(x,{color:t.type==="Domain"?"blue":"teal",children:t.type==="Domain"?e.jsx(R,{}):e.jsx(O,{})}),e.jsxs(a,{children:[t.hostname,!t.verified&&e.jsx(J,{status:"warning",children:"Not verified"})]}),e.jsx(o,{children:t.type}),e.jsxs(K,{children:[e.jsx(b,{children:"Show details"}),e.jsx(b,{children:"Delete"})]})]})})]})]})})}},d={},l={render:()=>{const n=p();return e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(w,{children:e.jsx(A,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Total: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:i=>e.jsxs(s,{children:[e.jsx(a,{children:i.id}),e.jsxs(o,{children:[i.date," - ",i.amount]})]})})]})]})}},c={render:()=>{const n=p();return e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",children:[e.jsx(w,{position:"bottom",children:e.jsx(A,{justify:"end",children:e.jsx(o,{children:e.jsx("strong",{children:"Total: 41,00 €"})})})}),e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{children:i=>e.jsxs(s,{children:[e.jsx(a,{children:i.id}),e.jsxs(o,{children:[i.date," - ",i.amount]})]})})]})]})}},m={render:()=>{const n=p();return e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Invoices",accordion:!0,children:[e.jsx(n.StaticData,{data:[{id:"RG100000",date:"1.9.2024",amount:"25,00 €"},{id:"RG100001",date:"12.9.2024",amount:"12,00 €"},{id:"RG100002",date:"3.10.2024",amount:"4,00 €"},{id:"RD100000",date:"1.9.2024",amount:"25,00 €"},{id:"RD100001",date:"12.9.2024",amount:"12,00 €"},{id:"RD100002",date:"3.10.2024",amount:"4,00 €"}]}),e.jsx(n.Item,{defaultExpanded:i=>i.id==="RG100001",children:i=>e.jsxs(s,{children:[e.jsx(a,{children:i.id}),e.jsx(Q,{slot:"bottom",children:e.jsxs(o,{children:[i.date," - ",i.amount]})})]})}),e.jsx(n.Search,{})]})]})}},Z=new Promise(()=>{}),h={render:()=>e.jsxs(r,{children:[e.jsx(a,{children:"Invoices"}),e.jsxs(I,{"aria-label":"Invoices",children:[e.jsx(z,{children:()=>{throw Z}}),e.jsx(N,{loadingView:e.jsxs(s,{children:[e.jsx(x,{children:e.jsx(v,{height:"600px",width:"600px"})}),e.jsx(a,{children:e.jsx(T,{width:"10em"})})]}),showTiles:!0,children:()=>e.jsx(s,{})}),e.jsxs(W,{children:[e.jsxs(E,{children:[e.jsx(L,{children:"ID"}),e.jsx(L,{children:"Name"})]}),e.jsx(M,{children:e.jsxs(_,{children:[e.jsx(S,{loadingView:e.jsx(v,{width:"5em",height:"3em"}),children:()=>e.jsx(x,{})}),e.jsx(S,{loadingView:e.jsx(T,{width:"10em"}),children:()=>e.jsx(o,{children:"Static text"})})]})})]})]})]})},u={render:()=>{const n=p(),i=D(V,[]);return e.jsx(f,{type:"localStorage",storageKey:"listStory",children:e.jsxs(r,{children:[e.jsx(a,{children:"Domains"}),e.jsxs(n.List,{batchSize:5,"aria-label":"Domains",settingStorageKey:"domains",children:[e.jsxs(H,{children:[e.jsx(j,{color:"secondary",variant:"soft",slot:"secondary",children:"Download"}),e.jsx(j,{color:"accent",children:"Add"})]}),e.jsx(n.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:F}),e.jsx(n.Filter,{values:i,property:"type",mode:"all",name:"Type",defaultSelected:["Domain"]}),e.jsx(n.Filter,{property:"tld",mode:"one",name:"TLD",priority:"secondary"}),e.jsx(n.Search,{autoFocus:!0}),e.jsx(n.Sorting,{property:"domain",name:"Alphabetical",directionName:"ascending",defaultEnabled:!0}),e.jsx(n.Sorting,{property:"domain",name:"Alphabetical",directionName:"descending",direction:"desc"}),e.jsx(n.Sorting,{property:"type",name:"Typ"}),e.jsx(n.Sorting,{property:"tld",name:"TLD"}),e.jsx(n.Item,{showTiles:!0,textValue:t=>t.hostname,children:t=>e.jsxs(s,{children:[e.jsx(x,{children:e.jsx(R,{})}),e.jsx(a,{children:t.hostname}),e.jsx(o,{children:t.type})]})})]})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const DomainList = typedList<Domain>();
    const availableTypes = usePromise(getTypes, []);
    return <SettingsProvider type="localStorage" storageKey="listStory">
        <Section>
          <Heading>Domains</Heading>
          <DomainList.List batchSize={5} aria-label="Domains" settingStorageKey="domains">
            <ActionGroup>
              <Button color="secondary" variant="soft" slot="secondary">
                Download
              </Button>
              <Button color="accent">Add</Button>
            </ActionGroup>
            <DomainList.LoaderAsync manualPagination manualSorting={false}>
              {loadDomains}
            </DomainList.LoaderAsync>
            <DomainList.Filter values={availableTypes} property="type" mode="all" name="Type" defaultSelected={["Domain"]} />
            <DomainList.Filter property="tld" mode="one" name="TLD" priority="secondary" />

            <DomainList.Search autoFocus />
            <DomainList.Sorting property="domain" name="Alphabetical" directionName="ascending" defaultEnabled />
            <DomainList.Sorting property="domain" name="Alphabetical" directionName="descending" direction="desc" />
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
}`,...u.parameters?.docs?.source}}};const $=["Default","WithSummary","WithSummaryBottom","WithAccordion","LoadingView","WithSecondaryFilters"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:d,LoadingView:h,WithAccordion:m,WithSecondaryFilters:u,WithSummary:l,WithSummaryBottom:c,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{ge as D,G as d,Y as m};
