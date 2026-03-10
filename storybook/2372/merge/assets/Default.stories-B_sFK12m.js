import{j as e,r as T}from"./iframe-C1IdntWq.js";import{T as p,a as r,b as t}from"./Tab-B3eyk2oG.js";import{S as d}from"./Section-AIy1dCAg.js";import{H as h}from"./Heading-CLkS-w3U.js";import{T as b}from"./Text-W7h8_LNr.js";import{T as g}from"./TextField-zuOUGsjF.js";import{L as x}from"./Label-Be-SvMDa.js";import{L as u}from"./LabeledValue-D8cH6LO9.js";import{S as j}from"./Switch-DkM14R6w.js";import{H as S}from"./Header-DdoCC8Bl.js";import{A as f}from"./AlertIcon-CvmjcNLC.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./clsx-B-dksMZM.js";import"./index-Coy6T-Pa.js";import"./useRef-m9duQCt_.js";import"./Button-mSWnhOmK.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./LoadingSpinner-C4dBxxC2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./Button-C7cBjDhV.js";import"./utils-CNo0qaX0.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIzz4kJt.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocusable-Z0Y9nSjp.js";import"./ContextMenuTriggerView-DtYysjAo.js";import"./ContextMenuTrigger-BD7zU6S1.js";import"./OverlayTrigger-B9t-MDtI.js";import"./Dialog-DaGSiRkj.js";import"./RSPContexts-DcVP09I4.js";import"./OverlayArrow-DbaAbVnX.js";import"./useControlledState-FuYpKfPj.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./Text-CkLpWhuM.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./OverlayContextProvider-Car-oabl.js";import"./ContextMenuView-Du14aa1j.js";import"./MenuItem-r8fJ3S7W.js";import"./ActionBatch-VQdQXkn7.js";import"./browser-WXx3m9ky.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./dynamic-CUpn0zgH.js";import"./ContextMenuSection-Bx9t8tzE.js";import"./Popover-BzNCFXu7.js";import"./Activity-Cc9XK1Tb.js";import"./inertValue-DxWqM6KB.js";import"./useHasTabbableChild-Clt-uauM.js";import"./useSingleSelectListState-D1MSSg6T.js";import"./useListState-SHHa_w6_.js";import"./Heading-BVXFLwsq.js";import"./EmulatedBoldText-COIRRGWk.js";import"./useControlledHostValueProps-B0HcYsZy.js";import"./useFieldComponent-o_u9PYdj.js";import"./FieldDescription-CN54GY3S.js";import"./TextField-f8CG66Mv.js";import"./FieldError-DgBT4dcF.js";import"./Form-CijQ_R7m.js";import"./Group-DCbRkIJ9.js";import"./Input-Des9E_um.js";import"./useTextField-DDX9uSSl.js";import"./useFormReset-CaX1fgpZ.js";import"./useFormValidation-CloSy7V5.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DDHVFVTa.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
