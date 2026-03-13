import{j as r}from"./iframe-CtEjVB66.js";import{N as t}from"./NumberField-DeCXr1YS.js";import{L as o}from"./Label-CvAjEv-1.js";import{F as l}from"./FieldDescription-DOW1EL7Z.js";import{F as d}from"./FieldError-BzQCv4a3.js";import{C as u,a as c}from"./ContextualHelpTrigger-CG8ysDtI.js";import{B as x}from"./Button-BbnjmOHy.js";import{T as g}from"./Text-QCKh6xRo.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-B7HNchXP.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./clsx-B-dksMZM.js";import"./index-it1EKrY8.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./useControlledHostValueProps-UR5SmFsp.js";import"./Button-Bk9_EddI.js";import"./utils-BuEQZICT.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./context-DXMIHXTO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./FieldError-DJZxrTcD.js";import"./Text-1qNOxJF7.js";import"./Form-Bs4UrYBw.js";import"./Group-BKGRpIrc.js";import"./Input-ByYkDHMz.js";import"./useControlledState-D0kLTbtR.js";import"./useFormValidation-ClIfwgLl.js";import"./useSpinButton-D2elMItD.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./useFormReset-2RZyXaKm.js";import"./useCollator-OQsKm26_.js";import"./useTextField-7MsF6vto.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./Popover-fmzRw_jU.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./Dialog-vhqDwDKM.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./OverlayTrigger-B8jwjQmG.js";import"./LoadingSpinner-CJX4ksrz.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Dr={title:"Form Controls/NumberField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsx(t,{onChange:h("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(l,{children:"Enter your age"})]})},s={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},p={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(d,{children:"Age is required"})]})},m={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},n={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(u,{children:[r.jsx(x,{ariaSlot:null}),r.jsx(c,{children:r.jsx(g,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Wr=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,n as WithContextualHelp,s as WithDefaultValue,a as WithFieldDescription,p as WithFieldError,m as WithUnit,Wr as __namedExportsOrder,Dr as default};
