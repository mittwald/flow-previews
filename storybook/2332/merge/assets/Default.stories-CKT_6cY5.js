import{j as e,r as T}from"./iframe-DunzINT4.js";import{T as p,a as r,b as t}from"./Tab-9_OpXs97.js";import{S as d}from"./Section-M7f3R8gL.js";import{H as h}from"./Heading-ClXpNfz0.js";import{T as b}from"./Text-DTHO_DRR.js";import{T as g}from"./TextField-CEY_0XIO.js";import{L as x}from"./Label-CAkB50pb.js";import{L as u}from"./LabeledValue-C7tDIz2N.js";import{S as j}from"./Switch-E8P1pSL6.js";import{H as S}from"./Header-DSA2R6PH.js";import{A as f}from"./AlertIcon-Bju3yLvF.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./clsx-B-dksMZM.js";import"./index-Wl0ZfLjP.js";import"./useRef-GWWqzfEo.js";import"./Button-D4ye7DRq.js";import"./IconWarning-kFcnfyhN.js";import"./remote-BHsosJBg.js";import"./LoadingSpinner-CzZyxAnt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./context-XFBu4tuG.js";import"./Button-C6WdG1X1.js";import"./utils-B66WPIWK.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VDpDAbVy.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useFocusable-BqXitQDl.js";import"./ContextMenuTriggerView-B3O97pPu.js";import"./ContextMenuTrigger-CTYVWg2Y.js";import"./OverlayTrigger-B1b7JrEs.js";import"./Dialog-Da1bNoxP.js";import"./RSPContexts-DYG4soUM.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./Text-CMXpTIb-.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./ContextMenuView-exTUgV-r.js";import"./MenuItem-ZmRcTmRI.js";import"./ActionBatch-CdGiFur7.js";import"./browser-CUqULdV9.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./dynamic--RH-hhxe.js";import"./ContextMenuSection-BBATHhHi.js";import"./Popover-DJxHz7NJ.js";import"./Activity-B1iPME7v.js";import"./inertValue-DQCzmRWh.js";import"./useHasTabbableChild-Cbd4w_vB.js";import"./useSingleSelectListState-CawFx-cl.js";import"./useListState-Ci5mI-Tf.js";import"./Heading-B3Dcho9D.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./useControlledHostValueProps-iizhxm66.js";import"./useFieldComponent-mGz2JkQm.js";import"./FieldDescription-Ci87Xxem.js";import"./TextField-E09LQuue.js";import"./FieldError-MxPTKBhw.js";import"./Form-Dp-IAcVR.js";import"./Group-Cb2TDoEs.js";import"./Input-CibPE8Js.js";import"./useTextField-CDucbR-t.js";import"./useFormReset-BCoUHfvE.js";import"./useFormValidation-CAKGNU-r.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CEwtgscT.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
