import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-CkSULLTy.js";import{T as E}from"./Text-BeE63-Dr.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-Cl_vAgiW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-C5nr8jLZ.js";import"./index-BU4L-DQy.js";import"./Heading-zFf9nh9b.js";import"./RSPContexts-BseA8goh.js";import"./utils-CSHM5tWr.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-BNegcRvf.js";import"./ContextMenuTrigger-CrY8Cwdt.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-CMWz8wiC.js";import"./OverlayTrigger-uZ2IyM3m.js";import"./OverlayArrow-B3YixoJg.js";import"./useFocusRing-CRCkdtud.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Do5SRlXR.js";import"./FocusScope-CGKzeA_Y.js";import"./Hidden-BsXGu--s.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-SbXjCjP8.js";import"./useSelector-r0W13MRO.js";import"./Action-BHSDSfnz.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-Cw6LIZ6L.js";import"./IconWarning-CYODic7s.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-DCsdZpIF.js";import"./Separator-N-TP_FuT.js";import"./useMenuTrigger-CdsZGpjS.js";import"./SelectionManager-D744F3FE.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./useFocusable-Dtk_6mL9.js";import"./Button-CSV5PcNg.js";import"./LoadingSpinner-Bx2kpYXf.js";import"./Button-CkDWo4mt.js";import"./SearchField-o-q3ZE3v.js";import"./FormField.module-jgORCpta.js";import"./Form-DTFy3O7Q.js";import"./useLabel-D8UVq-XF.js";import"./Group-Dagm9K6p.js";import"./Input-DMV1KN-k.js";import"./Label-CaZe8gQk.js";import"./useTextField-4jd-r0Vf.js";import"./useFormReset-DlrFI1sj.js";import"./Section-B5VVsvHQ.js";import"./Activity-CPnWONG0.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-CQl2es5P.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-BunI12Y_.js";import"./useListState-D5D4zpK-.js";import"./TableRow-Cgsb7Wzx.js";import"./LiveAnnouncer-AIgN_avV.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-DAzEVVSA.js";import"./IllustratedMessage-ClPY7BHS.js";import"./Skeleton-815pubIr.js";import"./StatusBadge-DPea92KV.js";import"./StatusIcon-jyUCL6ri.js";const Fe={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
