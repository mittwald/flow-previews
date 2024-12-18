import{R as t}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-DQ0-u3p0.js";import{T as E}from"./Text-CemaETXH.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BZiCU9YS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./Heading--STTcIhS.js";import"./RSPContexts-BT50PPhj.js";import"./utils-CCebJm36.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";import"./ContextMenuTrigger-Dd1rQiyS.js";import"./ContextMenu.module-BvB90UqG.js";import"./Popover-Dkn9UvSj.js";import"./OverlayTrigger-Cbeayf9A.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-BMY-498z.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./Action-lrZohdE4.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./dynamic-DKDa4OpU.js";import"./IconApp--rto3B0B.js";import"./IconWarning--ZE28x2f.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-DYcKUwtg.js";import"./Initials-DV3qKvQK.js";import"./Button-yJDb9wt-.js";import"./LoadingSpinner-DOxxHnS_.js";import"./Tooltip-zyFT3NFh.js";import"./Badge-C6abIQCX.js";import"./SearchField-Cy1uPrYM.js";import"./FieldError-D3X6B0S8.js";import"./FieldError-CjNivrvv.js";import"./Form-B_VAMaUE.js";import"./Group-CFRZOSwE.js";import"./Input-IHjXEmTc.js";import"./useTextField-EYrZGk_G.js";import"./useFormReset-DMREOE0P.js";import"./Section-68GItabA.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Cbdt4GA-.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-Dj9QjQVx.js";import"./useListState-DEKbwa90.js";import"./Table-G9NsOtwN.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-Cm5gK5Hj.js";import"./IllustratedMessage-BBTX4c47.js";import"./Skeleton-DK4V2SVs.js";import"./ActionGroup-B843AYgo.js";import"./AlertBadge-C9IHOtiL.js";import"./AlertIcon-qAUSmr7W.js";import"./Content-BRrO9N7C.js";const Qe={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
