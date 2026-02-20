import{j as e,r as T}from"./iframe-B-dt22EB.js";import{T as p,a as r,b as t}from"./Tab-DtAVKA5T.js";import{S as d}from"./Section-DON1SGHH.js";import{H as h}from"./Heading-8-mNxmV-.js";import{T as b}from"./Text-BCqKdXYs.js";import{T as g}from"./TextField-0s8Lsf5H.js";import{L as x}from"./Label-DPQ9pprY.js";import{L as u}from"./LabeledValue-DXtelEiQ.js";import{S as j}from"./Switch-N2fkKqP1.js";import{H as S}from"./Header-CJyjVg-e.js";import{A as f}from"./AlertIcon-B1kQf0Ru.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./clsx-B-dksMZM.js";import"./index-D5JlC3xK.js";import"./useRef-BONyqAVJ.js";import"./Button-Cfktl1nd.js";import"./IconWarning-BbozUbXF.js";import"./remote-D6Q14pEz.js";import"./LoadingSpinner-ISzATTs8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./Button-CjYcjBnT.js";import"./utils-DoxtMd58.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKpYilGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgYKrzfD.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./useFocusable-C0Z9ZNeY.js";import"./ContextMenuTriggerView-DXEFma3U.js";import"./ContextMenuTrigger-CqEI6DDS.js";import"./OverlayTrigger-MgjR2AzX.js";import"./Dialog-C7TrFuKD.js";import"./RSPContexts-pIsu_52Z.js";import"./OverlayArrow-Drn8uqTb.js";import"./useControlledState-jk51FjyI.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./Text-vBmBwiIT.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./OverlayContextProvider-COc2hxmN.js";import"./ContextMenuView-D0DytNXj.js";import"./MenuItem-DE2PUUyS.js";import"./ActionBatch-DMUImU48.js";import"./browser-CJi_ki0i.js";import"./getActionGroupSlot-DUUveJ77.js";import"./dynamic-Ci7OcZKZ.js";import"./ContextMenuSection-3gHTEPd_.js";import"./Popover-52nhHqtt.js";import"./Activity-DjBTnj5h.js";import"./inertValue-BlAbJWD0.js";import"./useHasTabbableChild-C5QFwIf2.js";import"./useSingleSelectListState-DI9BJAH7.js";import"./useListState-D6l0V3Qx.js";import"./Heading-jN8dhiFm.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./useControlledHostValueProps-AfSNk-Xd.js";import"./useFieldComponent-D2j3Q6-m.js";import"./FieldDescription-DkcWcefH.js";import"./TextField-D0alrL8F.js";import"./FieldError-BkuObk6W.js";import"./Form-DTBJD-53.js";import"./Group-Cgb--nht.js";import"./Input-1avyZMmc.js";import"./useTextField-Dar2ncjY.js";import"./useFormReset-BwldCtpD.js";import"./useFormValidation-Ds3P2hMN.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DTz9iBTS.js";const Ze={title:"Navigation/Tabs",component:p,render:o=>e.jsxs(p,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(f,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(h,{children:"General"}),e.jsx(g,{defaultValue:"example@mittwald.de",children:e.jsx(x,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(h,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(x,{children:"Available storage"}),e.jsx(b,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(h,{children:"Spam protection"}),e.jsx(j,{children:"Spam protection"})]}),e.jsx(b,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},a={},s={parameters:{viewport:{defaultViewport:"mobile1"}}},n={render:o=>{const[l,i]=T.useState("general");return e.jsxs(p,{...o,selectedKey:l,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},m={render:o=>{const[l,i]=T.useState("general");return T.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(p,{...o,selectedKey:l,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
