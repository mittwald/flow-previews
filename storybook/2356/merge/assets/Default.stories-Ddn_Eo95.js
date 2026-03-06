import{j as e,r as T}from"./iframe-CCG9iH9q.js";import{T as p,a as r,b as t}from"./Tab-DZhqKlK9.js";import{S as d}from"./Section-DbhTGHPe.js";import{H as h}from"./Heading-DiIAAbeS.js";import{T as b}from"./Text-CqiRKP9V.js";import{T as g}from"./TextField-x23nDViy.js";import{L as x}from"./Label-ZsZ9_LuX.js";import{L as u}from"./LabeledValue-CabkDtLE.js";import{S as j}from"./Switch-D1g_IMfz.js";import{H as S}from"./Header-9AopLV6t.js";import{A as f}from"./AlertIcon-BWG972Pn.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./clsx-B-dksMZM.js";import"./index-DO8RY2JU.js";import"./useRef-BKrfCYqa.js";import"./Button-DszeRQWk.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./LoadingSpinner-GybBfiLr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./context-BOE3Zx9s.js";import"./Button-BmDLEeLi.js";import"./utils-BqjYSsY0.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C9nCYq1D.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useFocusable-C9iBP5e4.js";import"./ContextMenuTriggerView-Xqkw1Wbs.js";import"./ContextMenuTrigger-inVeFQfz.js";import"./OverlayTrigger-BffquD90.js";import"./Dialog-Bvzkt_Dq.js";import"./RSPContexts-Cj7-Wn-7.js";import"./OverlayArrow-O5F9zlGE.js";import"./useControlledState-DQCduMNG.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./Text-CsZp0s5y.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./VisuallyHidden-B8BDvwZm.js";import"./useOverlayController-B8ExGaeg.js";import"./useStatic-DZaf9Eli.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./ContextMenuView-CoISC2MF.js";import"./MenuItem-C9vagVCk.js";import"./ActionBatch-BwDlid4r.js";import"./browser-DlPLk6Tx.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./dynamic-DVtvH1qO.js";import"./ContextMenuSection-DkVhFe3O.js";import"./Popover-B7zmrX8_.js";import"./Activity-BwcZG0bI.js";import"./inertValue-CZQeeIz8.js";import"./useHasTabbableChild-CBZNM8Aj.js";import"./useSingleSelectListState-DBYe-fcp.js";import"./useListState-BsOdjPvW.js";import"./Heading-DVHr5WNM.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./useControlledHostValueProps-C1I4WMgS.js";import"./useFieldComponent-BO1aRG8J.js";import"./FieldDescription-CUhsst8_.js";import"./TextField-CvZXl8ia.js";import"./FieldError-IbwLA4qq.js";import"./Form-CaeCkx3f.js";import"./Group-BkubaCeK.js";import"./Input-mPx5hz5Z.js";import"./useTextField-CqMkN_4n.js";import"./useFormReset-DOloisqU.js";import"./useFormValidation-Jbp24I-0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-z_9ikDBl.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
