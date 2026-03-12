import{j as e,r as T}from"./iframe-C8tsaODo.js";import{T as p,a as r,b as t}from"./Tab-BJyotnqt.js";import{S as d}from"./Section-DA8oIEqU.js";import{H as h}from"./Heading-BUyGvYSI.js";import{T as b}from"./Text-BE7lE0T8.js";import{T as g}from"./TextField-CnG67_h6.js";import{L as x}from"./Label-1oLHWqvU.js";import{L as u}from"./LabeledValue-BQM2j0bp.js";import{S as j}from"./Switch-ojjFiW1l.js";import{H as S}from"./Header-ByBFBtM9.js";import{A as f}from"./AlertIcon-DJlFLAIk.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./clsx-B-dksMZM.js";import"./index-BNoG6unV.js";import"./useRef-Dg0IXyzM.js";import"./Button-BxguJBhT.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./LoadingSpinner-C-PnKOui.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./Button-Dm2nITC7.js";import"./utils-CdcYI7XL.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-vv50L64r.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./ContextMenuTriggerView-CF9QG57F.js";import"./ContextMenuTrigger-Cu8jMjZj.js";import"./OverlayTrigger-xIqGS4XS.js";import"./Dialog-CNeqByqP.js";import"./RSPContexts-DtfJrVYY.js";import"./OverlayArrow-CxwkoRJi.js";import"./useControlledState-CN29789s.js";import"./Collection-Drvm3BjC.js";import"./CollectionBuilder-CUdEZ73w.js";import"./SelectionIndicator-5GEQvOaX.js";import"./Separator-AhH2lqvH.js";import"./Text-BkxlIu3p.js";import"./SelectionManager-BzBOXU82.js";import"./useEvent-520ieM62.js";import"./useCollator-q3kgEL61.js";import"./FocusScope-DFjW_d09.js";import"./VisuallyHidden-hgCntKQk.js";import"./useOverlayController-Bf797MvO.js";import"./useStatic-jSI8PS8c.js";import"./OverlayContextProvider-Buisu9vo.js";import"./ContextMenuView-aOEFxvWZ.js";import"./MenuItem-CGP4GFxP.js";import"./ActionBatch-BUyIhhJw.js";import"./browser-qgMJ3NzC.js";import"./getActionGroupSlot-C3_vSruP.js";import"./dynamic-DA7vjxZL.js";import"./ContextMenuSection-BnK78UMz.js";import"./Popover-D8RRHCNj.js";import"./Activity-DIvJb6-m.js";import"./inertValue-DC7bSY4S.js";import"./useHasTabbableChild-DsYlrlz-.js";import"./useSingleSelectListState-hABHBLfP.js";import"./useListState-DpZPxztD.js";import"./Heading-LrX14EbB.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./useControlledHostValueProps-D0AOVaZQ.js";import"./useFieldComponent-FgbLRzY4.js";import"./FieldDescription-BZoE01SC.js";import"./TextField-B6A8u9tv.js";import"./FieldError-DSXMmXMO.js";import"./Form-Ch0mipSV.js";import"./Group-DRewra_w.js";import"./Input-ConcdJ9I.js";import"./useTextField-BlhjZ_T-.js";import"./useFormReset-BpTKK099.js";import"./useFormValidation-CZJdaAR2.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bupsl8Wu.js";const $e={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
