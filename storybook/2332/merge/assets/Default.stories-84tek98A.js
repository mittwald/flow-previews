import{j as e,r as T}from"./iframe-CFTqgbub.js";import{T as p,a as r,b as t}from"./Tab-klOcHsYy.js";import{S as d}from"./Section-DUGYD1S5.js";import{H as h}from"./Heading-439pSAMO.js";import{T as b}from"./Text-DGb4Yj-N.js";import{T as g}from"./TextField-CD2Tk2q3.js";import{L as x}from"./Label-GwGXhrLq.js";import{L as u}from"./LabeledValue-DR8nf7d2.js";import{S as j}from"./Switch-TuRcvHwR.js";import{H as S}from"./Header-Bx0_NMQh.js";import{A as f}from"./AlertIcon-DR1EaW6b.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./clsx-B-dksMZM.js";import"./index-B_-FfeBA.js";import"./useRef-Bmtm6YEx.js";import"./Button-DYo4uywI.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./Button-BKBgz7xZ.js";import"./utils-B4tY5r2S.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./ContextMenuTriggerView-CWpjHkxY.js";import"./ContextMenuTrigger-YPHTEBHC.js";import"./OverlayTrigger-C_Zwa0aQ.js";import"./Dialog-BnZ8dnOj.js";import"./RSPContexts-CFURB7yy.js";import"./OverlayArrow-5aYILyU8.js";import"./useControlledState-SUsbXgrM.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./Text-Djzy7Vo0.js";import"./SelectionManager-BQIYg6Kc.js";import"./useEvent-Bix3gDIS.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./ContextMenuView-fi2Y7Efy.js";import"./MenuItem-_hQtauxK.js";import"./ActionBatch-D8GPDYy5.js";import"./browser-DzYF9AGw.js";import"./getActionGroupSlot-B6jQShKX.js";import"./dynamic-GrVhUXuF.js";import"./ContextMenuSection-C0W18m8x.js";import"./Popover-CFUr0FGw.js";import"./Activity-hmGzuxT_.js";import"./inertValue-CUcJ8JFi.js";import"./useHasTabbableChild-CjMqDypF.js";import"./useSingleSelectListState-CeXm2CvS.js";import"./useListState-Cp64TmTU.js";import"./Heading-D2J3_q6l.js";import"./EmulatedBoldText-Dyut30RV.js";import"./useControlledHostValueProps-BuQGKxFM.js";import"./useFieldComponent-CbaMz5aY.js";import"./FieldDescription-WAwKPsRK.js";import"./TextField-CeJo-LsO.js";import"./FieldError-DNv3qA2U.js";import"./Form-XRNm8_rd.js";import"./Group-DV5U8v9N.js";import"./Input-7Pv0YxOe.js";import"./useTextField-CcrA4Fls.js";import"./useFormReset-BbhAN2Ls.js";import"./useFormValidation-BPzjnfej.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSmxVOAE.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
