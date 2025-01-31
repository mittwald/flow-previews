import{R as t}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-rySez9yQ.js";import{T as E}from"./Text-CfBSLtU1.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-DqTwP8J7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CEd0CzY8.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./Heading-CrY40Q5a.js";import"./RSPContexts-BT50PPhj.js";import"./utils-7gTBvjqH.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-R-rrVGxo.js";import"./ContextMenuTrigger-LEXA6MAp.js";import"./ContextMenuSection-FLGJ9GkN.js";import"./Action-DD0yWxWh.js";import"./context-DNWWeKK1.js";import"./useSelector-CuklJFny.js";import"./getActionGroupSlot-DMWUfgla.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CbvlC6bd.js";import"./Button-CPCoFgob.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-ubMUrr_P.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Popover-BxueAwcM.js";import"./OverlayTrigger-ruXfHWGY.js";import"./IconApp-DFPpgbjh.js";import"./IconWarning-DuhRJDTQ.js";import"./Switch-Be6LEesi.js";import"./Label-BKef3zLG.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Button-D9HNWnpO.js";import"./LoadingSpinner-Dsqn1kxI.js";import"./Tooltip-BTyBnpIw.js";import"./Badge-Dep6mhH5.js";import"./SearchField-n7CkttFO.js";import"./FieldError-DF-Z85M3.js";import"./FieldError-Dc7wTCBj.js";import"./Form-CS2x0aS5.js";import"./Group-BaWKqaXG.js";import"./Input-In3k7nSs.js";import"./useTextField-BGTL6xBV.js";import"./Section-DZ3KmiaD.js";import"./Avatar-BP8PWysM.js";import"./react-children-utilities-xgYgah_I.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Cbdt4GA-.js";import"./Skeleton-DK4V2SVs.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-CmfBBDH0.js";import"./useListState-g-qjOc9K.js";import"./Table-rUPFt9bs.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-B8VLEUtQ.js";import"./IllustratedMessage-BwWChZV8.js";import"./ActionGroup-B4wWjge6.js";import"./AlertBadge-DH6ntmWT.js";import"./AlertIcon-OWkwAWNi.js";import"./Content-Di7UU2PA.js";const Ue={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(e=>window.setTimeout(e,2e3)),d=async e=>(await w(),`${e}@info.de`),r={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Item,{textValue:i=>i.name},i=>t.createElement(c,null,()=>{const b=L(d,[i.name]);return t.createElement(C,null,t.createElement(T,null,i.name),t.createElement(E,null,b))})))}},m={render:()=>{const e=u();return t.createElement(e.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},t.createElement(e.StaticData,{data:[{name:"John"},{name:"Max"}]}),t.createElement(e.Table,null,t.createElement(e.TableHeader,null,t.createElement(e.TableColumn,null,"Name"),t.createElement(e.TableColumn,null,"Email")),t.createElement(e.TableBody,null,t.createElement(e.TableRow,null,t.createElement(e.TableCell,null,i=>i.name),t.createElement(e.TableCell,null,i=>t.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
