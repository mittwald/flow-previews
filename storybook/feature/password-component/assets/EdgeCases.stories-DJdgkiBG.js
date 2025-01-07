import{R as e}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-5vVsQF4p.js";import{T as E}from"./Text-CzvJ5BXa.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BSAZ2TS4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-Cv5RgLo7.js";import"./index-DolzVqEf.js";import"./Heading-DbTcj_es.js";import"./RSPContexts-BT50PPhj.js";import"./utils-DQkeZTYT.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CFSbYzT7.js";import"./ContextMenuTrigger-CIz1ohr5.js";import"./ContextMenuSection-D9Xu0BHu.js";import"./Action-BDJO7KLT.js";import"./context-CKnOEiAk.js";import"./useSelector-CPwgBGyM.js";import"./getActionGroupSlot-y9AUq0Sq.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-B2ZKBZvY.js";import"./Button-CQNWHC4E.js";import"./ProgressBar-BOrlGNM-.js";import"./Label-DFSCGvPu.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DbryJmtU.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-Dus-MUVG.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-BjdLMd1e.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Popover-BRJNibXf.js";import"./OverlayTrigger-OLo2cOxk.js";import"./IconApp-Dzb5vMVI.js";import"./IconWarning-BzyYKcnD.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-DrUraGEu.js";import"./Initials-jTmMIB7N.js";import"./Switch-NFLBgZZy.js";import"./Label-BVDa8VNw.js";import"./useToggleState-Cmu0RDcv.js";import"./useFormReset-DMREOE0P.js";import"./Button-DozFbJ2r.js";import"./LoadingSpinner-BJ4QNKBa.js";import"./Tooltip-oLIJ2X47.js";import"./Badge-C28VlpId.js";import"./SearchField-D4-7Nuy0.js";import"./FieldError-DaTfvu6k.js";import"./FieldError-L__bJmxV.js";import"./Form-UuEo5mp_.js";import"./Group-C-VYZQoo.js";import"./Input-COpSHOp4.js";import"./useTextField-C5u--GR9.js";import"./Section-C1JBsAFu.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Cbdt4GA-.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-BigLrQug.js";import"./useListState-DEKbwa90.js";import"./Table-BeiVALg6.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-Cm5gK5Hj.js";import"./IllustratedMessage-BBTX4c47.js";import"./Skeleton-DK4V2SVs.js";import"./ActionGroup-DzzSE8U9.js";import"./AlertBadge-CKaiXz0b.js";import"./AlertIcon-DSV46AuP.js";import"./Content-CA3Rkk5c.js";const Yt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
