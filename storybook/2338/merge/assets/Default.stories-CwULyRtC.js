import{j as e,r as h}from"./iframe-CtEjVB66.js";import{T as s,a as r,b as t}from"./Tab-BEIJ0jJZ.js";import{S as d}from"./Section-B3QlijVL.js";import{H as T}from"./Heading-c1W7e3IT.js";import{T as x}from"./Text-QCKh6xRo.js";import{T as j}from"./TextField-CTAsvyVX.js";import{L as b}from"./Label-CvAjEv-1.js";import{L as u}from"./LabeledValue-COrnk-sL.js";import{S as f}from"./Switch-DFBGVKQx.js";import{H as S}from"./Header-D3vd4AzU.js";import{A as y}from"./AlertIcon-BaGtIfyD.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./useRef-C8PAeYAN.js";import"./Button-BbnjmOHy.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Button-Bk9_EddI.js";import"./utils-BuEQZICT.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./ContextMenuTriggerView-BH2Y4clJ.js";import"./ContextMenuTrigger-Dvm-yCzh.js";import"./OverlayTrigger-B8jwjQmG.js";import"./Dialog-vhqDwDKM.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./Text-1qNOxJF7.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./ContextMenuView-DtjT8utb.js";import"./MenuItem-wH73rdaM.js";import"./ActionBatch-CDzJz977.js";import"./browser-CLHYf5YF.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./ContextMenuSection-COxyh1Te.js";import"./Popover-fmzRw_jU.js";import"./Activity-C_jcRTUZ.js";import"./inertValue-Bd6lDfzL.js";import"./useHasTabbableChild-DVOHiBFU.js";import"./useSingleSelectListState-C_D6qZ3t.js";import"./useListState-D8l5LmqZ.js";import"./Heading-DMz3CQ7g.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./useFieldComponent-B7HNchXP.js";import"./FieldDescription-DOW1EL7Z.js";import"./TextField-uAKnHDmd.js";import"./FieldError-DJZxrTcD.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useTextField-7MsF6vto.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CL5C9z_j.js";const er={title:"Navigation/Tabs",component:s,render:o=>e.jsxs(s,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(y,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(T,{children:"General"}),e.jsx(j,{defaultValue:"example@mittwald.de",children:e.jsx(b,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(T,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(b,{children:"Available storage"}),e.jsx(x,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Spam protection"}),e.jsx(f,{children:"Spam protection"})]}),e.jsx(x,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},n={},m={render:o=>{const[a,i]=h.useState("general");return e.jsxs(s,{...o,selectedKey:a,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},p={render:o=>{const[a,i]=h.useState("general");return h.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(s,{...o,selectedKey:a,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}},l={render:o=>e.jsx(s,{...o,children:Array(20).fill("").map((a,i)=>e.jsxs(r,{children:[e.jsx(t,{children:g.short}),e.jsx(d,{children:e.jsx(x,{children:g.long})})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [selectedKey, setSelectedKey] = useState<Key>("general");
    return <Tabs {...props} selectedKey={selectedKey} onSelectionChange={key => setSelectedKey(key)}>
        <Tab id="general">
          <TabTitle>General</TabTitle>
        </Tab>
        <Tab id="storage">
          <TabTitle>Storage settings</TabTitle>
        </Tab>
      </Tabs>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [tab, setTab] = useState("general");
    useEffect(() => {
      const interval = setInterval(() => {
        setTab(window.location.hash.slice(1));
      }, 100);
      return () => clearInterval(interval);
    }, [setTab]);
    return <Tabs {...props} selectedKey={tab}>
        <Tab id="general">
          <TabTitle href="#general">General</TabTitle>
        </Tab>
        <Tab id="storage">
          <TabTitle href="#storage">Storage settings</TabTitle>
        </Tab>
      </Tabs>;
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      {Array(20).fill("").map((_, index) => <Tab key={index}>
            <TabTitle>{dummyText.short}</TabTitle>
            <Section>
              <Text>{dummyText.long}</Text>
            </Section>
          </Tab>)}
    </Tabs>
}`,...l.parameters?.docs?.source}}};const rr=["Default","Controlled","WithLinks","Collapsed"];export{l as Collapsed,m as Controlled,n as Default,p as WithLinks,rr as __namedExportsOrder,er as default};
