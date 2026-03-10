import{j as e,r as T}from"./iframe-DAdEF_a9.js";import{T as p,a as r,b as t}from"./Tab-CcwVE3bo.js";import{S as d}from"./Section-CLn2WL9U.js";import{H as h}from"./Heading-CRr1Ukpo.js";import{T as b}from"./Text-BlXexclX.js";import{T as g}from"./TextField-B4sVqPyR.js";import{L as x}from"./Label-D1h8c298.js";import{L as u}from"./LabeledValue-C-h2XpFe.js";import{S as j}from"./Switch-F4fs7rzi.js";import{H as S}from"./Header-DdfqLkcb.js";import{A as f}from"./AlertIcon-DxXhtuAo.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./clsx-B-dksMZM.js";import"./index-DqNUQeP9.js";import"./useRef-DEVjfIov.js";import"./Button-BL7hv3yg.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./LoadingSpinner-BzYwrllt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./Button-DZLmAbDI.js";import"./utils-B1o5BDIk.js";import"./ProgressBar-Cv5-QMXF.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CcpSY4Um.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-AnOXMqB9.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useFocusable-vdr5CzJ0.js";import"./ContextMenuTriggerView-CWLUB2sl.js";import"./ContextMenuTrigger-_hx5eYaI.js";import"./OverlayTrigger-DC0b_r1T.js";import"./Dialog-CWk-zVbe.js";import"./RSPContexts-BAZVNF9B.js";import"./OverlayArrow-DM34mO9f.js";import"./useControlledState-D1JeUT3E.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./Separator-DdtELOBz.js";import"./Text-ConA-l-E.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./FocusScope-Cya-_QqL.js";import"./VisuallyHidden-DtDztoAI.js";import"./useOverlayController-BdzCJ-ub.js";import"./useStatic-CKtHP4uD.js";import"./OverlayContextProvider-DG82vmF2.js";import"./ContextMenuView-ClR94J3_.js";import"./MenuItem--rvDEZFV.js";import"./ActionBatch-BtBHZwy0.js";import"./browser-DTw6e149.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./dynamic-pIUCZeo6.js";import"./ContextMenuSection-C3uZY6Us.js";import"./Popover-CBYvjYoJ.js";import"./Activity-CiutBHGW.js";import"./inertValue-GGfDevjJ.js";import"./useHasTabbableChild-l0ueipmB.js";import"./useSingleSelectListState-DWfzLFCr.js";import"./useListState-BTS-c59c.js";import"./Heading-B0L1HgOG.js";import"./EmulatedBoldText-DRN0x44S.js";import"./useControlledHostValueProps-J23MCm-A.js";import"./useFieldComponent-CLfspKSt.js";import"./FieldDescription-CFQCjYVN.js";import"./TextField-4ha8Auah.js";import"./FieldError-Be27Lv36.js";import"./Form-B4U7K7S8.js";import"./Group-D1kJtVaR.js";import"./Input-Cd2NpESg.js";import"./useTextField-BhMqFMtB.js";import"./useFormReset-BoqlzNfE.js";import"./useFormValidation-CWgfw6QX.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D2U5XJ_A.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
