import{j as e,r as T}from"./iframe-DGnxviCN.js";import{T as p,a as r,b as t}from"./Tab-Bn6l4ude.js";import{S as d}from"./Section-DY27wNHr.js";import{H as h}from"./Heading-DTe6jOe1.js";import{T as b}from"./Text-VNnveGPv.js";import{T as g}from"./TextField-4t-jXf3b.js";import{L as x}from"./Label-C_bFUpyc.js";import{L as u}from"./LabeledValue-CZZRJsYX.js";import{S as j}from"./Switch-vWMCxLGP.js";import{H as S}from"./Header-Dw2qGOPg.js";import{A as f}from"./AlertIcon-DgP01cQO.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./clsx-B-dksMZM.js";import"./index-CLLV6gyd.js";import"./useRef-CexGozGe.js";import"./Button-BVsKVkL8.js";import"./IconWarning-B9r0STX6.js";import"./remote-B6BjMgpw.js";import"./LoadingSpinner-DowiBEwh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./context-UPqYfqWR.js";import"./Button-BPmMTYs3.js";import"./utils-BkfS5ksp.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyY11qHx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useFocusable-Qpttz7ZN.js";import"./ContextMenuTriggerView-Uw_m3Nds.js";import"./ContextMenuTrigger-BFUGUsJj.js";import"./OverlayTrigger-BRKr18-D.js";import"./Dialog-4LBd4V1R.js";import"./RSPContexts-DVx2WDHj.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./useControlledState-Tnf2yuXg.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./Text-DvHtl8Bn.js";import"./SelectionManager-C4F6MNyw.js";import"./useEvent-BwKzZdM2.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./OverlayContextProvider-DWOAvC95.js";import"./ContextMenuView-DBehqOzP.js";import"./MenuItem-BAwnFpy8.js";import"./ActionBatch-CX-JwDue.js";import"./browser-Cb_u6_6F.js";import"./getActionGroupSlot-rP5M9435.js";import"./dynamic-DjV52Fwj.js";import"./ContextMenuSection-BcwKnSYu.js";import"./Popover-6gSZV124.js";import"./Activity-D0etFqgn.js";import"./inertValue-DzB7ty9x.js";import"./useHasTabbableChild-BSpuZAfP.js";import"./useSingleSelectListState-BaIMI4wW.js";import"./useListState-BfAZsvfy.js";import"./Heading-BzIJuxDf.js";import"./EmulatedBoldText-DzMWb8wu.js";import"./useControlledHostValueProps-BIbkMX3_.js";import"./useFieldComponent-YlKWY1fY.js";import"./FieldDescription-CXMcujUG.js";import"./TextField-BjemnuiU.js";import"./FieldError-er7nowFJ.js";import"./Form-DxH8Icum.js";import"./Group-Bidst4UD.js";import"./Input-BlrdZkUM.js";import"./useTextField-DgN6vDQ1.js";import"./useFormReset-DURLcehp.js";import"./useFormValidation-Dta_Z6Hx.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BlQNM6IB.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
