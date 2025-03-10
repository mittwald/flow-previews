import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{A as W}from"./AlertBadge-xkZW7cs8.js";import{A as x}from"./Avatar-CW7fvjlR.js";import{C as D}from"./Content-CgnPnPNS.js";import{C as h,M as g}from"./ContextMenuContent-CxLW6rTz.js";import"./ContextMenuSection-D5rGdyZY.js";import{H as l}from"./Heading-D5B3zhCX.js";import"./IconApp-6KkRxCXW.js";import{I as J,u as _}from"./IconWarning-CBLFzXEL.js";import"./index-BZISi7jw.js";import{I as U}from"./Initials-C5WNmigv.js";import{i as q}from"./browser-B1A6F7LW.js";import{D as d}from"./datetime-CJSQP4eG.js";import{m as G,t as p,R as K,u as b,L as $,d as Q,S as X,l as Y,g as tt}from"./Default.stories-CpHgIUAp.js";import{S as Z}from"./Section-CAaxpG4l.js";import{T as m}from"./Text-ycSbjUMH.js";import{A as et}from"./Alert-CrO_kY1j.js";import"./AlertIcon-BcE5jxrp.js";import"./flowComponent-Cjf8M1qv.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./react-children-utilities-fm2cgFnI.js";import"./Action-Ctv3AlgX.js";import"./context-MqXDt7Zp.js";import"./useStatic-576-OCoL.js";import"./getActionGroupSlot-OJm5rF-m.js";import"./dynamic-DKDa4OpU.js";import"./Popover-CRRd2eiS.js";import"./MenuTrigger-i2Sw8DHR.js";import"./Dialog-BV8uMRwe.js";import"./Button-BBWo3kGM.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./Text-PTaPc_Ci.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-CNwIBrqG.js";import"./Switch-B5a-v_dI.js";import"./Label-B_MIQF8H.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./Heading-BCoG4c8D.js";import"./onlyText-DBswRDk6.js";import"./ButtonView-DpTPZa1V.js";import"./Button-CFQpmMRz.js";import"./LoadingSpinner-B6hxwIay.js";import"./Tooltip-D1bGwq0W.js";import"./Badge-ClJQhjWa.js";import"./SearchField-BdOi0EVF.js";import"./FormField.module-C6ssJHmz.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Group-Df3SyVuJ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./IllustratedMessage-CZz7kaFT.js";import"./DragAndDrop-CvXJIw9w.js";import"./ListBox-CC2Hg4MK.js";import"./useListState-YiQIo-bF.js";import"./Table-Dh2XaqIS.js";import"./SkeletonText-iV6GVzrR.js";import"./useUpdateEffect-Bw-e1fiu.js";import"./useHasTabbableChild-5OHQREjG.js";import"./Skeleton-DC0hmluT.js";import"./ActionGroup-WvCGJncO.js";import"./EmulatedBoldText-BfYT5ZHF.js";const y={bigInt:(n,e,o)=>{const r=n.getValue(o),i=e.getValue(o);if(r==null)return i==null?0:-1;if(i==null)return 1;try{return q(typeof r=="bigint"&&typeof i=="bigint",`Expected BigInt values, got ${typeof r} and ${typeof i}`),r<i?-1:r>i?1:0}catch(a){console.error(`Error in BigInt comparison: ${a}`)}},dateTime:(n,e,o)=>{const r=n.getValue(o),i=e.getValue(o);if(r==null)return i==null?0:-1;if(i==null)return 1;let a=null,s=null;return r instanceof d?a=r:typeof r=="string"&&(a=d.fromISO(r)),i instanceof d?s=i:typeof i=="string"&&(s=d.fromISO(i)),a!=null&&a.isValid&&(s!=null&&s.isValid)?a.toMillis()-s.toMillis():a!=null&&a.isValid?-1:s!=null&&s.isValid?1:(console.warn("Invalid DateTime values for sorting."),0)}},Ne={...G,title:"Structure/List/Edge Cases"},nt=()=>new Promise(n=>window.setTimeout(n,2e3)),O=async n=>(await nt(),`${n}@info.de`),T={render:()=>{const n=p();return t.jsxs(n.List,{batchSize:5,"aria-label":"List",children:[t.jsx(n.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(n.Item,{textValue:e=>e.name,children:e=>t.jsx(K,{children:()=>{const o=b(O,[e.name]);return t.jsxs($,{children:[t.jsx(l,{children:e.name}),t.jsx(m,{children:o})]})}})})]})}},S={render:()=>{const n=p();return t.jsxs(n.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(n.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(n.Table,{children:[t.jsxs(n.TableHeader,{children:[t.jsx(n.TableColumn,{children:"Name"}),t.jsx(n.TableColumn,{children:"Email"})]}),t.jsx(n.TableBody,{children:t.jsxs(n.TableRow,{children:[t.jsx(n.TableCell,{children:e=>e.name}),t.jsx(n.TableCell,{children:e=>t.jsx(K,{children:()=>b(O,[e.name])})})]})})]})]})}},L={render:()=>{const n=p();return t.jsxs(n.List,{children:[t.jsx(n.StaticData,{data:[{name:"John Doe"}]}),t.jsx(n.Item,{showTiles:!0,textValue:e=>e.name,children:e=>t.jsxs(n.ItemView,{children:[t.jsx(x,{children:t.jsx(U,{children:e.name})}),t.jsx(l,{children:"HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading"}),t.jsx(m,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(D,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(D,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(h,{children:t.jsx(g,{children:"Show details"})})]})})]})}},j=(n,e,o)=>{const r=String(n.getValue(o)||""),i=String(e.getValue(o)||"");return r.length-i.length},it=(n,e,o)=>{const r=n.getValue(o),i=e.getValue(o);return r==="Domain"&&i==="Subdomain"?-1:r==="Subdomain"&&i==="Domain"?1:String(r).localeCompare(String(i))},c=()=>{const n=Q.map((i,a)=>{const s=a*3+Math.floor(Math.random()*5),k=BigInt(1e12+a);return{...i,id:k,createdAt:d.now().minus({days:s})}}),e=p(),o=y.bigInt,r=y.dateTime;return t.jsx(Z,{children:t.jsxs(e.List,{batchSize:10,children:[t.jsx(e.StaticData,{data:n}),t.jsx(e.Sorting,{property:"hostname",name:"Name A bis Z",direction:"asc"}),t.jsx(e.Sorting,{property:"hostname",name:"Name Z bis A",direction:"desc"}),t.jsx(e.Sorting,{property:"id",name:"ID (aufsteigend)",direction:"asc",customSortingFn:o}),t.jsx(e.Sorting,{property:"id",name:"ID (absteigend)",direction:"desc",customSortingFn:o,defaultEnabled:!0}),t.jsx(e.Sorting,{property:"createdAt",name:"Erstelldatum (älteste zuerst)",direction:"asc",customSortingFn:r}),t.jsx(e.Sorting,{property:"createdAt",name:"Erstelldatum (neueste zuerst)",direction:"desc",customSortingFn:r,defaultEnabled:!0}),t.jsx(e.Sorting,{property:"tld",name:"TLD-Länge (kürzeste zuerst)",direction:"asc",customSortingFn:j}),t.jsx(e.Sorting,{property:"tld",name:"TLD-Länge (längste zuerst)",direction:"desc",customSortingFn:j}),t.jsx(e.Sorting,{property:"type",name:"Typ (Domains zuerst)",direction:"asc",customSortingFn:it}),t.jsx(e.Item,{children:i=>{var a;return t.jsxs(e.ItemView,{children:[t.jsx(x,{color:i.type==="Domain"?"blue":"teal",children:i.type==="Domain"?t.jsx(J,{}):t.jsx(_,{})}),t.jsxs(l,{children:[i.hostname,!i.verified&&t.jsx(W,{status:"warning",children:"Unverifiziert"})]}),t.jsx(m,{children:i.type}),t.jsxs(m,{children:["ID: ",i.id]}),t.jsxs(m,{children:["TLD: ",i.tld]}),t.jsxs(m,{children:["Erstellt am: ",(a=i.createdAt)==null?void 0:a.toLocaleString()]}),t.jsxs(h,{children:[t.jsx(g,{children:"Details anzeigen"}),t.jsx(g,{children:"Löschen"})]})]})}})]})})},f=({children:n})=>{const e=p();return t.jsxs(e.List,{batchSize:5,"aria-label":"Domains",settingStorageKey:"Domains",onAction:o=>console.log(o.hostname),children:[t.jsx(e.LoaderAsync,{manualPagination:!0,manualSorting:!1,children:Y}),n,t.jsx(e.Item,{textValue:o=>o.hostname,children:o=>t.jsxs($,{children:[t.jsx(x,{color:o.type==="Domain"?"blue":"teal",children:o.type==="Domain"?t.jsx(J,{}):t.jsx(_,{})}),t.jsxs(l,{children:[o.hostname,!o.verified&&t.jsx(W,{status:"warning",children:"Not verified"})]}),t.jsx(m,{children:o.type}),t.jsxs(h,{children:[t.jsx(g,{children:"Show details"}),t.jsx(g,{children:"Delete"})]})]})})]})},u=()=>{const n=p(),e=b(tt,[]);return t.jsx(X,{storageKey:"domainList",type:"localStorage",children:t.jsxs(Z,{children:[t.jsx(et,{children:'This two lists have the same settingsKey ("Domains")'}),t.jsx(l,{children:"Not fixed filters"}),t.jsx(f,{children:t.jsx(n.Filter,{values:e,property:"type",mode:"all",name:"Typ",defaultSelected:["Domain"]})}),t.jsx(l,{children:"Fixed filters"}),t.jsx(f,{children:t.jsx(n.Filter,{values:e,property:"type",mode:"all",name:"Typ",selected:["Domain","Subdomain"]})})]})})};c.__docgenInfo={description:"",methods:[],displayName:"CustomSortingList"};u.__docgenInfo={description:"",methods:[],displayName:"PreFilteredList"};var I,B,H;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(B=T.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var v,F,A;S.parameters={...S.parameters,docs:{...(v=S.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(F=S.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var w,C,V;L.parameters={...L.parameters,docs:{...(w=L.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(C=L.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var M,z,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var P,N,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const DomainList = typedList<Domain>();
  const availableTypes = usePromise(getTypes, []);
  return <SettingsProvider storageKey="domainList" type="localStorage">
      <Section>
        <Alert>This two lists have the same settingsKey ("Domains")</Alert>

        <Heading>Not fixed filters</Heading>
        <DefaultDomainList>
          <DomainList.Filter values={availableTypes} property="type" mode="all" name="Typ" defaultSelected={["Domain"]} />
        </DefaultDomainList>

        <Heading>Fixed filters</Heading>
        <DefaultDomainList>
          <DomainList.Filter values={availableTypes} property="type" mode="all" name="Typ" selected={["Domain", "Subdomain"]} />
        </DefaultDomainList>
      </Section>
    </SettingsProvider>;
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const Re=["LoadingListItem","LoadingTableCell","VeryLongWords","CustomSortingList","PreFilteredList"];export{c as CustomSortingList,T as LoadingListItem,S as LoadingTableCell,u as PreFilteredList,L as VeryLongWords,Re as __namedExportsOrder,Ne as default};
