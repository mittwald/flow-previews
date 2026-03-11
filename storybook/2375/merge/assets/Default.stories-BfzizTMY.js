import{j as e,r as T}from"./iframe-C0EFV5oe.js";import{T as p,a as r,b as t}from"./Tab-BU6peJnQ.js";import{S as d}from"./Section-DIrXzFYU.js";import{H as h}from"./Heading-CZ1StJHC.js";import{T as b}from"./Text-DOyzWtc3.js";import{T as g}from"./TextField-DSp4wrku.js";import{L as x}from"./Label-Ca7Q5rd0.js";import{L as u}from"./LabeledValue-C6tH-_V0.js";import{S as j}from"./Switch-CGDsTKBH.js";import{H as S}from"./Header-L0KXF5X7.js";import{A as f}from"./AlertIcon-C23FUlLu.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DYluwTXq.js";import"./index-a1BVMwGa.js";import"./clsx-B-dksMZM.js";import"./index-CT8mMXvE.js";import"./useRef-U_kF6P4I.js";import"./Button-BqN-Pb_Z.js";import"./IconWarning-Xp-mdAXG.js";import"./remote-CJHR20lz.js";import"./LoadingSpinner-AXwRYWdI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./Button-DHla6nGC.js";import"./utils-BH6nMpvt.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-KZK5hlL_.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./ContextMenuTriggerView-DuzLYqod.js";import"./ContextMenuTrigger-RXQqOYFx.js";import"./OverlayTrigger-Dw0FnMHR.js";import"./Dialog-DJ2-3VRx.js";import"./RSPContexts-DN9Cbb61.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./Text-BncBp0aM.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./OverlayContextProvider-CfXne1yD.js";import"./ContextMenuView-B3zaKaWS.js";import"./MenuItem-DOcffqKI.js";import"./ActionBatch-BKp4oeCQ.js";import"./browser-yoNZwNd3.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./dynamic-DNPsW2Gv.js";import"./ContextMenuSection-CeWW7BcO.js";import"./Popover-CLY6HSe2.js";import"./Activity-C9xwGYQs.js";import"./inertValue-DH4Bh9cc.js";import"./useHasTabbableChild-BC1u2InW.js";import"./useSingleSelectListState-CI3NO4F6.js";import"./useListState-DHIe68ZD.js";import"./Heading-B3GE8mEs.js";import"./EmulatedBoldText-12IhiA7q.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./useFieldComponent-Becw-9Qv.js";import"./FieldDescription-CAwmr8EY.js";import"./TextField-BnbwKeD9.js";import"./FieldError-nKMDp4j0.js";import"./Form-3Jlnd_L4.js";import"./Group-Dyn9y5wI.js";import"./Input-CtJ2Z6MU.js";import"./useTextField-B-A7vPtw.js";import"./useFormReset-D0RWbzMx.js";import"./useFormValidation-CCqKlLu6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-exBklheb.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const $e=["Default","SmallSpace","Controlled","WithLinks"];export{n as Controlled,a as Default,s as SmallSpace,m as WithLinks,$e as __namedExportsOrder,Ze as default};
