import{j as t}from"./iframe-QYf_yreC.js";import{A as B}from"./AlertBadge-ClDIorBf.js";import{A as I}from"./Avatar-B_ln5OAs.js";import{C as b}from"./Content-ysq6PY7h.js";import{am as L,aj as S,a5 as j,v as y,g as D,h as T}from"./Modal-BZuSJnKZ.js";import"./FileCardList-DTUmUWf5.js";import{S as H}from"./Section-B2DHZKCC.js";import{H as g}from"./Heading-Ztp4MNID.js";import{I as f}from"./Initials-D93mZZQg.js";import{i as A}from"./browser-BbcMJkiW.js";import{t as m}from"./typedList-CzXMVDi1.js";import{T as r}from"./Text-DYo1hnMM.js";import{a as w,a7 as C}from"./IconWarning-CJ0iL8xC.js";import"./Flex-FeaqVm2Q.js";import"./Accordion-QaDyvb9t.js";import"./ActionGroup-CNS7lIAN.js";import"./Alert-bj_Y0zgx.js";import"./AlertIcon-DGipYwqO.js";import"./Align-B8IK4Kvb.js";import"./AvatarStack-S7hrW2Du.js";import"./BigNumber-Ct2H2kB1.js";import"./Breadcrumb-B5Ha9Tr5.js";import"./context-BGZffbOF.js";import"./flowComponent-BlD0f313.js";import"./Button-ClcJ4r4J.js";import"./Color-Bp6xg0fX.js";import"./CounterBadge-CnGG8oCU.js";import"./DonutChart-Bw-cC5fd.js";import"./Header-NzTBG9RN.js";import"./IllustratedMessage-CrN3wwhj.js";import"./Image-CSQDDycD.js";import"./InlineCode-Y0cx0rl0.js";import"./Label-DkpOuIpZ.js";import"./LayoutCard-C6WMVQDl.js";import"./Legend-BN69fYiw.js";import"./Link-VGOGyvf3.js";import"./LoadingSpinner-DyzLehc_.js";import"./MessageSeparator-C5w9jueb.js";import"./NavigationGroup-DrewGvf7.js";import"./Notification-Dfr21Mg6.js";import"./NotificationProvider-Cnm_GiLp.js";import"./ProgressBar-D7-_y3N0.js";import"./Rating-4NQ2FU04.js";import"./Separator-vqPdnx36.js";import"./Skeleton-CnrauAdF.js";import"./SkeletonText-DntNO9xb.js";import"./TableFooterRow-DqL_vA4D.js";import{m as V,d as M}from"./Default.stories-67wwODqh.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DxvJo010.js";import"./index-DrqlcLhB.js";import"./index-Dl4zJFgP.js";import"./utils-9temXcui.js";import"./RSPContexts-CQ49TXVP.js";import"./filterDOMProps-i7L6S0l1.js";import"./ProgressBar-BpNDlZ7L.js";import"./Hidden-D4BgLsni.js";import"./context-DoHwa-Uz.js";import"./SelectionIndicator-DHFL4Bc-.js";import"./useFocusRing-CKFComO5.js";import"./useFocusable-Bm9MC9Cg.js";import"./useLocalizedStringFormatter-BSKtfzGO.js";import"./Button-BY7Kz_qM.js";import"./Collection-DjuEe1dE.js";import"./CollectionBuilder-Ce2bTmZV.js";import"./Separator-DJyRay3v.js";import"./useStatic-CgWt-Vtk.js";import"./ControlledNotification-CA1OLKqo.js";import"./EmulatedBoldText-BUtEOorO.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";const z={bigInt:((e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);if(o==null)return a==null?0:-1;if(a==null)return 1;try{return A(typeof o=="bigint"&&typeof a=="bigint",`Expected BigInt values, got ${typeof o} and ${typeof a}`),o<a?-1:o>a?1:0}catch(u){console.error(`Error in BigInt comparison: ${u}`)}})},Yt={...V,title:"Structure/List/Edge Cases"},F=()=>new Promise(e=>window.setTimeout(e,2e3)),x=async e=>(await F(),`${e}@info.de`),d={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},l={render:()=>{const e=m();return t.jsxs(e.List,{defaultViewMode:"tiles",batchSize:5,"aria-label":"List",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(e.Item,{showTiles:!0,showList:!1,textValue:n=>n.name,children:n=>t.jsx(L,{children:()=>{const i=S(x,[n.name]);return t.jsxs(j,{children:[t.jsx(g,{children:n.name}),t.jsx(r,{children:i})]})}})})]})}},p={render:()=>{const e=m();return t.jsxs(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(e.Table,{children:[t.jsxs(e.TableHeader,{children:[t.jsx(e.TableColumn,{children:"Name"}),t.jsx(e.TableColumn,{children:"Email"})]}),t.jsx(e.TableBody,{children:t.jsxs(e.TableRow,{children:[t.jsx(e.TableCell,{children:n=>n.name}),t.jsx(e.TableCell,{children:n=>t.jsx(L,{children:()=>S(x,[n.name])})})]})})]})]})}},c={render:()=>{const e=m();return t.jsxs(e.List,{children:[t.jsx(e.StaticData,{data:[{name:"John Doe"}]}),t.jsx(e.Item,{showTiles:!0,textValue:n=>n.name,children:n=>t.jsxs(e.ItemView,{children:[t.jsx(y,{"aria-label":"select user"}),t.jsx(I,{children:t.jsx(f,{children:n.name})}),t.jsxs(g,{children:["HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading",t.jsx(B,{status:"warning",children:"AlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadgeAlertBadge"})]}),t.jsx(r,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(b,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(b,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(D,{children:t.jsx(T,{children:"Show details"})})]})})]})}},h=(e,n,i)=>{const o=String(e.getValue(i)||""),a=String(n.getValue(i)||"");return o.length-a.length},v=(e,n,i)=>{const o=e.getValue(i),a=n.getValue(i);return o==="Domain"&&a==="Subdomain"?-1:o==="Subdomain"&&a==="Domain"?1:String(o).localeCompare(String(a))},s=()=>{const e=M.map((o,a)=>{const u=BigInt(1e12+a);return{...o,id:u}}),n=m(),i=z.bigInt;return t.jsx(H,{children:t.jsxs(n.List,{batchSize:10,children:[t.jsx(n.StaticData,{data:e}),t.jsx(n.Sorting,{property:"hostname",name:"Name A bis Z",direction:"asc"}),t.jsx(n.Sorting,{property:"hostname",name:"Name Z bis A",direction:"desc"}),t.jsx(n.Sorting,{property:"id",name:"ID (aufsteigend)",direction:"asc",customSortingFn:i}),t.jsx(n.Sorting,{property:"id",name:"ID (absteigend)",direction:"desc",customSortingFn:i,defaultEnabled:!0}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (kürzeste zuerst)",direction:"asc",customSortingFn:h}),t.jsx(n.Sorting,{property:"tld",name:"TLD-Länge (längste zuerst)",direction:"desc",customSortingFn:h}),t.jsx(n.Sorting,{property:"type",name:"Typ (Domains zuerst)",direction:"asc",customSortingFn:v}),t.jsx(n.Item,{children:o=>t.jsxs(n.ItemView,{children:[t.jsx(I,{color:o.type==="Domain"?"blue":"teal",children:o.type==="Domain"?t.jsx(w,{}):t.jsx(C,{})}),t.jsxs(g,{children:[o.hostname,!o.verified&&t.jsx(B,{status:"warning",children:"Unverifiziert"})]}),t.jsx(r,{children:o.type}),t.jsxs(r,{children:["ID: ",o.id]}),t.jsxs(r,{children:["TLD: ",o.tld]}),t.jsxs(D,{children:[t.jsx(T,{children:"Details anzeigen"}),t.jsx(T,{children:"Löschen"})]})]})})]})})};s.__docgenInfo={description:"",methods:[],displayName:"CustomSortingList"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
