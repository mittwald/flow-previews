import{r as h,j as r}from"./iframe-PZSwL5UI.js";import{P as m}from"./PasswordCreationField-C-wkEBZP.js";import{L as u}from"./Label-DHad4C3T.js";import{B as g}from"./Button-Dx8ytIXV.js";import{m as C}from"./IconWarning-Brl3hUMe.js";import{C as w}from"./CopyButton-B3a5eF8F.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDVyub9n.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./clsx-B-dksMZM.js";import"./index-Da7vmrj1.js";import"./ActionBatch-KmZgQ_FO.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./browser-Ds1bEyov.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./FieldDescription-D6wLWptA.js";import"./Text-CkpR2hqn.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./utils-lOj21ZD_.js";import"./Tooltip-BciKW2TA.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useFocus-BI7y428A.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./context-Ff7U_4vz.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C-2IcVPM.js";import"./useControlledState-DIXXzqms.js";import"./useFocusable-B4WRTgkS.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./ContextualHelpTrigger-Dpf4Y1ad.js";import"./Popover-sNv2wezL.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./Dialog-BxivZnjn.js";import"./Button-BQZ9yYEV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B1ZCcdw8.js";import"./RSPContexts-TcotrMre.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./OverlayTrigger-w9ToWuXF.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./useFieldComponent-BUmkKSsK.js";import"./FieldError-DI2vGfZA.js";import"./FieldError-mE8Rrcl-.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";import"./useControlledHostValueProps-Ddkm3ljY.js";import"./TextField-9pTBhuAO.js";import"./Form-BblXnLIP.js";import"./Group-DXdh9woI.js";import"./Input-uYjA58vR.js";import"./useTextField-CiLx_NKB.js";import"./useFormReset-DtrcblTn.js";import"./useFormValidation-BFZ87yhB.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-kHlSwNnH.js";import"./remote-mdYu2fN6.js";import"./react-children-utilities-CNGDxLGo.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
