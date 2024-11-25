import{R as e}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-CMLTAaNQ.js";import{T as E}from"./Text-CcFqEq5L.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-7U_xO9Qe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-BPUkT_mI.js";import"./index-Cf-03bMR.js";import"./Heading-BTLVh75U.js";import"./RSPContexts-BseA8goh.js";import"./utils-BFFU14Eb.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-CpSy2HXY.js";import"./ContextMenuTrigger-DpTBZMjb.js";import"./ContextMenu.module-68N5lvfm.js";import"./Popover-BlzCrk_Z.js";import"./OverlayTrigger-CS8JLNke.js";import"./OverlayArrow-DfSRANAL.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-DKheN8nI.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-Dcn7RY69.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-B3WeE0v4.js";import"./useSelector-B7WwLw1m.js";import"./Action-DgzMjhtB.js";import"./getActionGroupSlot-Bj26VJcY.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-CHbYnbLr.js";import"./IconWarning-DXJUFqJH.js";import"./deepHas-C3achdHB.js";import"./react-children-utilities-CdZndyK3.js";import"./Avatar-BDkTJkOx.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-FsUjFut0.js";import"./Separator-CXlA5nwI.js";import"./useMenuTrigger-BBl0-pBT.js";import"./SelectionManager-BkcLa_O0.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-Dv7TsfPg.js";import"./Button-N_hBXId1.js";import"./LoadingSpinner-VvlSDj-i.js";import"./Button-qrG_K1uY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Tooltip-Cr5XU5-1.js";import"./Badge-DsVEUmQx.js";import"./SearchField-BU8yaYzy.js";import"./FormField.module-BjavWBnU.js";import"./FieldError-esCwSIkI.js";import"./Form-zKDPw3tU.js";import"./Group-DEv4GSfj.js";import"./Input-DNKlg4fK.js";import"./useTextField-D9tZfykM.js";import"./useFormReset-BmVKDtZT.js";import"./Section-BYUl0gHB.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-ByBzoyk8.js";import"./useListState-BjbSXNdT.js";import"./Table-BEW9aoX2.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-BuSBJjDH.js";import"./IllustratedMessage-ChVdrkwK.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-CqaE-Qvx.js";import"./AlertBadge-Ce9G34-N.js";import"./AlertIcon-_cDK3B-u.js";import"./Content-CiuY8azI.js";const Wt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
