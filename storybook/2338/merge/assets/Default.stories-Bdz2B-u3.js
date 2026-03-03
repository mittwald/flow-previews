import{j as e,r as h}from"./iframe-BZ1p44Xs.js";import{T as s,a as r,b as t}from"./Tab-CDHNZhK8.js";import{S as d}from"./Section-DYkPYl1t.js";import{H as T}from"./Heading-DAuGI7Cj.js";import{T as x}from"./Text-CplKG2wk.js";import{T as j}from"./TextField-WCja-bxL.js";import{L as b}from"./Label-HK0aVnMe.js";import{L as u}from"./LabeledValue-RdkGefbL.js";import{S as f}from"./Switch-C5Kq8j5J.js";import{H as S}from"./Header-BoPdPmAT.js";import{A as y}from"./AlertIcon-CBSVIKWa.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./useRef-Cx2IQloG.js";import"./Button-BXzJaHaH.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./Button-DOqybSdu.js";import"./utils-Cc2PUaBi.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./ContextMenuTriggerView-Cz8K08k4.js";import"./ContextMenuTrigger-rOh1KcX0.js";import"./OverlayTrigger-DzQUlxLA.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./Text-DOPFHCGV.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./ContextMenuView-DfE9CC6P.js";import"./MenuItem-BgzEiv_9.js";import"./ActionBatch-kp--iEDz.js";import"./browser-N7XS9wRL.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./ContextMenuSection-FMJg67QM.js";import"./Popover-CWPz-1RW.js";import"./Activity--cBqpy2O.js";import"./inertValue-C1QIQuKx.js";import"./useHasTabbableChild-BPF2_WzA.js";import"./useSingleSelectListState-MkXC4Mb0.js";import"./useListState-DphkU8Wk.js";import"./Heading-acaQddxn.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./useFieldComponent-CdmiPNAX.js";import"./FieldDescription-PY5u12Fd.js";import"./TextField-BFG4RQnU.js";import"./FieldError-DP4FZd0x.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useTextField-CmQ5R2lB.js";import"./useFormReset-zSbsyNkN.js";import"./useFormValidation-oY9u4Y5a.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DudHCVeE.js";const $e={title:"Navigation/Tabs",component:s,render:o=>e.jsxs(s,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(y,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(T,{children:"General"}),e.jsx(j,{defaultValue:"example@mittwald.de",children:e.jsx(b,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(T,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(b,{children:"Available storage"}),e.jsx(x,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Spam protection"}),e.jsx(f,{children:"Spam protection"})]}),e.jsx(x,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},n={},m={render:o=>{const[a,i]=h.useState("general");return e.jsxs(s,{...o,selectedKey:a,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},p={render:o=>{const[a,i]=h.useState("general");return h.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(s,{...o,selectedKey:a,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}},l={render:o=>e.jsx(s,{...o,children:Array(20).fill("").map((a,i)=>e.jsxs(r,{children:[e.jsx(t,{children:g.short}),e.jsx(d,{children:e.jsx(x,{children:g.long})})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
