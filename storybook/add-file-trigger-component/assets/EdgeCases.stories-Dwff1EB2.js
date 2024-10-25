import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-i4QpT3vc.js";import{T as E}from"./Text-DZmFXo-e.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BwW9AlnX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./Heading-Ys7-2L7-.js";import"./RSPContexts-BseA8goh.js";import"./utils-GKDLJ2vO.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-DP1y2Dk0.js";import"./ContextMenuTrigger-CkxmI6AN.js";import"./ContextMenu.module-68N5lvfm.js";import"./Popover-ClYLtDjh.js";import"./OverlayTrigger-CuDFj76r.js";import"./OverlayArrow-HdKIwz3h.js";import"./useFocusRing-Cx5sZpw_.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./PressResponder-Bhz1UQIJ.js";import"./usePress-IYK5Xs6I.js";import"./FocusScope-Dq1DdGw4.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-sPIK_yL0.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./Action-DQr6rgUQ.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-DoqSRZU1.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-BWLNclCp.js";import"./Separator-Cpniaoiw.js";import"./useMenuTrigger-Bu3ZT3TV.js";import"./SelectionManager-DqE4UxeO.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-BZB42ELj.js";import"./Button-Bq7y9BIZ.js";import"./LoadingSpinner-9k8jsvZY.js";import"./Button-CB57Q0FS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Tooltip-BJpknyN-.js";import"./Badge-Cxnl61ta.js";import"./SearchField-DnApuUOk.js";import"./FormField.module-CjJo_njJ.js";import"./Form-VOSHarlK.js";import"./Group-BfTAaObX.js";import"./Input-Bgn03Bkw.js";import"./useTextField-CXFORGy2.js";import"./useFormReset-BmVKDtZT.js";import"./Section-BIykth8T.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-Bjpgb9nt.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-4OZGf8Ft.js";import"./useListState-oXDegA_A.js";import"./Table-BlwuhXvM.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-Du7Oqx8Y.js";import"./IllustratedMessage-CbVa821d.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-BFxZDqF9.js";import"./AlertBadge-DQbxkprs.js";import"./AlertIcon-t7ZrfOSf.js";const Ue={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
