import{j as e,r as T}from"./iframe-DlWpeVbs.js";import{T as p,a as r,b as t}from"./Tab-C_GmkrRi.js";import{S as d}from"./Section-BrxRU1hJ.js";import{H as h}from"./Heading-BJuxWHmq.js";import{T as b}from"./Text-BjwiRmws.js";import{T as g}from"./TextField-D3Yc5G3Z.js";import{L as x}from"./Label-BFCtbPkR.js";import{L as u}from"./LabeledValue-SHI7vJT4.js";import{S as j}from"./Switch-7okJ4e96.js";import{H as S}from"./Header-BAa3tBqg.js";import{A as f}from"./AlertIcon-DyJmeCBc.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-e7OfeKLs.js";import"./index-CKa2CbgH.js";import"./clsx-B-dksMZM.js";import"./index-Ci0KQ92C.js";import"./useRef-KpLHRpWI.js";import"./Button-OB72uiKS.js";import"./IconWarning-CwuMGyll.js";import"./remote-Hfn3BG4Y.js";import"./LoadingSpinner-C6D9eT_m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BZrkd9Aw.js";import"./context-w6Z3dllt.js";import"./Button-BH6lR-Fb.js";import"./utils-BWqiCJWQ.js";import"./ProgressBar-QkXikNFy.js";import"./Label-CEM-XGBZ.js";import"./Hidden-DSSLapPq.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BQqcwX0K.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CW_WdW_p.js";import"./useFocus-DZ2sW_Jx.js";import"./useFocusRing-BVQNDpKt.js";import"./useFocusable-BrXdRr5r.js";import"./ContextMenuTriggerView-DPQQU_IA.js";import"./ContextMenuTrigger-C_Pl5-jO.js";import"./OverlayTrigger-hKGFSF4k.js";import"./Dialog-DM93NPwE.js";import"./RSPContexts-8MG42HPe.js";import"./OverlayArrow-Bovj8f2H.js";import"./useControlledState--75VKtTq.js";import"./Collection-BmIET0gF.js";import"./CollectionBuilder-CvIMXDSz.js";import"./SelectionIndicator-Cov2iNqV.js";import"./Separator-i6U77Zoe.js";import"./Text-BEVTNZ1h.js";import"./SelectionManager-D1b7L286.js";import"./useEvent-CVjq63ge.js";import"./useCollator-D4ZzLXhg.js";import"./FocusScope-Cd4jqLlg.js";import"./VisuallyHidden-tMd7tplK.js";import"./useOverlayController-BQMakZl8.js";import"./useStatic-JbSR48w4.js";import"./OverlayContextProvider-DIGc_6OE.js";import"./ContextMenuView-CH3eddnR.js";import"./MenuItem-BewYp1Rk.js";import"./ActionBatch-C-ID7iPf.js";import"./browser-CHTiPLC9.js";import"./getActionGroupSlot-bYWxcQao.js";import"./dynamic-D3tAnWym.js";import"./ContextMenuSection-BiNqDgyA.js";import"./Popover-C0He_Yr4.js";import"./Activity-BzsqTea0.js";import"./inertValue-DJBxL1cO.js";import"./useHasTabbableChild-Df-fIC5n.js";import"./useSingleSelectListState-Ts4WpXTV.js";import"./useListState-DN9gE7Gx.js";import"./Heading-DCdSeC1b.js";import"./EmulatedBoldText-aDVaHGl3.js";import"./useControlledHostValueProps-BCwihX90.js";import"./useFieldComponent-CpDSJ5w8.js";import"./FieldDescription-BCbzcEW9.js";import"./TextField-BweyANNZ.js";import"./FieldError-CO2oyPLw.js";import"./Form-IYTHWqtc.js";import"./Group-BNVpNkm_.js";import"./Input-DN6TuXy8.js";import"./useTextField-Cmu1p6Yf.js";import"./useFormReset-CZgOMFUA.js";import"./useFormValidation-7MNrcMSj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-1KoeNqQn.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
