import{j as e,r as T}from"./iframe-DG8PGYI2.js";import{T as p,a as r,b as t}from"./Tab-XyxqWvo8.js";import{S as d}from"./Section-Da7bIBGb.js";import{H as h}from"./Heading-C3VOV3Fz.js";import{T as b}from"./Text-DXfg_t75.js";import{T as g}from"./TextField-Bc7WDSsM.js";import{L as x}from"./Label-BPpS4vmA.js";import{L as u}from"./LabeledValue-DxCP7s3i.js";import{S as j}from"./Switch-B2t8clI5.js";import{H as S}from"./Header-TjqBz2yZ.js";import{A as f}from"./AlertIcon-DlZAtoqh.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./useRef-DIQYbD7f.js";import"./Button-DsdihroW.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./LoadingSpinner-JP8g8ixs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./Button-CKW1LLKF.js";import"./utils-07AIACoX.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dy-OAjIk.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./ContextMenuTriggerView-CQxcIXwr.js";import"./ContextMenuTrigger-qWYNgQ1A.js";import"./OverlayTrigger-a3uZGxXg.js";import"./Dialog-Bv_Niklp.js";import"./RSPContexts-DatC1hy5.js";import"./OverlayArrow-BCWfoCHK.js";import"./useControlledState-CbmAXNAC.js";import"./Collection-COwwIt7O.js";import"./CollectionBuilder-CqZXSAPR.js";import"./SelectionIndicator-CS3Tqeow.js";import"./Separator-DxksnpFt.js";import"./Text-0L-5i7aJ.js";import"./SelectionManager-Vuj-N4iU.js";import"./useEvent-CyzeiOxV.js";import"./useCollator-BagykhK3.js";import"./FocusScope-By5yaDFE.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./useOverlayController-BzZu7ty6.js";import"./useStatic-BxWRYqBR.js";import"./OverlayContextProvider-DoYhYc18.js";import"./ContextMenuView-Bm_alGiW.js";import"./MenuItem-DjMrLz3z.js";import"./ActionBatch-BRiItlo9.js";import"./browser-CdVMgEWJ.js";import"./getActionGroupSlot-D51i84O1.js";import"./dynamic-BkMen_On.js";import"./ContextMenuSection-BKYmu9Je.js";import"./Popover-BqmVqall.js";import"./Activity-BbVOw7O7.js";import"./inertValue-ByiaIG-e.js";import"./useHasTabbableChild-BRxS5XCV.js";import"./useSingleSelectListState-9RxYvbk2.js";import"./useListState-T9D5ByaR.js";import"./Heading-CsdNC-Kb.js";import"./EmulatedBoldText-BysjcSz3.js";import"./useControlledHostValueProps-B3V_ATuW.js";import"./useFieldComponent-CBicToer.js";import"./FieldDescription-CFcLkynh.js";import"./TextField-OZt28VIy.js";import"./FieldError-bE1Vz7Na.js";import"./Form-COtDtsRb.js";import"./Group-DnR8HzPq.js";import"./Input-8qA1kF5u.js";import"./useTextField-CqEJ98NX.js";import"./useFormReset-BIdGIAau.js";import"./useFormValidation-DkNbsHEL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DpBaLzJt.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
