import{j as t}from"./iframe-g-XFBo2M.js";import{A as B}from"./AlertBadge-K2HkqN1E.js";import{A as I}from"./Avatar-X3dATXB7.js";import{C as b}from"./Content-BwCOhlmF.js";import{am as L,aj as S,a5 as j,v as y,g as D,h as T}from"./Modal-HN7mUc_p.js";import"./FileCardList-DoQkIDuX.js";import{S as H}from"./Section-BXzmDK8J.js";import{H as g}from"./Heading-D8TOp1jB.js";import{I as f}from"./Initials-B759V3Ss.js";import{i as A}from"./browser-aGtpEYpD.js";import{t as m}from"./typedList-CtNjylQv.js";import{T as r}from"./Text-vL1LV049.js";import{a as w,a7 as C}from"./IconWarning-IhhFy3Bx.js";import"./Flex-Bsm0K3ZO.js";import"./Accordion-DgcwWYzu.js";import"./ActionGroup-1WZPcRd7.js";import"./Alert-BdQYV_b8.js";import"./AlertIcon-DJoeY47w.js";import"./Align-CusiQaMs.js";import"./AvatarStack-DseM1MNa.js";import"./BigNumber-CTRFWhZ2.js";import"./Breadcrumb-DygeFtpj.js";import"./context-MFH_cEi3.js";import"./flowComponent-BTFCKpJC.js";import"./Button-CgOKxPbj.js";import"./Color-BlRFVK3w.js";import"./CounterBadge-C0r21egP.js";import"./DonutChart-BDWUAJsd.js";import"./Header-C5E3rf3q.js";import"./IllustratedMessage-XlPrj5S3.js";import"./Image-MSIXUbcy.js";import"./InlineCode-bJV2810L.js";import"./Label-C0aRk6NU.js";import"./LayoutCard-DBrjjt1J.js";import"./Legend-OCWjJfVR.js";import"./Link-CRZIDf5q.js";import"./LoadingSpinner-hwBIUj3t.js";import"./MessageSeparator-Dw1kKEgh.js";import"./NavigationGroup-Dgf5bfuu.js";import"./Notification-yM0bJJk7.js";import"./NotificationProvider-4So095Rx.js";import"./ProgressBar-Bj_6Z6Bp.js";import"./Rating-ci1cuaCo.js";import"./Separator-KtU-Fy3c.js";import"./Skeleton-MXCSZONm.js";import"./SkeletonText-CtpLmtNt.js";import"./TableFooterRow-lK-uAiGD.js";import{m as V,d as M}from"./Default.stories-pvWRIjPM.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-y0BvrcCC.js";import"./index-Di8R43pA.js";import"./index-D0vwgSdS.js";import"./utils-BLpr0TUC.js";import"./RSPContexts-FyZiT-dA.js";import"./filterDOMProps-i7L6S0l1.js";import"./ProgressBar-DLmwbc5V.js";import"./Hidden-CbPhQWFj.js";import"./context-BmipQpJh.js";import"./SelectionIndicator-CoVhmIZH.js";import"./useFocusRing-0SVajdfI.js";import"./useFocusable-BhABskQh.js";import"./useLocalizedStringFormatter-Cyj6BGOX.js";import"./Button-F2DpSCEE.js";import"./Collection-wAduGIRO.js";import"./CollectionBuilder-DM14duJF.js";import"./Separator-tfjl_R7-.js";import"./useStatic-BQUJQZNk.js";import"./ControlledNotification-COssbRo0.js";import"./EmulatedBoldText-weZy4b5C.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";const z={bigInt:((e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);if(o==null)return a==null?0:-1;if(a==null)return 1;try{return A(typeof o=="bigint"&&typeof a=="bigint",`Expected BigInt values, got ${typeof o} and ${typeof a}`),o<a?-1:o>a?1:0}catch(u){console.error(`Error in BigInt comparison: ${u}`)}})},Yt={...V,title:"Structure/List/Edge Cases"},F=()=>new Promise(e=>window.setTimeout(e,2e3)),x=async e=>(await F(),`${e}@info.de`),d={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},l={render:()=>{const e=m();return t.jsxs(e.List,{defaultViewMode:"tiles",batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{showTiles:!0,showList:!1,textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},p={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(e.Table,{children:[t.jsxs(e.TableHeader,{children:[t.jsx(e.TableColumn,{children:"Name"}),t.jsx(e.TableColumn,{children:"Email"})]}),t.jsx(e.TableBody,{children:t.jsxs(e.TableRow,{children:[t.jsx(e.TableCell,{children:n=>n.name}),t.jsx(e.TableCell,{children:n=>t.jsx(L,{children:()=>S(x,[n.name])})})]})})]})]})}},c={render:()=>{const e=m();return t.jsxs(e.List,{children:[t.jsx(e.StaticData,{data:[{name:"John Doe"}]}),t.jsx(e.Item,{showTiles:!0,textValue:n=>n.name,children:n=>t.jsxs(e.ItemView,{children:[t.jsx(y,{"aria-label":"select user"}),t.jsx(I,{children:t.jsx(f,{children:n.name})}),t.jsxs(g,{children:["HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading",t.jsx(B,{status:"warning",children:"AlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadge"})]}),t.jsx(r,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(b,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(b,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(D,{children:t.jsx(T,{children:"Show details"})})]})})]})}},h=(e,n,i)=>{const o=String(e.getValue(i)||""),a=String(n.getValue(i)||"");return o.length-a.length},v=(e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);return o==="Domain"&&a==="Subdomain"?-1:o==="Subdomain"&&a==="Domain"?1:String(o).localeCompare(String(a))},s=()=>{const e=M.map((o,a)=>{const u=BigInt(1e12+a);return{...o,id:u}}),n=m(),i=z.bigInt;return t.jsx(H,{children:t.jsxs(n.List,{batchSize:10,children:[t.jsx(n.StaticData,{data:e}),t.jsx(n.Sorting,{property:"hostname",name:"Name A bis Z",direction:"asc"}),t.jsx(n.Sorting,{property:"hostname",name:"Name Z bis A",direction:"desc"}),t.jsx(n.Sorting,{property:"id",name:"ID (aufsteigend)",direction:"asc",customSortingFn:i}),t.jsx(n.Sorting,{property:"id",name:"ID (absteigend)",direction:"desc",customSortingFn:i,defaultEnabled:!0}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (kürzeste zuerst)",direction:"asc",customSortingFn:h}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (längste zuerst)",direction:"desc",customSortingFn:h}),t.jsx(n.Sorting,{property:"type",name:"Typ (Domains zuerst)",direction:"asc",customSortingFn:v}),t.jsx(n.Item,{children:o=>t.jsxs(n.ItemView,{children:[t.jsx(I,{color:o.type==="Domain"?"blue":"teal",children:o.type==="Domain"?t.jsx(w,{}):t.jsx(C,{})}),t.jsxs(g,{children:[o.hostname,!o.verified&&t.jsx(B,{status:"warning",children:"Unverifiziert"})]}),t.jsx(r,{children:o.type}),t.jsxs(r,{children:["ID: ",o.id]}),t.jsxs(r,{children:["TLD: ",o.tld]}),t.jsxs(D,{children:[t.jsx(T,{children:"Details anzeigen"}),t.jsx(T,{children:"Löschen"})]})]})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"CustomSortingList"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const te=["LoadingListItem","LoadingTile","LoadingTableCell","VeryLongWords","CustomSortingList"];export{s as CustomSortingList,d as LoadingListItem,p as LoadingTableCell,l as LoadingTile,c as VeryLongWords,te as __namedExportsOrder,Yt as default};
