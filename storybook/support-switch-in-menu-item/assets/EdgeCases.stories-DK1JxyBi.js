import{R as e}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-Bn-Oekdv.js";import{T as E}from"./Text-B5qFq-QV.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BO-6VPIl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./flowComponent-D6-TVbjo.js";import"./index-DolzVqEf.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./utils-CCebJm36.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";import"./ContextMenuTrigger-Bg0_JxwX.js";import"./ContextMenuSection-RdtjpN41.js";import"./Dialog-EQBJGkcZ.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-D4kl22nw.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Popover-BYm3kTYN.js";import"./OverlayTrigger-BHiTqCiL.js";import"./context-Rc-flGIq.js";import"./useSelector-D83Ddg6S.js";import"./Action-B-qRylWW.js";import"./getActionGroupSlot-KvD6pyGF.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BTi5eST8.js";import"./IconWarning-SZWhHkK8.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-otkdn0iw.js";import"./Switch-BUuNrswy.js";import"./Label-DmbcA-Bx.js";import"./useToggleState-93Gd9adu.js";import"./useFormReset-DMREOE0P.js";import"./Button-etkQvGL4.js";import"./LoadingSpinner-CIgU99E1.js";import"./Tooltip-zyFT3NFh.js";import"./Badge-Dxb13rM1.js";import"./SearchField-DGVxiB4D.js";import"./FieldError-DgU_pPIL.js";import"./FieldError-CjNivrvv.js";import"./Form-B_VAMaUE.js";import"./Group-CFRZOSwE.js";import"./Input-IHjXEmTc.js";import"./useTextField-EYrZGk_G.js";import"./Section-CvPnNY7d.js";import"./getContainerBreakpointSizeClassName-BiU6pQS0.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Ose8LdXh.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-DYVV_XWq.js";import"./useListState-DEKbwa90.js";import"./Table-DjQAFzeD.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-Cm5gK5Hj.js";import"./IllustratedMessage-9Ckun8Pv.js";import"./Skeleton-DAM5ch2x.js";import"./ActionGroup-CLZ7q9Sr.js";import"./AlertBadge-Cm0FFHBG.js";import"./AlertIcon-Cv6XP_zv.js";import"./Content-DnB3Z0p2.js";const Xt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,p,s;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(p=m.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Yt=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,Yt as __namedExportsOrder,Xt as default};
