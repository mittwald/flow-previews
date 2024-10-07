import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-DFZX319J.js";import{T as E}from"./Text-BrnL_0VU.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-DCRyy799.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-BTZXG6HA.js";import"./index-Cf-03bMR.js";import"./Heading-D2dIVyzg.js";import"./RSPContexts-BseA8goh.js";import"./utils-BBsc42SX.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-C0gOxGaJ.js";import"./ContextMenuTrigger-Dj_AuoZj.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-DV49W4pv.js";import"./OverlayTrigger-BOu2b92A.js";import"./OverlayArrow-B8rEgeMV.js";import"./useFocusRing-CRCkdtud.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Do5SRlXR.js";import"./FocusScope-CGKzeA_Y.js";import"./Hidden-DMUPAT4b.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-BuMpmNeU.js";import"./useSelector-brrySfC_.js";import"./Action-9mD7LzHt.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BnsxQuK3.js";import"./IconWarning-D4iF1L1k.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Header-BikxQE8J.js";import"./Separator-C6jiSXXg.js";import"./useMenuTrigger-iUWLMgec.js";import"./SelectionManager-D54GM_Uc.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./useFocusable-D6sODRzj.js";import"./Button-CwW8OdyN.js";import"./LoadingSpinner-UXuACcjQ.js";import"./Button-BknGA9dM.js";import"./TooltipTrigger-81PChhl_.js";import"./Badge-XptYJB6L.js";import"./SearchField-CGXhOZ-G.js";import"./FormField.module-DoYQQqju.js";import"./Form-BJmzrAR9.js";import"./useLabel-D8UVq-XF.js";import"./Group-B4S_haar.js";import"./Input-BRW8j_n9.js";import"./Label-DgAfL5vK.js";import"./useTextField-BfWoRbPu.js";import"./useFormReset-DlrFI1sj.js";import"./Section-DBa34LmP.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-D7aSPCsI.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-SCrhlgzP.js";import"./useListState-D5Ew4QeR.js";import"./TableRow-HzAT_LGZ.js";import"./LiveAnnouncer-AIgN_avV.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-DAzEVVSA.js";import"./IllustratedMessage-ClPY7BHS.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-DkNic7rg.js";import"./AlertBadge-DSbtVaJd.js";import"./AlertIcon-BoJKJ3Lm.js";const Ke={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=m.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Qe=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,Qe as __namedExportsOrder,Ke as default};
