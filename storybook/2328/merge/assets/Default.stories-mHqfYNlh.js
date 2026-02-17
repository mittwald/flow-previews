import{r as h,j as r}from"./iframe-olJof__V.js";import{P as m}from"./PasswordCreationField-G-S76hME.js";import{L as u}from"./Label-6dyeRQav.js";import{B as g}from"./Button-CPlz8rsS.js";import{m as C}from"./IconWarning-Dxqo3db7.js";import{C as w}from"./CopyButton-DGrrqmnV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C_FBHMxE.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./clsx-B-dksMZM.js";import"./index-CQizCcaV.js";import"./ActionBatch-DqsTFo-5.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./browser-IACFT9IC.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./FieldDescription-Brn6Ug7r.js";import"./Text-Dd-S15-B.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Text-PinZmeRI.js";import"./utils-B7tchdhx.js";import"./Tooltip-0oRpL3fs.js";import"./OverlayArrow-B-0VQUib.js";import"./useFocus-C7qSpl6p.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./context-DOTF4vQp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D32aTWMq.js";import"./useControlledState-CGGJ5ydn.js";import"./useFocusable-3WtiVhvt.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./ContextualHelpTrigger-u-A1W7pL.js";import"./Popover-5M2oEFmF.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./Dialog-DOR07iZd.js";import"./Button-BzbIVXwM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UZLq5kUQ.js";import"./RSPContexts-BVirgRiO.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";import"./OverlayTrigger-CdRn1WXI.js";import"./Heading-CFjejIim.js";import"./Heading-CZbujKCp.js";import"./useFieldComponent-BI2nSVzd.js";import"./FieldError-l4UC5eIi.js";import"./FieldError-kWwHEGnK.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";import"./useControlledHostValueProps-4eMgz5oX.js";import"./TextField-8qzEMlSf.js";import"./Form-C73O4P0Z.js";import"./Group-BEx-apCS.js";import"./Input-C1ZdZWYR.js";import"./useTextField-1B8nRVmv.js";import"./useFormReset-BYGWiUrU.js";import"./useFormValidation-D5cIPr0y.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CT-rb4W5.js";import"./remote-BFSWQwUW.js";import"./react-children-utilities-Dt_ZyOVr.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
