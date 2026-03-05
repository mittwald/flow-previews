import{j as e,r as h}from"./iframe-BcqfzoOA.js";import{T as s,a as r,b as t}from"./Tab-D2-8B6XX.js";import{S as d}from"./Section-B_QgMIam.js";import{H as T}from"./Heading-CPq-dFYl.js";import{T as x}from"./Text-1XRmWCfn.js";import{T as j}from"./TextField-DLmieK6n.js";import{L as b}from"./Label-CQjtN3Gn.js";import{L as u}from"./LabeledValue-B6_I_nS2.js";import{S as f}from"./Switch-CG8jmhCA.js";import{H as S}from"./Header-B2fgSjyF.js";import{A as y}from"./AlertIcon-DTPBfeU8.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./useRef-0Ps7frL9.js";import"./Button-C2msjhlA.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./Button-CG09EaR6.js";import"./utils-Bwp7PlhH.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./ContextMenuTriggerView-BRGoSHTV.js";import"./ContextMenuTrigger-C9u8PzU3.js";import"./OverlayTrigger-CxrHdMrt.js";import"./Dialog-Ce_unDUt.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./useControlledState-DVjnE-U4.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./Text-CALsrB3x.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./ContextMenuView-Dw0Nhy61.js";import"./MenuItem-DB-rb3HN.js";import"./ActionBatch-D231mKj-.js";import"./browser-CFz57TUe.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./ContextMenuSection-CYrr5VC5.js";import"./Popover-lZTmTyt9.js";import"./Activity-eGns25BO.js";import"./inertValue-CrHbZ2Zz.js";import"./useHasTabbableChild-DG1kiXTD.js";import"./useSingleSelectListState-efA334IJ.js";import"./useListState-LsAOIPre.js";import"./Heading-ZbAppe82.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./useFieldComponent-CSNqGKWj.js";import"./FieldDescription-BAMY7EMv.js";import"./TextField-KO7DCant.js";import"./FieldError-BECkkLSz.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useTextField-C_zoOVrm.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CCPEOAsS.js";const $e={title:"Navigation/Tabs",component:s,render:o=>e.jsxs(s,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(y,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(T,{children:"General"}),e.jsx(j,{defaultValue:"example@mittwald.de",children:e.jsx(b,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(T,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(b,{children:"Available storage"}),e.jsx(x,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Spam protection"}),e.jsx(f,{children:"Spam protection"})]}),e.jsx(x,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},n={},m={render:o=>{const[a,i]=h.useState("general");return e.jsxs(s,{...o,selectedKey:a,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},p={render:o=>{const[a,i]=h.useState("general");return h.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(s,{...o,selectedKey:a,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}},l={render:o=>e.jsx(s,{...o,children:Array(20).fill("").map((a,i)=>e.jsxs(r,{children:[e.jsx(t,{children:g.short}),e.jsx(d,{children:e.jsx(x,{children:g.long})})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const er=["Default","Controlled","WithLinks","Collapsed"];export{l as Collapsed,m as Controlled,n as Default,p as WithLinks,er as __namedExportsOrder,$e as default};
