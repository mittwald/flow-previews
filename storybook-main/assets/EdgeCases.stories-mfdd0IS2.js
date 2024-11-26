import{R as e}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-DZV50dxJ.js";import{T as E}from"./Text-Kq1Uppf8.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-Dkq00cyA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-ioG1zo33.js";import"./index-Cf-03bMR.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./ContextMenuTrigger-0k7V8tMP.js";import"./ContextMenu.module-68N5lvfm.js";import"./Popover-DkK9p4JA.js";import"./OverlayTrigger-BpSxnOsX.js";import"./OverlayArrow-BrbzJDKz.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Dcn7RY69.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-Cfdsb8D2.js";import"./useSelector-CFdl5cbA.js";import"./Action-Dto-FCwm.js";import"./getActionGroupSlot-B_XxGEdc.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-Dl7D1yMd.js";import"./IconWarning-D0l2tnhs.js";import"./deepHas-C3achdHB.js";import"./react-children-utilities-CdZndyK3.js";import"./Avatar-C3nnJ_Ko.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-C6m_oYu1.js";import"./SelectionManager-BkcLa_O0.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-CKybZYMg.js";import"./Button-BIP8WbnA.js";import"./LoadingSpinner-OWwH84Wh.js";import"./Button-DKDQv6qd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Tooltip-CoEnvxI3.js";import"./Badge-9mtiCx29.js";import"./SearchField-DB_4ZVQy.js";import"./FormField.module-DzMLDcfr.js";import"./FieldError-C27s8X8S.js";import"./Form-CN49erGr.js";import"./Group-CmUh91Xn.js";import"./Input-DQOx7cuX.js";import"./useTextField-C7hRpfYI.js";import"./useFormReset-BmVKDtZT.js";import"./Section-nWyQx-6T.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-CQzGS96K.js";import"./useListState-BjbSXNdT.js";import"./Table-DZxq-qeZ.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-BuSBJjDH.js";import"./IllustratedMessage-ChVdrkwK.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-BofBf5fj.js";import"./AlertBadge-BdedJ5ve.js";import"./AlertIcon-CQWT7Y1T.js";import"./Content-BaT5-SuQ.js";const Wt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=m.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Xt=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,Xt as __namedExportsOrder,Wt as default};
