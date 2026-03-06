import{j as e,r as h}from"./iframe-DBOgS3cI.js";import{T as s,a as r,b as t}from"./Tab-BzwegBSk.js";import{S as d}from"./Section-B03hcWHL.js";import{H as T}from"./Heading-BbxqBEBp.js";import{T as x}from"./Text-V6WF8rgy.js";import{T as j}from"./TextField-BNdWLONv.js";import{L as b}from"./Label-DEbA9P8V.js";import{L as u}from"./LabeledValue-B1ZacUS9.js";import{S as f}from"./Switch-Dz00-TDx.js";import{H as S}from"./Header-C1_tm8HO.js";import{A as y}from"./AlertIcon-CCMDdz-U.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./useRef-CYQsz7t1.js";import"./Button-DeSyDtjE.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./LoadingSpinner-BMYl670W.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./Button-Dkv5VJcx.js";import"./utils-BhJeINWq.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./ContextMenuTriggerView-BWSyu6_e.js";import"./ContextMenuTrigger-BTpScWVR.js";import"./OverlayTrigger-B4nPvJJx.js";import"./Dialog-DyC1f_Bj.js";import"./RSPContexts-Dpo7G8Um.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./Text-TZlAM5yA.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./ContextMenuView-BT_Ijria.js";import"./MenuItem-DrhMcXlQ.js";import"./ActionBatch-C1BOMxBF.js";import"./browser-aVPMedyb.js";import"./getActionGroupSlot-BVP40Z09.js";import"./dynamic-Daa1kuSR.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./Popover-BfI_0-2O.js";import"./Activity-CAI3lk_O.js";import"./inertValue-B2Cq8SDG.js";import"./useHasTabbableChild-Bp6DgJQe.js";import"./useSingleSelectListState-Ch5ie5Ia.js";import"./useListState-BMuavApX.js";import"./Heading-BTHBDnxA.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./useFieldComponent-pONIfnVv.js";import"./FieldDescription-CSCgjXc1.js";import"./TextField-BdIP0Lrm.js";import"./FieldError-C8B5aabp.js";import"./Form-BBY5sklR.js";import"./Group-DPP3NL9M.js";import"./Input-1Fi11bbE.js";import"./useTextField-DdxpKlHp.js";import"./useFormReset-M_TceD0b.js";import"./useFormValidation-BF3CckmA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-iWMvozdM.js";const $e={title:"Navigation/Tabs",component:s,render:o=>e.jsxs(s,{...o,disabledKeys:["spam"],children:[e.jsxs(r,{id:"general",children:[e.jsxs(t,{children:["General",e.jsx(y,{status:"info"})]}),e.jsxs(d,{children:[e.jsx(T,{children:"General"}),e.jsx(j,{defaultValue:"example@mittwald.de",children:e.jsx(b,{children:"Mail address"})})]})]}),e.jsxs(r,{id:"storage",children:[e.jsx(t,{children:"Storage settings"}),e.jsxs(d,{children:[e.jsx(T,{children:"Storage"}),e.jsxs(u,{children:[e.jsx(b,{children:"Available storage"}),e.jsx(x,{children:"2.4 GB"})]})]})]}),e.jsxs(r,{id:"spam",children:[e.jsx(t,{children:"Spam"}),e.jsxs(d,{children:[e.jsxs(S,{children:[e.jsx(T,{children:"Spam protection"}),e.jsx(f,{children:"Spam protection"})]}),e.jsx(x,{children:"The spam filter protects you from unwanted emails. Nobody wants garbage in their inbox, so we recommend that you always leave spam protection activated."})]})]})]})},n={},m={render:o=>{const[a,i]=h.useState("general");return e.jsxs(s,{...o,selectedKey:a,onSelectionChange:c=>i(c),children:[e.jsx(r,{id:"general",children:e.jsx(t,{children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{children:"Storage settings"})})]})}},p={render:o=>{const[a,i]=h.useState("general");return h.useEffect(()=>{const c=setInterval(()=>{i(window.location.hash.slice(1))},100);return()=>clearInterval(c)},[i]),e.jsxs(s,{...o,selectedKey:a,children:[e.jsx(r,{id:"general",children:e.jsx(t,{href:"#general",children:"General"})}),e.jsx(r,{id:"storage",children:e.jsx(t,{href:"#storage",children:"Storage settings"})})]})}},l={render:o=>e.jsx(s,{...o,children:Array(20).fill("").map((a,i)=>e.jsxs(r,{children:[e.jsx(t,{children:g.short}),e.jsx(d,{children:e.jsx(x,{children:g.long})})]},i))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
