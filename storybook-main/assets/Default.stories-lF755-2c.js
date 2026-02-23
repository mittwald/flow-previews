import{j as e,r as T}from"./iframe-BoiTaxGN.js";import{T as p,a as r,b as t}from"./Tab-BdZivCMU.js";import{S as d}from"./Section-Cq-t_YW4.js";import{H as h}from"./Heading-9cwIlFFB.js";import{T as b}from"./Text-ClfpXeTF.js";import{T as g}from"./TextField-DOJpbWhV.js";import{L as x}from"./Label-DgN2b341.js";import{L as u}from"./LabeledValue-Bu-i1VvV.js";import{S as j}from"./Switch-B3p6hgi_.js";import{H as S}from"./Header-j4td3Yuq.js";import{A as f}from"./AlertIcon-B1VBridV.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./clsx-B-dksMZM.js";import"./index-B9o0n-vC.js";import"./useRef-CEacQt_r.js";import"./Button-MYsVPgLO.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./LoadingSpinner-BBdroSRA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./Button-BZbFxF4O.js";import"./utils-RetFhwyR.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoLCzapA.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./ContextMenuTriggerView-B-aOXpHy.js";import"./ContextMenuTrigger-CEzSc6a_.js";import"./OverlayTrigger-Db6so5Mf.js";import"./Dialog-BL8T3CnU.js";import"./RSPContexts-9T8dsftx.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./Text-DnUg5-aR.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./ContextMenuView-BzV4qs6s.js";import"./MenuItem-CDDy6p-6.js";import"./ActionBatch-D2Yqxa5D.js";import"./browser-zBSS86_h.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./dynamic-X8snMUB4.js";import"./ContextMenuSection-CBBb0XeQ.js";import"./Popover-CKTt2h1_.js";import"./Activity-CSW94h2N.js";import"./inertValue-B1xGD7EG.js";import"./useHasTabbableChild-rCAAkM9a.js";import"./useSingleSelectListState-DdOEMzre.js";import"./useListState-BpBStQOM.js";import"./Heading-BcC1Qw26.js";import"./EmulatedBoldText-vFeun45o.js";import"./useControlledHostValueProps-7MsuqVNT.js";import"./useFieldComponent-DiiGd8t3.js";import"./FieldDescription-Dh4VnfJe.js";import"./TextField-Dx67xHNQ.js";import"./FieldError-C1wD6V1t.js";import"./Form-BMda5et4.js";import"./Group-bhKD4yJJ.js";import"./Input-CHjKW2hG.js";import"./useTextField-DcVWSpBm.js";import"./useFormReset-DsmV2EC6.js";import"./useFormValidation-CX6eZKbg.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BHW6-QSh.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
