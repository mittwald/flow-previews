import{R as t}from"./index-Cs7sjTYM.js";import{H as T}from"./Heading-DXQat-_P.js";import{T as E}from"./Text-6OT40gm7.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-D4w_MmMU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-CTC1x3gN.js";import"./index-Cf-03bMR.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./utils-Cd8r7pc9.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./ContextMenuTrigger-D-mX8wcs.js";import"./ContextMenu.module-68N5lvfm.js";import"./Popover-d71i4n1l.js";import"./OverlayTrigger-DWdVVjpE.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useFocusRing-DdBFev_0.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-BiUpVy3m.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-JxDhhupy.js";import"./useSelector-CrifC7Fx.js";import"./Action-Bw9Ih94q.js";import"./getActionGroupSlot-CY5IcNNh.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BG2IZhQp.js";import"./IconWarning-Dmv8qbk6.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";import"./Separator-ZOqStrt8.js";import"./useMenuTrigger-CjPyoGs-.js";import"./SelectionManager-CstbXOPk.js";import"./useEvent-BjqsPY1I.js";import"./useCollator-tPR4bsZ_.js";import"./useFocusable-GQF4xS8_.js";import"./Button-DbgZGKn4.js";import"./LoadingSpinner-D9w3BXQq.js";import"./Button-CROQF3YN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Tooltip-_4UcUZwa.js";import"./Badge-Y-u6CEhZ.js";import"./SearchField-BkMjxHro.js";import"./FormField.module-B5jO-vv2.js";import"./Form-CDVAwZBo.js";import"./Group-1uS31LKS.js";import"./Input-zQ88cEWx.js";import"./useTextField-BFt9_4PS.js";import"./useFormReset-BmVKDtZT.js";import"./Section-oUMypNfT.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./Avatar-Ds02C-Y-.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-CPbQ-PYc.js";import"./DragAndDrop-Bssnb-st.js";import"./ListBox-CvtxQpiq.js";import"./useListState-_MSxqlzF.js";import"./Table-DKgNcnkE.js";import"./useUpdateEffect-CBT5oQVW.js";import"./useHasTabbableChild-Cd40yaDl.js";import"./IllustratedMessage-ChVdrkwK.js";import"./Skeleton-815pubIr.js";import"./ActionGroup-h997A0LY.js";import"./AlertBadge-CGtJX2jp.js";import"./AlertIcon-BrGrOyH4.js";const Qe={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=m.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Ue=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,Ue as __namedExportsOrder,Qe as default};
