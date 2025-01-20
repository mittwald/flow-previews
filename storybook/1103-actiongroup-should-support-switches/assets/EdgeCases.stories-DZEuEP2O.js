import{R as e}from"./index-B-o1Wr-g.js";import{H as T}from"./Heading-BCzqphXr.js";import{T as E}from"./Text-BbMAz8xA.js";import{m as g,R as c,u as L,V as C,t as u}from"./Default.stories-BJZTljh9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./Heading-CrY40Q5a.js";import"./RSPContexts-BT50PPhj.js";import"./utils-7gTBvjqH.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-R-rrVGxo.js";import"./ContextMenuTrigger-Czgw765s.js";import"./ContextMenuSection-BrbuS3OG.js";import"./Action-nwH1LYxm.js";import"./context-HWij4CCA.js";import"./useSelector-iQqgW7gO.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-ugMEkBXT.js";import"./Button-CFfO75lD.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Popover-DJI0CRYC.js";import"./OverlayTrigger-DBMCsseW.js";import"./IconApp--rto3B0B.js";import"./IconWarning-C7RtCnUV.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./Avatar-D_KFb-03.js";import"./Initials-DV3qKvQK.js";import"./Switch-Y_e2UPNf.js";import"./Label-_TQx26eL.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Button-DuasRi_t.js";import"./LoadingSpinner-D3THsmJZ.js";import"./Tooltip-BTyBnpIw.js";import"./Badge-CHb8l864.js";import"./SearchField-DvQzinU9.js";import"./FieldError-LYy7OxxH.js";import"./FieldError-Dc7wTCBj.js";import"./Form-CS2x0aS5.js";import"./Group-BaWKqaXG.js";import"./Input-In3k7nSs.js";import"./useTextField-BGTL6xBV.js";import"./Section-Gc3v0DWm.js";import"./datetime-nQE3q1jc.js";import"./SkeletonText-Cbdt4GA-.js";import"./DragAndDrop-1_tMLeAb.js";import"./ListBox-D2IBOBf-.js";import"./useListState-DEKbwa90.js";import"./Table-BhmKMvRr.js";import"./useUpdateEffect-D5ZsYDSi.js";import"./useHasTabbableChild-Cm5gK5Hj.js";import"./IllustratedMessage-BBTX4c47.js";import"./Skeleton-DK4V2SVs.js";import"./ActionGroup-CZsS-Kfo.js";import"./AlertBadge-BsVZcKSt.js";import"./AlertIcon-hqV0yrG9.js";import"./Content-BRrO9N7C.js";const Yt={...g,title:"Structure/List/Edge Cases"},w=()=>new Promise(t=>window.setTimeout(t,2e3)),d=async t=>(await w(),`${t}@info.de`),r={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Item,{textValue:i=>i.name},i=>e.createElement(c,null,()=>{const b=L(d,[i.name]);return e.createElement(C,null,e.createElement(T,null,i.name),e.createElement(E,null,b))})))}},m={render:()=>{const t=u();return e.createElement(t.List,{batchSize:5,"aria-label":"List",defaultViewMode:"table"},e.createElement(t.StaticData,{data:[{name:"John"},{name:"Max"}]}),e.createElement(t.Table,null,e.createElement(t.TableHeader,null,e.createElement(t.TableColumn,null,"Name"),e.createElement(t.TableColumn,null,"Email")),e.createElement(t.TableBody,null,e.createElement(t.TableRow,null,e.createElement(t.TableCell,null,i=>i.name),e.createElement(t.TableCell,null,i=>e.createElement(c,null,()=>L(d,[i.name])))))))}};var a,n,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
