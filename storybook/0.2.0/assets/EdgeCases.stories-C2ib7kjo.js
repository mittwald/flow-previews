import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{H as x}from"./Heading-Csp-_DUy.js";import{T}from"./Text-BwHAtMVi.js";import{m as h,t as d,R as L,u as c,L as j}from"./Default.stories-CjWhVP-g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnD-oO9S.js";import"./index-IBhSrjl6.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./index-C0qn59OO.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CzVyYWZn.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-PTaPc_Ci.js";import"./ContextMenuContent-HyMFceXl.js";import"./ContextMenuSection-BdYSX6pi.js";import"./Action-DMh-xymt.js";import"./context-DPIhxZmd.js";import"./useStatic-CRo9aToR.js";import"./getActionGroupSlot-Bss6PZo0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-aWU289xm.js";import"./Button-DrJb4gk9.js";import"./ProgressBar-CZau9lss.js";import"./Label-aZfeS6Au.js";import"./Hidden-C5TwESSa.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./OverlayArrow-bn_YbkxG.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-CQ_IbO82.js";import"./CollectionBuilder-DndhQU5l.js";import"./Separator-DkG5lMhT.js";import"./SelectionManager-BkpGC1Gn.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Popover-08eVlGsC.js";import"./MenuTrigger-CgDcxEMY.js";import"./DialogTriggerView-BivZP39j.js";import"./IconApp-Bw6C1rcI.js";import"./IconWarning-CYpqa6CU.js";import"./Switch-4ykQlDek.js";import"./Label-tmENthHg.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./ButtonView-CGmlWjya.js";import"./Button-Bennxrpq.js";import"./LoadingSpinner-By9gTf-N.js";import"./Tooltip-Do6x2lLe.js";import"./Badge-B_B9nfzl.js";import"./SearchField-Dg3xHRBP.js";import"./FieldError-DN68xrtP.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Group-Df3SyVuJ.js";import"./Input-BYbhpFUc.js";import"./useTextField-uM6U_XJE.js";import"./IllustratedMessage-PP6ELqg8.js";import"./DragAndDrop-CvXJIw9w.js";import"./ListBox-ChbN8nns.js";import"./useListState-BHymCKnY.js";import"./Table-Cew9XZSQ.js";import"./SkeletonText-iV6GVzrR.js";import"./useUpdateEffect-Bw-e1fiu.js";import"./useHasTabbableChild-5OHQREjG.js";import"./Section-KaBDrXgb.js";import"./Avatar-D-668H0L.js";import"./react-children-utilities-fm2cgFnI.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-DC0hmluT.js";import"./ActionGroup-DPwAQjnB.js";import"./AlertBadge-CEzIXjIX.js";import"./AlertIcon-C0hcVHEt.js";import"./Content-CRCH2CIc.js";const ti={...h,title:"Structure/List/Edge Cases"},g=()=>new Promise(t=>window.setTimeout(t,2e3)),b=async t=>(await g(),`${t}@info.de`),r={render:()=>{const t=d();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsx(t.Item,{textValue:e=>e.name,children:e=>i.jsx(L,{children:()=>{const u=c(b,[e.name]);return i.jsxs(j,{children:[i.jsx(x,{children:e.name}),i.jsx(T,{children:u})]})}})})]})}},m={render:()=>{const t=d();return i.jsxs(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[i.jsx(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),i.jsxs(t.Table,{children:[i.jsxs(t.TableHeader,{children:[i.jsx(t.TableColumn,{children:"Name"}),i.jsx(t.TableColumn,{children:"Email"})]}),i.jsx(t.TableBody,{children:i.jsxs(t.TableRow,{children:[i.jsx(t.TableCell,{children:e=>e.name}),i.jsx(t.TableCell,{children:e=>i.jsx(L,{children:()=>c(b,[e.name])})})]})})]})]})}};var n,o,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
