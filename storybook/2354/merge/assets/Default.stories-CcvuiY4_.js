import{j as e,r as T}from"./iframe-BLMVSPV3.js";import{T as p,a as r,b as t}from"./Tab-DWsO-ZQJ.js";import{S as d}from"./Section-Sirm0ClO.js";import{H as h}from"./Heading-BFhkb_kv.js";import{T as b}from"./Text-CGLO_VNW.js";import{T as g}from"./TextField-HBCA0uyS.js";import{L as x}from"./Label-C8Rr5uKt.js";import{L as u}from"./LabeledValue-HvUi-Y8y.js";import{S as j}from"./Switch-DD_qh4XP.js";import{H as S}from"./Header-v-u7Xbsj.js";import{A as f}from"./AlertIcon-BrGMsY0L.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./clsx-B-dksMZM.js";import"./index-B-iUx4vd.js";import"./useRef-Bngm3SGC.js";import"./Button-RfhP7QLX.js";import"./IconWarning-DFK0SIT3.js";import"./remote-B_iWR4WH.js";import"./LoadingSpinner-BCnxKzgI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./context-BPm1HUwp.js";import"./Button-4lGsfIj0.js";import"./utils-je6Mfjnf.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgsdN2D5.js";import"./useFocus-B92CKOsl.js";import"./useFocusRing-IVoDVSxb.js";import"./useFocusable-DsXmOaAq.js";import"./ContextMenuTriggerView-BP-JKDKY.js";import"./ContextMenuTrigger-CBsmsL4G.js";import"./OverlayTrigger-CUid1uyF.js";import"./Dialog-BT74UQ_T.js";import"./RSPContexts-BTwsU_Cp.js";import"./OverlayArrow-DqBJvRH_.js";import"./useControlledState-Bp8O9Zqw.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./SelectionIndicator-MBj-w85S.js";import"./Separator-CN6eRPM4.js";import"./Text-DPHxU6u7.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./FocusScope-uhT9mVfL.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./OverlayContextProvider-D_krly58.js";import"./ContextMenuView-CZ2ja3uQ.js";import"./MenuItem-DeriIvZy.js";import"./ActionBatch-Cx_n21HW.js";import"./browser-CtcijgRV.js";import"./getActionGroupSlot-BdFM70uG.js";import"./dynamic-DAjDUp_G.js";import"./ContextMenuSection-BvWYHMvE.js";import"./Popover-CG38Kmd4.js";import"./Activity-C7ZbmtWY.js";import"./inertValue-TUz6Lk22.js";import"./useHasTabbableChild-tmeQ6S0D.js";import"./useSingleSelectListState-DYL_0MMN.js";import"./useListState-CsffJGRU.js";import"./Heading-DGpyEp1Z.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./useControlledHostValueProps-Ch3Pmn36.js";import"./useFieldComponent-y-VnQdYS.js";import"./FieldDescription-1iFVSl7S.js";import"./TextField-CJFAhKLP.js";import"./FieldError-CUXp9-J-.js";import"./Form-CkFb-Mj9.js";import"./Group-fZwN4R35.js";import"./Input-BNOgaKSE.js";import"./useTextField-CR83D2he.js";import"./useFormReset-7ZGeCzym.js";import"./useFormValidation-CsmzuQo6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-7CUyy1jr.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
