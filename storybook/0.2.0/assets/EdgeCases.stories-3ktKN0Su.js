import{j as i}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as x}from"./Heading-DR-aUB7n.js";import{T}from"./Text-D5rDdv9L.js";import{m as h,t as d,R as L,u as c,L as j}from"./Default.stories-BOnxuLFp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-BwhkuB3x.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./Heading-DOuNAX0R.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DjOXyFua.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-BK3pbL47.js";import"./ContextMenuContent-DFXrp0uM.js";import"./ContextMenuSection-BgVHQ_0T.js";import"./Action-DEeLxhQr.js";import"./context-CVuhW7F5.js";import"./useSelector-Bkb0YzRV.js";import"./getActionGroupSlot-B2thp4jQ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-VVdan2GX.js";import"./Button-8t-PlKI0.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BJtEpXSQ.js";import"./useFocusRing-DNhlkveR.js";import"./usePress-1yUr5Cwu.js";import"./OverlayArrow-CXsQAix4.js";import"./useControlledState-19OAjgUP.js";import"./Collection-B05c0epe.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-7nkoDd3B.js";import"./SelectionManager-DkMoHAWq.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-DMitP4Gv.js";import"./VisuallyHidden-CvlCL3HN.js";import"./Popover-CzT-X0ge.js";import"./MenuTrigger-Xl1s09MF.js";import"./DialogTriggerView-CNkJBl9W.js";import"./IconApp-BvTDg_ym.js";import"./IconWarning-D2hnVGSN.js";import"./Switch-BA_rN5pJ.js";import"./Label-DTTE3pGW.js";import"./useToggleState-iYqM2U5k.js";import"./useFormReset-SCbFK273.js";import"./ButtonView-v-Pw4ZK5.js";import"./Button-BaNUASa3.js";import"./LoadingSpinner-CcwJ4mIx.js";import"./Tooltip-B0rYvIAE.js";import"./Badge-DGZczBJk.js";import"./SearchField-9OM8qzy_.js";import"./FieldError-WMkAMHNQ.js";import"./FieldError-Fgq_FSbK.js";import"./Form-BPCPwrNr.js";import"./Group-DUWvKL3o.js";import"./Input-By9TP3lj.js";import"./useTextField-CdIauddb.js";import"./IllustratedMessage-Cuxt9MpV.js";import"./DragAndDrop-jQxp7FRI.js";import"./ListBox-Dtbsk7XM.js";import"./useListState-CvpgFyX6.js";import"./Table-GEEE2j8w.js";import"./SkeletonText-1gkqMITR.js";import"./useUpdateEffect-DiqdWpJh.js";import"./useHasTabbableChild-BwAxjf0_.js";import"./Section-B_boi2-y.js";import"./Avatar-6hbEFmmd.js";import"./react-children-utilities-B_jQGFng.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-D4t9xY9y.js";import"./ActionGroup-Bh71tdQl.js";import"./AlertBadge-CAyfOrks.js";import"./AlertIcon-DWpHURVt.js";import"./Content-D1zC6KEa.js";const ti={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=d();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(L,{children:()=>{const u=c(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=d();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(L,{children:()=>c(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
