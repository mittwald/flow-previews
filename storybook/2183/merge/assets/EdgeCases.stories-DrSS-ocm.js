import{j as t}from"./iframe-BIOR2-hs.js";import{A as B}from"./AlertBadge-DCY0z1jh.js";import{A as I}from"./Avatar-BUQx2CI1.js";import{C as b}from"./Content-BrpitEoE.js";import{aj as L,ag as S,a2 as j,s as y,e as D,f as T}from"./TimeField-DsDqWsQ-.js";import"./FileCardList-C94A5o8Z.js";import{S as f}from"./Section-BqNRxlPT.js";import{H as g}from"./Heading-Cv__lUFC.js";import{I as H}from"./Initials-D4NqoMu-.js";import{i as A}from"./browser-D0ITs1ti.js";import{t as m}from"./typedList-CoYdQWMK.js";import{T as r}from"./Text-DusIDTsD.js";import{a as w,a6 as C}from"./IconWarning-DZ71cvXF.js";import"./Accordion-NoXfJmUE.js";import"./ActionGroup-CY4j-L1M.js";import"./Alert-CoZzyuQ9.js";import"./AlertIcon-BvUo9Etu.js";import"./Align-C8XIH-7n.js";import"./AvatarStack-Xz4hqYuD.js";import"./Badge-Cr-ClmAO.js";import"./BigNumber-L7ZWV3y6.js";import"./Breadcrumb-qAQdTaCx.js";import"./context-CUEzUKrh.js";import"./PropsContextProvider-RMvdN3RZ.js";import"./Button-CfZ-AQyp.js";import"./Color-CnqARC2o.js";import"./ContextualHelpTrigger-BXnzR8Ux.js";import"./CounterBadge-BfId8Yot.js";import"./DonutChart-C8wwiAZA.js";import"./Header-CRVpFWgA.js";import"./IllustratedMessage-8GDMUcKQ.js";import"./Image-DwW9X8dg.js";import"./InlineCode-DaFFs495.js";import"./Label-BLkwK3Kt.js";import"./Legend-ZeqB-YKM.js";import"./Link-DoJ4IPEN.js";import"./LoadingSpinner-CKTuHmBU.js";import"./Message-DKDXC3NB.js";import"./MessageSeparator-CGyHmQ4m.js";import"./NavigationGroup-D7bLGYP0.js";import"./Notification-D2xjz265.js";import"./NotificationProvider-XOHGZ29Q.js";import"./OverlayTrigger-4gUv_Eql.js";import"./PopoverTrigger-BXV6g6Jr.js";import"./Popover-BGEckYFs.js";import"./ProgressBar-B6DJTl7K.js";import"./Rating-UOf7auGu.js";import"./Separator-BAa6viOO.js";import"./Skeleton-BNldNKri.js";import"./SkeletonText-DYOjw4oF.js";import"./TableFooterRow-BUV2_OgU.js";import{m as V,d as M}from"./Default.stories-B54STCU5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Collection-Cvuk07Q7.js";import"./CollectionBuilder-Dgt7X-YC.js";import"./Hidden-CVR9fNcA.js";import"./mergeRefs-U5WlywcK.js";import"./index-k9AOzptS.js";import"./useFocusable-B_nx0oid.js";import"./utils-DsOUUUiG.js";import"./RSPContexts-DcPCJIF5.js";import"./SelectionIndicator-DG9tWISV.js";import"./context-BLOg-x3I.js";import"./useFocusRing-1hKsP8MW.js";import"./Separator-DTwWIU6f.js";import"./filterDOMProps-i7L6S0l1.js";import"./ProgressBar-_rI0OtV6.js";import"./useLocalizedStringFormatter-BKbYN9ME.js";import"./dynamic-BVxG6scv.js";import"./Button-Vr3ctEdr.js";import"./remote-CjhnXpnY.js";import"./useStatic-CRF1h1Jc.js";import"./EmulatedBoldText-Wg5Zh9Cq.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";const z={bigInt:((e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);if(o==null)return a==null?0:-1;if(a==null)return 1;try{return A(typeof o=="bigint"&&typeof a=="bigint",`Expected BigInt values, got ${typeof o} and ${typeof a}`),o<a?-1:o>a?1:0}catch(u){console.error(`Error in BigInt comparison: ${u}`)}})},oe={...V,title:"Structure/List/Edge Cases"},F=()=>new Promise(e=>window.setTimeout(e,2e3)),x=async e=>(await F(),`${e}@info.de`),d={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},l={render:()=>{const e=m();return t.jsxs(e.List,{defaultViewMode:"tiles",batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{showTiles:!0,showList:!1,textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},p={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(e.Table,{children:[t.jsxs(e.TableHeader,{children:[t.jsx(e.TableColumn,{children:"Name"}),t.jsx(e.TableColumn,{children:"Email"})]}),t.jsx(e.TableBody,{children:t.jsxs(e.TableRow,{children:[t.jsx(e.TableCell,{children:n=>n.name}),t.jsx(e.TableCell,{children:n=>t.jsx(L,{children:()=>S(x,[n.name])})})]})})]})]})}},c={render:()=>{const e=m();return t.jsxs(e.List,{children:[t.jsx(e.StaticData,{data:[{name:"John Doe"}]}),t.jsx(e.Item,{showTiles:!0,textValue:n=>n.name,children:n=>t.jsxs(e.ItemView,{children:[t.jsx(y,{"aria-label":"select user"}),t.jsx(I,{children:t.jsx(H,{children:n.name})}),t.jsxs(g,{children:["HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading",t.jsx(B,{status:"warning",children:"AlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadge"})]}),t.jsx(r,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(b,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(b,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(D,{children:t.jsx(T,{children:"Show details"})})]})})]})}},h=(e,n,i)=>{const o=String(e.getValue(i)||""),a=String(n.getValue(i)||"");return o.length-a.length},v=(e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);return o==="Domain"&&a==="Subdomain"?-1:o==="Subdomain"&&a==="Domain"?1:String(o).localeCompare(String(a))},s=()=>{const e=M.map((o,a)=>{const u=BigInt(1e12+a);return{...o,id:u}}),n=m(),i=z.bigInt;return t.jsx(f,{children:t.jsxs(n.List,{batchSize:10,children:[t.jsx(n.StaticData,{data:e}),t.jsx(n.Sorting,{property:"hostname",name:"Name A bis Z",direction:"asc"}),t.jsx(n.Sorting,{property:"hostname",name:"Name Z bis A",direction:"desc"}),t.jsx(n.Sorting,{property:"id",name:"ID (aufsteigend)",direction:"asc",customSortingFn:i}),t.jsx(n.Sorting,{property:"id",name:"ID (absteigend)",direction:"desc",customSortingFn:i,defaultEnabled:!0}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (kürzeste zuerst)",direction:"asc",customSortingFn:h}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (längste zuerst)",direction:"desc",customSortingFn:h}),t.jsx(n.Sorting,{property:"type",name:"Typ (Domains zuerst)",direction:"asc",customSortingFn:v}),t.jsx(n.Item,{children:o=>t.jsxs(n.ItemView,{children:[t.jsx(I,{color:o.type==="Domain"?"blue":"teal",children:o.type==="Domain"?t.jsx(w,{}):t.jsx(C,{})}),t.jsxs(g,{children:[o.hostname,!o.verified&&t.jsx(B,{status:"warning",children:"Unverifiziert"})]}),t.jsx(r,{children:o.type}),t.jsxs(r,{children:["ID: ",o.id]}),t.jsxs(r,{children:["TLD: ",o.tld]}),t.jsxs(D,{children:[t.jsx(T,{children:"Details anzeigen"}),t.jsx(T,{children:"Löschen"})]})]})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"CustomSortingList"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ie=["LoadingListItem","LoadingTile","LoadingTableCell","VeryLongWords","CustomSortingList"];export{s as CustomSortingList,d as LoadingListItem,p as LoadingTableCell,l as LoadingTile,c as VeryLongWords,ie as __namedExportsOrder,oe as default};
