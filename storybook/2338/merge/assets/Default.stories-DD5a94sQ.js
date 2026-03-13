import{j as e,r as h}from"./iframe-BFddea_x.js";import{T as s,a as r,b as t}from"./Tab-D1Pmf8lL.js";import{S as d}from"./Section-DorsmKJX.js";import{H as T}from"./Heading-C7vi7fKP.js";import{T as x}from"./Text-B70YymId.js";import{T as j}from"./TextField-C4oclEWY.js";import{L as b}from"./Label-Cyz25dCh.js";import{L as u}from"./LabeledValue-ZzEtTOb7.js";import{S as f}from"./Switch-RNfkf9Un.js";import{H as S}from"./Header-fn7oWl5w.js";import{A as y}from"./AlertIcon-Bx7C3Aee.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./useRef-Cur5NpMF.js";import"./Button-DmFob37h.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Button-uqpwtIjO.js";import"./utils-D-aZUMcZ.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./ContextMenuTriggerView-BOHJmbf2.js";import"./ContextMenuTrigger-3uwZO5tE.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./useControlledState-lfI_swTV.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./Text-DndMRLn5.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./ContextMenuView-DevUZSFY.js";import"./MenuItem-JNwMZTFL.js";import"./ActionBatch-BLAWmMpV.js";import"./browser-PH3BUHM2.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./ContextMenuSection-C_9nT1gz.js";import"./Popover-BbCf_utC.js";import"./Activity-C0iptnnh.js";import"./inertValue-D2-oPnfQ.js";import"./useHasTabbableChild-DlIWSaEo.js";import"./useSingleSelectListState-mBGyXnhw.js";import"./useListState-D9wISQLY.js";import"./Heading-CkECWlTX.js";import"./EmulatedBoldText-C15EfUg3.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./useFieldComponent-DrOhnKye.js";import"./FieldDescription-DqsHbSnc.js";import"./TextField-Cha2rHT2.js";import"./FieldError-Dj7b6ixT.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useTextField-C79BrPY1.js";import"./useFormReset-C1U9nA2s.js";import"./useFormValidation-CYvJLeFF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-hE4ermpf.js";const er={title:"Navigation/Tabs",component:s,render:o=>e.jsxs(s,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(y,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(T,{children:"General"}),e.jsx(j,{defaultValue:"example@mittwald.de",children:e.jsx(b,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(T,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(b,{children:"Available storage"}),e.jsx(x,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Spam protection"}),e.jsx(f,{children:"Spam protection"})]}),e.jsx(x,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},n={},m={render:o=>{const[a,i]=h.useState("general");return e.jsxs(s,{...o,selectedKey:a,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},p={render:o=>{const[a,i]=h.useState("general");return h.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(s,{...o,selectedKey:a,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}},l={render:o=>e.jsx(s,{...o,children:Array(20).fill("").map((a,i)=>e.jsxs(r,{children:[e.jsx(t,{children:g.short}),e.jsx(d,{children:e.jsx(x,{children:g.long})})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      {Array(20).fill("").map((_, index) => <Tab key={index}>
            <TabTitle>{dummyText.short}</TabTitle>
            <Section>
              <Text>{dummyText.long}</Text>
            </Section>
          </Tab>)}
    </Tabs>
}`,...l.parameters?.docs?.source}}};const rr=["Default","Controlled","WithLinks","Collapsed"];export{l as Collapsed,m as Controlled,n as Default,p as WithLinks,rr as __namedExportsOrder,er as default};
