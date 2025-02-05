import{j as i}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as x}from"./Heading-DmC7zPHZ.js";import{T}from"./Text-DcH75BF-.js";import{m as h,R as d,u as L,L as j,t as c}from"./Default.stories-C8lvUX9a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-BEdvHTPM.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./Heading-DOuNAX0R.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DjOXyFua.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-BK3pbL47.js";import"./ContextMenuContent-BWGtpqNs.js";import"./ContextMenuSection-BoVGs0aM.js";import"./Action-Dnz_fKbx.js";import"./context-_K-5nSq3.js";import"./useSelector-D3mDZ6p8.js";import"./getActionGroupSlot-CY9QQgjI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Cg9ydWeK.js";import"./Button-D76OI_vo.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CNLx9CCl.js";import"./useFocusRing-CvMz7Q_e.js";import"./usePress-lNW0gZrs.js";import"./OverlayArrow-DCI-Qj_s.js";import"./useControlledState-19OAjgUP.js";import"./Collection-BmK4LEIa.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-BgTw7aj1.js";import"./SelectionManager-BEf0hUjE.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-yrzOGIns.js";import"./VisuallyHidden-EoGVKpYJ.js";import"./Popover-B8fn0NjJ.js";import"./MenuTrigger-BIrpZmMH.js";import"./DialogTriggerView-DV6WcEqR.js";import"./IconApp-CrW8h-Rp.js";import"./IconWarning-C3Y0rqlg.js";import"./Switch-Bk2HsFNZ.js";import"./Label-DX3Ya1J-.js";import"./useToggleState-B1C2yV77.js";import"./useFormReset-SCbFK273.js";import"./ButtonView-yFOdbOxW.js";import"./Button-Cz5bd543.js";import"./LoadingSpinner-C6bUGSry.js";import"./Tooltip-DfeIfFhH.js";import"./Badge-BiIm5frU.js";import"./SearchField-Dt05edxe.js";import"./FieldError-CgG9l7_n.js";import"./FieldError-BHbGo4IV.js";import"./Form-DJvZMXJC.js";import"./Group-M84eP847.js";import"./Input-B6CrSN7d.js";import"./useTextField-0vRh6G6S.js";import"./IllustratedMessage-Cuxt9MpV.js";import"./DragAndDrop-CHrMoHXO.js";import"./ListBox-Y3N1ZvET.js";import"./useListState-BQN4fR6a.js";import"./Table-DcgEtcn3.js";import"./SkeletonText-Dj4GfagN.js";import"./useUpdateEffect-DiqdWpJh.js";import"./useHasTabbableChild-emlc6MFQ.js";import"./Section-CK7yj0tW.js";import"./Avatar-BJn-ERyV.js";import"./react-children-utilities-BAwZnu7W.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-e1b60AYX.js";import"./ActionGroup-I5ApCs-p.js";import"./AlertBadge-DOTNAhjs.js";import"./AlertIcon-CkhY8-oQ.js";import"./Content-D_HvFsTV.js";const ti={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=c();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(d,{children:()=>{const u=L(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=c();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(d,{children:()=>L(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,p,l;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=m.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ii=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,ii as __namedExportsOrder,ti as default};
