import{j as e,r as T}from"./iframe-BJFPIndf.js";import{T as p,a as r,b as t}from"./Tab-CXEiAsxL.js";import{S as d}from"./Section-C6f0l2Xs.js";import{H as h}from"./Heading-BgaQQLIq.js";import{T as b}from"./Text-CGF68X8s.js";import{T as g}from"./TextField-B_ZbRxIl.js";import{L as x}from"./Label-CVJICKuL.js";import{L as u}from"./LabeledValue-B78Rpetf.js";import{S as j}from"./Switch-BLkB3cDb.js";import{H as S}from"./Header-D17Kmf5e.js";import{A as f}from"./AlertIcon-GZVP8WsI.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BKaxWUSl.js";import"./index-Bb49SoEB.js";import"./clsx-B-dksMZM.js";import"./index-Bg9RtLBP.js";import"./useRef-BdfxdyUk.js";import"./Button-CMLIz8EV.js";import"./IconWarning-BUqpCqdO.js";import"./remote-BMkebNs4.js";import"./LoadingSpinner-mc2sXUEG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DgoEP7JS.js";import"./context-Dnh7V-Fy.js";import"./Button-DuameHsj.js";import"./utils-WT8FFEB4.js";import"./ProgressBar-Dl8T8y8K.js";import"./Label-CeUzUCbC.js";import"./Hidden-CMdNoXJX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-lMRjDAnL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BHGoooY9.js";import"./useFocus-DPdw3svt.js";import"./useFocusRing-BgEwvKKQ.js";import"./useFocusable-DGQMpBVb.js";import"./ContextMenuTriggerView-DEgj2ZQo.js";import"./ContextMenuTrigger-DpaR76-2.js";import"./OverlayTrigger-CKuXx8bv.js";import"./Dialog-eRNfCnmO.js";import"./RSPContexts-BXfCPyGV.js";import"./OverlayArrow-BSkSIfQ7.js";import"./useControlledState-DywfuSZK.js";import"./Collection-DFCRYzeG.js";import"./CollectionBuilder-DvmLsXRf.js";import"./SelectionIndicator-DE1Bz2O5.js";import"./Separator-xreemKox.js";import"./Text-D3Y_kc1g.js";import"./SelectionManager-BZZ9zPIN.js";import"./useEvent-BToADvjV.js";import"./useCollator-m51r9XzI.js";import"./FocusScope-shVJmAPD.js";import"./VisuallyHidden-DpM8Q2HK.js";import"./useOverlayController-BY9uU74J.js";import"./useStatic-BUxz8dmg.js";import"./OverlayContextProvider-BuTLd76h.js";import"./ContextMenuView-BUlmZ9R5.js";import"./MenuItem-JskQP9Rn.js";import"./ActionBatch-91iU7Ul_.js";import"./browser-DqcTc9Nr.js";import"./getActionGroupSlot-ggari8la.js";import"./dynamic-Ds5yn-UC.js";import"./ContextMenuSection-BXIYeg2w.js";import"./Popover-DcH799mS.js";import"./Activity-B2n7GIrO.js";import"./inertValue-CSTEhpZt.js";import"./useHasTabbableChild-D_1PYKlr.js";import"./useSingleSelectListState-DYLyhwxa.js";import"./useListState-XrxYXnHc.js";import"./Heading-BMtUgZaT.js";import"./EmulatedBoldText-CbQqBSV_.js";import"./useControlledHostValueProps-D9H6S5M8.js";import"./useFieldComponent-gU-XMME4.js";import"./FieldDescription-D_PxiSL1.js";import"./TextField-C4VgOiC3.js";import"./FieldError-Coj9-PqS.js";import"./Form-x5xxOUHd.js";import"./Group-Cnjfsww6.js";import"./Input-BWdvoxfF.js";import"./useTextField-D6MsdQlq.js";import"./useFormReset-CwfjSagb.js";import"./useFormValidation-BhmC515N.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CAGLbUXI.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
