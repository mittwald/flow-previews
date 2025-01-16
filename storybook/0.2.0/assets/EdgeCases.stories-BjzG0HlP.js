import{j as i}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as x}from"./Heading-B6ntI1Uh.js";import{T}from"./Text-CISO88fp.js";import{m as h,R as d,u as L,L as j,t as c}from"./Default.stories-aKX_D6l_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./Heading-TsowwGP7.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DbIpkr2E.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-y-0OLV69.js";import"./Wrap-DQq6jo70.js";import"./Text-DUOeOfAn.js";import"./useViewComponent-D59DCFNZ.js";import"./Table-C-qQ-Ni5.js";import"./SkeletonText-WAMlqAwb.js";import"./Button-TFgGWmnA.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CJ8wXOex.js";import"./useFocusRing-BUEgee7k.js";import"./usePress-CheaiuQC.js";import"./Collection-B01CSX5r.js";import"./CollectionBuilder-bECbC7Nm.js";import"./DragAndDrop-mU0sEvFT.js";import"./SelectionManager-T3qadk1f.js";import"./FocusScope-CBujmq_y.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-rt50tWWG.js";import"./useControlledState-19OAjgUP.js";import"./VisuallyHidden-CFrJCYb7.js";import"./useUpdateEffect-DiqdWpJh.js";import"./useHasTabbableChild-C6_HmVtH.js";import"./context-DuD98iKb.js";import"./useSelector-CRM3rZ6U.js";import"./SearchField-Ce_5-JSk.js";import"./FieldError-CTUstnYD.js";import"./IconApp-DoH4uGTw.js";import"./react-children-utilities-C_p-_B4N.js";import"./IconWarning-AchH7rxa.js";import"./FieldError-Di-56-XY.js";import"./Button-Bh6bf4PB.js";import"./LoadingSpinner-Nuc92ldt.js";import"./Form-D-sIjvit.js";import"./Group-B96B1Y9i.js";import"./Input-Cw-yF1VB.js";import"./useTextField-B6NJKPbp.js";import"./useFormReset-SCbFK273.js";import"./Badge-ClUEoBiY.js";import"./Tooltip-M3Vgu9gN.js";import"./OverlayArrow-C189HunQ.js";import"./ContextMenuTrigger-DXtCmZma.js";import"./ContextMenuSection-CH7Q3OAR.js";import"./Action-Dl4Zo7Nk.js";import"./getActionGroupSlot-BgdDmpj6.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DtCnPnDw.js";import"./Separator-CAFr1tdS.js";import"./Popover-0nzXzNTa.js";import"./OverlayTrigger-BcgVlnqK.js";import"./deepHas-BJtwnIX5.js";import"./Avatar-BGQwb2N2.js";import"./Initials-BBkcUG4r.js";import"./Switch-Bch9vW0U.js";import"./Label-wJy7v2v_.js";import"./useToggleState-KoADu6YW.js";import"./Section-Dmb63DDu.js";import"./ListBox-CP11YaEZ.js";import"./useListState-CT7GD87m.js";import"./Skeleton-D1Fna_oA.js";import"./datetime-CJSQP4eG.js";import"./ActionGroup-BRKZywLU.js";import"./IllustratedMessage-OXEY2kyb.js";import"./AlertBadge-BKxcYL5B.js";import"./AlertIcon-DBF-GdkO.js";import"./Content-D-_uD6v5.js";const ii={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=c();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(d,{children:()=>{const u=L(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=c();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(d,{children:()=>L(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(p=m.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ei=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,ei as __namedExportsOrder,ii as default};
