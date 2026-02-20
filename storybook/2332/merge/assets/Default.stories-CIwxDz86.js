import{j as e,r as T}from"./iframe-BF3zk0it.js";import{T as p,a as r,b as t}from"./Tab-Bw2wwNav.js";import{S as d}from"./Section-CrNjTCEJ.js";import{H as h}from"./Heading-Dtu6R2J5.js";import{T as b}from"./Text-C9_U4GIb.js";import{T as g}from"./TextField-BoljmF4n.js";import{L as x}from"./Label-DcRc8bay.js";import{L as u}from"./LabeledValue-CBOGXfiL.js";import{S as j}from"./Switch-gHfb8p7j.js";import{H as S}from"./Header-CwC-UCS7.js";import{A as f}from"./AlertIcon-CwrMzrhG.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./useRef-C7wP-y9c.js";import"./Button-ZNdemegp.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./LoadingSpinner-BryS_W8u.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./context-B_W42rBs.js";import"./Button-CioOZKSP.js";import"./utils-Ds629Okb.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqnzUH3I.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./ContextMenuTriggerView-jIod8JpQ.js";import"./ContextMenuTrigger-CLnx66A6.js";import"./OverlayTrigger-C5NrL7-k.js";import"./Dialog-IYHamviF.js";import"./RSPContexts-ssfE85JL.js";import"./OverlayArrow-CX6asWYb.js";import"./useControlledState-ChKdFYY_.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./Text-CwwNB0nU.js";import"./SelectionManager-C8OuUWxs.js";import"./useEvent-CjKJuTgN.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./ContextMenuView-31tI3rx6.js";import"./MenuItem-Y5_Oqunz.js";import"./ActionBatch-DvnrQlZS.js";import"./browser-Cxel5Cqf.js";import"./getActionGroupSlot-CNuqOxpA.js";import"./dynamic-DMyjxIhV.js";import"./ContextMenuSection-DmXH8tfJ.js";import"./Popover-CIOQTdzG.js";import"./Activity-CmKbXn7v.js";import"./inertValue-CRAlhNuz.js";import"./useHasTabbableChild-B9rA5f8d.js";import"./useSingleSelectListState-DWnEk_6i.js";import"./useListState-BM6zQybk.js";import"./Heading-N6x-j70c.js";import"./EmulatedBoldText-tEygNJi1.js";import"./useControlledHostValueProps-C-DklFre.js";import"./useFieldComponent-Z2yLJYUo.js";import"./FieldDescription-CYCZIfgJ.js";import"./TextField-CN-_Qj1L.js";import"./FieldError-WTvIa9hl.js";import"./Form-r-oZJvOh.js";import"./Group-Bhaa4wBz.js";import"./Input-Q6yM49Eu.js";import"./useTextField-CQuzVOOK.js";import"./useFormReset-Dd7cUUSK.js";import"./useFormValidation-Clvn3NKc.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ZrzPMdJs.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
