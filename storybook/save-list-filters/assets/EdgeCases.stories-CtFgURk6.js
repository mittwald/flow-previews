import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-BqYju3Us.js";import{T as E}from"./Text-gNTi5XIH.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BsdBLwE-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-WUPD1ni_.js";import"./index-BU4L-DQy.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./utils-CgpzwoFP.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-BgIWd_-0.js";import"./ContextMenuTrigger-Ci4OBM8M.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-CthYzvse.js";import"./OverlayTrigger-Mb922CnO.js";import"./OverlayArrow-B9aGSeR2.js";import"./useFocusable-DdFCD-YN.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C9_maMb0.js";import"./FocusScope-jwB0dEBj.js";import"./Hidden-BsXGu--s.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-BISd3IUW.js";import"./useSelector-CeuiqOMA.js";import"./Action-9bl-qa11.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-wPt-2EH5.js";import"./IconWarning-Dkezrd4b.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-8TqMsGve.js";import"./Separator-BGQky6UT.js";import"./useMenuTrigger-DiGwCRVM.js";import"./SelectionManager-DV2VTso8.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./Button-9zm5ToZW.js";import"./LoadingSpinner-CvVj9Yn-.js";import"./Button-B_pBO4HW.js";import"./TooltipTrigger-D9sor761.js";import"./SearchField-CqM5p2Fb.js";import"./FormField.module-DDCeyBJr.js";import"./Form-DAtDAkn6.js";import"./useLabel-D8UVq-XF.js";import"./Group-yf_Q-t6C.js";import"./Input-BPUwJsxH.js";import"./Label-BRZ8BO2K.js";import"./useTextField-8-06sg4o.js";import"./useFormReset-DlrFI1sj.js";import"./Section-q2wDoxqL.js";import"./Activity-CPnWONG0.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-mHbVpMPe.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-pnyRPge9.js";import"./useListState-BEdF7Q_Y.js";import"./TableRow-n3J8sXmh.js";import"./LiveAnnouncer-AIgN_avV.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-EvJDk9Y7.js";import"./IllustratedMessage-ClPY7BHS.js";import"./Skeleton-815pubIr.js";import"./StatusBadge-BiiXzN25.js";import"./StatusIcon-C6nx4qBr.js";const Fe={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=m.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Ge=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,Ge as __namedExportsOrder,Fe as default};
