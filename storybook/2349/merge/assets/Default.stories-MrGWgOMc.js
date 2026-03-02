import{j as e,r as T}from"./iframe-uf-MKLgq.js";import{T as p,a as r,b as t}from"./Tab-CC1qdZ8D.js";import{S as d}from"./Section-DfvDcT38.js";import{H as h}from"./Heading-8mXYZ3pK.js";import{T as b}from"./Text-CwTgn3ty.js";import{T as g}from"./TextField-BN8JSJ87.js";import{L as x}from"./Label-CnhLMz3J.js";import{L as u}from"./LabeledValue-GTUtOsWb.js";import{S as j}from"./Switch-Cqwzlg-J.js";import{H as S}from"./Header-D5zeyc4u.js";import{A as f}from"./AlertIcon-C9HYB2oh.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./clsx-B-dksMZM.js";import"./index-CTOYeHPx.js";import"./useRef-3qUKYuqY.js";import"./Button-mfbo0dyR.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./LoadingSpinner-CRqWvqjj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./Button-Dm2G6Gzh.js";import"./utils-DZ6AixXo.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./ContextMenuTriggerView-2RQJPGti.js";import"./ContextMenuTrigger-Ali9iwI2.js";import"./OverlayTrigger-CMeRMZHt.js";import"./Dialog-CWJBmICf.js";import"./RSPContexts-nECt4NUH.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./Text-DCWOF5Yr.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./ContextMenuView-BMNG4QOv.js";import"./MenuItem-N-AN0kYy.js";import"./ActionBatch-zb8alXiJ.js";import"./browser-CS6yJLU7.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./dynamic-fPlHFb8V.js";import"./ContextMenuSection-HEPeHMf2.js";import"./Popover-C0XtAWTr.js";import"./Activity-aPO4aFNj.js";import"./inertValue-CNTNHHFx.js";import"./useHasTabbableChild-DJlRQp4S.js";import"./useSingleSelectListState-UIgzrL0w.js";import"./useListState-CW3KtOvL.js";import"./Heading-C369PV89.js";import"./EmulatedBoldText-BnnwN73K.js";import"./useControlledHostValueProps-CVNKjYkZ.js";import"./useFieldComponent-oiltg6td.js";import"./FieldDescription-Xe8FFH5r.js";import"./TextField-C1YIqqpg.js";import"./FieldError-hMdCLiLA.js";import"./Form-Clq2RMYH.js";import"./Group-DfUk4kcb.js";import"./Input-Da_fVGjz.js";import"./useTextField--0uHRALa.js";import"./useFormReset-D43--mAD.js";import"./useFormValidation-DWm9SC-U.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BBiYn79e.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
