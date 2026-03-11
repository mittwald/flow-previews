import{j as e,r as T}from"./iframe-C037GO3p.js";import{T as p,a as r,b as t}from"./Tab-fS3Ugw8c.js";import{S as d}from"./Section-B8monzQm.js";import{H as h}from"./Heading-D6ofxLDB.js";import{T as b}from"./Text-1H8qvaGa.js";import{T as g}from"./TextField-DgY-jItN.js";import{L as x}from"./Label-B8SETf0h.js";import{L as u}from"./LabeledValue-DX6uzVAg.js";import{S as j}from"./Switch-rYCJKmsJ.js";import{H as S}from"./Header-D4fg3S-y.js";import{A as f}from"./AlertIcon-CoEhaz6M.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./clsx-B-dksMZM.js";import"./index-aVIlTX7l.js";import"./useRef-CAUxoMVD.js";import"./Button-Cf9guGvq.js";import"./IconWarning-tMH4RyLr.js";import"./remote-BG6_lggN.js";import"./LoadingSpinner-7anO2L1H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./context-Cm0s8R8a.js";import"./Button-3UAE6tol.js";import"./utils-B21QcS96.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DtHLFK3z.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useFocusable-DZHoKnFR.js";import"./ContextMenuTriggerView-BqOVy0Jx.js";import"./ContextMenuTrigger-Bm7MmnCk.js";import"./OverlayTrigger-B4ic7Mjc.js";import"./Dialog-Sd6ebC5F.js";import"./RSPContexts-Cx4BM4L8.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./Text-BlWqR5Lx.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./VisuallyHidden-DBGkoZNP.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./OverlayContextProvider-saupE8AB.js";import"./ContextMenuView-BaIQyuX2.js";import"./MenuItem-DIYqFRkS.js";import"./ActionBatch-BkGPDfVM.js";import"./browser-CtD1Hg4J.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./dynamic-CXANBhHf.js";import"./ContextMenuSection-yxbgVkhw.js";import"./Popover-B6RVLTNX.js";import"./Activity-B0vCEmM_.js";import"./inertValue-BVjSdzMd.js";import"./useHasTabbableChild-DINorCDb.js";import"./useSingleSelectListState-WEIo38sB.js";import"./useListState-BGiFdRm3.js";import"./Heading-DNAjQtPl.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./useControlledHostValueProps-ClXNYq5v.js";import"./useFieldComponent-BW6tilSl.js";import"./FieldDescription-BhLI0C98.js";import"./TextField-BZQwJmxp.js";import"./FieldError-BWfaawdZ.js";import"./Form-DK0MW_mU.js";import"./Group-BPrnFgpr.js";import"./Input-COylKlun.js";import"./useTextField-CiTgdQeQ.js";import"./useFormReset-BmsW_IRy.js";import"./useFormValidation-kMumfte1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CUmJuox2.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
