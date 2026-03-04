import{j as e,r as T}from"./iframe-CwpToEZy.js";import{T as p,a as r,b as t}from"./Tab-pchWQZts.js";import{S as d}from"./Section-C5Yt0rDG.js";import{H as h}from"./Heading-BXHG1LZb.js";import{T as b}from"./Text-DRk3V-Fm.js";import{T as g}from"./TextField-AFIxc_v6.js";import{L as x}from"./Label-BX1OHHkE.js";import{L as u}from"./LabeledValue-DalmXNdr.js";import{S as j}from"./Switch-CqYSsJsi.js";import{H as S}from"./Header-DudCW5Lo.js";import{A as f}from"./AlertIcon-DEQIepDy.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./clsx-B-dksMZM.js";import"./index-G1voh-81.js";import"./useRef-Oq-jnguU.js";import"./Button-Cw2xgR_6.js";import"./IconWarning-BRui_VYo.js";import"./remote-DRomu556.js";import"./LoadingSpinner-CN3jmE_K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./context-DWVDZDUv.js";import"./Button-CuwTmUjn.js";import"./utils-3nROwXn_.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kUL6l53_.js";import"./useFocus-BFSvAolX.js";import"./useFocusRing-CJeIxJct.js";import"./useFocusable-ixEZOImu.js";import"./ContextMenuTriggerView-BOlqwjMt.js";import"./ContextMenuTrigger-Ba9AK00Z.js";import"./OverlayTrigger-Dh_IH1hG.js";import"./Dialog-CQ_DXP4m.js";import"./RSPContexts-DAz7wbZz.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./Text-Cb4d8n7F.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./useCollator-BrcTEP8q.js";import"./FocusScope-CBNoFIyM.js";import"./VisuallyHidden-CnggHClH.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./OverlayContextProvider-CBORYkOm.js";import"./ContextMenuView-q7t6qmSx.js";import"./MenuItem-CYuM5Mgh.js";import"./ActionBatch-DcvnwnMD.js";import"./browser-DhIaf7O7.js";import"./getActionGroupSlot-DtR43x--.js";import"./dynamic-CfOleVAa.js";import"./ContextMenuSection-vq3x4ZL9.js";import"./Popover-BSakkrK3.js";import"./Activity-uLkjB_wy.js";import"./inertValue-DWu22UWT.js";import"./useHasTabbableChild-yMoYMC8T.js";import"./useSingleSelectListState-LmCGzhuu.js";import"./useListState-Lv88ATzW.js";import"./Heading-CAz3skDU.js";import"./EmulatedBoldText-YNefbpnq.js";import"./useControlledHostValueProps-DFisVnNH.js";import"./useFieldComponent-CneqxYGw.js";import"./FieldDescription-64izSUV5.js";import"./TextField-DdZox5rD.js";import"./FieldError-BoYVEB6S.js";import"./Form-Di0COYqU.js";import"./Group-CMfRs64V.js";import"./Input-Nsfgb7CY.js";import"./useTextField-UBSbKfTG.js";import"./useFormReset-BARG9uBg.js";import"./useFormValidation-pFRcrJM7.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Doj7UKiV.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
