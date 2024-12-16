import{R as t}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-XMTR4E7a.js";import{T as E}from"./Text-Cj_eL-oH.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BWfDDPl-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BYgAOosN.js";import"./index-CHDNsM8M.js";import"./flowComponent-BM_bsdM-.js";import"./index-DolzVqEf.js";import"./Heading-52Ar77Or.js";import"./RSPContexts-BT50PPhj.js";import"./utils-DKtCZAsl.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CiYJIQMS.js";import"./ContextMenuTrigger-CWDy5FKz.js";import"./ContextMenu.module-37Y7DEq9.js";import"./Popover-DVXGO7D_.js";import"./OverlayTrigger-C-KWOtYR.js";import"./Button-i9IuKDdG.js";import"./ProgressBar-CBi1pwqX.js";import"./Label-lrV0rU61.js";import"./Hidden-_I_3hSLB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-C4jwYeNR.js";import"./useLocalizedStringFormatter-X6TgI_-C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DeAGt_gp.js";import"./useFocusRing-aZOxpy_h.js";import"./usePress-RNxp3RZQ.js";import"./OverlayArrow-8ryNgZFp.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-r12fe4yx.js";import"./CollectionBuilder-CAvuKgSt.js";import"./Header-rLZ3QEVe.js";import"./Separator-BKg-vd4z.js";import"./SelectionManager-B5ZGOR95.js";import"./FocusScope-8TYcTRcc.js";import"./useEvent-Co9bvcjb.js";import"./useCollator-BQ65kL8x.js";import"./useDescription-BzwFPh_j.js";import"./VisuallyHidden-iqNnHKyk.js";import"./context-859mpCQj.js";import"./useSelector-B1salhvt.js";import"./Action-D0zhlgd9.js";import"./getActionGroupSlot-AJlcTtI2.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BsMqgwqQ.js";import"./IconWarning-B4d9xTRO.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-DDWeJ3La.js";import"./Button-C--giUau.js";import"./LoadingSpinner-DCq4YO4s.js";import"./Tooltip-BrfG_2y1.js";import"./Badge-BfJCdDC8.js";import"./SearchField-BuGRSSbW.js";import"./FieldError-CoI6oWOV.js";import"./FieldError-BRsWdmBR.js";import"./Form-DB3JQAHQ.js";import"./Group-w9Vb_kA9.js";import"./Input-bweKfcAC.js";import"./useTextField-GqRk-2BB.js";import"./useFormReset-Bzq1iQT5.js";import"./Section-Bitrkqhi.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Ose8LdXh.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-DFfNpw9s.js";import"./useListState-BfjaDI-Q.js";import"./Table-Bl9xgO7H.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-CNlqk2SB.js";import"./IllustratedMessage-B-HdGndG.js";import"./Skeleton-DAM5ch2x.js";import"./ActionGroup-DkTxlcRW.js";import"./AlertBadge-BIjgYi93.js";import"./AlertIcon-BbDTXzvM.js";import"./Content-DW2opCWC.js";const Ue={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,s,p;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(s=m.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const We=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,We as __namedExportsOrder,Ue as default};
