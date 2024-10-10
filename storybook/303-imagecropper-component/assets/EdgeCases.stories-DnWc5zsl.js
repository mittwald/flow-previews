import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-TK7j1OMP.js";import{T as E}from"./Text-U6fXasfV.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-QG6XKz4L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./Heading-eVsuDLmW.js";import"./RSPContexts-BseA8goh.js";import"./utils-BwYH5X3X.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dd84vsje.js";import"./ContextMenuTrigger-CNcFveDB.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-BG2gHMpH.js";import"./OverlayTrigger-Bdr7_DCO.js";import"./OverlayArrow-DTpAwzOr.js";import"./useFocusRing-if03xCoO.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-RWB8_cdz.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./PressResponder-CCvTmYWN.js";import"./usePress-1fQJjpyE.js";import"./FocusScope--STy3lDT.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BWHYRTKp.js";import"./context-D-nUHgHo.js";import"./useSelector-DDdDwEvg.js";import"./Action-BPHLOjQX.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BvR14QOm.js";import"./IconWarning-CKNdQ7e9.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";import"./Separator-B16cHhLc.js";import"./useMenuTrigger-NmqfniOV.js";import"./SelectionManager-DZzKvQeJ.js";import"./useEvent-DPeShqXn.js";import"./useCollator-lO_wuqqx.js";import"./useDescription-BalOtq5q.js";import"./useFocusable-VJrkZIcY.js";import"./Button-DXVDIrTY.js";import"./LoadingSpinner-VvQ8syNA.js";import"./Button-BebB4Pfr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./TooltipTrigger-Ba1cn70j.js";import"./Badge-BvEQIgC9.js";import"./SearchField-DlcN_Thf.js";import"./FormField.module-Dbf8c6i9.js";import"./Form-CqlMkRPm.js";import"./Group-BzjZRzGK.js";import"./Input-8WbdzIVX.js";import"./useTextField-DZljNCaL.js";import"./useFormReset-B-nkSQHj.js";import"./Section-DDZL8g9_.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-LSXAfkIo.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-CC1USgtZ.js";import"./useListState-BWBYrw8q.js";import"./TableRow-DmXPBprW.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-qygP_0EA.js";import"./IllustratedMessage-BCsfzvzH.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-DcjtyJO5.js";import"./AlertBadge-nTOhkmmY.js";import"./AlertIcon-BlaLswVm.js";const Ue={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
