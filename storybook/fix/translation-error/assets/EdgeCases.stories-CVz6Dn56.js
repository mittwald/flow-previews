import{R as e}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-BDRONVjZ.js";import{T as E}from"./Text-9mML8Z29.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-DFxXyhLM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-Bz6Io0hO.js";import"./index-DolzVqEf.js";import"./Heading-CrY40Q5a.js";import"./RSPContexts-BT50PPhj.js";import"./utils-7gTBvjqH.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-R-rrVGxo.js";import"./ContextMenuTrigger-ClqxF6cj.js";import"./ContextMenuSection-DgaHCvky.js";import"./Action-v-b0G_7k.js";import"./context-CtwQP4Yz.js";import"./useSelector-Cb4sc2b-.js";import"./getActionGroupSlot-DVGp_tC1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-c-LuvZOJ.js";import"./Button-fHRiK0T5.js";import"./ProgressBar--OmPGqUT.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./LocalizedStringFormatter-CmF9aEqk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-BOhYx5Zc.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-DqnCEupG.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-4-Cqn2dG.js";import"./useLocalizedStringFormatter-CnnmkqmM.js";import"./VisuallyHidden-lWpahT0S.js";import"./Popover-BcQ76VWp.js";import"./OverlayTrigger-K_SGs4A-.js";import"./IconApp-3W3XzCjg.js";import"./IconWarning-DPCXsjOp.js";import"./Switch-DBx8o3n1.js";import"./Label-YqoRtSRe.js";import"./useLocalizedStringFormatter-D9stqqmU.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Button-BdwkYmUJ.js";import"./LoadingSpinner-DrWRflEB.js";import"./Tooltip--T3t86jQ.js";import"./Badge-DfIusHwT.js";import"./SearchField-KQiPHT_H.js";import"./FieldError-Cn7Cn3Rk.js";import"./FieldError-Dc7wTCBj.js";import"./Form-CS2x0aS5.js";import"./Group-BaWKqaXG.js";import"./Input-In3k7nSs.js";import"./useTextField-BGTL6xBV.js";import"./Section-BmlPpaYP.js";import"./Avatar-Bl9Q2YEB.js";import"./react-children-utilities-xgYgah_I.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Cbdt4GA-.js";import"./Skeleton-DK4V2SVs.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-CN6NBuIi.js";import"./useListState-ChnTMiod.js";import"./Table-DvKhoYjc.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-B8VLEUtQ.js";import"./IllustratedMessage-BBTX4c47.js";import"./ActionGroup-DJwZ8gTJ.js";import"./AlertBadge-DubZYu8s.js";import"./AlertIcon-RcpfUgke.js";import"./Content-Cg8Hfq9T.js";const Yt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
