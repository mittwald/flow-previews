import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{H as x}from"./Heading-DM8gHvTp.js";import{T}from"./Text-CuR7qYwD.js";import{m as h,t as d,R as L,u as c,L as j}from"./Default.stories-BWBPxjQP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-ghCXY_.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CzVyYWZn.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-PTaPc_Ci.js";import"./ContextMenuContent-drofuQtB.js";import"./ContextMenuSection-Cfu5tWcF.js";import"./Action-CBGMaTwy.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";import"./getActionGroupSlot-Bf7lgP6T.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B_fESGfq.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./OverlayArrow-3nCN3lnL.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Popover-BwD9kQFq.js";import"./MenuTrigger-YQWMfric.js";import"./DialogTriggerView-BZmxzAcU.js";import"./IconApp-vAs-LrT2.js";import"./IconWarning-DIwIHW1V.js";import"./Switch-C8OuiWvy.js";import"./Label-_wcwLnA8.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./ButtonView-D0tYZoRi.js";import"./Button-Cnaf0Ria.js";import"./LoadingSpinner-D9XbF_eS.js";import"./Tooltip-CHaj2NP4.js";import"./Badge-Ctyd23oX.js";import"./SearchField-BwOIDrWX.js";import"./FieldError-DQ-SI-Q3.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Group-Df3SyVuJ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./IllustratedMessage-Di7jxhr2.js";import"./DragAndDrop-CvXJIw9w.js";import"./ListBox-BVqDxyM5.js";import"./useListState-YiQIo-bF.js";import"./Table-C97m7sbZ.js";import"./SkeletonText-iV6GVzrR.js";import"./useUpdateEffect-Bw-e1fiu.js";import"./useHasTabbableChild-5OHQREjG.js";import"./Section-_hmbPKgP.js";import"./Avatar-Cl2NyNYk.js";import"./react-children-utilities-fm2cgFnI.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-DC0hmluT.js";import"./ActionGroup-CE92BbTj.js";import"./AlertBadge-CGl0zaMQ.js";import"./AlertIcon-Ca7UfD4G.js";import"./Content-Dcl2F0_Z.js";const Zt={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=d();return e.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[e.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.jsx(t.Item,{textValue:i=>i.name,children:i=>e.jsx(L,{children:()=>{const u=c(b,[i.name]);return e.jsxs(j,{children:[e.jsx(x,{children:i.name}),e.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=d();return e.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[e.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.jsxs(t.Table,{children:[e.jsxs(t.TableHeader,{children:[e.jsx(t.TableColumn,{children:"Name"}),e.jsx(t.TableColumn,{children:"Email"})]}),e.jsx(t.TableBody,{children:e.jsxs(t.TableRow,{children:[e.jsx(t.TableCell,{children:i=>i.name}),e.jsx(t.TableCell,{children:i=>e.jsx(L,{children:()=>c(b,[i.name])})})]})})]})]})}};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var s,p,l;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=m.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const te=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,te as __namedExportsOrder,Zt as default};
