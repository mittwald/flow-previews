import{j as e,r as T}from"./iframe-teIxY4wP.js";import{T as p,a as r,b as t}from"./Tab-TMEz7tb8.js";import{S as d}from"./Section-CeVx7gOS.js";import{H as h}from"./Heading-BcZ49Txx.js";import{T as b}from"./Text-CB74-0Ir.js";import{T as g}from"./TextField-BckZG-9A.js";import{L as x}from"./Label-CKh72PTo.js";import{L as u}from"./LabeledValue-Bp4HScR7.js";import{S as j}from"./Switch-Dr6c_rSV.js";import{H as S}from"./Header-CcEOQfG4.js";import{A as f}from"./AlertIcon-nbGMee0S.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./clsx-B-dksMZM.js";import"./index-SbFVnFKt.js";import"./useRef-DqhFWaAg.js";import"./Button-CCmGuoae.js";import"./IconWarning-C8c-iA3p.js";import"./remote-DC3yMzFm.js";import"./LoadingSpinner-CKqfIoaL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./context-Bkxu1haQ.js";import"./Button-DPcEERaP.js";import"./utils-C8wUhSun.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Znh85jsw.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useFocusable-C4kMCM88.js";import"./ContextMenuTriggerView-D-Np_MOG.js";import"./ContextMenuTrigger-DiTJhkyZ.js";import"./OverlayTrigger-DxY4DuAp.js";import"./Dialog-CPTLkUM-.js";import"./RSPContexts-DVypfZug.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./Text-BEd6-Qqe.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./VisuallyHidden-BEOGf6u-.js";import"./useOverlayController-2V9dFGfh.js";import"./useStatic-JzrpAx77.js";import"./OverlayContextProvider-BhqlYdhN.js";import"./ContextMenuView-9-kb2qE4.js";import"./MenuItem-N2DhByKP.js";import"./ActionBatch-BzoAcrhu.js";import"./browser-ClA0f7pc.js";import"./getActionGroupSlot-BwsAD19l.js";import"./dynamic-Bd0vnJCs.js";import"./ContextMenuSection-DZpqaSo0.js";import"./Popover-Bc-eSFBz.js";import"./Activity-py-eXuyN.js";import"./inertValue-BkWO2CuF.js";import"./useHasTabbableChild-D9RGNiZL.js";import"./useSingleSelectListState-DnD8lkIA.js";import"./useListState-Wm1b48XI.js";import"./Heading-CqSJbJuk.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./useControlledHostValueProps-CZYJDwJ3.js";import"./useFieldComponent-DaZL5efl.js";import"./FieldDescription-wvwmziA3.js";import"./TextField-BQVu9MxT.js";import"./FieldError-HPfFKZ-Z.js";import"./Form-BrsNngNz.js";import"./Group-CXesKRc7.js";import"./Input-D4TpTGNB.js";import"./useTextField-DQ7VZjBn.js";import"./useFormReset-DcLCq2Kv.js";import"./useFormValidation-CRVUVzjp.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZeRsjuB.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
