import{j as e,r as T}from"./iframe-DjjV-bH6.js";import{T as p,a as r,b as t}from"./Tab-CMKHno8P.js";import{S as d}from"./Section-B5rJlWeq.js";import{H as h}from"./Heading-BUvpnBH0.js";import{T as b}from"./Text-B3EwbE0r.js";import{T as g}from"./TextField-C64dRiTy.js";import{L as x}from"./Label-BylmPkwQ.js";import{L as u}from"./LabeledValue-DBCNACMl.js";import{S as j}from"./Switch-AIigrr2P.js";import{H as S}from"./Header-BWavFEj7.js";import{A as f}from"./AlertIcon-DcWT0T9A.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./clsx-B-dksMZM.js";import"./index-CaIAbEHH.js";import"./useRef-Pg3VAXpj.js";import"./Button-B7eEYP7w.js";import"./IconWarning-BVYK-jeQ.js";import"./remote-BKpn4CGf.js";import"./LoadingSpinner-DTU1PYFj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./Button-DXnJuiQ-.js";import"./utils-Wzr-xt4Q.js";import"./ProgressBar-C3Hn1NvH.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DjKMdhxn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoT418ij.js";import"./useFocus-C98Vumo7.js";import"./useFocusRing-2GUlH-Oo.js";import"./useFocusable-BB_F7Uj3.js";import"./ContextMenuTriggerView-BdbVJjur.js";import"./ContextMenuTrigger-XBcxcB2V.js";import"./OverlayTrigger-CcgdKfuo.js";import"./Dialog-Ok_9Edtl.js";import"./RSPContexts-C5x5s972.js";import"./OverlayArrow-CBp_JaqL.js";import"./useControlledState-DuEj2qRm.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./SelectionIndicator-DP9sACdz.js";import"./Separator-AXWdobwd.js";import"./Text-BylF3jjX.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./FocusScope-hoEsPY4t.js";import"./VisuallyHidden-CG1EK-5C.js";import"./useOverlayController-DPRYSY6a.js";import"./useStatic-xFolvGTK.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./ContextMenuView-BoEkIPnr.js";import"./MenuItem-BIKtJpks.js";import"./ActionBatch-YJb9tMXC.js";import"./browser-DMwaewkm.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./dynamic-BXsvgyJR.js";import"./ContextMenuSection-DWXh8VII.js";import"./Popover-BLR3Up5v.js";import"./Activity--yhTh-ua.js";import"./inertValue-6rfGMo1Z.js";import"./useHasTabbableChild-xdFFQKps.js";import"./useSingleSelectListState-CskrE2Vp.js";import"./useListState-1CqchmCT.js";import"./Heading-ykLy-LRI.js";import"./EmulatedBoldText-C0lG4eku.js";import"./useControlledHostValueProps-DfY517eL.js";import"./useFieldComponent-DlP24hgD.js";import"./FieldDescription-CUJ0cPxq.js";import"./TextField-D__YUA_k.js";import"./FieldError-cqIqfLoK.js";import"./Form-D8aiQr1-.js";import"./Group-ByAGMk4A.js";import"./Input-DX9HMt4N.js";import"./useTextField-CEXXySrl.js";import"./useFormReset-DovS_sbG.js";import"./useFormValidation-CyR0-I-k.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz5gkyTQ.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
