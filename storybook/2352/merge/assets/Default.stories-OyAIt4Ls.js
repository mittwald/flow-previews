import{j as e,r as T}from"./iframe-DhXHhh1w.js";import{T as p,a as r,b as t}from"./Tab-BxqYbQ4c.js";import{S as d}from"./Section-BFL21Kdp.js";import{H as h}from"./Heading-W2uFhXaO.js";import{T as b}from"./Text-VjJbV_1P.js";import{T as g}from"./TextField-DcmJ_zd4.js";import{L as x}from"./Label-B97zndYQ.js";import{L as u}from"./LabeledValue-BQqp6kub.js";import{S as j}from"./Switch-BmIKIGRG.js";import{H as S}from"./Header-K6ogG_Ib.js";import{A as f}from"./AlertIcon-CowGyQyl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./clsx-B-dksMZM.js";import"./index-B6ijkuYI.js";import"./useRef-uAnVuJo1.js";import"./Button-DK8hND6e.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./LoadingSpinner-BQo0GQZs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./context-C0JBe_V4.js";import"./Button-B72XzUR4.js";import"./utils--GApMcJ9.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuFsm5YE.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocusable-DaonITQz.js";import"./ContextMenuTriggerView-C0wByplY.js";import"./ContextMenuTrigger-BMULQtXK.js";import"./OverlayTrigger-Dx4VUFaj.js";import"./Dialog-CefhgDMJ.js";import"./RSPContexts-BISy0hbD.js";import"./OverlayArrow-D0YkTT7M.js";import"./useControlledState-BAaAMcGs.js";import"./Collection-CjYz6Uc3.js";import"./CollectionBuilder-BLnwNesF.js";import"./SelectionIndicator-p-DrZhoI.js";import"./Separator-YN4gslNC.js";import"./Text-BhHd18lu.js";import"./SelectionManager-DsW2owD3.js";import"./useEvent-Ceq3h06g.js";import"./useCollator-CdSsm3Cn.js";import"./FocusScope-DTOX4bjf.js";import"./VisuallyHidden-B52Q2-iE.js";import"./useOverlayController-BReF9zcC.js";import"./useStatic-Cuuv0LOE.js";import"./OverlayContextProvider-CWHHdI4p.js";import"./ContextMenuView-BlRlb0aF.js";import"./MenuItem-Bo-6XXEy.js";import"./ActionBatch-CBOUg1fp.js";import"./browser-DC-Dnn5c.js";import"./getActionGroupSlot-BjPF_vWV.js";import"./dynamic-DY1DU2Hc.js";import"./ContextMenuSection-EAnCbrTf.js";import"./Popover-JroSLm89.js";import"./Activity-CrGTAcGw.js";import"./inertValue-TQVdc574.js";import"./useHasTabbableChild-DTz0WgO4.js";import"./useSingleSelectListState-X7m_H1vi.js";import"./useListState-CHf2faxN.js";import"./Heading-CrXwA3a4.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./useControlledHostValueProps-Bz_KAzkR.js";import"./useFieldComponent-CXGCADuw.js";import"./FieldDescription-Cpq8h0bA.js";import"./TextField-DASBnPfa.js";import"./FieldError-DoyTFare.js";import"./Form-Cr93Lgju.js";import"./Group-Bojaf2qr.js";import"./Input-CeMR8XUm.js";import"./useTextField-DHL_UDQT.js";import"./useFormReset-BhTKQiKR.js";import"./useFormValidation-Bi2teCon.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-QDMmy6Dg.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
