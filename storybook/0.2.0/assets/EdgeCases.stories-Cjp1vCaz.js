import{j as i}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as x}from"./Heading-BeIHyBZu.js";import{T}from"./Text-CjWzxq3B.js";import{m as h,R as d,u as c,V as j,t as L}from"./Default.stories-D4Kj_UWT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-DRn_CkhL.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./Heading-KiBkZhoZ.js";import"./RSPContexts-BG_vMng8.js";import"./utils-CVMEqJeI.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-F0Mi_G2S.js";import"./ContextMenuTrigger-D1Ca8J4C.js";import"./ContextMenuSection-zHVSgAMF.js";import"./Action-C0JNXQWV.js";import"./context-DWBCFo5s.js";import"./useSelector-Bela-RZB.js";import"./getActionGroupSlot-CJnds2HO.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Cm56cv0Y.js";import"./Button-Bar8yyjm.js";import"./ProgressBar-Jtxrz8Zb.js";import"./Label-0l9LIJhu.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CRka2yGF.js";import"./useFocusRing-CvMz7Q_e.js";import"./usePress-lNW0gZrs.js";import"./OverlayArrow-DbO_BHce.js";import"./useControlledState-19OAjgUP.js";import"./Collection-BmK4LEIa.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-BRzFti9v.js";import"./SelectionManager-DzgDwjYF.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-_gyYTurN.js";import"./VisuallyHidden-EoGVKpYJ.js";import"./Popover-BDeYryqJ.js";import"./DialogTrigger-DhZJeKzQ.js";import"./DialogTriggerView-AfyxSbLz.js";import"./IconApp-B1n3xJhN.js";import"./IconWarning-74Dp5076.js";import"./deepHas-BsyTl2gw.js";import"./react-children-utilities-6OrAuQ4c.js";import"./Avatar-ZwmG2C4z.js";import"./Initials-GIXsetGb.js";import"./Switch-BVvPhNXB.js";import"./Label-DjKYLgIY.js";import"./useToggleState-PAcD5jYc.js";import"./useFormReset-SCbFK273.js";import"./ButtonView-D3pBUGc-.js";import"./Button-asfW1gtl.js";import"./LoadingSpinner-B-liU95P.js";import"./Tooltip-BQwn4p0H.js";import"./Badge-DNzJz9dI.js";import"./SearchField-BHfOUaat.js";import"./FieldError-MhfOH-DI.js";import"./FieldError-CIY4tqAl.js";import"./Form-B_J3Skg5.js";import"./Group-DYg8XoKY.js";import"./Input-BKr9iUlR.js";import"./useTextField-DkkdHQgQ.js";import"./IllustratedMessage-Cuxt9MpV.js";import"./DragAndDrop-CHrMoHXO.js";import"./ListBox-Dqs1IaC1.js";import"./useListState-CdbolKJ1.js";import"./Table-BOc52a1n.js";import"./SkeletonText-Dj4GfagN.js";import"./useUpdateEffect-DiqdWpJh.js";import"./useHasTabbableChild-CvEK79E0.js";import"./Section-DgXBZ92I.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-e1b60AYX.js";import"./ActionGroup-BR2T9vxH.js";import"./AlertBadge-RDVbC_TR.js";import"./AlertIcon-DaSLtzNQ.js";import"./Content-BEV2zUkx.js";const ei={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=L();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(d,{children:()=>{const u=c(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=L();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(d,{children:()=>c(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(p=m.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ri=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,ri as __namedExportsOrder,ei as default};
