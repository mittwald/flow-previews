import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-CIz8VwIe.js";import{T as E}from"./Text-CvyZKomL.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-N1EtjmYD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-B2GRt226.js";import"./index-Cf-03bMR.js";import"./Heading-Lmh25Bta.js";import"./RSPContexts-BseA8goh.js";import"./utils-DI5tH0Ou.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text--Nm9EVqj.js";import"./ContextMenuTrigger-CR9LJgLZ.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-LZZlZkfW.js";import"./OverlayTrigger-3DzVKfO2.js";import"./OverlayArrow-BcV34qBK.js";import"./useFocusable-BZYwbtlG.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DMpbNI7r.js";import"./FocusScope-BPYREqet.js";import"./Hidden-DMUPAT4b.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D3JK2BHS.js";import"./context-BggLOsA2.js";import"./useSelector-D2GE8II6.js";import"./Action-BcnqqLhy.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-FFcOAhSU.js";import"./IconWarning-DVQwOeH0.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Header-HCQ-zEiT.js";import"./Separator-D6MrK9aZ.js";import"./useMenuTrigger-PGrphHQy.js";import"./SelectionManager-BxzAQFhr.js";import"./useEvent-Be9f7BQw.js";import"./useCollator-BmGy_8lF.js";import"./Button-zGGzAHNA.js";import"./LoadingSpinner-8uPh6FlH.js";import"./Button-DHNhLPwP.js";import"./TooltipTrigger-BKTsU1Xg.js";import"./SearchField-Blf6KtgA.js";import"./FormField.module-kJA35Jin.js";import"./Form-cGlRQF10.js";import"./useLabel-D8UVq-XF.js";import"./Group-BANiDLKL.js";import"./Input-CEeVCiTT.js";import"./Label-D5u8zl72.js";import"./useTextField-DwjSG6jb.js";import"./useFormReset-DlrFI1sj.js";import"./Section-BQn1ow6U.js";import"./Activity-CPnWONG0.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-sG81qhrY.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-6cgYCQs5.js";import"./useListState-Cbz8p7M1.js";import"./TableRow-CK4kXcrQ.js";import"./LiveAnnouncer-AIgN_avV.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-D9wEJFgi.js";import"./IllustratedMessage-ClPY7BHS.js";import"./Skeleton-815pubIr.js";import"./StatusBadge-BH5h7lsu.js";import"./StatusIcon-BBDcIzkW.js";const Fe={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
