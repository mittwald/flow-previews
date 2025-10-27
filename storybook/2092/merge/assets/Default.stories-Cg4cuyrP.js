import{j as r}from"./iframe-DCa_XPw0.js";import{N as o}from"./NumberField-B-jXyOAz.js";import{L as t}from"./Label-vDm2WQu9.js";import{F as c}from"./FieldDescription-gVsh-1jz.js";import{F as g}from"./useFieldComponent-DnSwczmT.js";import{C as x,a as b}from"./ContextualHelpTrigger-Bn9qPpKw.js";import{B as h}from"./Button-5vT2-_W4.js";import{T as F}from"./Text-DnODaVEe.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./index-d5hFVLIP.js";import"./IconWarning-Q2oX1eiS.js";import"./ReactAriaControlledValueFix-BMN_qpn9.js";import"./utils-CHsRUe2b.js";import"./Button-8oNj6zWV.js";import"./ProgressBar-D1oSpt7t.js";import"./Label-DCh_0unC.js";import"./Hidden-DqzRERrR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./context-CFo6-Xo4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoF43DDZ.js";import"./useFocus-m8lB89Ac.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./Form-gH1nSwk6.js";import"./Group-DoigBsDb.js";import"./Input-Btedufej.js";import"./Text-I5qgKc0V.js";import"./useControlledState-CRVJv1rD.js";import"./useFormValidation-Dya2y-k8.js";import"./useSpinButton-CiTRuNCW.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./useFormReset-C_Ugenz9.js";import"./useEvent-DbA6iyXo.js";import"./useTextField-B0SsZGN0.js";import"./Label.module-CUYTf9Jc.js";import"./react-children-utilities-BnxGKhPm.js";import"./ClearPropsContext-D7TWL38i.js";import"./Popover-BUV2jDV7.js";import"./useOverlayController-Dv456Rq0.js";import"./context-Dlf3CpRu.js";import"./useStatic-CrVdgLYB.js";import"./OverlayContextProvider-BgGVuEZb.js";import"./Dialog-jvkUQzt2.js";import"./RSPContexts-A2JzYqIb.js";import"./OverlayArrow-DWeqJ8mt.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./SelectionManager-DdMpn3UJ.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./VisuallyHidden-D3RYJYP2.js";import"./ClearPropsContextView-CquQV2OH.js";import"./OverlayTrigger-tJ_bpd3Z.js";import"./ControlledNotification-CwfTViCh.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./browser-2ZL6lgPg.js";import"./EmulatedBoldText-BxXSB0Xl.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Wr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Wr as __namedExportsOrder,Rr as default};
