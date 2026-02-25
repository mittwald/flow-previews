import{j as e,r as T}from"./iframe-n3VOiEf5.js";import{T as p,a as r,b as t}from"./Tab-d_5SXGlR.js";import{S as d}from"./Section-BlfcbXvq.js";import{H as h}from"./Heading-C6n9bJf2.js";import{T as b}from"./Text-CwVjZxCT.js";import{T as g}from"./TextField-Dy8qEIvf.js";import{L as x}from"./Label-B5oQkcZ-.js";import{L as u}from"./LabeledValue-BqPTa8EI.js";import{S as j}from"./Switch-DsBZ3dut.js";import{H as S}from"./Header-CVs0j4xb.js";import{A as f}from"./AlertIcon-DtfTxuVy.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./clsx-B-dksMZM.js";import"./index-CHzAo02W.js";import"./useRef-D3Fh0Wul.js";import"./Button-gwePC8r8.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./LoadingSpinner-BZywMYAM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./context-DhQskmxc.js";import"./Button-Dt8pRNpU.js";import"./utils-BTX3Dk-t.js";import"./ProgressBar-C4tpbq9V.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpN8AhZi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVHN3NRW.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useFocusable-ZTBPsPh1.js";import"./ContextMenuTriggerView-B395wK9V.js";import"./ContextMenuTrigger-CdM56nvW.js";import"./OverlayTrigger-CSrVMpec.js";import"./Dialog-Be8vTliz.js";import"./RSPContexts-DzW0xATd.js";import"./OverlayArrow-Tc6q1y2y.js";import"./useControlledState-17a16_5D.js";import"./Collection-2dWh1OBC.js";import"./CollectionBuilder-pL0vDcKt.js";import"./SelectionIndicator-QXVr0AO7.js";import"./Separator-XftYj5HO.js";import"./Text-BWj5dCJ1.js";import"./SelectionManager-Bh8KZa3d.js";import"./useEvent-D6V5lpJs.js";import"./useCollator-BWOk8TKb.js";import"./FocusScope-BBR4OeS8.js";import"./VisuallyHidden-DCK-vxP3.js";import"./useOverlayController-BNiAcUvH.js";import"./useStatic-CMDkRNZz.js";import"./OverlayContextProvider-BOvHDlNa.js";import"./ContextMenuView--vSznFHk.js";import"./MenuItem-3p5cxjdq.js";import"./ActionBatch-B7NWJImq.js";import"./browser-DXFXi5M2.js";import"./getActionGroupSlot-CP2KeStW.js";import"./dynamic-DgHDUJEW.js";import"./ContextMenuSection-MotZbouy.js";import"./Popover-BLdDdbLq.js";import"./Activity-HILGTHCn.js";import"./inertValue-DXJpcKku.js";import"./useHasTabbableChild-C4yyKbfV.js";import"./useSingleSelectListState-Bb2Q7hm7.js";import"./useListState-C5J02ffj.js";import"./Heading-Dk8PIdV3.js";import"./EmulatedBoldText-eIBSog0P.js";import"./useControlledHostValueProps-DYpQw2Tg.js";import"./useFieldComponent-6hUMLoYk.js";import"./FieldDescription-CP4R52YC.js";import"./TextField-D-W_Q7sn.js";import"./FieldError-IZ2wmqkG.js";import"./Form-BfOiuDw8.js";import"./Group-DIIOLL_5.js";import"./Input-IuhSVj8_.js";import"./useTextField-CM82iaRH.js";import"./useFormReset-C-KjP2af.js";import"./useFormValidation-0mLIssn1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CoPURb0B.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
