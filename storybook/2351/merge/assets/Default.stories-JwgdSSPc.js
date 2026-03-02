import{j as e,r as T}from"./iframe-Dx38AIDT.js";import{T as p,a as r,b as t}from"./Tab-Dduck7wE.js";import{S as d}from"./Section-CzQEEFga.js";import{H as h}from"./Heading-z0nw7kl0.js";import{T as b}from"./Text-stRMORLN.js";import{T as g}from"./TextField-BJCX9uRC.js";import{L as x}from"./Label-lvpVoRBR.js";import{L as u}from"./LabeledValue-DsRgYDL8.js";import{S as j}from"./Switch-Bhbg-6o8.js";import{H as S}from"./Header-BrAlrOep.js";import{A as f}from"./AlertIcon-BbY5ij-p.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./clsx-B-dksMZM.js";import"./index-C4zw0wF6.js";import"./useRef-BQ2mDf6F.js";import"./Button-Bhwtl7lS.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./LoadingSpinner-CAXp-11u.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./Button-DXXdMML6.js";import"./utils-uxa8p5vl.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./ContextMenuTriggerView-CLET4FWG.js";import"./ContextMenuTrigger-DnT2ABxw.js";import"./OverlayTrigger-DSgpEliW.js";import"./Dialog-BIvPa65M.js";import"./RSPContexts-DnJfGcBy.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./Text-CN5O_J5f.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./OverlayContextProvider-tTA2mi55.js";import"./ContextMenuView-BL7SD9Eh.js";import"./MenuItem-DmizbkpB.js";import"./ActionBatch-B-iA-QhY.js";import"./browser-Bgj4nWuI.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./dynamic-Cw331Sxy.js";import"./ContextMenuSection-Bnn5st86.js";import"./Popover-CMv0GXnF.js";import"./Activity-CNrwKtxe.js";import"./inertValue-DnfLUtAS.js";import"./useHasTabbableChild-BfkW4MpZ.js";import"./useSingleSelectListState-KSXWtVT5.js";import"./useListState-DUaWuBVL.js";import"./Heading-BiABk9m9.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./useControlledHostValueProps-BgZhJfoJ.js";import"./useFieldComponent-CxTx8kf3.js";import"./FieldDescription-BTad89Yx.js";import"./TextField-CxexmMog.js";import"./FieldError-Cjk2dDkd.js";import"./Form-CwkZdzbX.js";import"./Group-BjH18wko.js";import"./Input-BQCGNTF8.js";import"./useTextField-DxOU6feS.js";import"./useFormReset-DiledHxM.js";import"./useFormValidation-Dn8WL8kF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BSvUU-OB.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
