import{R as e}from"./index-BbMBc-iG.js";import{H as T}from"./Heading-CHAikoJ1.js";import{T as E}from"./Text-D6naXSDy.js";import{m as g,R as c,u as L,L as C,t as u}from"./Default.stories-CQznpGuz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./Heading-B6bd_0m7.js";import"./RSPContexts-CBHfX6hb.js";import"./utils-D4Vol65q.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Wrap-DQq6jo70.js";import"./Text-oWh285ma.js";import"./Button-1rw05oyV.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./LoadingSpinner-y4xqeSCe.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./ContextMenuTrigger-DFU0zoLP.js";import"./ContextMenuSection-DFUgacLZ.js";import"./Action-CReouxgX.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./getActionGroupSlot-CHxkKRmy.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BQ_biHhV.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Popover-DvsbnfGF.js";import"./OverlayTrigger-CO8vF-4q.js";import"./deepHas-C0IqBpIg.js";import"./Avatar-T7Wd9gSX.js";import"./Initials-wFfzWFw7.js";import"./Switch-C8osrdRd.js";import"./Label-D6uleru1.js";import"./useToggleState-DBTCyXsQ.js";import"./useFormReset-BIr5_auz.js";import"./useViewComponents-DfxsYA-o.js";import"./SearchField-BJQNguzt.js";import"./FieldError-Bxt0_Hqg.js";import"./FieldError-0S5lF-We.js";import"./Form-4lWAVKAg.js";import"./Group-CfJOOjBS.js";import"./Input-CLGBDd3-.js";import"./useTextField-CI6MibmE.js";import"./Badge-DoOs09mV.js";import"./Tooltip-DKnmyx6T.js";import"./Skeleton-pD3S1q8N.js";import"./datetime-CJSQP4eG.js";import"./ActionGroup-h4TxZ6ye.js";import"./SkeletonText-C5ZVKxQb.js";import"./DragAndDrop-B4RJ-jxl.js";import"./ListBox-B-V7j8Nh.js";import"./useListState-CvnwkDin.js";import"./useGridSelectionCheckbox-hsXRMd69.js";import"./useUpdateEffect-B3cyeDuJ.js";import"./useHasTabbableChild-DruXNIeA.js";import"./AlertBadge-N-1nEAZt.js";import"./AlertIcon-DS_AuS91.js";import"./Section-BDrutyMv.js";import"./Content-BbJKCc-f.js";const Yt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(p=m.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Zt=["LoadingListItem","LoadingTableCell"];export{r as LoadingListItem,m as LoadingTableCell,Zt as __namedExportsOrder,Yt as default};
