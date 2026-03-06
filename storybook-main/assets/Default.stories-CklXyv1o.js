import{j as e,r as T}from"./iframe-BgKMnsqP.js";import{T as p,a as r,b as t}from"./Tab-D07pECQ2.js";import{S as d}from"./Section-D7E7l6M3.js";import{H as h}from"./Heading-Dr5lCRWs.js";import{T as b}from"./Text-C3i_8DOD.js";import{T as g}from"./TextField-C8kMMFVY.js";import{L as x}from"./Label-8eLvO5Vl.js";import{L as u}from"./LabeledValue-BIhDbYVn.js";import{S as j}from"./Switch-CR0u7DKP.js";import{H as S}from"./Header-DoKbEmhk.js";import{A as f}from"./AlertIcon-CcDG2G1r.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./useRef-B-um_LIx.js";import"./Button-BtfzhoC2.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./Button-CpsY86Gq.js";import"./utils-DF7rIzyn.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BRD_gMdl.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./ContextMenuTriggerView-C0FhAcpu.js";import"./ContextMenuTrigger-wRUtG6NL.js";import"./OverlayTrigger-B2K0MccU.js";import"./Dialog-BWmXoaKF.js";import"./RSPContexts-DOCQ2POG.js";import"./OverlayArrow-5gMuSGka.js";import"./useControlledState-CIyJs2jp.js";import"./Collection-DFA5r9t5.js";import"./CollectionBuilder-f0lBOmxU.js";import"./SelectionIndicator-Uu23SvC3.js";import"./Separator-nr_f8Y_b.js";import"./Text-DxRa_Q_m.js";import"./SelectionManager-DVR2wm8O.js";import"./useEvent-y3i9KFGu.js";import"./useCollator-Dqx-tu-j.js";import"./FocusScope-CnP7IT5L.js";import"./VisuallyHidden-CtgyRlvv.js";import"./useOverlayController-D55f6wXT.js";import"./useStatic-BGwbdR9P.js";import"./OverlayContextProvider-B2u_rHsg.js";import"./ContextMenuView-38iw70pa.js";import"./MenuItem-BDaUhBvC.js";import"./ActionBatch-4ndP-n8L.js";import"./browser-CrtXW1Io.js";import"./getActionGroupSlot-DyZ1DXI5.js";import"./dynamic-EDiDAp0E.js";import"./ContextMenuSection-DBH05xVc.js";import"./Popover-DwOIDTsd.js";import"./Activity-C0GHXSir.js";import"./inertValue-B4ivzKJg.js";import"./useHasTabbableChild-B8SNY_12.js";import"./useSingleSelectListState-DoKN-D2U.js";import"./useListState-CtU1bllV.js";import"./Heading-DVJa8yG2.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./useControlledHostValueProps-BQEekCgN.js";import"./useFieldComponent-BrPuybAK.js";import"./FieldDescription-DSPaRw4X.js";import"./TextField-Bep40rlk.js";import"./FieldError-DrPRBP1_.js";import"./Form-BeISznmy.js";import"./Group-B1pnNyn-.js";import"./Input-DxGeYMpI.js";import"./useTextField-DgG9YqRb.js";import"./useFormReset-BD4Q_TlS.js";import"./useFormValidation-BuWufY-j.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5q4xvrfU.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
