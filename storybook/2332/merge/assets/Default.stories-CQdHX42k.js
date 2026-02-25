import{j as e,r as T}from"./iframe-5GKEjLm3.js";import{T as p,a as r,b as t}from"./Tab-B_JdaCus.js";import{S as d}from"./Section-130PRHAT.js";import{H as h}from"./Heading-BfDqySHg.js";import{T as b}from"./Text-4Jq61r3V.js";import{T as g}from"./TextField-CjNrml9M.js";import{L as x}from"./Label-BiEVFhkG.js";import{L as u}from"./LabeledValue-DlTDY_Xf.js";import{S as j}from"./Switch-Dt4C60wz.js";import{H as S}from"./Header-Dp08P7dY.js";import{A as f}from"./AlertIcon-xcA2PG-d.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BrPxhm-E.js";import"./index-DZHRuSdS.js";import"./clsx-B-dksMZM.js";import"./index-CxI-AdtT.js";import"./useRef-Dk-mLUQr.js";import"./Button-DbzE4WUt.js";import"./IconWarning-B10RUVd-.js";import"./remote-DrqTcZe1.js";import"./LoadingSpinner-Bp8vDBpW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-foHAfgmM.js";import"./context-CYoVNjzy.js";import"./Button-CslHKHnR.js";import"./utils-DZdTZXxi.js";import"./ProgressBar-CehyS7IW.js";import"./Label-CD-Ily5W.js";import"./Hidden-CVK_WTqz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-sguPTXZB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYa1OoRC.js";import"./useFocus-BEqaOfOz.js";import"./useFocusRing-CsUwZj84.js";import"./useFocusable-BDWe4YTb.js";import"./ContextMenuTriggerView-BEBOYpY0.js";import"./ContextMenuTrigger-B1GDRxix.js";import"./OverlayTrigger-DMEpenBq.js";import"./Dialog-BTalxjOJ.js";import"./RSPContexts-AhaMx3-_.js";import"./OverlayArrow-C_Skf-4I.js";import"./useControlledState-D9ovZV70.js";import"./Collection-DOmJuy3e.js";import"./CollectionBuilder-DAbTUazM.js";import"./SelectionIndicator-C_xwSetB.js";import"./Separator-BxdVDEg-.js";import"./Text-jTefV10v.js";import"./SelectionManager-rbmArbuf.js";import"./useEvent-_LgPAmJ5.js";import"./useCollator-COkB7H3x.js";import"./FocusScope-BteWf5AP.js";import"./VisuallyHidden-BfZLOvo3.js";import"./useOverlayController-DTNq5pfb.js";import"./useStatic-BQSB_Jfu.js";import"./OverlayContextProvider-CsuZ0G7f.js";import"./ContextMenuView-B8njc8Jl.js";import"./MenuItem-D2duf7b_.js";import"./ActionBatch-C4EMIU3M.js";import"./browser-DpyY6Jfh.js";import"./getActionGroupSlot-06aUfNYP.js";import"./dynamic-BSdZm6V5.js";import"./ContextMenuSection-BLAYEuJ8.js";import"./Popover-DZrgFB6y.js";import"./Activity-DFNn7VT0.js";import"./inertValue-D9iMS6Bq.js";import"./useHasTabbableChild-Du99jB2C.js";import"./useSingleSelectListState-BLN11GUa.js";import"./useListState-B89z-Yt4.js";import"./Heading-kRLjhOcq.js";import"./EmulatedBoldText-Dw9vtGzr.js";import"./useControlledHostValueProps-CXgJdXNv.js";import"./useFieldComponent-B3twwSIL.js";import"./FieldDescription-BBGoJLQx.js";import"./TextField-CDcpx15D.js";import"./FieldError-DNER0k2B.js";import"./Form-CkcBXY70.js";import"./Group-Gic7CvlE.js";import"./Input-VyCJjbfE.js";import"./useTextField-ByXQXWS6.js";import"./useFormReset-Bzn3Tj6K.js";import"./useFormValidation-Dje-UJVy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B10ceIL5.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
