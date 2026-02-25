import{j as e,r as T}from"./iframe-DCel2PhG.js";import{T as p,a as r,b as t}from"./Tab-DqTozqkZ.js";import{S as d}from"./Section-BGkAXCBO.js";import{H as h}from"./Heading-DPAdBgTw.js";import{T as b}from"./Text-CfcNN3C1.js";import{T as g}from"./TextField-CB124b8G.js";import{L as x}from"./Label-DVkF56bm.js";import{L as u}from"./LabeledValue-DqyiPu1b.js";import{S as j}from"./Switch-2vH7zbnN.js";import{H as S}from"./Header-CozgZTi7.js";import{A as f}from"./AlertIcon-C6GnHejw.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./clsx-B-dksMZM.js";import"./index-DcvCSlSd.js";import"./useRef-C3FTlCPC.js";import"./Button-CjhaH8vt.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./Button-Dbr1_oBf.js";import"./utils-jFfJrK0I.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-l6QeQysM.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./ContextMenuTriggerView-eetf8rv4.js";import"./ContextMenuTrigger-DigcAnLh.js";import"./OverlayTrigger-BYr1biz5.js";import"./Dialog-BnrJ3EGg.js";import"./RSPContexts-BWRH8UQz.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useControlledState-uXSCouXp.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./Text-H5k4jR7L.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./OverlayContextProvider-BfHmVY35.js";import"./ContextMenuView-Bmi7TyjG.js";import"./MenuItem-0Ul2h7hK.js";import"./ActionBatch-BNnkW8Wa.js";import"./browser-ChoxEgkm.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./dynamic-CoRoJ1gY.js";import"./ContextMenuSection-DVvHUSFD.js";import"./Popover-C8zyal55.js";import"./Activity-SfI-t_0J.js";import"./inertValue-DFv784z5.js";import"./useHasTabbableChild-Cw23abu4.js";import"./useSingleSelectListState-bT5t4vrN.js";import"./useListState-BOY48jtR.js";import"./Heading-Cs7GlIOt.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./useControlledHostValueProps-DRZV2yGu.js";import"./useFieldComponent-CWMmv0d5.js";import"./FieldDescription-ChM1MP2a.js";import"./TextField-CrSgtVMY.js";import"./FieldError-QICB5hyW.js";import"./Form-BsISnRaP.js";import"./Group-yuR7pI6G.js";import"./Input-D8WhG3Nd.js";import"./useTextField-C88_NvvV.js";import"./useFormReset-DvzBERJE.js";import"./useFormValidation-CVEw0jVb.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-RRCYx7Po.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
