import{j as r}from"./iframe-BcqfzoOA.js";import{N as t}from"./NumberField-gMqfd9RW.js";import{L as o}from"./Label-CQjtN3Gn.js";import{F as l}from"./FieldDescription-BAMY7EMv.js";import{F as d}from"./FieldError-COredAmn.js";import{C as u,a as c}from"./ContextualHelpTrigger-CZtZy0Ll.js";import{B as x}from"./Button-C2msjhlA.js";import{T as g}from"./Text-1XRmWCfn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CSNqGKWj.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./clsx-B-dksMZM.js";import"./index-AZuRIocR.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./useControlledHostValueProps-BWvMzPF4.js";import"./Button-CG09EaR6.js";import"./utils-Bwp7PlhH.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./context-qhtcW2k7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Lauho74f.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./FieldError-BECkkLSz.js";import"./Text-CALsrB3x.js";import"./Form-CTjpA6Q_.js";import"./Group-CA7st2Jb.js";import"./Input-Bku180kF.js";import"./useControlledState-DVjnE-U4.js";import"./useFormValidation-BMgNFXni.js";import"./useSpinButton-Cc2xdZDW.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./useFormReset-neBkOLPK.js";import"./useCollator-B74toyi9.js";import"./useTextField-C_zoOVrm.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./Popover-lZTmTyt9.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./Dialog-Ce_unDUt.js";import"./RSPContexts-D9SkabFV.js";import"./OverlayArrow-BhCzySYR.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./OverlayTrigger-CxrHdMrt.js";import"./LoadingSpinner-ULzpGe8L.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/NumberField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsx(t,{onChange:h("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(l,{children:"Enter your age"})]})},s={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},p={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(d,{children:"Age is required"})]})},m={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},n={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(u,{children:[r.jsx(x,{ariaSlot:null}),r.jsx(c,{children:r.jsx(g,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...n.parameters?.docs?.source}}};const Dr=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,n as WithContextualHelp,s as WithDefaultValue,a as WithFieldDescription,p as WithFieldError,m as WithUnit,Dr as __namedExportsOrder,Sr as default};
