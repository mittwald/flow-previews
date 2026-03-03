import{j as r}from"./iframe-BZ1p44Xs.js";import{N as t}from"./NumberField-CUMFbJja.js";import{L as o}from"./Label-HK0aVnMe.js";import{F as l}from"./FieldDescription-PY5u12Fd.js";import{F as d}from"./FieldError-t823MHuJ.js";import{C as u,a as c}from"./ContextualHelpTrigger-Dzsj7OvC.js";import{B as x}from"./Button-BXzJaHaH.js";import{T as g}from"./Text-CplKG2wk.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CdmiPNAX.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./clsx-B-dksMZM.js";import"./index-39FgH5sT.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./useControlledHostValueProps-Db0xokP4.js";import"./Button-DOqybSdu.js";import"./utils-Cc2PUaBi.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./context-C5KsUqFD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./FieldError-DP4FZd0x.js";import"./Text-DOPFHCGV.js";import"./Form-Lw3Ehme-.js";import"./Group-BUA_nOmN.js";import"./Input-Bt20yVH7.js";import"./useControlledState-CZ5q_fud.js";import"./useFormValidation-oY9u4Y5a.js";import"./useSpinButton-BtppQm-i.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./useFormReset-zSbsyNkN.js";import"./useCollator-D08tnIgu.js";import"./useTextField-CmQ5R2lB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";import"./Popover-CWPz-1RW.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./OverlayTrigger-DzQUlxLA.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/NumberField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsx(t,{onChange:h("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(l,{children:"Enter your age"})]})},s={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},p={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(d,{children:"Age is required"})]})},m={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},n={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(u,{children:[r.jsx(x,{ariaSlot:null}),r.jsx(c,{children:r.jsx(g,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
