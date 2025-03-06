import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{A as W}from"./AlertBadge-B8y4Jm20.js";import{A as M}from"./Avatar-BKIG8OWl.js";import{C as L}from"./Content-B9uXJDfZ.js";import{C as F,M as T}from"./ContextMenuContent-DoHNZW3X.js";import"./ContextMenuSection-COnqG3mz.js";import{H as S}from"./Heading-3cOpnTm8.js";import"./IconApp-BlCDOz7i.js";import{I as N,u as J}from"./IconWarning-Cksp_dQT.js";import"./index-BZISi7jw.js";import{I as $}from"./Initials-BU40LVVA.js";import{i as P}from"./browser-B1A6F7LW.js";import{D as p}from"./datetime-CJSQP4eG.js";import{m as Z,t as g,R as z,u as E,L as _,d as O}from"./Default.stories-DbNdQ4n9.js";import{S as k}from"./Section-VaUdaP2P.js";import{T as m}from"./Text-D9M1FVhy.js";import"./AlertIcon-DLYv3pC-.js";import"./flowComponent-BYduNA4_.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./react-children-utilities-fm2cgFnI.js";import"./Action-Dnj71fzz.js";import"./context-T6wCf2v9.js";import"./useStatic-79kqjvSG.js";import"./getActionGroupSlot-CjUGCB-i.js";import"./dynamic-DKDa4OpU.js";import"./Popover-DkodbBpX.js";import"./MenuTrigger-CHUqx2dT.js";import"./Dialog-BV8uMRwe.js";import"./Button-BBWo3kGM.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./Text-PTaPc_Ci.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-BBOWZO_U.js";import"./Switch-PLjeDt5V.js";import"./Label-BWLhaeSV.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./Heading-BCoG4c8D.js";import"./onlyText-DBswRDk6.js";import"./ButtonView-CyWTFuoj.js";import"./Button-DhoxjOB0.js";import"./LoadingSpinner-BNlvu0xK.js";import"./Tooltip-D1bGwq0W.js";import"./Badge-ByWxhCz7.js";import"./SearchField-BWuKRVht.js";import"./FormField.module-BvsJ67Yi.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Group-Df3SyVuJ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./IllustratedMessage-BBTAonkg.js";import"./DragAndDrop-CvXJIw9w.js";import"./ListBox-CC2Hg4MK.js";import"./useListState-YiQIo-bF.js";import"./Table-Dh2XaqIS.js";import"./SkeletonText-iV6GVzrR.js";import"./useUpdateEffect-Bw-e1fiu.js";import"./useHasTabbableChild-5OHQREjG.js";import"./Skeleton-DC0hmluT.js";import"./ActionGroup-cxfsNxpG.js";import"./EmulatedBoldText-BfYT5ZHF.js";const b={bigInt:(n,e,a)=>{const i=n.getValue(a),o=e.getValue(a);if(i==null)return o==null?0:-1;if(o==null)return 1;try{return P(typeof i=="bigint"&&typeof o=="bigint",`Expected BigInt values, got ${typeof i} and ${typeof o}`),i<o?-1:i>o?1:0}catch(r){console.error(`Error in BigInt comparison: ${r}`)}},dateTime:(n,e,a)=>{const i=n.getValue(a),o=e.getValue(a);if(i==null)return o==null?0:-1;if(o==null)return 1;let r=null,s=null;return i instanceof p?r=i:typeof i=="string"&&(r=p.fromISO(i)),o instanceof p?s=o:typeof o=="string"&&(s=p.fromISO(o)),r!=null&&r.isValid&&(s!=null&&s.isValid)?r.toMillis()-s.toMillis():r!=null&&r.isValid?-1:s!=null&&s.isValid?1:(console.warn("Invalid DateTime values for sorting."),0)}},Ce={...Z,title:"Structure/List/Edge Cases"},U=()=>new Promise(n=>window.setTimeout(n,2e3)),v=async n=>(await U(),`${n}@info.de`),d={render:()=>{const n=g();return t.jsxs(n.List,{batchSize:5,"aria-label":"List",children:[t.jsx(n.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(n.Item,{textValue:e=>e.name,children:e=>t.jsx(z,{children:()=>{const a=E(v,[e.name]);return t.jsxs(_,{children:[t.jsx(S,{children:e.name}),t.jsx(m,{children:a})]})}})})]})}},c={render:()=>{const n=g();return t.jsxs(n.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(n.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(n.Table,{children:[t.jsxs(n.TableHeader,{children:[t.jsx(n.TableColumn,{children:"Name"}),t.jsx(n.TableColumn,{children:"Email"})]}),t.jsx(n.TableBody,{children:t.jsxs(n.TableRow,{children:[t.jsx(n.TableCell,{children:e=>e.name}),t.jsx(n.TableCell,{children:e=>t.jsx(z,{children:()=>E(v,[e.name])})})]})})]})]})}},u={render:()=>{const n=g();return t.jsxs(n.List,{children:[t.jsx(n.StaticData,{data:[{name:"John Doe"}]}),t.jsx(n.Item,{showTiles:!0,textValue:e=>e.name,children:e=>t.jsxs(n.ItemView,{children:[t.jsx(M,{children:t.jsx($,{children:e.name})}),t.jsx(S,{children:"HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading"}),t.jsx(m,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(L,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(L,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(F,{children:t.jsx(T,{children:"Show details"})})]})})]})}},x=(n,e,a)=>{const i=String(n.getValue(a)||""),o=String(e.getValue(a)||"");return i.length-o.length},q=(n,e,a)=>{const i=n.getValue(a),o=e.getValue(a);return i==="Domain"&&o==="Subdomain"?-1:i==="Subdomain"&&o==="Domain"?1:String(i).localeCompare(String(o))},l=()=>{const n=O.map((o,r)=>{const s=r*3+Math.floor(Math.random()*5),R=BigInt(1e12+r);return{...o,id:R,createdAt:p.now().minus({days:s})}}),e=g(),a=b.bigInt,i=b.dateTime;return t.jsx(k,{children:t.jsxs(e.List,{batchSize:10,children:[t.jsx(e.StaticData,{data:n}),t.jsx(e.Sorting,{property:"hostname",name:"Name A bis Z",direction:"asc"}),t.jsx(e.Sorting,{property:"hostname",name:"Name Z bis A",direction:"desc"}),t.jsx(e.Sorting,{property:"id",name:"ID (aufsteigend)",direction:"asc",customSortingFn:a}),t.jsx(e.Sorting,{property:"id",name:"ID (absteigend)",direction:"desc",customSortingFn:a,defaultEnabled:!0}),t.jsx(e.Sorting,{property:"createdAt",name:"Erstelldatum (älteste zuerst)",direction:"asc",customSortingFn:i}),t.jsx(e.Sorting,{property:"createdAt",name:"Erstelldatum (neueste zuerst)",direction:"desc",customSortingFn:i,defaultEnabled:!0}),t.jsx(e.Sorting,{property:"tld",name:"TLD-Länge (kürzeste zuerst)",direction:"asc",customSortingFn:x}),t.jsx(e.Sorting,{property:"tld",name:"TLD-Länge (längste zuerst)",direction:"desc",customSortingFn:x}),t.jsx(e.Sorting,{property:"type",name:"Typ (Domains zuerst)",direction:"asc",customSortingFn:q}),t.jsx(e.Item,{children:o=>{var r;return t.jsxs(e.ItemView,{children:[t.jsx(M,{color:o.type==="Domain"?"blue":"teal",children:o.type==="Domain"?t.jsx(N,{}):t.jsx(J,{})}),t.jsxs(S,{children:[o.hostname,!o.verified&&t.jsx(W,{status:"warning",children:"Unverifiziert"})]}),t.jsx(m,{children:o.type}),t.jsxs(m,{children:["ID: ",o.id]}),t.jsxs(m,{children:["TLD: ",o.tld]}),t.jsxs(m,{children:["Erstellt am: ",(r=o.createdAt)==null?void 0:r.toLocaleString()]}),t.jsxs(F,{children:[t.jsx(T,{children:"Details anzeigen"}),t.jsx(T,{children:"Löschen"})]})]})}})]})})};l.__docgenInfo={description:"",methods:[],displayName:"CustomSortingList"};var h,B,I;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var D,j,f;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,H,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
              <Avatar>
                <Initials>{user.name}</Initials>
              </Avatar>
              <Heading>
                HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading
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
}`,...(C=(H=u.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var V,w,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const domainsWithDateTime = domains.map((domain, index) => {
    const daysAgo = index * 3 + Math.floor(Math.random() * 5);
    const bigIntId = BigInt(1000000000000 + index);
    return {
      ...domain,
      id: bigIntId,
      createdAt: DateTime.now().minus({
        days: daysAgo
      })
    };
  });
  const DomainList = typedList<DomainWithBigIntId>();
  const bigIntSorting = SortingFunctions.bigInt as SortingFn<DomainWithBigIntId>;
  const dateTimeSorting = SortingFunctions.dateTime as SortingFn<DomainWithBigIntId>;
  return <Section>
      <DomainList.List batchSize={10}>
        <DomainList.StaticData data={domainsWithDateTime} />

        <DomainList.Sorting property="hostname" name="Name A bis Z" direction="asc" />
        <DomainList.Sorting property="hostname" name="Name Z bis A" direction="desc" />

        <DomainList.Sorting property="id" name="ID (aufsteigend)" direction="asc" customSortingFn={bigIntSorting} />
        <DomainList.Sorting property="id" name="ID (absteigend)" direction="desc" customSortingFn={bigIntSorting} defaultEnabled />

        <DomainList.Sorting property="createdAt" name="Erstelldatum (älteste zuerst)" direction="asc" customSortingFn={dateTimeSorting} />

        <DomainList.Sorting property="createdAt" name="Erstelldatum (neueste zuerst)" direction="desc" customSortingFn={dateTimeSorting} defaultEnabled />

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
              <Text>Erstellt am: {domain.createdAt?.toLocaleString()}</Text>
              <ContextMenu>
                <MenuItem>Details anzeigen</MenuItem>
                <MenuItem>Löschen</MenuItem>
              </ContextMenu>
            </DomainList.ItemView>}
        </DomainList.Item>
      </DomainList.List>
    </Section>;
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Ve=["LoadingListItem","LoadingTableCell","VeryLongWords","CustomSortingList"];export{l as CustomSortingList,d as LoadingListItem,c as LoadingTableCell,u as VeryLongWords,Ve as __namedExportsOrder,Ce as default};
