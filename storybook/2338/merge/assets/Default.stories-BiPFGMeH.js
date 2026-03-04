import{j as e,r as h}from"./iframe-CBpAxFwW.js";import{T as s,a as r,b as t}from"./Tab-BwdyCfIx.js";import{S as d}from"./Section-7R7SCXQ7.js";import{H as T}from"./Heading-MOWZhQDK.js";import{T as x}from"./Text-DmIlada7.js";import{T as j}from"./TextField-O3WXJJAC.js";import{L as b}from"./Label-D9Ki8i5H.js";import{L as u}from"./LabeledValue-B1iVs4SQ.js";import{S as f}from"./Switch-B7prEYzL.js";import{H as S}from"./Header-C1k2BjeO.js";import{A as y}from"./AlertIcon-DpBhbRLN.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./clsx-B-dksMZM.js";import"./index-RPWHkLuG.js";import"./useRef-DPhMCXJT.js";import"./Button-DJILh_tx.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./LoadingSpinner-kKg7jHcI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./Button-B6LJ-bNf.js";import"./utils-DlBHsIHw.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./ContextMenuTriggerView-DSCpOsfq.js";import"./ContextMenuTrigger-C4hUd_HP.js";import"./OverlayTrigger-BoEnaKfv.js";import"./Dialog-r9nlMSfh.js";import"./RSPContexts-C97_Ku7o.js";import"./OverlayArrow-B4tyB_eB.js";import"./useControlledState-cot2auG7.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./ContextMenuView-RNLYuy3S.js";import"./MenuItem-ZZ_2Y6z8.js";import"./ActionBatch-BgON7N4c.js";import"./browser-Bc0l3UGu.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./dynamic-CE4App5Z.js";import"./ContextMenuSection-CSCUKvfx.js";import"./Popover-CbjXFr2h.js";import"./Activity-MtLO1KS0.js";import"./inertValue-D3WrytAr.js";import"./useHasTabbableChild-BhrQa_i4.js";import"./useSingleSelectListState-MeavFs2n.js";import"./useListState-Wt_3TDK_.js";import"./Heading-CaCePfIe.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./useControlledHostValueProps-H85_02BB.js";import"./useFieldComponent-PtL7ZYGA.js";import"./FieldDescription-cbN0tmKj.js";import"./TextField-U22TZmuN.js";import"./FieldError-Bok8s5mY.js";import"./Form-AlqHr7_t.js";import"./Group-gQkRnR_I.js";import"./Input-lDcabwyv.js";import"./useTextField-W7kX8bZQ.js";import"./useFormReset-DcIaZXr3.js";import"./useFormValidation-D1j-Spao.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-C2wamhi2.js";const $e={title:"Navigation/Tabs",component:s,render:o=>e.jsxs(s,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(y,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(T,{children:"General"}),e.jsx(j,{defaultValue:"example@mittwald.de",children:e.jsx(b,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(T,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(b,{children:"Available storage"}),e.jsx(x,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Spam protection"}),e.jsx(f,{children:"Spam protection"})]}),e.jsx(x,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},n={},m={render:o=>{const[a,i]=h.useState("general");return e.jsxs(s,{...o,selectedKey:a,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},p={render:o=>{const[a,i]=h.useState("general");return h.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(s,{...o,selectedKey:a,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}},l={render:o=>e.jsx(s,{...o,children:Array(20).fill("").map((a,i)=>e.jsxs(r,{children:[e.jsx(t,{children:g.short}),e.jsx(d,{children:e.jsx(x,{children:g.long})})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
