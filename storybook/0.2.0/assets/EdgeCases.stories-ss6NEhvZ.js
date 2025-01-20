import{j as i}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as x}from"./Heading-BBJR5mQq.js";import{T}from"./Text-DWihI4Ms.js";import{m as h,R as d,u as c,V as j,t as L}from"./Default.stories-B61nvwEj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./Heading-TsowwGP7.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DbIpkr2E.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-DUOeOfAn.js";import"./ContextMenuTrigger-CE7i89Ix.js";import"./ContextMenuSection-DJUCdmQz.js";import"./Action-Dl4Zo7Nk.js";import"./context-DuD98iKb.js";import"./useSelector-CRM3rZ6U.js";import"./getActionGroupSlot-BgdDmpj6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DtCnPnDw.js";import"./Button-TFgGWmnA.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CJ8wXOex.js";import"./useFocusRing-BUEgee7k.js";import"./usePress-CheaiuQC.js";import"./OverlayArrow-C189HunQ.js";import"./useControlledState-19OAjgUP.js";import"./Collection-B01CSX5r.js";import"./CollectionBuilder-bECbC7Nm.js";import"./Separator-CAFr1tdS.js";import"./SelectionManager-T3qadk1f.js";import"./FocusScope-CBujmq_y.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-rt50tWWG.js";import"./VisuallyHidden-CFrJCYb7.js";import"./Popover-BVRZW8kn.js";import"./OverlayTrigger-BcgVlnqK.js";import"./IconApp-6uddCNv0.js";import"./IconWarning-CCrCT0Lo.js";import"./deepHas-BsyTl2gw.js";import"./react-children-utilities-6OrAuQ4c.js";import"./Avatar-DFGiI0k_.js";import"./Initials-BlOBiw6s.js";import"./Switch-DXRqYEq5.js";import"./Label-CysJgzvk.js";import"./useToggleState-KoADu6YW.js";import"./useFormReset-SCbFK273.js";import"./Button-B8Ykdw8u.js";import"./LoadingSpinner-Caz8lkOu.js";import"./Tooltip-WtnRCPE_.js";import"./Badge-DWPErUKz.js";import"./SearchField-C_21PWRX.js";import"./FieldError-08OvBDya.js";import"./FieldError-Di-56-XY.js";import"./Form-D-sIjvit.js";import"./Group-B96B1Y9i.js";import"./Input-Cw-yF1VB.js";import"./useTextField-B6NJKPbp.js";import"./IllustratedMessage-Cuxt9MpV.js";import"./DragAndDrop-mU0sEvFT.js";import"./ListBox-CP11YaEZ.js";import"./useListState-CT7GD87m.js";import"./Table-jReJazBO.js";import"./SkeletonText-Dj4GfagN.js";import"./useUpdateEffect-DiqdWpJh.js";import"./useHasTabbableChild-C6_HmVtH.js";import"./Section-BjFQa9Gt.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-e1b60AYX.js";import"./ActionGroup-o0X2mAog.js";import"./AlertBadge-C_JmdglR.js";import"./AlertIcon-B5WkhrF3.js";import"./Content-D-_uD6v5.js";const ti={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=L();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(d,{children:()=>{const u=c(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=L();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(d,{children:()=>c(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
