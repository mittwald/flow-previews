import{j as e,r as T}from"./iframe-EfPcFfHz.js";import{T as p,a as r,b as t}from"./Tab-N-YygJTq.js";import{S as d}from"./Section-CV61pRu2.js";import{H as h}from"./Heading-D-lxgqSK.js";import{T as b}from"./Text-CRFCcT-P.js";import{T as g}from"./TextField-DYoycKaM.js";import{L as x}from"./Label-DkribH7U.js";import{L as u}from"./LabeledValue-C2kaI1Qk.js";import{S as j}from"./Switch-BRWRrgiA.js";import{H as S}from"./Header-D6I-CAoO.js";import{A as f}from"./AlertIcon-CtDfui7q.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./useRef-ClwNZ3BN.js";import"./Button-wFzIQtGi.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./LoadingSpinner-5WRu_N9f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./context-kn7lEdrW.js";import"./Button-BlxZZJFh.js";import"./utils-Cnkpfm_P.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CzmE2CoS.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";import"./ContextMenuTriggerView-Ci3u3wAX.js";import"./ContextMenuTrigger-GU6_CoyT.js";import"./OverlayTrigger-DoGZlS98.js";import"./Dialog-DJ1EGGEI.js";import"./RSPContexts-CIVPcPB5.js";import"./OverlayArrow-MDNnCdLA.js";import"./useControlledState-WqoJm4pI.js";import"./Collection-BHjKpR2C.js";import"./CollectionBuilder-BX09WhcJ.js";import"./SelectionIndicator-CeAI6QPx.js";import"./Separator-DgmB0SGY.js";import"./Text-B4oHPq8R.js";import"./SelectionManager-laCcBYMs.js";import"./useEvent-vACQ5A8t.js";import"./useCollator-D3lxHqNW.js";import"./FocusScope-CSvsVBha.js";import"./VisuallyHidden-CH2GsO1v.js";import"./useOverlayController-xYgjz7Dg.js";import"./useStatic-V9jmy_2G.js";import"./OverlayContextProvider-rUMdRUMd.js";import"./ContextMenuView-Dmz8XQBE.js";import"./MenuItem-C87D6MSd.js";import"./ActionBatch-DG-IZD13.js";import"./browser-hyQhTs1N.js";import"./getActionGroupSlot-CHTwX_6D.js";import"./dynamic-BKd_XzPu.js";import"./ContextMenuSection-CgcrgsP7.js";import"./Popover-BwjMTXaO.js";import"./Activity-aMWhxht0.js";import"./inertValue-l2_RLTce.js";import"./useHasTabbableChild-Bu_owEqw.js";import"./useSingleSelectListState-DbkZ4uoU.js";import"./useListState-dGQ2_Dap.js";import"./Heading-fpS9fclC.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./useControlledHostValueProps-BEWm02p_.js";import"./useFieldComponent-BpgXbjM-.js";import"./FieldDescription-CaLE571G.js";import"./TextField-DroX1W2v.js";import"./FieldError-DGjeovc7.js";import"./Form-DLgE0tCZ.js";import"./Group-CvPJMXy4.js";import"./Input-DZTbr2NP.js";import"./useTextField-jB8aFAKf.js";import"./useFormReset-CDR6jl2x.js";import"./useFormValidation-DvOB0MQU.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCnxvtLO.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
