import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{H as B}from"./Heading-BIv8ovv2.js";import{T as x}from"./Text-C9p5wZii.js";import{m as j,t as r,R as g,u as h,L as C}from"./Default.stories-Cf7Bsnvf.js";import{A as I}from"./Avatar-D7UpMjbI.js";import{I as w}from"./Initials-BXNvCx_s.js";import{C as a}from"./Content-Cz10wlrx.js";import{C as V,M}from"./ContextMenuContent-BJM8j8b9.js";import"./ContextMenuSection-CZkT5tzv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6bHOsmH.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CzVyYWZn.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-PTaPc_Ci.js";import"./IconApp-B-TnySLn.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./ButtonView-oEQV1DgX.js";import"./Button-BDlP74xq.js";import"./IconWarning-BB1u60Fs.js";import"./LoadingSpinner-DU9wsl3-.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./Tooltip-D1bGwq0W.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Badge-BcCpHl_S.js";import"./context-Z26u4tY9.js";import"./useStatic-BHWj4WSG.js";import"./SearchField-DmkfoYV3.js";import"./FieldError-VFT6O44b.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Group-Df3SyVuJ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./useFormReset-CilIRCFg.js";import"./IllustratedMessage-DXX3PoaD.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./DragAndDrop-CvXJIw9w.js";import"./ListBox-CC2Hg4MK.js";import"./Dialog-BV8uMRwe.js";import"./Separator-DNY_h6GP.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./useListState-YiQIo-bF.js";import"./Table-Dh2XaqIS.js";import"./SkeletonText-iV6GVzrR.js";import"./useUpdateEffect-Bw-e1fiu.js";import"./useHasTabbableChild-5OHQREjG.js";import"./dynamic-DKDa4OpU.js";import"./Section-3nLNVgY1.js";import"./datetime-CJSQP4eG.js";import"./Skeleton-DC0hmluT.js";import"./react-children-utilities-fm2cgFnI.js";import"./ActionGroup-BTtZWeGd.js";import"./getActionGroupSlot-BQuzfC4b.js";import"./AlertBadge-CQNLYYaD.js";import"./AlertIcon-CUY25IYE.js";import"./onlyText-DBswRDk6.js";import"./Popover-CQ23e3r3.js";import"./MenuTrigger-FnRKsl8n.js";import"./DialogTriggerView-CFUMUlaO.js";import"./Action-BrQvp_5i.js";import"./Switch-CXPUIRPM.js";import"./Label-Cn-E9sJO.js";import"./useToggleState-B7W1plhv.js";const lo={...j,title:"Structure/List/Edge Cases"},f=()=>new Promise(o=>window.setTimeout(o,2e3)),S=async o=>(await f(),`${o}@info.de`),i={render:()=>{const o=r();return t.jsxs(o.List,{batchSize:5,"aria-label":"List",children:[t.jsx(o.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsx(o.Item,{textValue:e=>e.name,children:e=>t.jsx(g,{children:()=>{const H=h(S,[e.name]);return t.jsxs(C,{children:[t.jsx(B,{children:e.name}),t.jsx(x,{children:H})]})}})})]})}},n={render:()=>{const o=r();return t.jsxs(o.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table",children:[t.jsx(o.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.jsxs(o.Table,{children:[t.jsxs(o.TableHeader,{children:[t.jsx(o.TableColumn,{children:"Name"}),t.jsx(o.TableColumn,{children:"Email"})]}),t.jsx(o.TableBody,{children:t.jsxs(o.TableRow,{children:[t.jsx(o.TableCell,{children:e=>e.name}),t.jsx(o.TableCell,{children:e=>t.jsx(g,{children:()=>h(S,[e.name])})})]})})]})]})}},m={render:()=>{const o=r();return t.jsxs(o.List,{children:[t.jsx(o.StaticData,{data:[{name:"John Doe"}]}),t.jsx(o.Item,{showTiles:!0,textValue:e=>e.name,children:e=>t.jsxs(o.ItemView,{children:[t.jsx(I,{children:t.jsx(w,{children:e.name})}),t.jsx(B,{children:"HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading"}),t.jsx(x,{children:"SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle"}),t.jsx(a,{slot:"top",children:"TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop"}),t.jsx(a,{slot:"bottom",children:"BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom"}),t.jsx(V,{children:t.jsx(M,{children:"Show details"})})]})})]})}};var p,s,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var T,d,u;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,L,b;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const List = typedList<{
      name: string;
    }>();
    return <List.List>
        <List.StaticData data={[{
        name: "John Doe"
      }]} />
        <List.Item showTiles textValue={user => user.name}>
          {user => <List.ItemView>
              <Avatar>
                <Initials>{user.name}</Initials>
              </Avatar>
              <Heading>
                HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading
              </Heading>
              <Text>
                SubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitleSubtitle
              </Text>
              <Content slot="top">
                TopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTopTop
              </Content>
              <Content slot="bottom">
                BottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottomBottom
              </Content>
              <ContextMenu>
                <MenuItem>Show details</MenuItem>
              </ContextMenu>
            </List.ItemView>}
        </List.Item>
      </List.List>;
  }
}`,...(b=(L=m.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};const To=["LoadingListItem","LoadingTableCell","VeryLongWords"];export{i as LoadingListItem,n as LoadingTableCell,m as VeryLongWords,To as __namedExportsOrder,lo as default};
