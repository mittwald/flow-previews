import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{H as x}from"./Heading-BMYuovKK.js";import{T}from"./Text-0kfk3I9S.js";import{m as h,t as d,R as L,u as c,L as j}from"./Default.stories-j7bUNhl2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./Heading-DvhEJaoD.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CoJ4Pv5P.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-CZDyhmV-.js";import"./ContextMenuContent-BkFlb66r.js";import"./ContextMenuSection-DIi_ga2o.js";import"./Action-CBGMaTwy.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";import"./getActionGroupSlot-Bf7lgP6T.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Dv5UhFoB.js";import"./Button-CNfiUnPd.js";import"./ProgressBar-DVTCW4l9.js";import"./Label-CogRznyR.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BAuzoEaO.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-BZLMvQVL.js";import"./OverlayArrow-r6uz-b7H.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-BSANup6i.js";import"./SearchField-ClNjenZO.js";import"./Form-CFR8hFHG.js";import"./Group-B--aSUI3.js";import"./Input-CQEr2Ble.js";import"./useTextField-Ky_TF6kW.js";import"./useFormReset-CilIRCFg.js";import"./TextField-C3MHW-0G.js";import"./SelectionManager-CPBFXyQE.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Popover-BCw_JhSW.js";import"./MenuTrigger-BuIzu3H_.js";import"./DialogTriggerView-BknCs3BK.js";import"./IconApp-vAs-LrT2.js";import"./IconWarning-DIwIHW1V.js";import"./Switch-CTR0X8it.js";import"./Label-vcyG9Kja.js";import"./useToggleState-DZNedwC8.js";import"./ButtonView-D3DZ4I1M.js";import"./Button-6wFsZZeU.js";import"./LoadingSpinner-D9XbF_eS.js";import"./Tooltip-LxcPyLcH.js";import"./Badge-CjYE1yqa.js";import"./SearchField-kSyoJfRR.js";import"./FieldError-CQ9RqGuN.js";import"./IllustratedMessage-Di7jxhr2.js";import"./DragAndDrop-CvXJIw9w.js";import"./ListBox-VUcCSbTX.js";import"./useListState-DbLIYnpB.js";import"./Table-D5x9mtAs.js";import"./SkeletonText-iV6GVzrR.js";import"./useUpdateEffect-Bw-e1fiu.js";import"./useHasTabbableChild-5OHQREjG.js";import"./Section-zA0qdTJg.js";import"./Avatar-Dzj1n6OQ.js";import"./react-children-utilities-fm2cgFnI.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-DC0hmluT.js";import"./ActionGroup-CE92BbTj.js";import"./AlertBadge-CTk_4euc.js";import"./AlertIcon-Ca7UfD4G.js";import"./Content-Dcl2F0_Z.js";const ti={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=d();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(L,{children:()=>{const u=c(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=d();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(L,{children:()=>c(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,p,l;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=m.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const ii=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,ii as __namedExportsOrder,ti as default};
