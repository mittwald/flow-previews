import{j as e,r as T}from"./iframe-JHVlk64D.js";import{T as p,a as r,b as t}from"./Tab-DAfPLopj.js";import{S as d}from"./Section-Dlc8DpVc.js";import{H as h}from"./Heading-B5Pon5qA.js";import{T as b}from"./Text-D35H-2yr.js";import{T as g}from"./TextField-Dt9nEAvZ.js";import{L as x}from"./Label-BVSjd_Ef.js";import{L as u}from"./LabeledValue-CeXbi0WB.js";import{S as j}from"./Switch-qSM95aIv.js";import{H as S}from"./Header-BEO-hkxh.js";import{A as f}from"./AlertIcon-B-el1D17.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./clsx-B-dksMZM.js";import"./index-BF-KrcKY.js";import"./useRef-m6O5GTv_.js";import"./Button-BViHWx5D.js";import"./IconWarning-D57fWT31.js";import"./remote-CdnDmctD.js";import"./LoadingSpinner-Bl1fRewj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./Button-CV338ZHI.js";import"./utils-D9FbIhNL.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dt-0MkOU.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./ContextMenuTriggerView-DkUBKzZd.js";import"./ContextMenuTrigger-aArxDUom.js";import"./OverlayTrigger-CMrYL6HW.js";import"./Dialog-DIqACfnD.js";import"./RSPContexts-BaSES6Qq.js";import"./OverlayArrow-DI9sbb4v.js";import"./useControlledState-BK0dEcU9.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./Text-BPDMqDL5.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./ContextMenuView-CAL34WL7.js";import"./MenuItem-DTpcEFCV.js";import"./ActionBatch-1qW2-LTl.js";import"./browser-CH4iE_n_.js";import"./getActionGroupSlot-DipsrrNF.js";import"./dynamic-B8NPXIjt.js";import"./ContextMenuSection-0h5wVCnN.js";import"./Popover-KhMzeTk6.js";import"./Activity-BsejC3xa.js";import"./inertValue-BPDr3-kA.js";import"./useHasTabbableChild-CvwRANL6.js";import"./useSingleSelectListState-3kR4tMGh.js";import"./useListState-CmgD5PhU.js";import"./Heading-DWwskDgI.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./useControlledHostValueProps-C11BGBW9.js";import"./useFieldComponent-Dm_EHwx7.js";import"./FieldDescription-CHp3BkQc.js";import"./TextField-D8OVS6JU.js";import"./FieldError-CB6gvg8S.js";import"./Form-C3MOdK6R.js";import"./Group-BpUbtBKw.js";import"./Input-D75LvDxG.js";import"./useTextField-D6sOxTHB.js";import"./useFormReset-CuVjUJoL.js";import"./useFormValidation-BHVZgCg5.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BOoA6Az8.js";const $e={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["Default","SmallSpace","Controlled","WithLinks"];export{n as Controlled,a as Default,s as SmallSpace,m as WithLinks,er as __namedExportsOrder,$e as default};
