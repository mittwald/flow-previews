import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-B2P7mSpw.js";import{T as E}from"./Text-Cd3nXJGb.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-C1gANCZx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./flowComponent-BPK-Va1R.js";import"./index-Cf-03bMR.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./ContextMenuTrigger-Bis7FOY1.js";import"./ContextMenu.module-68N5lvfm.js";import"./Popover-7GUZlquZ.js";import"./OverlayTrigger-C9c93hgx.js";import"./OverlayArrow-Tk1JcXPS.js";import"./useFocusRing-CT1maULe.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-BCyoy2Gl.js";import"./FocusScope-jamPpPQB.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-cynug30a.js";import"./context-BQrxIDoz.js";import"./useSelector-CsJYK-4v.js";import"./Action-BLvIsTIa.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-B6hDZZIl.js";import"./IconWarning-Drpj9upb.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-DIvY8hzH.js";import"./SelectionManager-CSNpQkfm.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-C99EnWuo.js";import"./Button-BuU2L9Cz.js";import"./LoadingSpinner-CgFD_RmC.js";import"./Button-DzOzTnc5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Tooltip-sHY9_Ooe.js";import"./Badge-B_j9YwT8.js";import"./SearchField-Cv8HXCrS.js";import"./FormField.module-CKZU4edO.js";import"./Form-CFqSiCG4.js";import"./Group-Dr4YRPqC.js";import"./Input-BU2DXs_Z.js";import"./useTextField-CgMYlC-t.js";import"./useFormReset-BmVKDtZT.js";import"./Section-Dpiuksy_.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-RnWQrt9M.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-BHmeiF-W.js";import"./useListState-Bp8J2-3a.js";import"./Table-BLlevkao.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-BnqfHBk6.js";import"./IllustratedMessage-CuDL_gxb.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-DRNdqyJ1.js";import"./AlertBadge-DPc3YlKv.js";import"./AlertIcon-DY22CKC1.js";const Ke={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
