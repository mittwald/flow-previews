import{j as e,r as T}from"./iframe-Bh3xJiHl.js";import{T as p,a as r,b as t}from"./Tab-DAw1aKf9.js";import{S as d}from"./Section-CfFeFwol.js";import{H as h}from"./Heading-OKG0Iw9H.js";import{T as b}from"./Text-yap4nkEx.js";import{T as g}from"./TextField-DvP_RQ9Z.js";import{L as x}from"./Label-SNmrw9Fy.js";import{L as u}from"./LabeledValue-2gGXUNAT.js";import{S as j}from"./Switch-CSI0fQNR.js";import{H as S}from"./Header-CrBYvQQy.js";import{A as f}from"./AlertIcon-BebRztpd.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./clsx-B-dksMZM.js";import"./index-CTdhbmBU.js";import"./useRef-B9SaQVKF.js";import"./Button-C1GDS2T5.js";import"./IconWarning-BO5-ThfV.js";import"./remote-Bp1RK0aJ.js";import"./LoadingSpinner-DCCe8ZqR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./context-BR0BeWgQ.js";import"./Button-BNrfYXOb.js";import"./utils-Dfx959rT.js";import"./ProgressBar-f9Z69uXY.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXwac_uq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B8ZJpDXl.js";import"./useFocus-BHtMPlKM.js";import"./useFocusRing-BHUB4uMx.js";import"./useFocusable-BqTTqTxS.js";import"./ContextMenuTriggerView-Cpe5kWTG.js";import"./ContextMenuTrigger-t2pu2qhP.js";import"./OverlayTrigger-xf6EpmWh.js";import"./Dialog-CdFvlhxh.js";import"./RSPContexts-CiTjd_Cl.js";import"./OverlayArrow-D44cF5Xm.js";import"./useControlledState-cRERDsL1.js";import"./Collection-DIBLnAHN.js";import"./CollectionBuilder-CXW-gYlJ.js";import"./SelectionIndicator-CiZnwtLL.js";import"./Separator-C-kXScb9.js";import"./Text-CYmLgYN4.js";import"./SelectionManager-DY1RX6tv.js";import"./useEvent-Ck38Sl35.js";import"./useCollator-DwLdnUiO.js";import"./FocusScope-DSBEK_-_.js";import"./VisuallyHidden-CnocgGJn.js";import"./useOverlayController-DT1eg7nU.js";import"./useStatic-BN6jI5KS.js";import"./OverlayContextProvider-nbeISQDl.js";import"./ContextMenuView-CA6FDi5h.js";import"./MenuItem-Ck1eV_yE.js";import"./ActionBatch-i2QcTjWd.js";import"./browser-8DYgdl68.js";import"./getActionGroupSlot-1kHLqAyx.js";import"./dynamic-Cx5ap73z.js";import"./ContextMenuSection-rHl1P7lx.js";import"./Popover-DZO-XDYX.js";import"./Activity-Dwq51Bcq.js";import"./inertValue-DwDVdVlQ.js";import"./useHasTabbableChild-DoFcJ7nC.js";import"./useSingleSelectListState-CefC1vwq.js";import"./useListState-C68A14S2.js";import"./Heading-DtIx3EFz.js";import"./EmulatedBoldText-jamwOsD6.js";import"./useControlledHostValueProps-D11NzOUo.js";import"./useFieldComponent-DixKAqTB.js";import"./FieldDescription-DDUCZeUk.js";import"./TextField-CykpEZxz.js";import"./FieldError-DSfA25Iv.js";import"./Form-BYhBcXhc.js";import"./Group-DF5FwY7U.js";import"./Input-DfQ8ZFmJ.js";import"./useTextField-CocvbY9q.js";import"./useFormReset-CbcSutFk.js";import"./useFormValidation-DFhVz88J.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dz5O0ruM.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
