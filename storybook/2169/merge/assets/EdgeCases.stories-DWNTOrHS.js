import{j as t}from"./iframe-D29QVi29.js";import{A as B}from"./AlertBadge-BD8zfIUZ.js";import{A as I}from"./Avatar-DdRZEOpi.js";import{C as b}from"./Content-4wsi0omc.js";import{aj as L,ag as S,a2 as j,s as y,e as D,f as T}from"./TimeField-lp3G4cvL.js";import"./FileCardList-o4UnmRGi.js";import{S as f}from"./Section-N6-W-jGX.js";import{H as g}from"./Heading-DViBSNIF.js";import{I as H}from"./Initials-C20rNA0F.js";import{i as A}from"./browser-CsgOcZeL.js";import{t as m}from"./typedList-8B75JELH.js";import{T as r}from"./Text-BTGWwOlA.js";import{a as w,a7 as C}from"./IconWarning-qRr2EWc4.js";import"./Accordion-pcyhtlWY.js";import"./ActionGroup-DBGYrkNa.js";import"./Alert-ktnaCpLp.js";import"./AlertIcon-kk-UzcPM.js";import"./Align-BtSVJIfv.js";import"./AvatarStack-ByHEeQa7.js";import"./Badge-CVEppqDk.js";import"./BigNumber-Bg1ofazi.js";import"./Breadcrumb-BF3l43g2.js";import"./context-i3-N7LSR.js";import"./PropsContextProvider-Di3M49gZ.js";import"./Button-BqO8ZFSe.js";import"./Color-B_L_jSYT.js";import"./ContextualHelpTrigger-BZZdrkgN.js";import"./CounterBadge-B6vj9Dqf.js";import"./DonutChart-48XA97RY.js";import"./Header-5t7o3Hne.js";import"./IllustratedMessage-CFBYRPqa.js";import"./Image-BxoMCQ1N.js";import"./InlineCode-CkOTYzGC.js";import"./Label-7gHNx5q_.js";import"./Legend-9054_P7x.js";import"./Link-BjYhTK1P.js";import"./LoadingSpinner-BK6n1zCV.js";import"./Message-CK6j6Y0e.js";import"./MessageSeparator-ZDTmypgR.js";import"./NavigationGroup-DpBlg96L.js";import"./Notification-CY5CezJs.js";import"./NotificationProvider-DYLCryBZ.js";import"./OverlayTrigger-BRRbGelm.js";import"./PopoverTrigger-lEvm5luT.js";import"./Popover-0dSAyS70.js";import"./ProgressBar-DePOjU9y.js";import"./Rating-BloKNl8U.js";import"./Separator-CUu_rnx_.js";import"./Skeleton-CpVZIb00.js";import"./SkeletonText-DmNXdtlf.js";import"./TableFooterRow-CA8NF4Dq.js";import{m as V,d as M}from"./Default.stories-CKRZU8SS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./Hidden-DYWDaDdl.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./useFocusable-DTRRpH6w.js";import"./utils-V6v5WZV5.js";import"./RSPContexts-7wLun1z_.js";import"./SelectionIndicator-T7jZrYkx.js";import"./context-qGV7OOPv.js";import"./useFocusRing-BTna3mEs.js";import"./Separator-CwRYG8QD.js";import"./filterDOMProps-i7L6S0l1.js";import"./ProgressBar-1j73270Z.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./dynamic-BIIctUHv.js";import"./Button-x1GyynEX.js";import"./useStatic-lipZmjhB.js";import"./EmulatedBoldText-C5bjRzZR.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";const z={bigInt:((e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);if(o==null)return a==null?0:-1;if(a==null)return 1;try{return A(typeof o=="bigint"&&typeof a=="bigint",`Expected BigInt values, got ${typeof o} and ${typeof a}`),o<a?-1:o>a?1:0}catch(u){console.error(`Error in BigInt comparison: ${u}`)}})},ne={...V,title:"Structure/List/Edge Cases"},F=()=>new Promise(e=>window.setTimeout(e,2e3)),x=async e=>(await F(),`${e}@info.de`),d={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},l={render:()=>{const e=m();return t.jsxs(e.List,{defaultViewMode:"tiles",batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{showTiles:!0,showList:!1,textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},p={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(e.Table,{children:[t.jsxs(e.TableHeader,{children:[t.jsx(e.TableColumn,{children:"Name"}),t.jsx(e.TableColumn,{children:"Email"})]}),t.jsx(e.TableBody,{children:t.jsxs(e.TableRow,{children:[t.jsx(e.TableCell,{children:n=>n.name}),t.jsx(e.TableCell,{children:n=>t.jsx(L,{children:()=>S(x,[n.name])})})]})})]})]})}},c={render:()=>{const e=m();return t.jsxs(e.List,{children:[t.jsx(e.StaticData,{data:[{name:"John Doe"}]}),t.jsx(e.Item,{showTiles:!0,textValue:n=>n.name,children:n=>t.jsxs(e.ItemView,{children:[t.jsx(y,{"aria-label":"select user"}),t.jsx(I,{children:t.jsx(H,{children:n.name})}),t.jsxs(g,{children:["HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading",t.jsx(B,{status:"warning",children:"AlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadge"})]}),t.jsx(r,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(b,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(b,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(D,{children:t.jsx(T,{children:"Show details"})})]})})]})}},h=(e,n,i)=>{const o=String(e.getValue(i)||""),a=String(n.getValue(i)||"");return o.length-a.length},v=(e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);return o==="Domain"&&a==="Subdomain"?-1:o==="Subdomain"&&a==="Domain"?1:String(o).localeCompare(String(a))},s=()=>{const e=M.map((o,a)=>{const u=BigInt(1e12+a);return{...o,id:u}}),n=m(),i=z.bigInt;return t.jsx(f,{children:t.jsxs(n.List,{batchSize:10,children:[t.jsx(n.StaticData,{data:e}),t.jsx(n.Sorting,{property:"hostname",name:"Name A bis Z",direction:"asc"}),t.jsx(n.Sorting,{property:"hostname",name:"Name Z bis A",direction:"desc"}),t.jsx(n.Sorting,{property:"id",name:"ID (aufsteigend)",direction:"asc",customSortingFn:i}),t.jsx(n.Sorting,{property:"id",name:"ID (absteigend)",direction:"desc",customSortingFn:i,defaultEnabled:!0}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (kürzeste zuerst)",direction:"asc",customSortingFn:h}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (längste zuerst)",direction:"desc",customSortingFn:h}),t.jsx(n.Sorting,{property:"type",name:"Typ (Domains zuerst)",direction:"asc",customSortingFn:v}),t.jsx(n.Item,{children:o=>t.jsxs(n.ItemView,{children:[t.jsx(I,{color:o.type==="Domain"?"blue":"teal",children:o.type==="Domain"?t.jsx(w,{}):t.jsx(C,{})}),t.jsxs(g,{children:[o.hostname,!o.verified&&t.jsx(B,{status:"warning",children:"Unverifiziert"})]}),t.jsx(r,{children:o.type}),t.jsxs(r,{children:["ID: ",o.id]}),t.jsxs(r,{children:["TLD: ",o.tld]}),t.jsxs(D,{children:[t.jsx(T,{children:"Details anzeigen"}),t.jsx(T,{children:"Löschen"})]})]})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"CustomSortingList"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const List = typedList<{
      name: string;
    }>();
    return <List.List batchSize={5} aria-label="List">
        <List.StaticData data={[{
        name: "John"
      }, {
        name: "Max"
      }]} />

        <List.Item textValue={item => item.name}>
          {item => <Render>
              {() => {
            const email = usePromise(getEmail, [item.name]);
            return <ListItemView>
                    <Heading>{item.name}</Heading>
                    <Text>{email}</Text>
                  </ListItemView>;
          }}
            </Render>}
        </List.Item>
      </List.List>;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const List = typedList<{
      name: string;
    }>();
    return <List.List defaultViewMode="tiles" batchSize={5} aria-label="List">
        <List.StaticData data={[{
        name: "John"
      }, {
        name: "Max"
      }]} />

        <List.Item showTiles showList={false} textValue={item => item.name}>
          {item => <Render>
              {() => {
            const email = usePromise(getEmail, [item.name]);
            return <ListItemView>
                    <Heading>{item.name}</Heading>
                    <Text>{email}</Text>
                  </ListItemView>;
          }}
            </Render>}
        </List.Item>
      </List.List>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const List = typedList<{
      name: string;
    }>();
    return <List.List batchSize={5} aria-label="List" defaultViewMode="table">
        <List.StaticData data={[{
        name: "John"
      }, {
        name: "Max"
      }]} />

        <List.Table>
          <List.TableHeader>
            <List.TableColumn>Name</List.TableColumn>
            <List.TableColumn>Email</List.TableColumn>
          </List.TableHeader>

          <List.TableBody>
            <List.TableRow>
              <List.TableCell>{item => item.name}</List.TableCell>
              <List.TableCell>
                {item => <Render>
                    {() => {
                  return usePromise(getEmail, [item.name]);
                }}
                  </Render>}
              </List.TableCell>
            </List.TableRow>
          </List.TableBody>
        </List.Table>
      </List.List>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const List = typedList<{
      name: string;
    }>();
    return <List.List>
        <List.StaticData data={[{
        name: "John Doe"
      }]} />
        <List.Item showTiles textValue={user => user.name}>
          {user => <List.ItemView>
              <Checkbox aria-label="select user" />
              <Avatar>
                <Initials>{user.name}</Initials>
              </Avatar>
              <Heading>
                HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading
                <AlertBadge status="warning">
                  AlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadge
                </AlertBadge>
              </Heading>
              <Text>
                SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle
              </Text>
              <Content slot="top">
                TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop
              </Content>
              <Content slot="bottom">
                BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom
              </Content>
              <ContextMenu>
                <MenuItem>Show details</MenuItem>
              </ContextMenu>
            </List.ItemView>}
        </List.Item>
      </List.List>;
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const domainsWithBigInt = domains.map((domain, index) => {
    const bigIntId = BigInt(1000000000000 + index);
    return {
      ...domain,
      id: bigIntId
    };
  });
  const DomainList = typedList<DomainWithBigIntId>();
  const bigIntSorting = SortingFunctions.bigInt as SortingFn<DomainWithBigIntId>;
  return <Section>
      <DomainList.List batchSize={10}>
        <DomainList.StaticData data={domainsWithBigInt} />

        <DomainList.Sorting property="hostname" name="Name A bis Z" direction="asc" />
        <DomainList.Sorting property="hostname" name="Name Z bis A" direction="desc" />

        <DomainList.Sorting property="id" name="ID (aufsteigend)" direction="asc" customSortingFn={bigIntSorting} />
        <DomainList.Sorting property="id" name="ID (absteigend)" direction="desc" customSortingFn={bigIntSorting} defaultEnabled />

        <DomainList.Sorting property="tld" name="TLD-Länge (kürzeste zuerst)" direction="asc" customSortingFn={tldLengthSortingFn} />
        <DomainList.Sorting property="tld" name="TLD-Länge (längste zuerst)" direction="desc" customSortingFn={tldLengthSortingFn} />

        <DomainList.Sorting property="type" name="Typ (Domains zuerst)" direction="asc" customSortingFn={domainTypeSortingFn} />

        <DomainList.Item>
          {domain => <DomainList.ItemView>
              <Avatar color={domain.type === "Domain" ? "blue" : "teal"}>
                {domain.type === "Domain" ? <IconDomain /> : <IconSubdomain />}
              </Avatar>
              <Heading>
                {domain.hostname}
                {!domain.verified && <AlertBadge status="warning">Unverifiziert</AlertBadge>}
              </Heading>
              <Text>{domain.type}</Text>
              <Text>ID: {domain.id}</Text>
              <Text>TLD: {domain.tld}</Text>
              <ContextMenu>
                <MenuItem>Details anzeigen</MenuItem>
                <MenuItem>Löschen</MenuItem>
              </ContextMenu>
            </DomainList.ItemView>}
        </DomainList.Item>
      </DomainList.List>
    </Section>;
}`,...s.parameters?.docs?.source}}};const oe=["LoadingListItem","LoadingTile","LoadingTableCell","VeryLongWords","CustomSortingList"];export{s as CustomSortingList,d as LoadingListItem,p as LoadingTableCell,l as LoadingTile,c as VeryLongWords,oe as __namedExportsOrder,ne as default};
