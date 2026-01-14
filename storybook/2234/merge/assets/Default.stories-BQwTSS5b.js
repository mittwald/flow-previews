import{j as r}from"./iframe-ByN7k_Da.js";import{N as o}from"./NumberField-LieD08We.js";import{L as t}from"./Label-BBHPfwM0.js";import{F as c}from"./FieldDescription-Brq0GRUO.js";import{F as g}from"./FieldError-Dqic_FOg.js";import{C as x,a as b}from"./ContextualHelpTrigger-eFhUVosc.js";import{B as h}from"./Button-DLduC619.js";import{T as F}from"./Text-Cb-8LAS5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DAKvP2zf.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./clsx-B-dksMZM.js";import"./index-bUl7c0HC.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./useControlledHostValueProps-Qs5xXZ1D.js";import"./Button-CAFU8pmb.js";import"./utils-D8xEYOuW.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./context-rGL7bC8_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./FieldError-JBJ_RfAm.js";import"./Text-j0nufsIB.js";import"./Form-Ccgq6KTF.js";import"./Group-DdqPhRGU.js";import"./Input-BhhO42Bj.js";import"./useControlledState-kSDz6lD9.js";import"./useFormValidation-C6EqEf55.js";import"./useSpinButton-CQyF4G42.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./useFormReset-Bc5cKrWY.js";import"./useEvent-ByW2yFDz.js";import"./useTextField-C-YehVVB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";import"./Popover-C4a2YCNk.js";import"./useOverlayController-B-zt5KRt.js";import"./context-D7USXnL-.js";import"./useStatic-BKQ_69l_.js";import"./OverlayContextProvider-CJmTzcIB.js";import"./Dialog-Cvkq5YiV.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./SelectionManager-DzIRAneQ.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./VisuallyHidden-CV3OLvgc.js";import"./OverlayTrigger-CEg2Xl2L.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./browser-Co1wUnJx.js";import"./EmulatedBoldText-BCkrp6N6.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
