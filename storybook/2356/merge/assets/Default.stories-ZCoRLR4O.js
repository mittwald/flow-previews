import{j as e,r as T}from"./iframe-1Z6hWL0q.js";import{T as p,a as r,b as t}from"./Tab-CmXUt3lI.js";import{S as d}from"./Section-DeLmOfWa.js";import{H as h}from"./Heading-Dc2YOm8x.js";import{T as b}from"./Text-NSg919ow.js";import{T as g}from"./TextField-Dk7eOaos.js";import{L as x}from"./Label-BLX0X_A7.js";import{L as u}from"./LabeledValue-D6gbaWds.js";import{S as j}from"./Switch-B-VLBLW_.js";import{H as S}from"./Header-ChTEMwth.js";import{A as f}from"./AlertIcon-Blha7MMy.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./clsx-B-dksMZM.js";import"./index-OoNE8c9e.js";import"./useRef-B1h6Z-hA.js";import"./Button-Up8_TRdV.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./LoadingSpinner-B9ElqUFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./Button-DpyZuV_i.js";import"./utils-B0Ub4KXD.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./ContextMenuTriggerView--PYHkaDo.js";import"./ContextMenuTrigger-0qkKxpGM.js";import"./OverlayTrigger-RBcMGmOK.js";import"./Dialog-BOSurAfE.js";import"./RSPContexts-BZtvqclp.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./Text-DPhytgE2.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./useOverlayController-zDyCyx1O.js";import"./useStatic-BMrg-KZz.js";import"./OverlayContextProvider-BlmnF6zY.js";import"./ContextMenuView-DWZJN7M1.js";import"./MenuItem-CmS-crKu.js";import"./ActionBatch-B4cDzNNZ.js";import"./browser-OyZXUgp8.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./dynamic-CeVErRgL.js";import"./ContextMenuSection-DH07SvAX.js";import"./Popover-CCF5Rtw1.js";import"./Activity-B2jzRzFv.js";import"./inertValue-DxVyibCO.js";import"./useHasTabbableChild-C_6WKHE6.js";import"./useSingleSelectListState-fXgVbtJr.js";import"./useListState-CewanPza.js";import"./Heading-BTDLHxEZ.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./useControlledHostValueProps-BvMdvEJ5.js";import"./useFieldComponent-DdzfuZRi.js";import"./FieldDescription-C0-dYFJA.js";import"./TextField-BnTf1_ly.js";import"./FieldError-CZQJbtEC.js";import"./Form-DiZWQd7A.js";import"./Group-C0vzpAPe.js";import"./Input-DsXoSrKb.js";import"./useTextField-BR1rOsD2.js";import"./useFormReset-BI-pxd56.js";import"./useFormValidation-B95RxpRV.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bf8yXfZi.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
